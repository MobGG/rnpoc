import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Divider } from 'react-native-elements';
import Modal from 'react-native-modal';

import { langList } from '../../../../i18n/i18n';

import constants from '../../../../config/constants';

const { TOTALSIZE, HEIGHT, WIDTH, BORDERRADIOUS } = constants.DIMENSIONS;
const { WHITE, PIMARY } = constants.COLORS;

class LanguageModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      languages: langList
    };
  }

  keyExtractor = item => item.key;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={this.props.isVisible}
          onBackButtonPress={this.props.onBackButtonPress}
          onBackdropPress={this.props.onBackdropPress}
          onPressItem={this.props.onPressItem}
          useNativeDriver
        >
          <View style={styles.modalContainer}>
            <View style={styles.headerModal}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: '500',
                  color: constants.COLORS.WHITE,
                  fontSize: constants.DIMENSIONS.FONT_SIZE_TITLE,
                }}
              >
                {'เลือกภาษา'}
              </Text>
            </View>
            <View
              style={{
                width: '100%',
                height: '100%',
                paddingTop: TOTALSIZE(2),
                paddingBottom: TOTALSIZE(5),
              }}
            >
              <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                style={{ flex: 1 }}
                showsVerticalScrollIndicator={false}
              >
                <FlatList
                  data={this.state.languages}
                  keyExtractor={this.keyExtractor}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => {
                        this.props.onPressItem(item),
                          this.props.onBackButtonPress();
                      }}
                    >
                      <View
                        style={{
                          flex: 1,
                          padding: TOTALSIZE(1),
                          height: HEIGHT(8),
                          justifyContent: 'center',
                        }}
                      >
                        <Text
                          style={{
                            fontSize: constants.DIMENSIONS.FONT_SIZE,
                            color: constants.COLORS.SECOND_TEXT,
                          }}
                        >
                          {item.language}
                        </Text>
                        <View
                          style={{ flex: 1, paddingVertical: TOTALSIZE(2) }}
                        >
                          <Divider
                            style={{ backgroundColor: constants.COLORS.GRAY }}
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

export default LanguageModal;

const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: WIDTH(90),
    height: HEIGHT(50),
    backgroundColor: WHITE,
    borderRadius: BORDERRADIOUS,
  },
  headerModal: {
    width: '100%',
    height: HEIGHT(8),
    backgroundColor: PIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: BORDERRADIOUS,
    borderTopRightRadius: BORDERRADIOUS,
  },
});
