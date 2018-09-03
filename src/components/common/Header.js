import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import constants from '../../config/constants';

type Props = {
  title: string,
  subTitle: string,
};
const Header = ({ title, subTitle }: Props) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.dataStyle}>{subTitle}</Text>
  </View>
);

export default Header;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    paddingBottom: constants.DIMENSIONS.TOTALSIZE(2),
  },
  title: {
    alignSelf: 'center',
    fontWeight: '500',
    color: constants.COLORS.MAIN_TEXT,
    fontSize: constants.DIMENSIONS.FONT_SIZE_TITLE,
  },
  dataStyle: {
    borderRadius: constants.DIMENSIONS.BORDERRADIOUS,
    fontSize: constants.DIMENSIONS.FONT_SIZE_SMALL,
    color: constants.COLORS.SECOND_TEXT,
  },
});
