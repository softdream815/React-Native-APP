import React, {useState, useMemo} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
  TextInput,
  Alert,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/Ionicons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import ChartDecrease from '@app/assets/svgs/ChartDecrease';
import ChartIncrease from '@app/assets/svgs/ChartIncrease';
import {
  Button,
  Card,
  Container,
  Text,
  QuantityInput,
  GradientButton,
} from '@app/components/templates';
import ImageWithPlaceholder from '@app/components/templates/ImageWithPlaceholder';
import colors from '@app/contants/colors';
import {IMAGE_PREFIX} from '@env';
import {ProductScreenProps} from '@app/navigation/HomeStack';
import moment from 'moment';
import {Rating} from 'react-native-ratings';
import RenderHtml from 'react-native-render-html';
import IframeRenderer, {iframeModel} from '@native-html/iframe-plugin';
import WebView from 'react-native-webview';
import {useGetRatingUser} from '@app/hooks/useGetRatingUser';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import BottomBar from '@app/assets/svgs/Navigations/BottomBar';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import BidLarge from '@app/assets/svgs/BidLarge';
import DatePicker from 'react-native-date-picker';
import HireLarge from '@app/assets/svgs/HireLarge';
import {useAddToCartMutation} from '@app/screens/CartScreens/hooks/useAddToCart';
import {useSelector, useDispatch} from 'react-redux';
import {RootStateType, ProductType} from '@app/types';
import {
  add_to_wishlist,
  remove_from_wishlist,
  get_carlist_from_server,
} from '@app/redux/actions/actions';
import {useAddFavoriteProduct} from '@app/screens/WishScreens/hooks/useAddFavoriteProduct';
import Loading from '@app/components/Loading';
import Toast from 'react-native-root-toast';
import {useBidOnProductMutation} from '@app/hooks/useBidOnProductMutation';

const Product = ({route}: ProductScreenProps) => {
  const addToCartMutation = useAddToCartMutation();
  const dispatch = useDispatch();
  const addFavoriteMutation = useAddFavoriteProduct();
  const wishlist = useSelector(
    (state: RootStateType) => state.wishlist.products,
  );
  const user = useSelector((state: RootStateType) => state.user);
  const {product} = route.params;
  const imagePath = `${IMAGE_PREFIX}${
    product.imagePath || product.productImage
  }`;
  const layout = useWindowDimensions();
  const [cartLoading, setCartLoading] = useState(false);
  const [favLoading, setFavLoading] = useState(false);
  const [qty, setQty] = useState(1);
  const [tabIndex, setTabIndex] = useState(0);
  const [routes] = useState([
    {key: 'description', title: 'Description'},
    {key: 'information', title: 'Information'},
    {key: 'policy', title: 'Reviews'},
  ]);
  const [hireStartDate, setHireStartDate] = useState(moment());
  const [hireEndDate, setHireEndDate] = useState(moment().add(1, 'day'));
  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const [openEndDatePicker, setOpenEndDatePicker] = useState(false);

  const bidMutation = useBidOnProductMutation();

  const lastestBid =
    product.salesTypeId === 2 ?
    (
      product.prdBid.length
        ? product.prdBid[product.prdBid.length - 1].bidAmount
        : 0
    ) : 0;

  const [bidAmount, setBidAmount] = useState(
    lastestBid === 0 ? product.unitCost : lastestBid * 1.1,
  );

  const isFavorited: boolean = !!wishlist.find(
    (wishItem: ProductType) => wishItem.productID === product.productID,
  );

  const addToFavourites = async () => {
    setFavLoading(true);
    if (isFavorited) {
      dispatch(remove_from_wishlist(product.productID ?? 0));
    } else {
      await addFavoriteMutation.mutateAsync({
        productId: product.productID,
        userId: user.id,
        createDate: moment().format(),
      });
      dispatch(add_to_wishlist(product));
    }
    Toast.show('Product has been added your wish list!', {
      duration: Toast.durations.LONG,
      position: Toast.positions.BOTTOM,
      shadow: true,
      animation: true,
      hideOnPress: true,
      delay: 0,
    });
    setFavLoading(false);
  };

  const addToCart = async () => {
    if (product.productID) {
      setCartLoading(true);
      const result = await addToCartMutation.mutateAsync({
        pid: product.productID,
        userid: user.id,
        quantity: qty,
        fromDate: hireStartDate.format(),
        endDate: hireEndDate.format(),
      });
      dispatch(
        get_carlist_from_server(
          result.postPrdShoppingCartOptimized?.result?.prdShoppingCartDto,
        ),
      );
      Toast.show('Product has been added your cart!', {
        duration: Toast.durations.LONG,
        position: Toast.positions.BOTTOM,
        shadow: true,
        animation: true,
        hideOnPress: true,
        delay: 0,
      });
      setCartLoading(false);
    }
  };
  const {ratingList} = useGetRatingUser({
    key: product.productID,
    keyType: 4,
    size: 10,
  });
  const ratingScore = useMemo(
    () =>
      ratingList.reduce((acc, rating) => acc + (rating?.ratingScore ?? 0), 0) /
      ratingList.length,
    [ratingList],
  );

  // console.log("ratingScore:", ratingScore);

  const renderers = {
    iframe: IframeRenderer,
  };
  const customHTMLElementModels = {
    iframe: iframeModel,
  };
  const description = () => {
    return (
      <Container mt={10}>
        <Text
          color="secondary"
          lineHeight={20}
          style={{width: layout.width - 40}}>
          {product.description}
        </Text>
        {/* <RenderHtml
          source={{html: product.description}}
          contentWidth={layout.width - 60}
          renderers={renderers}
          WebView={WebView}
          customHTMLElementModels={customHTMLElementModels}
        /> */}
      </Container>
    );
  };
  const itemInformation = () => {
    return (
      <Container mt={10}>
        <Text color="secondary" mb={5}>
          Length:{' '}
          <Text color="primary" weight="semibold">
            {product.length}
          </Text>
        </Text>
        <Text color="secondary" mb={5}>
          Width:{' '}
          <Text color="primary" weight="semibold">
            {product.width}
          </Text>
        </Text>
        <Text color="secondary" mb={5}>
          Height:{' '}
          <Text color="primary" weight="semibold">
            {product.height}
          </Text>
        </Text>
        <Text color="secondary" mb={5}>
          Volume:{' '}
          <Text color="primary" weight="semibold">
            {product.volume}
          </Text>
        </Text>
        <Text color="secondary" mb={5}>
          Weight:{' '}
          <Text color="primary" weight="semibold">
            {product.weight}
          </Text>
        </Text>
      </Container>
    );
  };
  const returnPolicy = () => {
    return (
      <Container mt={10}>
        {ratingList.map(rating => (
          <Container
            pr={45}
            pb={10}
            pt={10}
            style={{
              borderBottomColor: colors.borderColorFade,
              borderBottomWidth: 1,
            }}>
            <Container dir="row" justifyContent="space-between">
              <Container>
                <Text>{rating?.name}</Text>
                <Text size="xs" lineHeight={14}>
                  {moment(rating?.dateofReview).format('YYYY-MM-DD')}
                </Text>
              </Container>
              <Rating imageSize={14} readonly startingValue={ratingScore} />
            </Container>
            <Text>{rating?.review}</Text>
          </Container>
        ))}
      </Container>
    );
  };

  const renderScene = SceneMap({
    description: description,
    information: itemInformation,
    policy: returnPolicy,
  });

  const _renderSummary = () => {
    if (product.salesTypeId === 1) {
      return (
        <Container mt={20}>
          <Text pt={5} pb={5}>
            Price:{' '}
            {product.unitCost < product.originalUnitCost && (
              <Text style={{textDecorationLine: 'line-through'}}>
                {product.originalUnitCost}
              </Text>
            )}
            <Text weight="semibold" color="primary" size="md">
              R {product.unitCost}
            </Text>
          </Text>
          <Text pt={5} pb={5}>
            Delivery:{' '}
            <Text weight="semibold" color="primary">
              Free
            </Text>
          </Text>
          <Text pt={5} pb={5}>
            Stock:{' '}
            {product.inventory === 0 ? (
              <Text color="active" weight="medium">
                Out of Stock
              </Text>
            ) : (
              <Text color="primary" weight="semibold">
                {product.inventory}
              </Text>
            )}
          </Text>
          <Container dir="row" alignItems="center">
            <Text mr={5}>QTY: </Text>
            <QuantityInput value={qty} onChange={setQty} />
          </Container>
          <Container dir="row" alignItems="center" mt={10}>
            <Rating imageSize={20} readonly startingValue={5} />
            <Text ml={10} mt={5}>
              {ratingList?.length} reviews
            </Text>
          </Container>
        </Container>
      );
    } else if (product.salesTypeId === 2) {
      const lastestBid = product.prdBid.length
        ? product.prdBid[product.prdBid.length - 1].bidAmount
        : 0;
      return (
        <Container mt={20}>
          <Text pt={5} pb={5}>
            Last Bid Amount:{' '}
            <Text weight="semibold" color="primary">
              {lastestBid > 0 ? `R ${lastestBid.toFixed(2)}` : 'No bid yet'}
            </Text>
          </Text>
          <Text pt={5} pb={5}>
            Cut Off Date:{' '}
            <Text color="primary" weight="semibold">
              {moment(product.endDate).format('DD MMM YYYY')}
            </Text>
          </Text>
        </Container>
      );
    } else if (product.salesTypeId === 3) {
      return (
        <Container mt={20}>
          <Text>
            Price: <Text>{product.unitCost}</Text>
          </Text>
          <Text>
            Stock: <Text>{product.inventory}</Text>
          </Text>
        </Container>
      );
    }
  };

  const renderFavoriteButton = useMemo(() => {
    return (
      <Button
        width={160}
        height={40}
        onPress={addToFavourites}
        disabled={favLoading}>
        <Container
          backgroundColor="transparent"
          dir="row"
          alignItems="center"
          justifyContent="space-between">
          <Icon
            name={isFavorited ? 'heart' : 'heart-outline'}
            color={colors.text.active}
            size={20}
          />
          <Text weight="medium" lineHeight={21} ml={5} color="active">
            {isFavorited ? 'Remove Favorite' : 'Add Favorite'}
          </Text>
        </Container>
      </Button>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isFavorited, favLoading]);

  const onIncreaseBid = () => {
    const basePrice = lastestBid === 0 ? product.unitCost : lastestBid;
    setBidAmount((prev: number) => prev + basePrice * 0.1);
  };

  const onDecreaseBid = () => {
    const basePrice = lastestBid === 0 ? product.unitCost : lastestBid;
    if (bidAmount > basePrice * 1.1) {
      setBidAmount((prev: number) => prev - basePrice * 0.1);
    }
  };

  const bidProduct = () => {
    const basePrice = lastestBid === 0 ? product.unitCost : lastestBid;
    if (bidAmount < basePrice * 1.1) {
      Alert.alert('Error!', 'Incorrect Bid amount!', [
        {
          text: 'Close',
          style: 'cancel',
        },
      ]);
    }
    setCartLoading(true);
    bidMutation
      .mutateAsync({
        productId: product.productID,
        amount: bidAmount,
        userId: user.id,
      })
      .then(res => {
        setCartLoading(false);
        Toast.show('Your bid has been submitted!', {
          duration: Toast.durations.LONG,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
          delay: 0,
        });
      })
      .catch(error => {
        console.log(error);
        setCartLoading(false);
      });
  };

  const renderActions = () => {
    if (product.salesTypeId === 1) {
      return (
        <Container style={styles.cardLineView} backgroundColor="transparent">
          {renderFavoriteButton}
          <GradientButton
            style={{width: 160, height: 40, borderRadius: 5}}
            loading={cartLoading}
            onPress={addToCart}>
            <Container dir="row" backgroundColor="transparent">
              <MCIcon name="cart-outline" color={colors.text.white} size={16} />
              <Text color="white" ml={10}>
                Add to Cart
              </Text>
            </Container>
          </GradientButton>
        </Container>
      );
    } else if (product.salesTypeId === 2) {
      return (
        <>
          <Container
            dir="row"
            justifyContent="space-between"
            backgroundColor="transparent"
            alignItems="center">
            <Container
              pl={10}
              pb={15}
              pt={15}
              pr={10}
              style={{borderRadius: 10, width: '48%'}}>
              <Text>
                Current:{' '}
                <Text weight="semibold" color="primary">
                  {lastestBid > 0 ? `R ${lastestBid.toFixed(2)}` : 'No bid yet'}
                </Text>
              </Text>
            </Container>
            <Container
              pl={10}
              pb={15}
              pt={15}
              pr={10}
              dir="row"
              alignItems="center"
              style={{borderRadius: 10, width: '48%'}}>
              <Text>My Bid: </Text>
              <View style={{flex: 1, marginTop: -2}}>
                <Text
                  weight="semibold"
                  color="primary"
                  style={{position: 'absolute', left: 0, top: 4}}>
                  R
                </Text>
                <TextInput
                  value={bidAmount.toFixed(2)}
                  style={{
                    paddingLeft: 10,
                    flex: 1,
                    fontFamily: 'Poppins-Medium',
                  }}
                />
              </View>
            </Container>
          </Container>
          <Container
            dir="row"
            justifyContent="space-between"
            backgroundColor="transparent">
            <Card ml={1} pl={10} pr={10} pt={8} pb={8}>
              <TouchableOpacity
                style={styles.chartButtonView}
                onPress={onDecreaseBid}>
                <ChartDecrease />
                <Text size="xs" pl={5} lineHeight={21} color={'active'}>
                  Decrease bid by 10%
                </Text>
              </TouchableOpacity>
            </Card>
            <Card mr={1} pl={10} pr={10} pt={8} pb={8}>
              <TouchableOpacity
                style={styles.chartButtonView}
                onPress={onIncreaseBid}>
                <ChartIncrease />
                <Text size="xs" pl={5} lineHeight={21} color={'green'}>
                  Increase bid by 10%
                </Text>
              </TouchableOpacity>
            </Card>
          </Container>
          <Container
            dir="row"
            justifyContent="space-between"
            backgroundColor="transparent">
            {renderFavoriteButton}
            {bidAmount === 0 ? (
              <Button width={160} height={40}>
                <Container
                  backgroundColor="transparent"
                  dir="row"
                  alignItems="center"
                  justifyContent="space-between">
                  <BidLarge color="#E34757" />
                  <Text weight="medium" lineHeight={21} ml={10} color="active">
                    Bid Now
                  </Text>
                </Container>
              </Button>
            ) : (
              <GradientButton
                style={styles.gradientButton}
                disabled={bidAmount < lastestBid}
                onPress={bidProduct}>
                <Container dir="row" backgroundColor="transparent">
                  <BidLarge color="#ffffff" />
                  <Text color="white" ml={10} weight="medium" lineHeight={21}>
                    Bid Now
                  </Text>
                </Container>
              </GradientButton>
            )}
          </Container>
        </>
      );
    } else if (product.salesTypeId === 3) {
      return (
        <>
          <Container
            backgroundColor="transparent"
            dir="row"
            justifyContent="space-between"
            alignItems="center">
            <View>
              <Text ml={10}>Select Start Date</Text>
              <TouchableOpacity onPress={() => setOpenStartDatePicker(true)}>
                <Card
                  ml={1}
                  pt={10}
                  pb={10}
                  dir="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Text mr={25} color="primary" weight="medium">
                    {hireStartDate.format('DD.MM.YYYY')}
                  </Text>
                  <MCIcon name="calendar-blank" size={24} />
                </Card>
              </TouchableOpacity>
              <DatePicker
                modal
                mode="date"
                open={openStartDatePicker}
                date={hireStartDate.toDate()}
                minimumDate={new Date()}
                onConfirm={date => {
                  setOpenStartDatePicker(false);
                  setHireStartDate(moment(date));
                }}
                onCancel={() => {
                  setOpenStartDatePicker(false);
                }}
              />
            </View>
            <View>
              <Text ml={10}>Select End Date</Text>
              <TouchableOpacity onPress={() => setOpenEndDatePicker(true)}>
                <Card
                  pt={10}
                  pb={10}
                  mr={1}
                  dir="row"
                  justifyContent="space-between"
                  alignItems="center">
                  <Text mr={25} color="primary" weight="medium">
                    {hireEndDate.format('DD.MM.YYYY')}
                  </Text>
                  <MCIcon name="calendar-blank" size={24} />
                </Card>
              </TouchableOpacity>
              <DatePicker
                modal
                open={openEndDatePicker}
                mode="date"
                date={hireEndDate.toDate()}
                minimumDate={hireStartDate.toDate()}
                onConfirm={date => {
                  setOpenEndDatePicker(false);
                  setHireEndDate(moment(date));
                }}
                onCancel={() => {
                  setOpenEndDatePicker(false);
                }}
              />
            </View>
          </Container>
          <Container
            dir="row"
            alignItems="center"
            mt={10}
            backgroundColor="transparent">
            <Text mr={10}>Qty: </Text>
            <QuantityInput value={qty} onChange={setQty} />
          </Container>
          <Container mt={10} backgroundColor="transparent">
            <Text>
              Total Price to pay: {' '}
              <Text color="primary" weight="semibold" ml={20}>
                R{' '}
                {(
                  product.unitCost *
                  qty *
                  hireEndDate.diff(hireStartDate, 'd')
                ).toFixed(2)}
              </Text>
            </Text>
          </Container>
          <Container
            mt={10}
            backgroundColor="transparent"
            dir="row"
            alignItems="center"
            justifyContent="space-between">
            {renderFavoriteButton}
            <GradientButton
              style={{width: 160, height: 40, borderRadius: 5}}
              onPress={addToCart}>
              <Container dir="row" backgroundColor="transparent">
                <HireLarge />
                <Text color="white" ml={10} weight="medium" lineHeight={21}>
                  Hire Now
                </Text>
              </Container>
            </GradientButton>
          </Container>
        </>
      );
    }
  };

  return (
    <Container flex={1} backgroundColor={colors.appBackgroundColor}>
      <Container pt={10} pr={10} pl={10} style={styles.container}>
        <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
          <ImageWithPlaceholder
            style={styles.productImage}
            source={{uri: imagePath}}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Container mt={20} pl={10} pr={10}>
            <Text size="lg" lineHeight={24} color={'primary'}>
              {product.productName || product.specialName}
            </Text>
            {_renderSummary()}
            <TabView
              renderTabBar={props => (
                <TabBar
                  {...props}
                  style={{
                    backgroundColor: 'transparent',
                    borderBottomColor: colors.borderColor,
                    borderBottomWidth: 2,
                  }}
                  renderLabel={({route: _route, focused}) => (
                    <Container>
                      <Text
                        color={focused ? 'primary' : 'label'}
                        size="xs"
                        lineHeight={18}>
                        {_route.title}
                      </Text>
                      {focused && (
                        <View style={{position: 'absolute', bottom: -15}}>
                          <BottomBar />
                        </View>
                      )}
                    </Container>
                  )}
                  renderIndicator={() => {
                    return null;
                  }}
                />
              )}
              navigationState={{index: tabIndex, routes}}
              renderScene={renderScene}
              onIndexChange={setTabIndex}
              initialLayout={{width: layout.width, height: 400}}
              sceneContainerStyle={{width: layout.width, minHeight: 400}}
              style={{minHeight: 400}}
            />
          </Container>
          <Container
            pl={20}
            pr={20}
            pt={16}
            pb={16}
            mt={20}
            style={styles.container}
            backgroundColor={colors.appBackgroundColor}>
            {renderActions()}
          </Container>
        </KeyboardAwareScrollView>
      </Container>
      {(cartLoading || favLoading) && <Loading />}
    </Container>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    flex: 1,
    paddingBottom: 50,
  },
  productImage: {
    height: 225,
    width: '100%',
    borderRadius: 10,
    overflow: 'hidden',
  },
  productName: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
    color: '#333',
  },
  inLineTextView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 7,
  },
  bidInLineView: {
    height: 44,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.text.white,
    borderWidth: 1,
    borderColor: colors.borderColorFade,
    borderRadius: 8,
    padding: 8,
  },
  cardLineView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  chartButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gradientButton: {
    width: 160,
    height: 40,
    borderRadius: 5,
    marginTop: 5,
  },
});
