import * as TYPES from '@app/redux/actions/types';
import {UserType} from '@app/types';

const initialState: UserType = {
  firstName: '',
  lastName: '',
  vGender: '',
  email: '',
  streetAddress: '',
  provinceID: '',
  provinceName: '',
  cityID: '',
  cityName: '',
  suburbID: '',
  suburbName: '',
  longitude: '',
  latitude: '',
  zipCode: '',
  userProfileImage: '',
  paymentUrl: '',
  packageID: '',
  token: '',
  tokenExpires: '',
  isLoggedIn: false,
  isGuest: false,
  id: 0,
  role: '',
};

function userReducer(
  state: UserType = initialState,
  action: {type: string; payload: Partial<UserType>},
) {
  switch (action.type) {
    case TYPES.UPDATE_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
