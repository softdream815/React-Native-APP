import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {MyTabBar} from '@app/navigation/HomeStack';
import WishList from './WishList';
import {TapBarParamList} from './WishStackParams';
import {useSelector} from 'react-redux';
import {RootStateType} from '@app/redux/store';
import {ProductType} from '@app/types';

const TopTab = createMaterialTopTabNavigator<TapBarParamList>();

const WishScreen = () => {
  // const {loading, favProducts, refetch} = useGetFavoriteProducts();
  const favProducts = useSelector(
    (state: RootStateType) => state.wishlist.products,
  );

  const getProductsByType = (type: number) => {
    return favProducts.filter((fp: ProductType) => fp?.salesTypeId === type);
  };

  const buyProducts = getProductsByType(1);
  const bidProdcuts = getProductsByType(2);
  const hireProducts = getProductsByType(3);

  return (
    <TopTab.Navigator tabBar={props => <MyTabBar {...props} />}>
      <TopTab.Screen
        name="All"
        component={WishList}
        options={{title: `ALL(${favProducts.length})`}}
        initialParams={{salesTypeId: 0}}
      />
      <TopTab.Screen
        name="Buy"
        component={WishList}
        options={{title: `Buy(${buyProducts.length})`}}
        initialParams={{salesTypeId: 1}}
      />
      <TopTab.Screen
        name="Bid"
        component={WishList}
        options={{title: `Bid(${bidProdcuts.length})`}}
        initialParams={{salesTypeId: 2}}
      />
      <TopTab.Screen
        name="Hire"
        component={WishList}
        options={{title: `Hire(${hireProducts.length})`}}
        initialParams={{salesTypeId: 3}}
      />
    </TopTab.Navigator>
  );
};

export default WishScreen;
