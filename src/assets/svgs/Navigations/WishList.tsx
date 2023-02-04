import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const WishList = () => (
  <Svg width={18} height={18} fill="none">
    <G clipPath="url(#a)">
      <Path
        opacity={0.6}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 17.526C5.977 15.782.031 12 .031 6.356-.5 1.636 5.114-2.316 9 1.636c3.886-3.952 9.468-.093 8.969 4.72 0 5.153-5.946 9.427-8.969 11.171Z"
        fill="#B98185"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default WishList;
