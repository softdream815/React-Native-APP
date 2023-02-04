import React, {useMemo} from 'react';
import {View, StyleSheet, TouchableOpacity, Text as RNText} from 'react-native';
import {Text, GradientButton} from '@app/components/templates';
import {HomeStack} from './HomeStack';
import MyRequestsStack from './MyRequestsStack';
import CartStack from './CartStack';
import WishStack from './WishStack';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Bang from '@app/assets/svgs/Navigations/Bang60';
import HomeActive from '@app/assets/svgs/Navigations/HomeActive';
import Home from '@app/assets/svgs/Navigations/Home';
import MyRequest from '@app/assets/svgs/Navigations/MyRequest';
import Cart from '@app/assets/svgs/Navigations/Cart';
import WishList from '@app/assets/svgs/Navigations/WishList';
import MyRequestActive from '@app/assets/svgs/Navigations/MyRequestActive';
import CartActive from '@app/assets/svgs/Navigations/CartActive';
import WishListActive from '@app/assets/svgs/Navigations/WishListActive';
import {useSelector} from 'react-redux';
import {RootStateType} from '@app/types';
import colors from '@app/contants/colors';
import {useNavigation} from '@react-navigation/native';

const TabBarNavigator = () => {
  const _navigation = useNavigation();
  const favProducts = useSelector(
    (state: RootStateType) => state.wishlist.products,
  );
  const cartProducts = useSelector(
    (state: RootStateType) => state.carts.products,
  );

  const tabRoutes = useMemo(
    () => ({
      HomeStack: {title: 'Home', icon: Home, activeIcon: HomeActive},
      MyRequest: {
        title: 'My Request',
        icon: MyRequest,
        activeIcon: MyRequestActive,
      },
      CartStack: {
        title: 'Cart',
        icon: Cart,
        activeIcon: CartActive,
        badge: cartProducts.length,
      },
      WishStack: {
        title: 'Wish List',
        icon: WishList,
        activeIcon: WishListActive,
        badge: favProducts.length,
      },
    }),
    [favProducts, cartProducts],
  );
  const renderTabBar = ({routeName, selectedTab, navigate}: any) => {
    const Icon =
      selectedTab === routeName
        ? tabRoutes[routeName].activeIcon
        : tabRoutes[routeName].icon;
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.menuItem}>
        <Icon />
        <Text
          mt={10}
          size="xs"
          weight="medium"
          color={selectedTab === routeName ? 'active' : 'menu'}>
          {tabRoutes[routeName].title}
        </Text>
        {tabRoutes[routeName].badge > 0 && 
          <View
            style={{
              position: 'absolute',
              borderRadius: 10,
              top: 10,
              right: 30,
              width: 12,
              height: 12,
              backgroundColor: colors.text.active,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text color="white" size="xxs" lineHeight={14}>{tabRoutes[routeName].badge}</Text>
          </View>
        }
      </TouchableOpacity>
    );
  };
  return (
    <CurvedBottomBar.Navigator
      style={styles.bottomBar}
      strokeWidth={1}
      strokeColor="#FFDADC"
      height={70}
      circleWidth={30}
      bgColor="#FFF6F7"
      initialRouteName="HomeStack"
      borderTopLeftRight
      type="DOWN"
      renderCircle={({selectedTab, navigate}) => (
        <>
          <TouchableOpacity
            style={{justifyContent: 'center', bottom: 35}}
            onPress={() => {
              return _navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'RequestItemStack',
                    params: {
                      screen: 'RequestItem',
                    },
                  },
                ],
              });
            }}>
            <Bang />
          </TouchableOpacity>
          <Text style={{position: 'absolute', left: '47%', bottom: 10}}>
            RFQ
          </Text>
        </>
      )}
      screenOptions={{headerShown: false}}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name="HomeStack"
        position="LEFT"
        component={HomeStack}
      />
      <CurvedBottomBar.Screen
        name="MyRequest"
        position="LEFT"
        component={MyRequestsStack}
      />
      <CurvedBottomBar.Screen
        name="CartStack"
        position="RIGHT"
        component={CartStack}
      />
      <CurvedBottomBar.Screen
        name="WishStack"
        position="RIGHT"
        component={WishStack}
      />
    </CurvedBottomBar.Navigator>
  );
};

const styles = StyleSheet.create({
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#FF0000',
    shadowOffset: {
      width: 2,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 9.51,
    elevation: 15,
    bottom: 30,
  },
  menuItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default TabBarNavigator;
