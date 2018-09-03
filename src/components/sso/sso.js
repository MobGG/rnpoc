import React, { Component } from 'react';
import { View, WebView, Text, Modal, AsyncStorage } from 'react-native';

import axios from 'axios';
import Base64 from './Base64';
import btoa from 'base-64';

import Button from '../common/Button';
import constants from '../../config/constants';

const baseUrl = "https://sso.sahapat.com:9443/oauth2";
const callbackUrl = "http://sample/callback";
const authorizeUrl = baseUrl + "/authorize";
const tokenUrl = baseUrl + "/token";
const userInfoUrl = baseUrl + "/userinfo?schema=openid";
const logoutYesUrl = "https://sso.sahapat.com:9443/authenticationendpoint/oauth2_logout.do";
const logoutNoUrl = "https://sso.sahapat.com:9443/authenticationendpoint/oauth2_error.do"; // https://sso.sahapat.com:9443/authenticationendpoint/oauth2_error.do?oauthErrorCode=access_denied&oauthErrorMsg=End+User+denied+the+logout+request
const appId = "PHouzujzdTiGBfp5Se0lXAG306Qa";
const appSecret = "lBAz5pVCoWAir6TFSwGf_DGaVZIa";

export class SSO extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authCallback: '',
      modalAuthVisible: false,
      modalLogoutVisible: false,
      // show value
      authCode: '',
      accessToken: '',
      expiresIn: '',
      refreshToken: '',
      accountName: '',
      department: '',
      email: '',

    };
  }

  setAuthModalVisible(visible) {
    this.setState({ modalAuthVisible: visible });
  }

  setLogoutModalVisible(visible) {
    this.setState({ modalLogoutVisible: visible });
  }

  authCallback = (event) => {
    // console.log('event', event);
    if ((event.url).indexOf(callbackUrl) === 0) {
      // stop listen exit action of the browser, and close it

      // parsing parameters in url, to find the authorization code
      var responseParameters = ((event.url).split("?")[1]).split("&");
      var parsedResponse = {};
      for (var i = 0; i < responseParameters.length; i++) {
        parsedResponse[responseParameters[i].split("=")[0]] = responseParameters[i].split("=")[1];
      }

      // if code is found, return the code, and display it in the app
      if (parsedResponse["code"] !== undefined && parsedResponse["code"] !== null) {
        // resolve(parsedResponse);
        alert("I'm back. authCode: " + parsedResponse.code);
        this.setState({ authCode: parsedResponse.code });
        this.setState((prevState) => (
          {
            modalAuthVisible: !prevState.modalAuthVisible
          }
        ));
      } else {
        reject("Problem authenticating with WSO2");
      }
    }
  }

  getAccesToken = () => {
    if (this.state.authCode !== '') {
      // using authorization code, call post request, to get access token
      axios({
        url: tokenUrl,
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Base64.btoa(appId + ':' + appSecret),
        },
        data: {
          "grant_type": "authorization_code",
          "code": this.state.authCode,
          "redirect_uri": callbackUrl,
        }
      }).then((data) => {
        var datajson = JSON.parse(data.data);
        this.setState({
          accessToken: datajson.access_token,
          expiresIn: datajson.expires_in,
          refreshToken: datajson.refresh_token
        });
        // TODO: save access token somewhere in the app for future use.
        // this._storeData('token', datajson);
      }).catch((error) => {
        console.log('Error While Get Access token');
        console.log(error);
        alert(JSON.stringify(error));
        // alert(error.description);
      })
    }
  }

  getAccessToken2 = () => {
    if (this.state.authCode !== '') {
      // try default
      axios.defaults.headers.get['Accept'] = 'application/json';
      axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
      axios.defaults.headers.common['Authorization'] = 'Basic ' + Base64.btoa(appId + ':' + appSecret);
      let body = {
        'grant_type': 'authorization_code',
        'code': this.state.authCode,
        'redirect_uri': callbackUrl
      };
      axios.post(tokenUrl, body)
        .then((data) => {
          alert(JSON.stringify(data.data));
        }).catch((error) => {
          alert(JSON.stringify(error));
          // alert(error.message);
          // alert(error.description);
        });
    }
  }

  getAccessTokenFetch = () => {
    alert(this.state.authCode);
    fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Base64.btoa(appId + ':' + appSecret)
      },
      body: JSON.stringify({
        'grant_type': 'authorization_code',
        'code': this.state.authCode,
        'redirect_uri': callbackUrl
      })

    }).then((response) => {
      alert(JSON.stringify(response));
      return response.json();
    }).then((responseJson) => {
      this.setState({
        accessToken: responseJson.access_token,
        expiresIn: responseJson.expires_in,
        refreshToken: responseJson.refresh_token
      });
    })
      .catch((error) => {
        alert(JSON.stringify(error));
        // alert(error.message);
        // alert(error.description);
      });;
  }

  fetchAccessToken2 = () => {
    var obj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        // 'Origin': '',
        // 'Host': 'api.producthunt.com'
        'Authorization': 'Basic ' + Base64.btoa(appId + ':' + appSecret)
      },
      body: JSON.stringify({
        // 'client_id': '(API KEY)',
        // 'client_secret': '(API SECRET)',
        // 'grant_type': 'client_credentials'
        "grant_type": "authorization_code",
        "code": this.state.authCode,
        "redirect_uri": callbackUrl
      })
    }
    fetch(tokenUrl, obj)
      .then(function (res) {
        alert(JSON.stringify(res));
      })
      .catch(function (error) {
        alert(JSON.stringify(error));
      })
  }

  // set
  _storeData = async (key, datajson) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(datajson));
    } catch (error) {
      // Error saving data
    }
  }
  // get
  _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        // We have data!!
        console.log(value);
        return JSON.parse(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  }

  getUserInfo = () => {
    if (this.state.accessToken) {
      const body = {};
      const config = {
        headers: {
          "Authorization": "Bearer " + this.state.accessToken
        },
      }
      axios.post(userInfoUrl, body, config)
        .then((data) => {
          var datajson = JSON.parse(data.data);
          this.setState({
            accountName: datajson.sub,
            department: datajson.department,
            email: datajson.email
          });
        }).catch((error) => {
          alert(error.error + "");
        })
    }
  }

  logoutCallback = (event) => {
    if ((event.url).indexOf(logoutYesUrl) === 0) {
      alert('Logout Success');
      this.setState((prevState) => (
        {
          modalLogoutVisible: !prevState.modalLogoutVisible
        }
      ));
    } else if ((event.url).indexOf(logoutNoUrl) === 0) {
      alert('Logout Deny');
      this.setState((prevState) => (
        {
          modalLogoutVisible: !prevState.modalLogoutVisible
        }
      ));
    }
  }


  render = () => {
    var fullUrl = authorizeUrl + "?redirect_uri="
      + encodeURIComponent(callbackUrl)
      + "&response_type=code&scope=openid&client_id="
      + appId;
    var logoutUrl = "https://sso.sahapat.com:9443/oidc/logout";

    const {
      authCode,
      accessToken,
      expiresIn,
      refreshToken,
      accountName,
      department,
      email
    } = this.state;

    return (

      <View>
        {/* auth */}
        <Button
          title="Login with WSO2"
          color={constants.COLORS.PIMARY}
          onPress={() => this.setAuthModalVisible(!this.state.modalAuthVisible)}
        />
        <Text>
          {`AuthorisationCode: ${authCode}`}
        </Text>
        {/* token */}
        <Button
          title="Get Access Token1"
          color={constants.COLORS.PIMARY}
          onPress={() => this.getAccesToken()}
        />
        <Button
          title="Get Access Token2"
          color={constants.COLORS.PIMARY}
          onPress={() => this.getAccessToken2()}
        />
        <Button
          title="Get Access Token Fetch"
          color={constants.COLORS.PIMARY}
          onPress={() => this.getAccessTokenFetch()}
        />
        <Button
          title="Get Access Token Fetch2"
          color={constants.COLORS.PIMARY}
          onPress={() => this.fetchAccessToken2()}
        />
        <Text>
          {`Access Token: ${accessToken}`}
        </Text>
        <Text>
          {`Expires In: ${expiresIn}`}
        </Text>
        <Text>
          {`Refresh Token: ${refreshToken}`}
        </Text>
        {/* info */}
        <Button
          title="Get user information"
          color={constants.COLORS.PIMARY}
          onPress={() => this.getUserInfo()}
        />
        <Text>
          {`Account Name: ${accountName}`}
        </Text>
        <Text>
          {`Department: ${department}`}
        </Text>
        <Text>
          {`Email: ${email}`}
        </Text>
        {/* logout */}
        <Button
          title="logout"
          color={constants.COLORS.PIMARY}
          onPress={() => this.setLogoutModalVisible(!this.state.modalLogoutVisible)}
        />

        {/* auth */}
        <Modal
          animationType={'slide'}
          visible={this.state.modalAuthVisible}
          // onRequestClose={this.hide.bind(this)}
          transparent={false}
        >
          <WebView
            source={{ uri: fullUrl }}
            style={{ marginTop: 20 }}
            onNavigationStateChange={(event) => {
              this.authCallback(event);
            }}
          />
        </Modal>

        {/* logout */}
        <Modal
          animationType={'slide'}
          visible={this.state.modalLogoutVisible}
          // onRequestClose={this.hide.bind(this)}
          transparent={false}
        >
          <WebView
            source={{ uri: logoutUrl }}
            style={{ marginTop: 20 }}
            onNavigationStateChange={(event) => {
              this.logoutCallback(event)
            }}
          />
        </Modal>
      </View >
    );

  }

}