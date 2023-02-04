import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {useGetSpeicalProducts} from '@app/hooks/useGetSpecialProducts';
import SpecialProductCard from '@app/components/products/SpecialProductCard';
import {Text} from '@app/components/templates';

const SpecialProducts = ({
  productName = '',
  categories = [],
  companyId = null,
}: any) => {
  const {loading, products} = useGetSpeicalProducts(
    productName,
    categories.toString(),
    companyId,
    40,
  );

  if (!loading && products.length === 0) {
    return <Text ml={5}>No Special Products.</Text>;
  }

  return (
    <FlatList
      data={products}
      renderItem={({item}) => <SpecialProductCard item={item} />}
      keyExtractor={item => item!.productID!.toString()}
      horizontal
      onEndReachedThreshold={0.5}
      showsHorizontalScrollIndicator={false}
      extraData={loading}
    />
  );
};

export default SpecialProducts;
