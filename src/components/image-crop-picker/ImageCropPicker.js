import React, { Component } from 'react';
import ImagePicker from 'react-native-image-crop-picker';

import Button from '../common/Button';

import constants from '../../config/constants';

export class ImageCropPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  // TODO: func open camera
  openCamera = () => {

  } 
  // TODO: func open image picker from gallery, must able to multiple
  openMultiPicker = () => {
    ImagePicker.openPicker({
      multiple: true
    }).then(images => {
      console.log(images);
    });
  }
  // TODO: func send chose image to server, use fetch blob lib
  sendImage = () => {
    
  }

  render() {
    return (
      <Button
        title="imageCropPicker"
        color={constants.COLORS.PIMARY}
        onPress={() => this.openMultiPicker()}
      />
    );
  }
}
