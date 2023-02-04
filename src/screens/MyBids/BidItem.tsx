import React, {useState, useMemo} from 'react';
import {StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import {MstBusinessUserDtoType} from '@app/generated/graphql-types';
import {
  Container,
  Text,
  Button,
  ImageWithPlaceholder,
  Card,
  GradientButton,
} from '@app/components/templates';
import colors from '@app/contants/colors';
import {IMAGE_PREFIX} from '@env';
import ChartDecrease from '@app/assets/svgs/ChartDecrease';
import ChartIncrease from '@app/assets/svgs/ChartIncrease';
import BidLarge from '@app/assets/svgs/BidLarge';
import {useSelector, useDispatch} from 'react-redux';
import {useBidOnProductMutation} from '@app/hooks/useBidOnProductMutation';
import {useAddFavoriteProduct} from '@app/screens/WishScreens/hooks/useAddFavoriteProduct';
import {RootStateType, ProductType} from '@app/types';
import {
  add_to_wishlist,
  remove_from_wishlist,
} from '@app/redux/actions/actions';
import moment from 'moment';
import Toast from 'react-native-root-toast';
import Icon from 'react-native-vector-icons/Ionicons';

type BidItemPropsType = {
  bidItem: MstBusinessUserDtoType;
};

const BidItem = ({bidItem}: BidItemPropsType) => {
  const onDecreaseBid = () => {};
  const onIncreaseBid = () => {};
  const dispatch = useDispatch();
  const addFavoriteMutation = useAddFavoriteProduct();
  const user = useSelector((state: RootStateType) => state.user);
  const [favLoading, setFavLoading] = useState(false);
  const [bidAmount, setBidAmount] = useState(0);
  const bidMutation = useBidOnProductMutation();
  const wishlist = useSelector(
    (state: RootStateType) => state.wishlist.products,
  );
  const isFavorited: boolean = !!wishlist.find(
    (wishItem: ProductType) => wishItem.productID === bidItem.productID,
  );

  const addToFavourites = async () => {
    setFavLoading(true);
    if (isFavorited) {
      dispatch(remove_from_wishlist(bidItem.productID ?? 0));
    } else {
      const result = await addFavoriteMutation.mutateAsync({
        productId: bidItem.productID,
        userId: user.id,
        createDate: moment().format(),
      });
      console.log(result);
      // dispatch(add_to_wishlist(product));
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

  return (
    <Container
      pl={5}
      pt={5}
      pb={5}
      pr={5}
      mb={10}
      backgroundColor={colors.activeBackgroundColor}
      style={{borderRadius: 10}}>
      <ImageWithPlaceholder
        source={{uri: `${IMAGE_PREFIX}${bidItem.userProfileImage}`}}
        style={{width: '100%', height: 200}}
        resizeMode="contain"
      />
      <Container
        dir="row"
        mt={10}
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
              {/* R {lastestBid.toFixed(2)} */}
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
          <Container style={{flex: 1, marginTop: -2}}>
            <Text
              weight="semibold"
              color="primary"
              style={{position: 'absolute', left: 0, top: 2}}>
              R
            </Text>
            <TextInput
              // value={bidAmount.toFixed(2)}
              style={{
                paddingLeft: 10,
                flex: 1,
              }}
            />
          </Container>
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
            // disabled={bidAmount < lastestBid}
            // onPress={bidProduct}
            >
            <Container dir="row" backgroundColor="transparent">
              <BidLarge color="#ffffff" />
              <Text color="white" ml={10} weight="medium" lineHeight={21}>
                Bid Now
              </Text>
            </Container>
          </GradientButton>
        )}
      </Container>
    </Container>
  );
};

export default BidItem;

const styles = StyleSheet.create({
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