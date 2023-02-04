import React from 'react';
import {View, StyleSheet} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import HeaderLogo from '@app/assets/svgs/Logo/HeaderLogo';
import colors from '@app/contants/colors';

import Menu from './Menu';

const screenOptions = ({navigation}: any): NativeStackNavigationOptions => ({
  headerBackground: () => <View style={styles.background} />,
  headerTitleAlign: 'center',
  headerTitle: () => <HeaderLogo />,
  headerLeft: () => <Menu navigationProps={navigation} />,
  headerBackVisible: false,
  headerBackButtonMenuEnabled: false,
});

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
  },
  logo: {
    width: 100,
    height: 45,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default screenOptions;
