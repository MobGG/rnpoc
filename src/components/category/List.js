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
          title: 'Message',
          // icon: Platform.OS === 'ios' ? 'message-outline' : 'message',
          icon: 'message-text-outline',
        },
        {
          key: '2',
          title: 'Orders',
          icon: 'reorder-horizontal',
        },
        {
          key: '3',
          title: 'Account Information',
          icon: 'account-outline',
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
            <Item title={item.title} iconName={item.icon} />
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
