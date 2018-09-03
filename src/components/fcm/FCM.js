import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import PushNotificationController from "./PushNotificationController";

export default class FCM extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PushNotificationController />
        <Text style={styles.welcome}>
          Welcome to Push Notification for React Native!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});