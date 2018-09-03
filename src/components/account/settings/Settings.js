import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
} from 'react-native';

import I18n, { switchLanguage } from '../../../i18n/i18n';

import Header from '../../common/Header';
import Picker from '../../common/Picker';
import LanguageModal from './language';

import constants from '../../../config/constants';

/**
 * หน้าตั้งค่าระบบ
 */
class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalLanguageVisible: false,
      language: '',
    };
  }
  onPressLanguage = () =>
    this.setState({
      isModalLanguageVisible: !this.state.isModalLanguageVisible,
    });

  onSetThLang = () => {
    switchLanguage('th', this);
  };
  onSetEnLang = () => {
    switchLanguage('en', this);
  };

  render() {
    const { language } = this.state;
    return (
      <View style={styles.container}>
        <Header title="Settings" subTitle="Settings" />

        <Text>{I18n.t('home.greeting')}</Text>

        <Button title="TH" onPress={this.onSetThLang} />
        <Button title="EN" onPress={this.onSetEnLang} />

        <Picker
          title="ภาษา"
          subTitle={language === '' ? 'เลือกภาษา' : language}
          iconName="earth"
          onPress={() => this.onPressLanguage()}
        />
        <View>
          <LanguageModal
            isVisible={this.state.isModalLanguageVisible}
            onBackButtonPress={() => this.setState({ isModalLanguageVisible: false })}
            onBackdropPress={() => this.setState({ isModalLanguageVisible: false })}
            onPressItem={item => {
              this.setState({ language: item.language }),
                switchLanguage(item.key, this)
            }}
          />
        </View>
      </View>
    );
  }
}

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.WHITE,
    padding: constants.DIMENSIONS.TOTALSIZE(2),
  },
});
