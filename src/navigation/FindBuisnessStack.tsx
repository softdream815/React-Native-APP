import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackScreenProps} from '@react-navigation/stack';
import ScreenOptionsWithBack from '@app/components/ScreenOptionsWithBack';
import ScreenOptions from '@app/components/ScreenOptions';
import FindBusiness from '@app/screens/FindBuisness/ListBusiness';
import Business from '@app/screens/FindBuisness/Business';

type FindBusinessStackParamList = {
  ListBusiness: undefined;
  Business: {
    business: any;
  };
};
const Stack = createNativeStackNavigator<FindBusinessStackParamList>();

function FindBusinessStack() {
  return (
    <Stack.Navigator screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="ListBusiness"
        component={FindBusiness}
        options={ScreenOptions}
      />
      <Stack.Screen
        name="Business"
        component={Business}
        options={({navigation}) => ({
          title: 'Business Details',
          ...ScreenOptionsWithBack({navigation}),
        })}
      />
    </Stack.Navigator>
  );
}

export type ListScreenProps = StackScreenProps<
  FindBusinessStackParamList,
  'ListBusiness'
>;

export type BusinessScreenProps = StackScreenProps<
  FindBusinessStackParamList,
  'Business'
>;

export default FindBusinessStack;
