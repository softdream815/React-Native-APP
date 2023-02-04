import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const MyRequest = () => (
  <Svg width={18} height={18} fill="none">
    <G clipPath="url(#a)">
      <Path
        opacity={0.6}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 14.4V5.175h-6.3V9.9L9 8.1 6.3 9.9V5.175H0V14.4A3.6 3.6 0 0 0 3.6 18h10.8a3.6 3.6 0 0 0 3.6-3.6ZM16.946 2.546a3.6 3.6 0 0 1 .824 1.279H.23a3.6 3.6 0 0 1 .824-1.28l1.492-1.49A3.6 3.6 0 0 1 5.09 0h7.818a3.6 3.6 0 0 1 2.545 1.054l1.492 1.492Z"
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

export default MyRequest;
