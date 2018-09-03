import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import axios from 'axios';

import { Card } from 'react-native-elements';
import imagePicker from "react-native-image-picker";
// https://github.com/react-community/react-native-image-picker
import RNFetchBlob from 'rn-fetch-blob';
// https://github.com/joltup/rn-fetch-blob
import I18n, { switchLanguage } from '../../i18n/i18n';

import Header from '../common/Header';
import Button from '../common/Button';
import constants from '../../config/constants';

const { TOTALSIZE, BORDERRADIOUS, FONT_SIZE, HEIGHT } = constants.DIMENSIONS;
const { WHITE, GRAY_LIGHT, MAIN, YELLO } = constants.COLORS;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
    padding: constants.DIMENSIONS.TOTALSIZE(2),
  },
});

// More info on all the options is below in the README...just some common use cases shown here
const options = {
  title: 'Select Avatar',
  // customButtons: [
  //   { name: 'fb', title: 'Choose Photo from Facebook' },
  // ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

const sendImage = dataToJson => {
  const url = 'https://devapi.sahapat.com/release/mamacupgo/setting/payment/uploadImageRN';
  var data = new FormData();
  data.append('slipimage', this.state.imageSrc);
  data.append('transid', 'rn test');
  const config = {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  }
  return axios.post(url, data, config)
    .then(r => console.log('res', r))
    .catch(e => console.log('err', e));
};

class ImagePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title1: 'Image-Picker',
      imageSrc: null
    };
  }

  // not work
  fetchUpload() {
    const data = {
      uri: this.state.imageSrc.uri,
      name: `${this.state.imageSrc.fileName}.jpg`,
      type: this.state.imageSrc.type
    };

    const formData = new FormData();
    formData.append('data', data);
    formData.append('slipimage', data);
    formData.append('transid', 'fetchUpload');

    const options = {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
      },
    }

    const api = 'https://devapi.sahapat.com/release/mamacupgo/setting/payment/uploadImageRN';

    return fetch(api, options)
      .then((response) => {
        alert(response);
        response.json();
      })
      .then((responseJson) => {
        console.log('responseJson', responseJson);
        alert(responseJson);
        return responseJson;
      })
      .catch((error) => {
        alert(error);
        console.log('error', error);
      });
  }

  // work
  fetchBlobUpload() {
    console.log('imageSrc', this.state.imageSrc);
    // return;
    RNFetchBlob.fetch(
      'POST',
      'https://devapi.sahapat.com/release/mamacupgo/setting/payment/uploadSlipImage',
      {
        'Content-Type': 'multipart/form-data'
      },
      [
        // this will sent as a file
        {
          name: 'slipimage', // form name
          filename: this.state.imageSrc.fileName,
          type: this.state.imageSrc.type,
          data: RNFetchBlob.wrap(this.state.imageSrc.uri)
        },
        // elements without property `filename` will be sent as plain text
        { name: 'transid', data: 'blob' },
      ]).then((resp) => {
        console.log('resp', resp);
      }).catch((err) => {
        // ...
        console.log('err', err);
      });
  }

  showPicker() {
    imagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = {
          fileName: response.fileName,
          type: response.type,
          uri: response.uri,
          path: response.path
        };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          imageSrc: source
        });
      }
    });
  }
  launchCamera() {
    imagePicker.launchCamera(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = {
          fileName: response.fileName,
          type: response.type,
          uri: response.uri,
          path: response.path
        };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          imageSrc: source
        });
      }
    });
  }
  launchImageLibrary() {
    imagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = {
          fileName: response.fileName,
          name: response.fileName,
          type: response.type,
          uri: response.uri,
          path: response.path
        };
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
        this.setState({
          imageSrc: response
        });
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ paddingBottom: TOTALSIZE(2) }}>
          <Header title="test" subTitle="image-picker" />
        </View>

        <Text>{I18n.t('page2.title')}</Text>

        <Card
          image={this.state.imageSrc}
          imageStyle={{
            width: '100%',
            height: HEIGHT(30),
            borderTopLeftRadius: BORDERRADIOUS,
            borderTopRightRadius: BORDERRADIOUS,
          }}
        >
        </Card>

        <Button
          title='open picker'
          color="#3b5995"
          onPress={() => this.showPicker()}
        />

        <Button
          title='open camera'
          color="#3b5996"
          onPress={() => this.launchCamera()}
        />

        <Button
          title='open gallary'
          color="#3b5997"
          onPress={() => this.launchImageLibrary()}
        />

        <Button
          title='fetchUpload'
          color="#3b5990"
          onPress={() => this.fetchUpload()}
        />

        <Button
          title='fetchBlobUpload'
          color="#3b5900"
          onPress={() => this.fetchBlobUpload()}
        />

      </View>
    );
  }
}

export default ImagePicker;