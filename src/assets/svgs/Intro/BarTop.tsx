import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const BarTop = (): JSX.Element => (
  <Svg width={1} height={100} fill="none">
    <Path fill="url(#a)" d="M0 0h1v100H0z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0.5}
        y1={0}
        x2={0.5}
        y2={100}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default BarTop;
