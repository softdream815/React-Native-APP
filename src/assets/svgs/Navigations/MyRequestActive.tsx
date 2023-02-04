import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const MyRequestActive = () => (
  <Svg width={18} height={18} fill="none">
    <G filter="url(#b)" clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 14.4V5.175h-6.3V9.9L9 8.1 6.3 9.9V5.175H0V14.4A3.6 3.6 0 0 0 3.6 18h10.8a3.6 3.6 0 0 0 3.6-3.6ZM16.946 2.546a3.6 3.6 0 0 1 .824 1.279H.23a3.6 3.6 0 0 1 .824-1.28l1.492-1.49A3.6 3.6 0 0 1 5.09 0h7.818a3.6 3.6 0 0 1 2.545 1.054l1.492 1.492Z"
        fill="url(#c)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={18}
        y1={18}
        x2={0}
        y2={0}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MyRequestActive;
