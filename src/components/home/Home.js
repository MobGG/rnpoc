import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Header from '../common/Header';
import Test from './Test';
import { ImageCropPicker } from '../image-crop-picker/ImageCropPicker'
import { SSO } from '../sso/sso';

import constants from '../../config/constants';


/**
 * หน้าหลัก
 */

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const $this = this;
    return (
      <View style={styles.container}>
        <Header title="Home" subTitle="Home" />
        {/* <Test /> */}
        {/* <ImageCropPicker /> */}
        <SSO />
      </View>
    );
  }

}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.WHITE,
    padding: constants.DIMENSIONS.TOTALSIZE(2),
  },
});
