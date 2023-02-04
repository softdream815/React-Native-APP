import {
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
  FlatList,
  ActivityIndicator,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import colors from '@app/contants/colors';
import SpecialProducts from '@app/screens/HomeScreens/SpecialProductsList';
import {Container, Text, Location} from '@app/components/templates';
import RequestItemServiceList from './RequestItemServiceList';
import CategoryList from './CategoryList';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {HomeScreenProps} from '@app/navigation/HomeStack';
import {useGetFavoriteProducts} from '../WishScreens/hooks/useGetFavoriteProducts';
import {useGetShoppingCart} from '@app/screens/CartScreens/hooks/useGetShoppingCart';
import {useDispatch} from 'react-redux';
import {
  get_wishlist_from_server,
  get_carlist_from_server,
} from '@app/redux/actions/actions';
import {MstCategoryType, PrdProductsType} from '@app/generated/graphql-types';
import ProductCard from '@app/components/products/ProductCard';
import {useGetProducts} from '@app/hooks/useGetProducts';
import {useSelector} from 'react-redux';
import {RootStateType} from '@app/types';
import CategorySelector from '@app/components/templates/CategorySelector';
import Icon from 'react-native-vector-icons/Feather';
import Mix from '@app/assets/svgs/Mix';
import {Chip} from '@rneui/themed';

const HomeScreen = ({navigation, route}: HomeScreenProps) => {
  const {favProducts} = useGetFavoriteProducts();
  const {data: cartProducts} = useGetShoppingCart();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<any[]>([]);
  const [searchKey, setSearchKey] = useState<string>();
  const [categories, setCategories] = useState<MstCategoryType[]>([]);
  const [fetchingMore, setFetchingMore] = useState(false);
  const [isRefreshing, setRefreshing] = useState(false);
  const [isVisibleCategorySelector, setVisibleCategorySelector] =
    useState(false);
  const user = useSelector((state: RootStateType) => state.user);

  const {refetch, loading, data} = useGetProducts({
    page,
    size: 10,
    productName: searchKey,
    domainCategoryIds: categories.map(cat => cat.categoryId).toString(),
    latitude: user.latitude ? user.latitude.toString() : null,
    longitude: user.longitude ? user.longitude.toString() : null,
  });

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

  useEffect(() => {
    dispatch(get_wishlist_from_server(favProducts));
  }, [dispatch, favProducts]);
  useEffect(() => {
    dispatch(
      get_carlist_from_server(cartProducts?.result?.prdShoppingCartDto ?? []),
    );
  }, [dispatch, cartProducts]);
  const _onChangeSearchText = (value: string) => {
    setSearchKey(value);
  };

  useEffect(() => {
    if (!loading) {
      setTimeout(async () => {
        try {
          await refetch();
        } catch (err) {
          console.log('Refetch error:', err);
        }
      }, 2000);
    }
  }, [loading, refetch]);

  const _onChangeSearchCategories = (_catgories: MstCategoryType[]) => {
    setCategories(_catgories);
    if (isVisibleCategorySelector) {
      setVisibleCategorySelector(false);
    }
  };

  const _onPressAllSpeical = () => {
    navigation.navigate('SpecialProducts');
  };

  const onSelectCategory = (category: MstCategoryType) => {
    setCategories(prev => [category, ...prev]);
  };
  const onRefreshList = () => {
    setRefreshing(true);
    refetch();
  };
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
    if (loading || !data) {
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
  const onRemoveCategory = (item: MstCategoryType) => {
    setCategories(prev =>
      prev.filter(cat => cat.categoryId !== item.categoryId),
    );
  };
  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pt={16} style={styles.container}>
        <FlatList
          data={products}
          renderItem={({item, index}) => renderItem(item, index)}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          extraData={categories}
          ListHeaderComponent={
            <Container>
              <Container pr={20} pl={20}>
                <Location />
                <View style={styles.searchContainer}>
                  <Icon name="search" color={colors.text.label} size={20} />
                  <TextInput
                    style={styles.searchInput}
                    placeholder={'Search Products...'}
                    underlineColorAndroid="transparent"
                    onChangeText={setSearchKey}
                    // onSubmitEditing={_onChangeSearchText}
                    value={searchKey}
                  />
                  <TouchableOpacity
                    onPress={() => setVisibleCategorySelector(true)}>
                    <Mix />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    marginBottom: 20,
                  }}>
                  {categories.map(item => (
                    <Chip
                      title={item.categoryName ?? ''}
                      icon={{
                        name: 'close',
                        type: 'ion-icon',
                        size: 16,
                        color: colors.tintColor,
                      }}
                      onPress={() => onRemoveCategory(item)}
                      iconRight
                      titleStyle={{
                        fontSize: 12,
                        color: colors.text.primary,
                        fontFamily: 'Poppins-Regular',
                      }}
                      buttonStyle={{
                        backgroundColor: colors.activeBackgroundColor,
                        marginBottom: 5,
                        marginLeft: 2,
                      }}
                    />
                  ))}
                </View>
              </Container>
              <Container pr={20} pl={20}>
                <Text color="primary" weight="medium">
                  Request For Quote
                </Text>
                <RequestItemServiceList />
              </Container>
              <Container mt={20} pr={20} pl={20}>
                <Container
                  dir="row"
                  alignItems="center"
                  justifyContent="space-between">
                  <Text color="primary" weight="medium">
                    Nearby
                  </Text>
                  <Pressable
                    style={styles.moreButton}
                    onPress={() => setVisibleCategorySelector(true)}>
                    <Text color="active" weight="medium">
                      See All Categories
                    </Text>
                    <MaterialIcon
                      name="arrow-right-alt"
                      size={24}
                      color={colors.text.active}
                    />
                  </Pressable>
                </Container>
                <CategoryList
                  onSelectCategory={onSelectCategory}
                  // selectedCategory={searchCategories}
                />
              </Container>
              <Container mt={20} pr={20} pl={20}>
                <Container
                  dir="row"
                  alignItems="center"
                  justifyContent="space-between">
                  <Text color="primary" weight="medium">
                    Special Products
                  </Text>
                  <Pressable
                    style={styles.moreButton}
                    onPress={_onPressAllSpeical}>
                    <Text color="active" weight="medium">
                      Explore All
                    </Text>
                    <MaterialIcon
                      name="arrow-right-alt"
                      size={24}
                      color={colors.text.active}
                    />
                  </Pressable>
                </Container>
                <Container mt={10} ml={-5}>
                  <SpecialProducts />
                </Container>
              </Container>
              <Container mt={20}>
                <Text color="primary" weight="medium" ml={20}>
                  Products
                </Text>
              </Container>
            </Container>
          }
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
          refreshing={isRefreshing}
          onRefresh={onRefreshList}
        />
      </Container>
      {/* {isLoading && <Loading />} */}
      <CategorySelector
        visible={isVisibleCategorySelector}
        onDone={_onChangeSearchCategories}
        onClose={() => setVisibleCategorySelector(false)}
        multiple
        defaultValue={categories ?? []}
      />
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  moreButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.borderColorFade,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: colors.appBackgroundColor,
    marginTop: 10,
    marginBottom: 5,
  },
  searchInput: {
    flex: 1,
    marginLeft: 5,
    fontFamily: 'Poppins-Regular',
    color: colors.text.primary,
  },
});
