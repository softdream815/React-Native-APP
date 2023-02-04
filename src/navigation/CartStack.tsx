import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CartList from '@app/screens/CartScreens/CartList';
import CheckOut from '@app/screens/CartScreens/CheckOut';
import AddDeliveryAddress from '@app/screens/CartScreens/AddDeliveryAddress';
import WebViewPayment from '@app/screens/CartScreens/WebViewPayment';
import ScreenOptions from '@app/components/ScreenOptions';
import ScreenOptionsWithBack from '@app/components/ScreenOptionsWithBack';
import {StackScreenProps} from '@react-navigation/stack';

type CartStackParamList = {
  CartScreen: undefined;
  CheckOutScreen: undefined;
  AddAddressScreen: undefined;
  Payment: {
    url: string;
  };
};

const Stack = createNativeStackNavigator<CartStackParamList>();

const CartStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CartScreen"
        component={CartList}
        options={ScreenOptions}
      />
      <Stack.Screen
        name="CheckOutScreen"
        component={CheckOut}
        options={({navigation}) => ({
          title: 'Check Out',
          ...ScreenOptionsWithBack({navigation}),
        })}
      />
      <Stack.Screen
        name="AddAddressScreen"
        component={AddDeliveryAddress}
        options={({navigation}) => ({
          title: 'Add Delivery Address',
          ...ScreenOptionsWithBack({navigation}),
        })}
      />
      <Stack.Screen
        name="Payment"
        component={WebViewPayment}
        options={({navigation}) => ({
          title: 'Payment',
          ...ScreenOptionsWithBack({navigation}),
        })}
      />
    </Stack.Navigator>
  );
};

export type CartScreenProps = StackScreenProps<
  CartStackParamList,
  'CartScreen'
>;

export type CheckOutProps = StackScreenProps<
  CartStackParamList,
  'CheckOutScreen'
>;

export default CartStack;
