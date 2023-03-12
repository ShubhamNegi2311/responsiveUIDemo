import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {moderateScale} from '../../utils/Metrics';
import {useApplicationTheme} from '../../context/ThemeContext';
import {Switch} from 'react-native-paper';

const HomeScreen = () => {
  const {isDarkTheme, toggleThemeType, themeType, theme} =
    useApplicationTheme();
  return (
    <SafeAreaView
      style={[
        styles.mainContainer,
        {backgroundColor: theme.colors.backgroundColor},
      ]}>
      <View style={{height: 100, width: 5, backgroundColor: 'red'}} />
      <Text style={[styles.headingWithoutRes, {color: theme.colors.textColor}]}>
        Without Responsive
      </Text>
      <TouchableOpacity style={styles.textBtnWithoutRes}>
        <Text style={[styles.textWithoutRes, {color: theme.colors.textColor}]}>
          Hello World
        </Text>
      </TouchableOpacity>
      <View
        style={{height: moderateScale(100), width: 5, backgroundColor: 'green'}}
      />
      <Text style={[styles.headingWithRes, {color: theme.colors.textColor}]}>
        With Responsive
      </Text>
      <TouchableOpacity style={styles.textBtnWithRes}>
        <Text style={[styles.textWithRes, {color: theme.colors.textColor}]}>
          Hello World
        </Text>
      </TouchableOpacity>
      <View style={{height: 50}} />
      <Switch value={isDarkTheme} onChange={toggleThemeType} />
      <View style={{height: 50}} />
      <Text style={[styles.textWithRes, {color: theme.colors.textColor}]}>
        {'DARK THEME => ' + isDarkTheme}
      </Text>
      <Text style={[styles.textWithRes, {color: theme.colors.textColor}]}>
        {'THEME TYPE => ' + themeType}
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;
