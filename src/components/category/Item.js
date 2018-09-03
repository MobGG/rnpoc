import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Card } from 'react-native-elements';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import constants from '../../config/constants';

const {
  TOTALSIZE,
  BORDERRADIOUS,
  FONT_SIZE,
  FONT_SIZE_SMALL,
  FONT_SIZE_SMALLER,
  FONT_SIZE_TITLE,
  HEIGHT,
  WIDTH,
} = constants.DIMENSIONS;
const { PIMARY, WHITE, GRAY } = constants.COLORS;

type Props = {
  title: string,
  iconName: string,
  onPress: Function,
};
const Item = ({ title, iconName, onPress }: Props) => (
  <Card containerStyle={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          flexDirection: 'row',
          borderBottomWidth: 0.5,
          borderBottomColor: GRAY,
          padding: TOTALSIZE(2),
          // backgroundColor: 'salmon',
        }}
      >
        <View style={{ alignSelf: 'center' }}>
          <MaterialCommunityIcons
            name={iconName}
            size={24}
            color={constants.COLORS.PIMARY}
          />
        </View>
        <View style={{ paddingLeft: TOTALSIZE(2), alignSelf: 'center' }}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  </Card>
);

export default Item;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    elevation: 0,
    padding: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  title: {
    alignSelf: 'flex-start',
    color: constants.COLORS.DARK,
    fontSize: constants.DIMENSIONS.FONT_SIZE_SMALL,
  },
});
