import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/Metrics';

export const styles = StyleSheet.create({
  mainContainer: {flex: 1, alignItems: 'center', backgroundColor: '#FFFFFF'},
  headingWithoutRes: {
    fontSize: 20,
    color: '#000000',
  },
  textBtnWithoutRes: {
    width: 150,
    height: 50,
    backgroundColor: '#7F7F7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWithoutRes: {
    fontSize: 20,
  },

  headingWithRes: {
    fontSize: moderateScale(20),
    color: '#000000',
  },
  textBtnWithRes: {
    width: horizontalScale(150),
    height: verticalScale(50),
    backgroundColor: '#7F7F7F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWithRes: {
    fontSize: moderateScale(20),
  },
});
