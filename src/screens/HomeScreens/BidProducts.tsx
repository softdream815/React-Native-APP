import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductList from '@app/components/products/ProductList';
import {connect} from 'react-redux';
import {RootStateType} from '@app/redux/store';
import {Container, GradientButton, Text} from '@app/components/templates';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const BidProducts = () => {
  const navigation = useNavigation();
  const _gotoMyBids = () => {
    navigation.navigate('MyBids');
  };
  return (
    <Container style={styles.container}>
      <ProductList salesType={2} showSpecial={false} />
      <View style={styles.floatingButtonContainer}>
        <GradientButton style={styles.floatingButton} onPress={_gotoMyBids}>
          <Container
            backgroundColor="transparent"
            dir="row"
            alignItems="center"
            justifyContent="center">
            <Icon name="eye" size={24} color="#fff" />
            <Text
              ml={10}
              color="white"
              size="sm"
              lineHeight={18}
              weight="semibold">
              View My Bids
            </Text>
          </Container>
        </GradientButton>
      </View>
    </Container>
  );
};
const mapStateToProps = (state: RootStateType) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(BidProducts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: '#ffffff',
  },
  floatingButtonContainer: {
    position: 'absolute',
    bottom: 80,
    right: 10,
  },
  floatingButton: {
    borderRadius: 20,
    paddingHorizontal: 15,
  },
});
