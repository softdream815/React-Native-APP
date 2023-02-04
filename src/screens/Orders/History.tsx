import React from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {Container, Text} from '@app/components/templates';
import {useSelector} from 'react-redux';
import {RootStateType, OrderType} from '@app/types';
import {useGetMyOrders} from './hooks/useGetMyOrders';
import OrderCard from './OrderCard';

const History = () => {
  const {fromDate, toDate} = useSelector(
    (state: RootStateType) => state.orders,
  );
  const {orders} = useGetMyOrders(3, fromDate, toDate, 1);

  const renderItem = ({item}: {item: OrderType}) => {
    return <OrderCard order={item} />;
  };
  return (
    <Container pl={20} pr={20} pt={16} style={styles.container} flex={1}>
      <FlatList
        ListEmptyComponent={<Text align="center">No Orders yet!</Text>}
        data={orders?.result ?? []}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
}

export default History;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
