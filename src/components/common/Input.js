import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Input as TextInput, ListItem } from 'react-native-elements';

import constants from '../../config/constants';

const {
  TOTALSIZE,
  BORDERRADIOUS,
  FONT_SIZE,
  FONT_SIZE_SMALL,
  HEIGHT,
} = constants.DIMENSIONS;

type Props = {
  ref: any,
  value: string,
  label: string,
  placeholder: string,
  keyboardType: string,
  onChangeText: Function,
  onSubmitEditing: Function,
  maxLength: number,
  secureTextEntry: boolean,
  errorMessage: string,
  returnKeyType: string,
};
const Input = ({
  ref,
  value,
  label,
  placeholder,
  keyboardType,
  onChangeText,
  onSubmitEditing,
  maxLength,
  secureTextEntry,
  errorMessage,
  returnKeyType,
}: Props) => (
  <ListItem
    containerStyle={styles.listItemContainerStyle}
    title={
      <TextInput
        errorMessage={errorMessage}
        secureTextEntry={secureTextEntry}
        ref={ref}
        value={value}
        label={label}
        maxLength={maxLength}
        placeholder={placeholder}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        labelStyle={styles.labelStyle}
        inputStyle={styles.inputStyle}
        containerStyle={{ width: '100%' }}
        inputContainerStyle={styles.inputContainerStyle}
      />
    }
  />
);

export default Input;

const styles = StyleSheet.create({
  listItemContainerStyle: {
    paddingVertical: TOTALSIZE(1),
    paddingHorizontal: 0,
  },
  labelStyle: {
    fontSize: FONT_SIZE,
    color: constants.COLORS.MAIN_TEXT,
  },
  inputStyle: {
    borderRadius: BORDERRADIOUS,
    fontSize: FONT_SIZE_SMALL,
  },
  inputContainerStyle: {
    marginVertical: TOTALSIZE(1),
    height: HEIGHT(6),
    borderWidth: 1,
    borderColor: constants.COLORS.DISABLE,
    borderRadius: BORDERRADIOUS,
  },
});
