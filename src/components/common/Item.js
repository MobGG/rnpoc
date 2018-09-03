import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

import constants from '../../config/constants';

const {
  TOTALSIZE,
  BORDERRADIOUS,
  FONT_SIZE,
  FONT_SIZE_SMALL,
  HEIGHT,
} = constants.DIMENSIONS;
const { PIMARY, WHITE } = constants.COLORS;

type Props = {
  title: string,
  data: string,
  onPress: Function,
};
const Item = ({ title, onPress, data }: Props) => (
  <View style={styles.containerStyle}>
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
    <View style={styles.subContainerStyle}>
      <Text style={styles.dataStyle}>{data}</Text>
    </View>
  </View>
);

export default Item;

const styles = StyleSheet.create({
  containerStyle: {
    padding: TOTALSIZE(1),
    paddingHorizontal: 0,
  },
  subContainerStyle: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: TOTALSIZE(1 / 2.5),
    borderBottomWidth: 0,
    // backgroundColor: GRAY_LIGHT,
    height: HEIGHT(8),
    borderRadius: BORDERRADIOUS,
    padding: TOTALSIZE(1),
  },
  titleStyle: {
    fontSize: FONT_SIZE,
    color: constants.COLORS.MAIN_TEXT,
    fontWeight: '500',
  },
  dataStyle: {
    borderRadius: BORDERRADIOUS,
    fontSize: FONT_SIZE_SMALL,
    color: constants.COLORS.SECOND_TEXT,
    paddingLeft: TOTALSIZE(1),
  },
});
