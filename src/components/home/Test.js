import React, { Component } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
// import { Card } from 'react-native-elements';

import constants from '../../config/constants';
import Button from '../common/Button';
import Input from '../common/Input';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: '',
      avatarSource: '',
      imageSrc: null,
      serverPath: '',
    };
  }


  phoneValidation = () => {
    const { phone } = this.state;
    let MSG = '';
    if (phone < 1 && phone >= 9) {
      return (MSG = 'กรุณาป้อนหมายเลขโทรศัพท์ให้ถูกต้อง');
    }
  };

  picker = () => {
    // alert('12345y');
    let options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };

        this.setState({
          avatarSource: source,
          imageSrc: response
        });
      }
    });
  };

  fetchBlobUpload = () => {
    // console.log('imageSrc', this.state.imageSrc);
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
        let parse = JSON.parse(resp.data);
        if (parse.success) {
          if (parse.returncode === '00000') {
            this.setState({ serverPath: parse.slippath });
            // alert(resp.slippath);
          }
        }
      }).catch((err) => {
        console.log('err', err);
      });
  }

  render() {
    const { phone, avatarSource } = this.state;
    return (
      <View style={styles.container}>
        <View style={{ marginBottom: constants.DIMENSIONS.TOTALSIZE(2) }}>
          <Input
            label="หมายเลขโทรศัพท์"
            placeholder="ป้อนหมายเลขโทรศัพท์"
            keyboardType="phone-pad"
            errorMessage={this.phoneValidation()}
            maxLength={10}
            returnKeyType="done"
            value={this.state.phone}
            onChangeText={text => this.setState({ phone: text })}
          />
          <Button
            title="ยืนยัน"
            color={constants.COLORS.PIMARY}
            onPress={() => this.phoneValidation()}
          />
        </View>
        <View style={{ marginBottom: constants.DIMENSIONS.TOTALSIZE(2) }}>
          <Button
            title="อัพโหลดรูป"
            color={constants.COLORS.PIMARY}
            onPress={() => this.picker()}
          />
          {/* <Image
            style={{
              width: '100%',
              height: '60%',
              borderWidth: 1,
              borderColor: constants.COLORS.GRAY,
              // padding: constants.DIMENSIONS.TOTALSIZE(1),
              marginVertical: constants.DIMENSIONS.TOTALSIZE(1),
            }}
            resizeMode="cover"
            source={avatarSource}
          /> */}
        </View>
        <Input
          label="หมายเลขโทรศัพท์"
          placeholder="ป้อนหมายเลขโทรศัพท์"
          keyboardType="phone-pad"
          errorMessage={this.phoneValidation()}
          maxLength={10}
          returnKeyType="done"
          value={phone}
          onChangeText={text => this.setState({ phone: text })}
        />
        <Button
          title="ยืนยัน"
          color={constants.COLORS.PIMARY}
          onPress={() => this.phoneValidation()}
        />
        <Button
          title="อัพโหลดรูป"
          color={constants.COLORS.PIMARY}
          onPress={() => this.picker()}
        />
        <Image
          style={{ width: '100%', height: '40%' }}
          resizeMode="cover"
          source={avatarSource}
        />
        <Button
          title="ส่งรูป"
          color={constants.COLORS.PIMARY}
          onPress={() => this.fetchBlobUpload()}
        />
        <Text> {this.state.serverPath} </Text>
      </View>
    );
  }
}

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
