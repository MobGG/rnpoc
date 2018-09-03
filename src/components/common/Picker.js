import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import constants from '../../config/constants';

const {
  TOTALSIZE,
  BORDERRADIOUS,
  FONT_SIZE,
  FONT_SIZE_SMALL,
  HEIGHT,
} = constants.DIMENSIONS;
const { MAIN, WHITE, DARK_LIGHT, GRAY_LIGHT } = constants.COLORS;

type Props = {
  title: string,
  subTitle: string,
  onPress: Function,
  iconName: string,
};
const Picker = ({ title, onPress, subTitle, iconName }: Props) => (
  <View style={styles.containerStyle}>
    <View>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.subContainerStyle}>
        <View>
          <Text style={styles.dataStyle}>{subTitle}</Text>
        </View>
        <View>
          <MaterialCommunityIcons name={iconName} size={24} color={constants.COLORS.GRAY} />
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

export default Picker;

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
    backgroundColor: constants.COLORS.BACKGROUND,
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
