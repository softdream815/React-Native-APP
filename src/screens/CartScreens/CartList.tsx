import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {
  Container,
  Text,
  ImageWithPlaceholder,
  Card,
  GradientButton,
} from '@app/components/templates';
import colors from '@app/contants/colors';
import {PrdShoppingCartDtoType} from '@app/generated/graphql-types';
import {useGetShoppingCart} from './hooks/useGetShoppingCart';
import {useUpdateCartItems} from './hooks/useUpdateCartItem';
import {useDeleteCartItem} from './hooks/useDeleteCartItem';
import {useRefreshOnFocus} from '@app/services/useRefreshOnFocus';
import {
  SwipeItem,
  SwipeButtonsContainer,
  SwipeProvider,
} from 'react-native-swipe-item';
import {IMAGE_PREFIX} from '@env';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '@app/components/Loading';
import {CartScreenProps} from '@app/navigation/CartStack';
import {useSelector} from 'react-redux';
import {RootStateType} from '@app/types';

const CartList = ({navigation}: CartScreenProps) => {
  const {refetch, loading, data} = useGetShoppingCart();
  const [cartItems, setItems] = useState<PrdShoppingCartDtoType[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [selectedItem, setSelectedItem] =
    useState<PrdShoppingCartDtoType | null>(null);
  const [isLoading, setLoading] = useState(false);
  useRefreshOnFocus(refetch);
  const updateCartItem = useUpdateCartItems();
  const deleteCartItem = useDeleteCartItem();
  const user = useSelector((state: RootStateType) => state.user);

  useEffect(() => {
    setLoading(loading || updateCartItem.isLoading || deleteCartItem.isLoading);
  }, [loading, updateCartItem.isLoading, deleteCartItem.isLoading]);

  useEffect(() => {
    if (data && data?.result) {
      console.log(data?.result)
      setItems(data?.result.prdShoppingCartDto ?? []);
      setTotalPrice(data?.result.totalAmount);
      setTotalQuantity(
        data?.result.prdShoppingCartDto?.reduce(
          (accmulator, prd) => accmulator + prd?.quantity,
          0,
        ),
      );
    }
  }, [data]);

  const onPressPlus = async (item: PrdShoppingCartDtoType) => {
    if (item.prdProduct) {
      await updateCartItem.mutateAsync({
        pid: item.prdProduct?.productId,
        quantity: item.quantity || 1 + 1,
        userid: user.id,
      });
      refetch();
    }
  };
  const onPressMinus = async (item: PrdShoppingCartDtoType) => {
    if (item.prdProduct) {
      await updateCartItem.mutateAsync({
        pid: item.prdProduct?.productId,
        quantity: item.quantity || 1 - 1,
        userid: user.id,
      });
      refetch();
    }
  };

  const deleteItem = async () => {
    if (selectedItem && selectedItem.recordID) {
      await deleteCartItem.mutateAsync({
        recordId: selectedItem.recordID,
      });
      refetch();
    }
  };

  const rightButtons = (
    <SwipeButtonsContainer style={{height: '100%'}}>
      <TouchableOpacity style={styles.deleteButton} onPress={deleteItem}>
        <Text color="white" align="center">
          Delete Item
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.saveButton}>
        <Text color="white" align="center">
          Save for later
        </Text>
      </TouchableOpacity>
    </SwipeButtonsContainer>
  );

  const _renderItems = ({item}: any) => {
    let imagePath = item.productImage;
    console.log(item.fromDate);
    return (
      <SwipeItem
        style={styles.swipeItem}
        swipeContainerStyle={styles.swipeContentContainerStyle}
        rightButtons={rightButtons}
        onRightButtonsShowed={() => setSelectedItem(item)}
        swipeThreshold={{left: 100, right: 0.5}}>
        <Container
          dir="row"
          backgroundColor="transpaent"
          alignItems="center"
          justifyContent="space-between"
          pr={5}>
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
                <Text color="primary" weight="semibold">
                  R {item.totalPrice.toFixed(2)}
                </Text>
              </Text>
            </Container>
          </Container>
          <Container
            pr={4}
            pl={4}
            pb={4}
            pt={4}
            style={{
              borderColor: colors.activeBorderColor,
              borderWidth: 1,
              borderRadius: 5,
            }}>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => onPressPlus(item)}>
              <MCIcon name="plus" color={colors.text.green} size={20} />
            </TouchableOpacity>
            <Container mt={10} mb={10}>
              <Text align="center" color="primary" weight="medium">
                {item.quantity}
              </Text>
            </Container>
            <TouchableOpacity
              style={styles.counterButton}
              onPress={() => onPressMinus(item)}>
              <MCIcon name="minus" color={colors.text.active} size={20} />
            </TouchableOpacity>
          </Container>
        </Container>
      </SwipeItem>
    );
  };

  const moveToCheckOut = () => {
    if (user.isGuest) {
      navigation.navigate('AuthStack', {screen: 'Login'});
    } else {
      navigation.navigate('CheckOutScreen');
    }
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container}>
        <SwipeProvider mode="single">
          <FlatList
            data={cartItems}
            renderItem={_renderItems}
            ListFooterComponent={null}
            ListEmptyComponent={
              <Text align="center">No product in your cart!</Text>
            }
          />
          <Container
            dir="row"
            alignItems="center"
            justifyContent="space-between"
            style={styles.footerContainer}
            pr={20}
            pl={20}
            pt={10}
            pb={10}>
            <Container>
              <Text>
                Total:{' '}
                <Text color="primary" weight="semibold">
                  R {totalPrice.toFixed(2)}
                </Text>
              </Text>
              <Text mt={10}>
                Total Items:{' '}
                <Text color="primary" weight="semibold">
                  {totalQuantity}
                </Text>
              </Text>
            </Container>
            <GradientButton
              title="Check Out"
              style={{width: 135}}
              onPress={moveToCheckOut}
              disabled={cartItems.length === 0}
            />
          </Container>
        </SwipeProvider>
      </Container>
      {isLoading && <Loading />}
    </Container>
  );
};

export default CartList;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    paddingBottom: 100,
  },
  footerContainer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderColor: colors.borderColor,
    borderWidth: 1,
    marginLeft: -20,
    marginRight: -20,
    borderBottomWidth: 0,
  },
  swipeItem: {
    width: '100%',
    height: 100,
    alignSelf: 'center',
    marginVertical: 5,
  },
  swipeContentContainerStyle: {
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: colors.borderColor,
  },
  counterButton: {
    backgroundColor: colors.text.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 5,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: colors.text.active,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    paddingHorizontal: 10,
  },
  saveButton: {
    flex: 1,
    backgroundColor: colors.text.green,
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    paddingHorizontal: 10,
  },
});
