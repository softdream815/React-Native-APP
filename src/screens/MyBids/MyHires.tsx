import React, {useState} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {useGetUserTopHires} from './hooks/useGetUserTopHires';
import {MstBusinessUserDtoType} from '@app/generated/graphql-types';
import {Container, Header} from '@app/components/templates';
import colors from '@app/contants/colors';
import Loading from '@app/components/Loading';
import HireItem from './HireItem';

const MyHires = () => {
  const {loading, topHires} = useGetUserTopHires();
  console.log(topHires);
  const renderItem = ({
    item,
  }: {
    item: MstBusinessUserDtoType;
    index: number;
  }) => {
    return <HireItem hireItem={item} key={item.productID} />;
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Header title="My Hires" />
      <Container pl={10} pr={10} pt={25} style={styles.container}>
        <FlatList
          data={topHires?.result ?? []}
          renderItem={renderItem}
          extraData={topHires?.count}
          showsVerticalScrollIndicator={false}
        />
      </Container>
      {loading && <Loading />}
    </Container>
  );
};

export default MyHires;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
