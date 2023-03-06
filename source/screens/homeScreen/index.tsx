import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {moderateScale} from '../../utils/Metrics';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={{height: 100, width: 5, backgroundColor: 'red'}} />
      <Text style={styles.headingWithoutRes}>Without Responsive</Text>
      <TouchableOpacity style={styles.textBtnWithoutRes}>
        <Text style={styles.textWithoutRes}>Hello World</Text>
      </TouchableOpacity>
      <View
        style={{height: moderateScale(100), width: 5, backgroundColor: 'green'}}
      />
      <Text style={styles.headingWithRes}>With Responsive</Text>
      <TouchableOpacity style={styles.textBtnWithRes}>
        <Text style={styles.textWithRes}>Hello World</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default HomeScreen;
