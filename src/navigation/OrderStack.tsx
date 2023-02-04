import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import ScreenOptionsWithBack from '@app/components/ScreenOptionsWithBack';
import ScreenOptions from '@app/components/ScreenOptions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MyOrders from '@app/screens/Orders/MyOrders';
import OrderDetail from '@app/screens/Orders/OrderDetail';

type MyOrdersStackParamList = {
  MyOrdersList: undefined;
  Order: {
    order: any;
  };
};

const Stack = createNativeStackNavigator<MyOrdersStackParamList>();

function OrderStack() {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, gestureEnabled: false}}>
      <Stack.Screen name="MyOrdersList" component={MyOrders} />
      <Stack.Screen name="Order" component={OrderDetail} />
    </Stack.Navigator>
  );
}

export default OrderStack;
