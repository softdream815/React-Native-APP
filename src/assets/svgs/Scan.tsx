import React from 'react';
import Svg, {G, Path, Defs, LinearGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Scan = () => (
  <Svg width={90} height={86} fill="none">
    <G filter="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.273 10.273h13.636v4.545h-9.09v9.091h-4.546V10.273Zm47.727 25H20v-4.546h50v4.546Zm-15.91-25h13.637v13.636h-4.545v-9.09H54.09v-4.546ZM22.274 55.727h13.636v-4.545h-9.09V42.09h-4.546v13.636Zm31.818 0h13.636V42.091h-4.545v9.09H54.09v4.546Z"
        fill="url(#b)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={70}
        y1={55.727}
        x2={24.751}
        y2={5.953}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Scan;
