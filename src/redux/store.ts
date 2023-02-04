import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from '@app/redux/reducers/UserReducer';
import wishlistReducer from './reducers/WishReducer';
import orderReducer from './reducers/OrderReducer';
import cartReducer from './reducers/CartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  wishlist: wishlistReducer,
  orders: orderReducer,
  carts: cartReducer,
});

export const Store = createStore(rootReducer, applyMiddleware(thunk));

export type RootStateType = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
