import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useGetUserTopBids} from './hooks/useGetUserTopBids';
import {MstBusinessUserDtoType} from '@app/generated/graphql-types';
import {Container, Header} from '@app/components/templates';
import colors from '@app/contants/colors';
import Loading from '@app/components/Loading';
import BidItem from './BidItem';

const MyBids = () => {
  const {loading, topBids} = useGetUserTopBids();
  const renderItem = ({
    item,
  }: {
    item: MstBusinessUserDtoType;
    index: number;
  }) => {
    return <BidItem bidItem={item} key={item.productID} />;
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title="My Bids" />
      <Container pl={10} pr={10} pt={25} style={styles.container}>
        <FlatList
          data={topBids?.result ?? []}
          renderItem={renderItem}
          extraData={topBids?.count}
          showsVerticalScrollIndicator={false}
        />
      </Container>
      {loading && <Loading />}
    </Container>
  );
};

export default MyBids;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
