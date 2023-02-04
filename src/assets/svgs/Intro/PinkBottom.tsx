import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const PinkBottom = () => (
  <Svg width={250} height={250} fill="none">
    <Path d="M250 250H0V125C0 55.964 55.964 0 125 0h125v250Z" fill="url(#a)" />
    <Defs>
      <LinearGradient
        id="a"
        x1={250}
        y1={250}
        x2={111.875}
        y2={111.875}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#FFC9CF" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default PinkBottom;
