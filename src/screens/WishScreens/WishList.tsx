import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {Container, Text, ImageWithPlaceholder} from '@app/components/templates';
import colors from '@app/contants/colors';
import {ScreenProps} from './WishStackParams';
import {IMAGE_PREFIX} from '@env';
import WishListActive from '@app/assets/svgs/Navigations/WishListActive';
import Cart from '@app/assets/svgs/Navigations/Cart';
import {useAddToCartMutation} from '@app/screens/CartScreens/hooks/useAddToCart';
import {useDispatch, useSelector} from 'react-redux';
import {
  remove_from_wishlist,
  add_to_cartlist,
  get_carlist_from_server,
  remove_from_cartlist,} from '@app/redux/actions/actions';
import {ProductType, RootStateType} from '@app/types';
import Toast from 'react-native-root-toast';

const WishList = ({navigation, route}: ScreenProps) => {
  const {salesTypeId} = route.params;
  const dispatch = useDispatch();
  const favProducts = useSelector(
    (state: RootStateType) => state.wishlist.products,
  );

  const data: ProductType[] =
    salesTypeId === 0
      ? favProducts
      : favProducts.filter((fp: ProductType) => fp.salesTypeId === salesTypeId);

  const addToCartMutation = useAddToCartMutation();

  const addToCart = (item: ProductType) => {
    if (item && item.productID) {
      addToCartMutation
        .mutateAsync({
          pid: item.productID,
          userid: 0,
        })
        .then(res => {
          dispatch(
            get_carlist_from_server(
              res.postPrdShoppingCartOptimized?.result?.prdShoppingCartDto,
            ),
          );
          Toast.show('Product has been added your cart!', {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
        });
    }
  };

  const removeFromWishlist = (item: ProductType) => {
    dispatch(remove_from_wishlist(item.productID ?? 0));
  };

  const _renderItem = ({item}: any) => {
    let imagePath = item.productImage;
    return (
      <Container
        dir="row"
        backgroundColor="transpaent"
        alignItems="center"
        justifyContent="space-between"
        style={{
          borderBottomColor: colors.borderColor,
          borderBottomWidth: 1,
        }}
        pr={5}
        pt={10}
        pb={10}>
        <Container dir="row" alignItems="center">
          <ImageWithPlaceholder
            source={{uri: `${IMAGE_PREFIX}${imagePath}`}}
            style={{width: 80, height: 80}}
            resizeMode="contain"
          />
          <Container ml={10}>
            <Text
              color="primary"
              weight="medium"
              style={{width: 220}}
              numberOfLines={1}>
              {item.productName}
            </Text>
            <Text mt={10} mb={10}>
              {item.categoryName}
            </Text>
            <Text>
              Price:{' '}
              {item.unitCost < item.originalUnitCost && (
                <Text style={{textDecorationLine: 'line-through'}}>
                  {item.originalUnitCost}
                </Text>
              )}
              <Text color="primary" weight="semibold">
                R {item.unitCost.toFixed(2)}
              </Text>
            </Text>
          </Container>
        </Container>
        <Container
          pr={4}
          pl={4}
          pb={4}
          pt={4}
          justifyContent="space-between"
          style={{height: 75}}>
          <TouchableOpacity
            style={styles.heartIcon}
            onPress={() => removeFromWishlist(item)}>
            <WishListActive />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => addToCart(item)}>
            <Cart />
          </TouchableOpacity>
        </Container>
      </Container>
    );
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container}>
        <FlatList
          data={data}
          renderItem={_renderItem}
          ListEmptyComponent={null}
        />
      </Container>
    </Container>
  )
}

export default WishList;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  heartIcon: {
    shadowColor: colors.text.active,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
  }
});
