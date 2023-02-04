import React from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {
  Container,
  Text,
  Header,
  GradientButton,
  ImageWithPlaceholder,
  Button,
} from '@app/components/templates';
import colors from '@app/contants/colors';
import {IMAGE_PREFIX} from '@env';
import StepIndicator from 'react-native-step-indicator';
import {useGetOrderStatusList} from '@app/hooks/useGetOrderStatusList';
import moment from 'moment';
import {Divider} from '@rneui/themed';
import Loading from '@app/components/Loading';

const customStepStyles = {
  stepIndicatorSize: 15,
  currentStepIndicatorSize: 15,
  separatorStrokeWidth: 2,
  currentStepStrokeWidth: 2,
  stepStrokeCurrentColor: '#D5B0B3',
  stepStrokeWidth: 2,
  stepStrokeFinishedColor: '#D5B0B3',
  stepStrokeUnFinishedColor: '#D5B0B3',
  separatorFinishedColor: '#D5B0B3',
  separatorUnFinishedColor: '#D5B0B3',
  stepIndicatorFinishedColor: '#D5B0B3',
  stepIndicatorUnFinishedColor: '#ffffff',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 13,
  currentStepIndicatorLabelFontSize: 13,
  stepIndicatorLabelCurrentColor: '#D5B0B3',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: '#D5B0B3',
  labelColor: '#D5B0B3',
  labelSize: 13,
  currentStepLabelColor: '#D5B0B3',
};

const OrderDetail = ({route}) => {
  const order = route.params.order;
  const orderStatusTypes = order.prdOrderStatus;
  const {orderStatusList, loading} = useGetOrderStatusList();

  if (loading) {
    return <Loading />;
  }

  let data = orderStatusList.map((item) => ({
    id: item?.orderStatusTypeId,
    time: null,
    title: item?.statusName,
    sequenceId: item?.statusSequence,
  }));

  orderStatusTypes.map(item => {
    const {orderStatusTypeId, createdDate} = item;
    const index = data.findIndex(d => d.id === orderStatusTypeId);
    if (index > -1) {
      data[index].time = moment(createdDate).format('h:mm A');
    }
  });

  const paymentFailedIndex = data.findIndex(d => d.id == 4);
  if (paymentFailedIndex > -1 && data[paymentFailedIndex].time == null) {
    data = data.filter(d => d.id !== 4);
  }
  data.sort((a, b) => a.sequenceId - b.sequenceId);
  const currentPosition = data.findIndex(d => d.id === order.orderStatusId);

  const orderProducts = order.prdOrderDetails;
  const totalQuantity = orderProducts.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.orderQuantity);
  }, 0);

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title={`Order ID: ${order.orderIdstring}`} />
      <ScrollView>
        <Container pl={10} pr={10} pt={25} style={styles.container}>
          <Container>
            <StepIndicator
              customStyles={customStepStyles}
              currentPosition={currentPosition}
              labels={data.map(d => d.title) ?? []}
              stepCount={data.length}
              renderStepIndicator={({
                stepStatus,
              }: {
                position: number;
                stepStatus: string;
              }) => {
                if (stepStatus === 'finished' || stepStatus === 'current') {
                  return <View style={styles.dot} />;
                } else {
                  return null;
                }
              }}
              renderLabel={({
                position,
                label,
              }: {
                position: number;
                label: string;
              }) => {
                let time = data[position].time;
                if (time === null && position === 0) {
                  time = order.createdDate;
                }
                return (
                  <Container>
                    <Text
                      color="primary"
                      style={{width: 80}}
                      align="center"
                      lineHeight={18}>
                      {label}
                    </Text>
                    <Text mt={5}>
                      {time ? moment(time).format('DD.MM.YYYY') : ''}
                    </Text>
                  </Container>
                );
              }}
            />
          </Container>
          <Container
            mt={10}
            pr={10}
            pl={10}
            pt={10}
            pb={10}
            backgroundColor={colors.appBackgroundColor}
            style={styles.card}>
            <Text color="primary" weight="medium" size="md" lineHeight={24}>
              Bill Details
            </Text>
            {orderProducts.map(prd => {
              return (
                <Container
                  key={prd.productId}
                  dir="row"
                  justifyContent="space-between"
                  backgroundColor="transparent"
                  mt={10}>
                  <Text style={{width: 260}} color="primary" lineHeight={20}>
                    {prd.products.productName} (QTY : {prd.orderQuantity})
                  </Text>
                  <Text color="primary" weight="medium">
                    R {prd.orderAmount.toFixed(2)}
                  </Text>
                </Container>
              );
            })}
            <Divider color="#D5B0B3" style={{marginTop: 10}} />
            <Container
              backgroundColor="transparent"
              dir="row"
              mt={10}
              justifyContent="space-between">
              <Text color="primary">Total (QTY {totalQuantity})</Text>
              <Text color="primary" weight="medium">
                R {order.orderAmount.toFixed(2)}
              </Text>
            </Container>
            <Container
              backgroundColor="transparent"
              dir="row"
              mt={10}
              justifyContent="space-between">
              <Text color="primary">Shipping Charge</Text>
            </Container>
            <Divider color="#D5B0B3" style={{marginTop: 10}} />
            <Container
              backgroundColor="transparent"
              mt={10}
              dir="row"
              justifyContent="space-between">
              <Text color="primary">Subtotal</Text>
              <Text color="primary" weight="medium">
                R {order.orderAmount.toFixed(2)}
              </Text>
            </Container>
          </Container>
          <Container
            mt={10}
            pr={10}
            pt={10}
            pb={10}
            pl={10}
            backgroundColor={colors.appBackgroundColor}
            style={styles.card}>
            <Text color="primary" weight="medium" size="md" lineHeight={24}>
              Preview
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={{marginTop: 10}}>
              {order.prdOrderDetails.map((order: any) => {
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
          <Container mb={40}>
            <Button title="Cancel Order" width="100%" mt={10} height={40} />
            <Button title="Return Product" width="100%" mt={10} height={40} />
            <GradientButton title="Review & Rate The Product" mt={10} />
          </Container>
        </Container>
      </ScrollView>
    </Container>
  );
};

export default OrderDetail;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  dot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: '#D5B0B3',
  },
  card: {
    borderWidth: 1,
    borderColor: colors.borderColorFade,
    borderRadius: 10,
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 5,
    marginRight: 5,
  },
});
