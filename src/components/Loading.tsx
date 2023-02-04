import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import colors from '@app/contants/colors';

const Loading = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: `${colors.borderColorFade}88`,
      }}>
      <ActivityIndicator
        size="large"
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        color="#FE5665"
      />
    </View>
  );
};

export default Loading;
