import * as React from 'react';
import Svg, {G, Rect, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const CheckedBoxFilled = () => (
  <Svg width={15} height={15} fill="none">
    <G filter="url(#a)">
      <Rect width={15} height={15} rx={2} fill="url(#b)" />
    </G>
    <Path d="m3 7.5 3 3L12.5 4" stroke="#fff" strokeLinecap="round" />
    <Defs>
      <LinearGradient
        id="b"
        x1={15}
        y1={15}
        x2={0}
        y2={0}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default CheckedBoxFilled;
