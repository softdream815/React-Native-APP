import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import HeaderBackLeft from './HeaderBackLeft';
import colors from '@app/contants/colors';

const ScreenOptionsWithBack = ({
  navigation,
}: any): NativeStackNavigationOptions => ({
  headerBackground: () => <View style={styles.background} />,
  headerTitleAlign: 'center',
  headerTitleStyle: {
    fontFamily: 'Poppins-Medium',
  },
  headerLeft: () => <HeaderBackLeft navigationProps={navigation} />,
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

export default ScreenOptionsWithBack;
