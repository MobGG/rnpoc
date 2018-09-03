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
import { SearchBar } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import constants from '../../config/constants';
import Header from '../common/Header';
import CategoryList from './List';

/**
 * หน้าหมวดหมู่
 */
class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <SearchBar
          // lightTheme
          inputStyle={{
            fontSize: constants.DIMENSIONS.FONT_SIZE_SMALL,
            color: constants.COLORS.SECOND_TEXT,
          }}
          inputContainerStyle={{
            // backgroundColor: 'salmon',
            height: constants.DIMENSIONS.HEIGHT(6),
            // borderWidth: 1,
            // borderBottomWidth: 1,
            // borderColor: constants.COLORS.DISABLE,
            borderRadius: constants.DIMENSIONS.BORDERRADIOUS,
          }}
          containerStyle={{
            // flex: 1,
            // marginLeft: 10,
            marginRight: 10,
            paddingRight: 10,
            padding: 0,
            // backgroundColor: 'red',
          }}
          round
          searchIcon={
            <MaterialCommunityIcons name="magnify" size={24} color={constants.COLORS.GRAY} />
          }
          clearIcon={
            <MaterialCommunityIcons name="close" size={24} color={constants.COLORS.GRAY} />
          }
          platform={Platform.OS === 'ios' ? 'ios' : 'android'}
          // platform="default"
          // onChangeText={someMethod}
          // onClear={someMethod}
          placeholder="Search..."
          clearIcon={{ type: 'font-awesome', name: 'chevron-left' }}
        />
        <CategoryList {...this.props} />
        <View style={{ padding: constants.DIMENSIONS.TOTALSIZE(2) }}>
          {/* <CategoryList {...this.props} /> */}
        </View>
      </View>
    );
  }
}

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.WHITE,
    // padding: constants.DIMENSIONS.TOTALSIZE(2),
  },
});
