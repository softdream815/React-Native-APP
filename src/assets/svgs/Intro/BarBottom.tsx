import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const BarBottom = () => (
  <Svg width={1} height={150} fill="none">
    <Path fill="url(#a)" d="M0 0h1v150H0z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={150}
        x2={1}
        y2={0}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default BarBottom;
