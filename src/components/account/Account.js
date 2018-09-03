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
import AccountList from './List';
import MoreList from './ListMore';

/**
 * หน้าข้อมูลผู้ใช้งาน
 */
class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
          }}
          style={{
            width: '100%',
          }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <AccountList {...this.props} />
          </View>
          <View style={{ marginTop: constants.DIMENSIONS.TOTALSIZE(1) }}>
            <MoreList {...this.props} />
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Account;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.BACKGROUND,
    // padding: constants.DIMENSIONS.TOTALSIZE(2),
  },
});
