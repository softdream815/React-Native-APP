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

const Home = () => (
  <Svg width={18} height={18} fill="none">
    <G filter="url(#b)" clipPath="url(#a)">
      <Path
        d="M18 6.97v9.018a2.02 2.02 0 0 1-.586 1.422c-.375.377-.884.59-1.414.59h-3.333c-.354 0-.693-.141-.943-.393a1.346 1.346 0 0 1-.39-.948v-3.69a.673.673 0 0 0-.667-.67H7.333a.665.665 0 0 0-.666.67v3.69c0 .355-.14.697-.39.948-.25.252-.59.393-.944.393H2c-.53 0-1.039-.213-1.414-.59A2.02 2.02 0 0 1 0 15.988V6.97a1.354 1.354 0 0 1 .647-1.152L8.314.191a1.327 1.327 0 0 1 1.372 0l7.667 5.628A1.344 1.344 0 0 1 18 6.971Z"
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

export default Home;
