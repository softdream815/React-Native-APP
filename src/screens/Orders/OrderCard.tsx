import React from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Container, Text, ImageWithPlaceholder} from '@app/components/templates';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';
import {IMAGE_PREFIX} from '@env';
import colors from '@app/contants/colors';
import {OrderType} from '@app/types';

type OrderCardPropsType = {
  order: OrderType;
};

const OrderCard = ({order}: OrderCardPropsType) => {
  const orderDetails = order.prdOrderDetails;
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Order', {order})}>
      <Container
        key={order.orderId}
        pt={10}
        pb={10}
        pl={10}
        mb={15}
        style={styles.card}>
        <Container dir="row" justifyContent="space-between" pr={10}>
          <Text>
            Order ID: {''}
            <Text color="primary" weight="medium">
              {order.orderIdstring}
            </Text>
          </Text>
          <Text color="primary" weight="medium">
            R {order.orderAmount.toFixed(2)}
          </Text>
        </Container>
        <Container mt={10}>
          <Text>
            Order Date: {''}
            <Text color="primary" weight="medium">
              {moment(order.orderDate).format('Do-MMM-YYYY')}
            </Text>
          </Text>
        </Container>
        <Container mt={10}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {orderDetails.map((order: any) => {
              const {products} = order;
              let prdImagePath = '';
              if (products.mapProductImages.length > 0) {
                prdImagePath = products.mapProductImages[0].imagePath;
              }
              return (
                <ImageWithPlaceholder
                  source={{uri: `${IMAGE_PREFIX}${prdImagePath}`}}
                  style={styles.productImage}
                  resizeMode="contain"
                />
              );
            })}
          </ScrollView>
        </Container>
      </Container>
    </TouchableOpacity>
  );
};

export default OrderCard;

const styles = StyleSheet.create({
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 5,
  },
  card: {
    borderColor: colors.borderColor,
    borderWidth: 1,
    borderRadius: 5,
  },
});
