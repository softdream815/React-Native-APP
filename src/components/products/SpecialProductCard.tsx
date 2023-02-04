import React from 'react';
import {IMAGE_PREFIX} from '@env';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  Container,
  Text,
  ImageWithPlaceholder,
  Card,
  Button,
} from '@app/components/templates';
import Icon from 'react-native-vector-icons/Ionicons';
import colors from '@app/contants/colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Bid from '@app/assets/svgs/Bid';
import Hire from '@app/assets/svgs/Hire';
import {useAddToCartMutation} from '@app/screens/CartScreens/hooks/useAddToCart';
import {useSelector, useDispatch} from 'react-redux';
import {RootStateType, ProductType} from '@app/types';
import {
  add_to_wishlist,
  remove_from_wishlist,
  get_carlist_from_server,
  add_to_cartlist,
  remove_from_cartlist,
} from '@app/redux/actions/actions';
import {useAddFavoriteProduct} from '@app/screens/WishScreens/hooks/useAddFavoriteProduct';
import moment from 'moment';
import Toast from 'react-native-root-toast';

// import { useGetRating } from '@app/hooks/useGetRating';
// import { useGetSpeicalProducts } from '@app/hooks/useGetSpecialProducts';
type ProductCardPropsType = {
  item: ProductType;
  index: number;
};

const SpecialProductCard = ({item}: ProductCardPropsType) => {
  const {ratingScore} = item;
  const navigation = useNavigation();
  const addToCartMutation = useAddToCartMutation();
  const dispatch = useDispatch();
  const addFavoriteMutation = useAddFavoriteProduct();
  const wishlist = useSelector(
    (state: RootStateType) => state.wishlist.products,
  );
  const user = useSelector((state: RootStateType) => state.user);

  const isFavorited: boolean = !!wishlist.find(
    (wishItem: ProductType) => wishItem.productID === item.productID,
  );

  const _onPressItem = () => {
    navigation.navigate('Product', {product: item});
  };
  const onPressFavourite = async () => {
    if (isFavorited) {
      dispatch(remove_from_wishlist(item.productID ?? 0));
    } else {
      addFavoriteMutation.mutateAsync({
        productId: item.productID,
        userId: user.id,
        createDate: moment().format(),
      });
      dispatch(add_to_wishlist(item));
    }
  };

  const onPressCart = () => {
    if (item.productID) {
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

  const _renderActionButton = () => {
    if (item.salesTypeId === 1) {
      return (
        <Button title="" width={100} height={32} onPress={onPressCart}>
          <Container
            backgroundColor="transparent"
            dir="row"
            alignItems="center"
            justifyContent="space-between">
            <Icon name="cart-outline" color={colors.text.active} size={16} />
            <Text size="xxs" lineHeight={16} ml={5} color="active">
              Add to Cart
            </Text>
          </Container>
        </Button>
      );
    } else if (item.salesTypeId === 2) {
      return (
        <Button title="" width={100} height={32} onPress={_onPressItem}>
          <Container
            backgroundColor="transparent"
            dir="row"
            alignItems="center"
            justifyContent="space-between">
            <Bid />
            <Text size="xxs" lineHeight={16} ml={5} color="active">
              Bid Now
            </Text>
          </Container>
        </Button>
      );
    } else if (item.salesTypeId === 3) {
      return (
        <Button title="" width={100} height={32} onPress={_onPressItem}>
          <Container
            backgroundColor="transparent"
            dir="row"
            alignItems="center"
            justifyContent="space-between">
            <Hire />
            <Text size="xxs" lineHeight={16} ml={5} color="active">
              Hire Now
            </Text>
          </Container>
        </Button>
      );
    }
  };

  return (
    <Card pl={5} pr={5} pb={5} pt={5}>
      <TouchableOpacity style={styles.itemContainer} onPress={_onPressItem}>
        <Container alignItems="center">
          <ImageWithPlaceholder
            style={styles.productImage}
            source={{uri: `${IMAGE_PREFIX}${item.productImage}`}}
            resizeMode="center"
          />
        </Container>
        <Container pl={5}>
          <Text mt={5} numberOfLines={2} color="primary">
            {item.productName}
          </Text>
          <Text mt={10} weight="bold" color="primary" size="md" lineHeight={18}>
            R{item.unitCost.toFixed(2)}
          </Text>
        </Container>
        <Container
          mt={5}
          mb={5}
          pl={5}
          pr={5}
          dir="row"
          alignItems="center"
          justifyContent="space-between">
          {_renderActionButton()}
          <Button width={32} height={32} onPress={onPressFavourite}>
            <Icon
              name={isFavorited ? 'heart' : 'heart-outline'}
              color={colors.text.active}
              size={16}
            />
          </Button>
        </Container>
      </TouchableOpacity>
      <View style={styles.ratingContainer}>
        <MCIcon name="star-outline" color="#ffffff" size={16} />
        <Text color="white" size="xs" lineHeight={18} weight="medium">
          {ratingScore}
        </Text>
      </View>
    </Card>
  );
};

export default SpecialProductCard;

const styles = StyleSheet.create({
  itemContainer: {
    width: 160,
  },
  productImage: {
    height: 100,
    width: 160,
    borderRadius: 10,
  },
  ratingContainer: {
    position: 'absolute',
    backgroundColor: '#420738',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    right: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    opacity: 0.5,
  },
});
