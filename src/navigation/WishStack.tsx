import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WishScreen from '@app/screens/WishScreens/WishScreen';
import ScreenOptions from '@app/components/ScreenOptions';
import ScreenOptionsWithBack from '@app/components/ScreenOptionsWithBack';
import {StackScreenProps} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import {RootStateType} from '@app/types';
import NotAuthorized from '@app/screens/NotAuthorized';

type WishStackParamList = {
  WishScreen: undefined;
  NotAuthorized: undefined;
};

const Stack = createNativeStackNavigator<WishStackParamList>();

const WishStack = () => {
  const user = useSelector((state: RootStateType) => state.user);
  if (user.isGuest) {
    return (
      <Stack.Navigator screenOptions={{gestureEnabled: false}}>
        <Stack.Screen
          name="NotAuthorized"
          component={NotAuthorized}
          options={ScreenOptions}
        />
      </Stack.Navigator>
    );
  }
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WishScreen"
        component={WishScreen}
        options={ScreenOptions}
      />
    </Stack.Navigator>
  );
};

export type WishScreenProps = StackScreenProps<
  WishStackParamList,
  'WishScreen'
>;

export default WishStack;
