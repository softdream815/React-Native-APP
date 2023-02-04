import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {
  Container,
  Text,
  Button,
  GradientButton,
  BottomPicker,
} from '@app/components/templates';
import {PrdShoppingCartDtoType} from '@app/generated/graphql-types';
import {useGetShoppingCart} from './hooks/useGetShoppingCart';
import {useGetCheckOutAddress} from './hooks/useGetCheckOutAddress';
import {usePurchaseCart} from './hooks/usePurchaseCart';
import colors from '@app/contants/colors';
import Loading from '@app/components/Loading';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {CheckOutProps} from '@app/navigation/CartStack';
import {useFocusEffect} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';
import Toast from 'react-native-root-toast';

const CheckOut = ({navigation}: CheckOutProps) => {
  const {loading, data} = useGetShoppingCart();
  const {
    addresses,
    loading: addressLoading,
    getAddress,
  } = useGetCheckOutAddress();
  const [deliveryAddress, setDeliveryAddress] = useState(null);
  const {purchase, loading: purchaseLoading} = usePurchaseCart();

  const totalCount = data?.result?.prdShoppingCartDto?.reduce((acc, prd) => {
    return acc + (prd?.quantity ?? 0);
  }, 0);

  useFocusEffect(
    useCallback(() => {
      getAddress();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []),
  );

  const getAddressDetail = () => {
    const address = addresses.find(a => a?.userAddressID === deliveryAddress);
    if (!address) {
      return {
        addressString: 'Unknown Address',
        latLng: 'Unknown location',
      };
    }
    return {
      addressString: `${address?.streetAddress}, ${address?.suburb}, ${address?.city}, ${address?.province}`,
      latLng: `${address?.latitude}, ${address?.longitude}`,
    };
  };

  const isLoading = loading || addressLoading || purchaseLoading;
  const renderProduct = (product: PrdShoppingCartDtoType) => (
    <Container
      dir="row"
      justifyContent="space-between"
      alignItems="center"
      pb={10}
      pt={10}>
      <Text style={{width: 260}} color="secondary">
        {product.productName} (QTY: {product.quantity})
      </Text>
      <Text weight="semibold" color="primary">
        R {product.totalPrice.toFixed(2)}
      </Text>
    </Container>
  );
  const onPressAddAddress = () => {
    navigation.navigate('AddAddressScreen');
  };
  const checkout = () => {
    purchase()
      .then(res => {
        console.log(res.data?.purchaseShoppingCartAsync?.result);
        if (res.data?.purchaseShoppingCartAsync?.result?.paymentUrl) {
          navigation.navigate('Payment', {
            url: res.data?.purchaseShoppingCartAsync?.result?.paymentUrl ?? '',
          });
        } else {
          Toast.show(res.data?.purchaseShoppingCartAsync?.message ?? '', {
            duration: Toast.durations.LONG,
            position: Toast.positions.BOTTOM,
            shadow: true,
            animation: true,
            hideOnPress: true,
            delay: 0,
          });
        }
      })
      .catch(e => {
        console.log(e);
      });
  };
  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={20} pr={20} pt={16} style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {!addressLoading && addresses.length === 0 && (
            <Container alignItems="center">
              <Button width={320} height={50} onPress={onPressAddAddress}>
                <Container
                  backgroundColor="transparent"
                  dir="row"
                  alignItems="center">
                  <MCIcon name="plus" color={colors.text.active} size={24} />
                  <Text color="active" lineHeight={24} ml={10} weight="medium">
                    Add Delivery Address
                  </Text>
                </Container>
              </Button>
            </Container>
          )}
          {data?.result?.prdShoppingCartDto && (
            <Container
              pt={10}
              style={{
                borderBottomColor: colors.borderColor,
                borderBottomWidth: 1,
              }}>
              {data?.result?.prdShoppingCartDto?.map(prd => {
                return renderProduct(prd ?? {});
              })}
            </Container>
          )}
          <Container
            pb={10}
            style={{borderBottomColor: colors.borderColor, borderBottomWidth: 1}}>
            <Container mt={10} dir="row" justifyContent="space-between">
              <Text color="secondary">Total (QTY {totalCount})</Text>
              <Text color="primary" weight="semibold">
                R {data?.result?.totalAmount.toFixed(2)}
              </Text>
            </Container>
            <Container mt={10} dir="row" justifyContent="space-between">
              <Text color="secondary">Vat</Text>
              <Text color="primary" weight="semibold">
                R {data?.result?.vatAmount.toFixed(2)}
              </Text>
            </Container>
          </Container>
          <Container mt={10} dir="row" justifyContent="space-between">
            <Text color="secondary">SubTotal</Text>
            <Text color="primary" weight="semibold">
              R {data?.result?.totalAmount + data?.result?.vatAmount}
            </Text>
          </Container>
          <Container mt={10} mb={200}>
            <Text color="secondary" weight="medium" mt={20} mb={5}>
              Deliver Address
            </Text>
            <BottomPicker
              data={addresses.map(address => ({
                label: `${address?.streetAddress}, ${address?.suburb}, ${address?.city}, ${address?.province}`,
                value: address?.userAddressID,
              }))}
              placeholder="Select Delivery Address"
              onChange={setDeliveryAddress}
              value={deliveryAddress}
              style={{
                borderColor: colors.borderColor,
                borderWidth: 2,
                borderRadius: 10,
                paddingHorizontal: 5,
                fontSize: 14,
              }}
            />
            {deliveryAddress && (
              <Container
                style={styles.addressContainer}
                pt={10}
                pl={10}
                pb={10}
                pr={10}
                mt={-10}
                backgroundColor="#FFF4F5">
                <Container
                  dir="row"
                  alignItems="center"
                  backgroundColor="transparent">
                  <Icon name="home" size={20} color={colors.text.secondary} />
                  <Text ml={10} lineHeight={20} color="secondary">
                    {getAddressDetail().addressString}
                  </Text>
                </Container>
                <Container dir="row" mt={10} backgroundColor="transparent">
                  <Icon name="map-pin" size={20} color={colors.text.secondary} />
                  <Text ml={10} lineHeight={20} color="secondary">
                    {getAddressDetail().latLng}
                  </Text>
                </Container>
              </Container>
            )}
          </Container>
        </ScrollView>
        <Container
          style={styles.footer}
          pt={10}
          pb={10}
          pr={20}
          pl={20}
          dir="row"
          alignItems="center"
          justifyContent="space-between">
          <Container>
            <Text color="secondary" mt={5} mb={5}>
              Total:
              <Text color="primary" weight="semibold">
                {' '}
                R {data?.result?.totalAmount + data?.result?.vatAmount}
              </Text>
            </Text>
            <Text>
              Total Items:{' '}
              <Text color="primary" weight="semibold">
                {totalCount}
              </Text>
            </Text>
          </Container>
          <GradientButton title="Processed to Pay" onPress={checkout} />
        </Container>
      </Container>
      {isLoading && <Loading />}
    </Container>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
  },
  footer: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 100,
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  addressContainer: {
    borderWidth: 1,
    borderColor: colors.borderColor,
    borderRadius: 8,
  },
});
