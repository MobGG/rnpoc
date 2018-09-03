import { Dimensions } from 'react-native';

// Precalculate Device Dimensions for better performance
const x = Dimensions.get('window').width;
const y = Dimensions.get('window').height;

// Calculating ratio from iPhone breakpoints
const lessX = x < 320 ? 0.75 : 0.875;
const lessY = y < 480 ? 0.75 : 0.875;

const ratioX = x < 375 ? lessX : 1;
const ratioY = y < 568 ? lessY : 1;

// We set our base font size value
const baseUnit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = baseUnit * ratioX;

// We add an em() shortcut function
const em = value => unit * value;

// size
const handleSize = num => (num <= 0 ? 0 : moreThen(num));

const moreThen = num => (num > 100 ? 1 : num / 100);

const yy = y * y;
const xx = x * x;

const totalSize = num => Math.sqrt(yy + xx) * handleSize(num);

const responsiveHeight = h => y * (h / 100);

const responsiveWidth = w => x * (w / 100);

// Then we set our styles with the help of the em() function
export default {
  // GENERAL
  DEVICE_WIDTH: x,
  DEVICE_HEIGHT: y,
  RATIO_X: ratioX,
  RATIO_Y: ratioY,
  UNIT: em(1),
  PADDING: em(1.25),
  TOTALSIZE: (size: number) => totalSize(size), // 0-N
  // TOTALEM: (num: number) => em(num), // 0-N
  HEIGHT: (num: number) => responsiveHeight(num), // 0-100
  WIDTH: (num: number) => responsiveWidth(num), // 0-100

  // CARD
  // CARD_WIDTH: x - em(1.25) * 2,
  // CARD_HEIGHT: (x - em(1.25) * 2) * (3 / 5),
  // CARD_PADDING_X: em(1.875),
  // CARD_PADDING_Y: em(1.25),

  // FONT
  FONT_SIZE: em(1),
  FONT_SIZE_SMALLER: em(0.75),
  FONT_SIZE_SMALL: em(0.875),
  FONT_SIZE_TITLE: em(1.25),

  BORDERRADIOUS: 30,
};
