import React from 'react';
import {StyleSheet} from 'react-native';
import ProductList from '@app/components/products/ProductList';
import {connect} from 'react-redux';
import {RootStateType} from '@app/redux/store';
import {Container} from '@app/components/templates';

const PurchaseProducts = () => {
  return (
    <Container style={styles.container}>
      <ProductList salesType={1} showSpecial={false} />
    </Container>
  );
};

const mapStateToProps = (state: RootStateType) => ({
  user: state.user,
});

export default connect(mapStateToProps, null)(PurchaseProducts);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
