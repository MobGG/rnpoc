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
 * หน้าตะกร้าสินค้า
 */
class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Cart" subTitle="Cart" />
      </View>
    );
  }
}

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.WHITE,
    padding: constants.DIMENSIONS.TOTALSIZE(2),
  },
});
