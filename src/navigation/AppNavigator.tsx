import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabStack';
import DrawerContent from './DrawerContent';
import AuthStack from './AuthStack';
import SplashScreen from '../screens/SplashScreen';
import IntroScreen from '../screens/AppIntro';
import Profile from '../screens/Profile';
import MyEnquiry from '@app/screens/MyEnquiryScreens/MyEnquiry';
import RequestItemStack from './RequestItemStack';
import ScreenOptionsWithBack from '@app/components/ScreenOptionsWithBack';
import {MstItemRequestDtoType} from '@app/generated/graphql-types';
import ChatScreen from '@app/screens/MyRequestsScreens/ChatScreen';
import FindBusinessStack from './FindBuisnessStack';
import ContactUs from '@app/screens/ContactUs';
import ProductMap from '@app/screens/ProductMap';
import Product from '@app/screens/HomeScreens/Product';
import OrderStack from './OrderStack';
import PrivacyPolicy from '@app/screens/PrivacyPolicy';
import MyBids from '@app/screens/MyBids/MyBids';
import MyHires from '@app/screens/MyBids/MyHires';

type MainStackNavigationParamList = {
  Splash: undefined;
  Intro: undefined;
  MainDrawer: undefined;
  RequestChat: {
    request: MstItemRequestDtoType;
    msg: any;
  };
};

type MainDrawerNavigationParamList = {
  Main: undefined;
  PrivacyPolicy: undefined;
  AuthStack: undefined;
  Profile: undefined;
  MyEnquiry: undefined;
  RequestItemStack: undefined;
  FindBusiness: undefined;
  ContactUs: undefined;
  ProductMap: undefined;
  Product: {
    product: any;
  };
  MyOrders: undefined;
  IncomingRequests: undefined;
  MyBids: undefined;
  MyHires: undefined;
};

const Stack = createNativeStackNavigator<MainStackNavigationParamList>();
const Drawer = createDrawerNavigator<MainDrawerNavigationParamList>();

const DrawerStack = () => (
  <Drawer.Navigator
    initialRouteName="Main"
    drawerContent={props => <DrawerContent {...props} />}
    screenOptions={{headerShown: false, drawerType: 'slide'}}>
    <Drawer.Screen name="Main" component={MainTabNavigator} />
    <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <Drawer.Screen name="AuthStack" component={AuthStack} />
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="MyEnquiry" component={MyEnquiry} />
    <Drawer.Screen name="RequestItemStack" component={RequestItemStack} />
    <Drawer.Screen name="FindBusiness" component={FindBusinessStack} />
    <Drawer.Screen name="ContactUs" component={ContactUs} />
    <Drawer.Screen name="ProductMap" component={ProductMap} />
    <Drawer.Screen name="Product" component={Product} />
    <Drawer.Screen name="MyOrders" component={OrderStack} />
    <Drawer.Screen name="MyBids" component={MyBids} />
    <Drawer.Screen name="MyHires" component={MyHires} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Intro" component={IntroScreen} />
      <Stack.Screen name="MainDrawer" component={DrawerStack} />
      <Stack.Screen name="RequestChat" component={ChatScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
