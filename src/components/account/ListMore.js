import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Text,
  FlatList,
  ScrollView,
  Platform,
} from 'react-native';
import { ListItem } from 'react-native-elements';

import constants from '../../config/constants';
import Item from './Item';
import Button from '../common/Button';

type Props = {};

class List extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: '1',
          title: 'Settings',
          // icon: Platform.OS === 'ios' ? 'message-outline' : 'message',
          icon: 'settings-outline',
        },
        {
          key: '2',
          title: 'Policies',
          icon: 'alert-circle-outline',
        },
        {
          key: '3',
          title: 'Help',
          icon: 'help-circle-outline',
        },
        {
          key: '4',
          title: 'Logout',
          icon: 'logout-variant',
        },
      ],
    };
  }

  keyExtractor = item => item.key;

  render() {
    const { data } = this.state;
    // const { navigation } = this.props;
    // const title = navigation.getParam('title');
    return (
      <View style={styles.container}>
        <FlatList
          data={data}
          // extraData={this.state}
          keyExtractor={this.keyExtractor}
          renderItem={({ item }) => (
            <Item
              title={item.title}
              iconName={item.icon}
              onPress={() => this.props.navigation.navigate(item.title)}
            />
          )}
        />
      </View>
    );
  }
}

export default List;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.WHITE,
  },
});
