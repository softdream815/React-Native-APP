import {StackScreenProps} from '@react-navigation/stack';

export type TapBarParamList = {
  All: {
    salesTypeId: number;
  };
  Buy: {
    salesTypeId: number;
  };
  Bid: {
    salesTypeId: number;
  };
  Hire: {
    salesTypeId: number;
  };
};

export type ScreenProps = StackScreenProps<TapBarParamList, 'All'>;
