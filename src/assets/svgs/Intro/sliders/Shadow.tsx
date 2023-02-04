import React from 'react';
import Svg, {Ellipse, Defs, RadialGradient, Stop} from 'react-native-svg';

const Shadow = () => (
  <Svg width={375} height={67} fill="none">
    <Ellipse cx={187.5} cy={33.5} rx={187.5} ry={33.5} fill="url(#a)" />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 33.5 -187.5 0 187.5 33.5)">
        <Stop stopColor="#E0C7C9" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);

export default Shadow;
