import {ActivityIndicator, FlatList, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useGetProducts} from '@app/hooks/useGetProducts';
import SpecialProducts from '@app/screens/HomeScreens/SpecialProductsList';
import SearchInput from '@app/components/templates/SearchInput';
import ProductCard from './ProductCard';
import {Container, Text, Location} from '@app/components/templates';
import {PrdProductsType} from '@app/generated/graphql-types';
import {useRefreshOnFocus} from '@app/services/useRefreshOnFocus';
import {useSelector} from 'react-redux';
import {MstCategoryType} from '@app/generated/graphql-types';
import {RootStateType} from '@app/types';

// jwt steps to consider
// 1. Check redux state jwt if null
// 2. check sqlite db for guest jwt or role individual / business
// 3. If no jwt exists call Guest api & store jwt into redux state and sqlite
// 4. If user needs to action any mutation call then force user to login. Store in redux state and sqlite
// 5. Always use role individual / business jwt over guest jwt and store into redux state.

// On app first launch
// 1. Generate sqlite DB tables.
// 2. Call guest jwt if app first load and load products.
// 3. Check mstVersions against DB versions. If DB versions does not exists call api and store into DB
// 3.1. If value exists. Make a new call and Compare DB against api mstVersions. If version value changes populate reference data that changed.
// 4. List of reference data (Categories, Area - Country, Province, City, Suburb)
// 5. Store into Sqlite DB and read from DB for all search filters and controls.

type ProductListPropType = {
  salesType?: number; // 1: purchase, 2: bid, 3: hire
  showSpecial?: boolean;
  hideLocation?: boolean;
  hideSearch?: boolean;
  defaultCategory?: MstCategoryType;
  headerComponent?: JSX.Element;
  onRefresh?: () => void;
};

const ProductList = ({
  salesType,
  defaultCategory,
  hideLocation,
  hideSearch,
  headerComponent,
  onRefresh,
}: ProductListPropType) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [searchKey, setSearchKey] = useState<string>();
  const [categories, setCategories] = useState<MstCategoryType[]>([]);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);

  const user = useSelector((state: RootStateType) => state.user);
  const searchCategories = defaultCategory
    ? [defaultCategory, ...categories]
    : categories;

  const {refetch, loading, data} = useGetProducts({
    page,
    size: 10,
    salesTypeId: salesType,
    productName: searchKey,
    domainCategoryIds: searchCategories.map(cat => cat.categoryId).toString(),
    latitude: user.latitude ? user.latitude.toString() : null,
    longitude: user.longitude ? user.longitude.toString() : null,
  });
  // useRefreshOnFocus(refetch);

  useEffect(() => {
    if (data) {
      if (fetchingMore) {
        setProducts(pre => [
          ...pre,
          ...(data && data.result ? data.result : []),
        ]);
        setFetchingMore(false);
      } else {
        setProducts(data && data.result ? data.result : []);
      }

      setRefreshing(false);
    }
  }, [data]);

  const renderItem = (item: PrdProductsType, index: any) => {
    return (
      <ProductCard
        //  navigation={this.props.navigation}
        item={item}
        key={index}
        // addToFavourites={(value) => this.addToFavourites(value)}
        // addToCart={(value) => this.addToCart(value)}
      />
    );
  };

  const fetchMoreProducts = () => {
    if (loading) {
      return;
    }
    const {totalPages, currentPage} = data!;
    if (currentPage >= totalPages) {
      return;
    }
    setPage(() => {
      return page + 1;
    });
    setFetchingMore(true);
  };

  const _onChangeSearchText = (value: string) => {
    setSearchKey(value);
  };

  const _onChangeSearchCategories = (_categories) => {
    setCategories(_categories);
  };

  const onRefreshList = () => {
    setRefreshing(true);
    if (onRefresh) onRefresh();
    refetch();
  };
  return (
    <Container
      flex={1}
      backgroundColor="transparent"
      pl={0}
      pr={0}
      style={styles.container}>
      <Container mt={16} flex={1} backgroundColor="transparent">
        <FlatList
          data={products}
          renderItem={({item, index}) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          extraData={loading}
          contentContainerStyle={{paddingBottom: 150}}
          ListHeaderComponent={() => {
            return (
              <Container pl={20} pr={20}>
                {!hideLocation && <Location />}
                {!hideSearch && (
                  <SearchInput
                    onChangeText={_onChangeSearchText}
                    onChangeCategories={_onChangeSearchCategories}
                    defaultValue={searchKey}
                    defaultCategories={searchCategories}
                  />
                )}
                {headerComponent}
              </Container>
            );
          }}
          ListFooterComponent={() => {
            return loading ? (
              <ActivityIndicator size="large" color="#000" />
            ) : null;
          }}
          ListEmptyComponent={() => {
            return !loading ? (
              <Text align="center" mt={10}>
                Sorry, There is no product nearby you.
              </Text>
            ) : null;
          }}
          onEndReached={fetchMoreProducts}
          onEndReachedThreshold={0.5}
          refreshing={isRefreshing}
          onRefresh={onRefreshList}
        />
      </Container>
    </Container>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
