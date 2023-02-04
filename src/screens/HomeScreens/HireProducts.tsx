import React from 'react';
import {StyleSheet, View} from 'react-native';
import ProductList from '@app/components/products/ProductList';
import {connect} from 'react-redux';
import {RootStateType} from '@app/redux/store';
import {Container, GradientButton, Text} from '@app/components/templates';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

const HireProducts = () => {
  const navigation = useNavigation();
  const _gotoMyHires = () => {
    navigation.navigate('MyHires');
  };
  return (
    <Container style={styles.container}>
      <ProductList salesType={3} showSpecial={false} />
      <View style={styles.floatingButtonContainer}>
        <GradientButton style={styles.floatingButton} onPress={_gotoMyHires}>
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
              View Hire
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

export default connect(mapStateToProps, null)(HireProducts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
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
