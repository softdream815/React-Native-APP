import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const BottomBar2 = () => (
  <Svg width={160} height={8} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m76.5 4 4-4 4 4H160v4H0V4h76.5Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={70}
        y1={8}
        x2={68.195}
        y2={-7.794}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default BottomBar2;
