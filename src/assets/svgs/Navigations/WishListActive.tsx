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

const WishListActive = () => (
  <Svg width={18} height={18} fill="none">
    <G filter="url(#b)" clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.002 18C5.98 16.21.035 12.325.035 6.528c-.531-4.85 5.081-8.908 8.967-4.85 3.885-4.058 9.466-.095 8.967 4.85 0 5.292-5.945 9.681-8.967 11.472Z"
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

export default WishListActive;
