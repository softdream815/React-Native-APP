import * as TYPES from '@app/redux/actions/types';

const initialState = {
  orders: [],
  fromData: null,
  toDate: null,
};

function orderReducer(state = initialState, action: any) {
  switch (action.type) {
    case TYPES.SET_ORDER_LIST:
      return {
        orders: action.payload.orders ?? [],
        fromDate: action.payload.fromDate,
        toDate: action.payload.toDate,
      };
    case TYPES.SET_ORDER_PARAMS:
      return {
        fromDate: action.payload.fromDate,
        toDate: action.payload.toDate,
        orders: state.orders,
      };
    default:
      return state;
  }
}

export default orderReducer;
