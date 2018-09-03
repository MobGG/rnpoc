import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  AsyncStorage,
  Platform,
} from 'react-native';

import constants from '../../config/constants';
import Header from '../common/Header';

/**
 * หน้าข้อมูลข่าวสาร
 */
class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Feed" subTitle="Feed" />
      </View>
    );
  }
}

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.WHITE,
    padding: constants.DIMENSIONS.TOTALSIZE(2),
  },
});
