import React from 'react';
import { View } from 'react-native';
import { Button as Btn } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import constants from '../../config/constants';

const { HEIGHT, BORDERRADIOUS, FONT_SIZE } = constants.DIMENSIONS;
const { MAIN, TRANSPARENT, DISABLE, WHITE } = constants.COLORS;

type Props = {
  title: string,
  onPress: Function,
  disabled: any,
  color: string,
  iconName: string,
};
const Button = ({ title, onPress, disabled, color, iconName }: Props) => (
  <Btn
    disabled={disabled}
    title={title}
    icon={<MaterialCommunityIcons name={iconName} size={15} color={WHITE} />}
    buttonStyle={{
      backgroundColor: color,
      // borderWidth: 1,
      // borderColor: MAIN,
      elevation: 0,
      height: HEIGHT(6),
      width: '100%',
      borderRadius: BORDERRADIOUS,
    }}
    titleStyle={{
      fontSize: FONT_SIZE,
      color: WHITE,
    }}
    disabledStyle={{
      backgroundColor: DISABLE,
      elevation: 0,
      height: HEIGHT(6),
      width: '100%',
      borderRadius: BORDERRADIOUS,
    }}
    disabledTitleStyle={{
      fontSize: FONT_SIZE,
      color: WHITE,
    }}
    onPress={onPress}
  />
);

export default Button;
