import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

console.log('HEIGHT ==>', height);
console.log('WIDTH ==>', width);

const guidelineBaseWidth = 400;
const guidelineBaseHeight = 850;

const horizontalScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalScale = (size: number) => (height / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor: number = 0.5) =>
  size + (horizontalScale(size) - size) * factor;

export {horizontalScale, verticalScale, moderateScale};
