import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WebView from 'react-native-webview';

const WebViewPayment = ({ navigation, route }: any) => {
  const url = route.params?.url;
  return (
    <WebView
      source={{uri: route.params?.url}}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      // startInLoadingState={true}
      onLoadProgress={({ nativeEvent }) => {
          //your code goes here       
      }}
      onNavigationStateChange={(state) => {
        console.log("PAyment Status:", state);
        //your code goes here       2fLCPayFastCancel.html
      }}
    />
  );
};

export default WebViewPayment;

const styles = StyleSheet.create({});