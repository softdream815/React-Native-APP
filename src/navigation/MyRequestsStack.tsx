import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import ScreenOptionsWithBack from '@app/components/ScreenOptionsWithBack';
import ScreenOptions from '@app/components/ScreenOptions';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import colors from '@app/contants/colors';
import {Text} from '@app/components/templates';
import BottomBar2 from '@app/assets/svgs/BottomBar2';
import MyRequests from '@app/screens/MyRequestsScreens/MyRequests';
import IncomingRequests from '@app/screens/MyRequestsScreens/IncommingRequests';
import RequestItemDetail from '@app/screens/MyRequestsScreens/RequestItemDetail';
import IncomingRequestDetail from '@app/screens/MyRequestsScreens/IncomingRequestDetail';
import NotAuthorized from '@app/screens/NotAuthorized';
import {useSelector} from 'react-redux';

type MyRequetsStackParamList = {
  NotAuthorized: undefined;
  MyRequests: undefined;
  RequestItemDetail: {
    data: any;
  };
  IncomingRequestDetail: {
    data: any;
  };
};

const Stack = createNativeStackNavigator<MyRequetsStackParamList>();

const TopTab = createMaterialTopTabNavigator();

const tabBarStyles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.appBackgroundColor,
    paddingBottom: 20,
  },
  tabBar: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    borderBottomColor: colors.borderColor,
    borderBottomWidth: 2,
  },
  title: {
    flex: 1,
    backgroundColor: colors.appBackgroundColor,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeBottomBar: {
    position: 'absolute',
    bottom: -2,
  },
});

function MyTabBar({state, descriptors, navigation}: MaterialTopTabBarProps) {
  return (
    <View style={tabBarStyles.container}>
      <View style={tabBarStyles.tabBar}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              accessibilityRole="button"
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}
              onLongPress={onLongPress}
              style={tabBarStyles.title}
              key={route.key}>
              <Text
                color={isFocused ? 'active' : 'primary'}
                weight="semibold"
                uppercase>
                {label}
              </Text>
              {isFocused && (
                <View style={tabBarStyles.activeBottomBar}>
                  <BottomBar2 />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const MyRequestTabStack = () => {
  const user = useSelector((state: any) => state.user);
  return (
    <TopTab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <TopTab.Screen
        name="MyRFQ"
        component={MyRequests}
        options={{title: 'My RFQ'}}
      />
      <TopTab.Screen
        name="IncomingRFQ"
        component={IncomingRequests}
        options={{title: 'Incoming RFQ'}}
      />
    </TopTab.Navigator>
  );
};

function MyRequestsStack() {
  const user = useSelector((state: any) => state.user);
  const ifBusinessUser =
    user.role === 'Business User' || user.role === 'Main Business User';
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
    <Stack.Navigator screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="MyRequests"
        component={ifBusinessUser ? MyRequestTabStack : MyRequests}
        options={ScreenOptions}
      />
      <Stack.Screen
        name="RequestItemDetail"
        component={RequestItemDetail}
        options={({navigation}) => ({
          title: 'Request Details',
          ...ScreenOptionsWithBack({navigation}),
        })}
      />
      {ifBusinessUser && (
        <Stack.Screen
          name="IncomingRequestDetail"
          component={IncomingRequestDetail}
          options={({navigation}) => ({
            title: 'Request Details',
            ...ScreenOptionsWithBack({navigation}),
          })}
        />
      )}
    </Stack.Navigator>
  );
}

export type RequestItemDetailScreenProps = StackScreenProps<
  MyRequetsStackParamList,
  'RequestItemDetail'
>;

export type MyRequestScreenProps = StackScreenProps<
  MyRequetsStackParamList,
  'MyRequests'
>;

export default MyRequestsStack;
