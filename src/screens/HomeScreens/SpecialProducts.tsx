import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {useGetSpeicalProducts} from '@app/hooks/useGetSpecialProducts';
import ProductCard from '@app/components/products/ProductCard';
import SearchInput from '@app/components/templates/SearchInput';
import {Container, Location} from '@app/components/templates';
import colors from '@app/contants/colors';
import {MstCategoryType, ProductDtType} from '@app/generated/graphql-types';

const SpecialProducts = ({companyId = null}: any) => {
  const [size, setSize] = useState(40);
  const [productName, setProductName] = useState('');
  const [categories, setCategories] = useState<MstCategoryType[]>([]);
  const [speicalProducts, setSpecialProducts] = useState<ProductDtType[]>([]);
  const [isRefreshing, setRefreshing] = useState(false);
  const {products, loading, currentPage, totalPages, getSpeicalProducts} =
    useGetSpeicalProducts(
      productName,
      categories.map(cat => cat.categoryId).toString(),
      companyId,
      size,
    );

  useEffect(() => {
    setSpecialProducts(products);
    setRefreshing(false);
  }, [products]);

  const loadMoreSpecials = () => {
    if (loading) {
      return;
    }
    if (currentPage === totalPages) {
      return;
    }
    setSize(size + 10);
  };

  const _onChangeSearchText = (text: string) => {
    setProductName(text);
  };

  const _onChangeSearchCategories = (_categories: MstCategoryType[]) => {
    setCategories(_categories);
  };

  const onRefreshList = () => {
    setRefreshing(true);
    getSpeicalProducts();
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pl={5} pr={5} pt={16} style={styles.container}>
        <FlatList
          data={speicalProducts}
          renderItem={({item}) => <ProductCard item={item} />}
          keyExtractor={item => item!.productID!.toString()}
          numColumns={2}
          onEndReached={loadMoreSpecials}
          onEndReachedThreshold={0.5}
          showsVerticalScrollIndicator={false}
          refreshing={isRefreshing}
          onRefresh={onRefreshList}
          ListHeaderComponent={() => {
            return (
              <Container pl={15} pr={15}>
                <Location />
                <SearchInput
                  onChangeText={_onChangeSearchText}
                  onChangeCategories={_onChangeSearchCategories}
                />
              </Container>
            );
          }}
          ListFooterComponent={() => {
            return loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : null;
          }}
        />
      </Container>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
    paddingBottom: 100,
  },
});

export default SpecialProducts;
