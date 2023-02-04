import React from 'react';
import {StackScreenProps} from '@react-navigation/stack';
import ScreenOptionsWithBack from '@app/components/ScreenOptionsWithBack';
import ScreenOptions from '@app/components/ScreenOptions';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RequestItem from '@app/screens/RequestItemScreens/RequestItem';
import RequestItemDetail from '@app/screens/RequestItemScreens/RequestItemDetail';
import ChatScreen from '@app/screens/MyRequestsScreens/ChatScreen';
import {MstCategoryType} from '@app/generated/graphql-types';

const Stack = createNativeStackNavigator();

type RequestItemStackParamList = {
  RequestItem: {
    defaultCategory: MstCategoryType | null;
  };
  Detail: {
    category: MstCategoryType;
    suburbId: number;
    provinceId: number;
    cityId: number;
  };
};

const RequestItemStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="RequestItem"
      component={RequestItem}
      options={({navigation}) => ({
        title: 'Request',
        ...ScreenOptionsWithBack({navigation}),
      })}
    />
    <Stack.Screen
      name="Detail"
      component={RequestItemDetail}
      options={({navigation}) => ({
        title: 'Request',
        ...ScreenOptionsWithBack({navigation}),
      })}
    />
    <Stack.Screen
      name="RequestChat"
      component={ChatScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export type DeatilScreen = StackScreenProps<
  RequestItemStackParamList,
  'Detail'
>;

export type RequestItemScreen = StackScreenProps<
  RequestItemStackParamList,
  'RequestItem'
>;

export default RequestItemStack;
