import React from 'react';
import Svg, {Path, Defs, RadialGradient, Stop} from 'react-native-svg';

const Divider = () => (
  <Svg width={290} height={1} fill="none">
    <Path fill="url(#a)" d="M0 0h290v1H0z" />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 .5 -145 0 145 .5)">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#D42E3F" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
)

export default Divider;
