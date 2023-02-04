import * as ACTION_TYPES from '@app/redux/actions/types';
import {UserType} from '@app/types';
import {ProductDtType, PrdOrdersType} from '@app/generated/graphql-types';

export const set_user_info = (user: Partial<UserType>) => {
  return {
    type: ACTION_TYPES.UPDATE_USER_INFO,
    payload: user,
  };
};

// WishList
export const get_wishlist_from_server = (wishlist: ProductDtType) => {
  return {
    type: ACTION_TYPES.GET_FAVORITE_LIST,
    payload: wishlist,
  };
};

export const add_to_wishlist = (product: ProductDtType) => {
  return {
    type: ACTION_TYPES.ADD_PRODUCT_TO_WISHLIST,
    payload: product,
  };
};

export const remove_from_wishlist = (productId: number) => {
  return {
    type: ACTION_TYPES.REMOVE_PRODUCT_FROM_WISHLIST,
    payload: productId,
  };
};

// Cart
export const get_carlist_from_server = (cartlist: ProductDtType) => {
  return {
    type: ACTION_TYPES.GET_CART_LIST,
    payload: cartlist,
  };
};

export const add_to_cartlist = (product: ProductDtType) => {
  return {
    type: ACTION_TYPES.ADD_PRODUCT_TO_CART,
    payload: product,
  };
};

export const remove_from_cartlist = (productId: number) => {
  return {
    type: ACTION_TYPES.REMOVE_PRODUCT_FROM_CART,
    payload: productId,
  };
};

export const set_order_list = (
  orders: PrdOrdersType[],
  fromDate: Date | null,
  toDate: Date | null,
) => {
  return {
    type: ACTION_TYPES.SET_ORDER_LIST,
    payload: {
      orders,
      fromDate,
      toDate,
    },
  };
};
export const set_order_params = (
  fromDate: Date | null,
  toDate: Date | null,
) => {
  return {
    type: ACTION_TYPES.SET_ORDER_PARAMS,
    payload: {
      fromDate,
      toDate,
    },
  };
};
