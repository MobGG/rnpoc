import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Header as Head } from 'react-native-elements';

import constants from '../config/constants';

const Header = () => (
  <View style={styles.containerStyle}>
    <Head
      leftComponent={{ icon: 'menu', color: '#fff' }}
      centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      rightComponent={{ icon: 'home', color: '#fff' }}
    />
  </View>
);

export default Header;

const styles = StyleSheet.create({
  containerStyle: {
    padding: constants.DIMENSIONS.TOTALSIZE(1),
    paddingHorizontal: 0,
  },
});
