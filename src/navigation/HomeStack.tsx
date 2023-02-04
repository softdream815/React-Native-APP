import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '@app/screens/HomeScreens/HomeScreen';
import BidProducts from '@app/screens/HomeScreens/BidProducts';
import HireProducts from '@app/screens/HomeScreens/HireProducts';
import PurchaseProducts from '@app/screens/HomeScreens/PurchaseProducts';
import SpecialProducts from '@app/screens/HomeScreens/SpecialProducts';
import ScreenOptionsWithBack from '@app/components/ScreenOptionsWithBack';
import ScreenOptions from '@app/components/ScreenOptions';
import Product from '../screens/HomeScreens/Product';
import colors from '@app/contants/colors';
import {Text} from '@app/components/templates';
import BottomBar from '@app/assets/svgs/Navigations/BottomBar';
import {StackScreenProps} from '@react-navigation/stack';

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

export function MyTabBar({
  state,
  descriptors,
  navigation,
}: MaterialTopTabBarProps) {
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
                  <BottomBar />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const HomeTabStack = () => {
  return (
    <TopTab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <TopTab.Screen
        name="AllProducts"
        component={HomeScreen}
        options={{title: 'ALL', lazy: true}}
      />
      <TopTab.Screen
        name="BuyProducts"
        component={PurchaseProducts}
        options={{title: 'Buy', lazy: true}}
      />
      <TopTab.Screen
        name="BidProducts"
        component={BidProducts}
        options={{title: 'Bid', lazy: true}}
      />
      <TopTab.Screen
        name="HireProducts"
        component={HireProducts}
        options={{title: 'Hire', lazy: true}}
      />
    </TopTab.Navigator>
  );
} 

type HomeStackParamList = {
  HomeScreen: {
    initialTab: string;
  };
  Product: {
    product: any;
  };
  SpecialProducts: undefined;
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{gestureEnabled: false}}>
      <Stack.Screen
        name="HomeScreen"
        component={HomeTabStack}
        options={ScreenOptions}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({navigation}) => ({
          title: 'Product Details',
          ...ScreenOptionsWithBack({navigation}),
        })}
      />
      <Stack.Screen
        name="SpecialProducts"
        component={SpecialProducts}
        options={({navigation}) => ({
          title: 'Special Products',
          ...ScreenOptionsWithBack({navigation}),
        })}
      />
    </Stack.Navigator>
  );
};

export type HomeScreenProps = StackScreenProps<
  HomeStackParamList,
  'HomeScreen'
>;

export type ProductScreenProps = StackScreenProps<
  HomeStackParamList,
  'Product'
>;
