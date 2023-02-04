import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const PinkTop = (): JSX.Element => (
  <Svg width={250} height={250} fill="none">
    <Path d="M0 0h250v125c0 69.036-55.964 125-125 125H0V0Z" fill="url(#a)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        y1={0}
        x2={138.125}
        y2={138.125}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFC9CF" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default PinkTop;
