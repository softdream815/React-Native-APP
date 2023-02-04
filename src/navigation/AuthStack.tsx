import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/Authentication/LoginScreen';
import Register from '../screens/Authentication/Register';
import RegisterPlans from '../screens/Authentication/BusinessRegisterForms/BusinessPlans';
import {StackScreenProps} from '@react-navigation/stack';

type AuthStackParamList = {
  Login: undefined;
  Register: {
    isBusiness: boolean;
    duration: number;
    plan: number;
  };
  RegisterPlans: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="RegisterPlans" component={RegisterPlans} />
    </Stack.Navigator>
  );
}

export type RegisterScreenProps = StackScreenProps<
  AuthStackParamList,
  'Register'
>;

export type RegisterPlans = StackScreenProps<
  AuthStackParamList,
  'RegisterPlans'
>;

export default AuthStack;
