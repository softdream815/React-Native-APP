import React from 'react';
import Svg, {
  G,
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const Bang = () => (
  <Svg width={80} height={80} fill="none">
    <G filter="url(#a)">
      <Circle cx={40} cy={30} r={20} fill="url(#b)" />
    </G>
    <G clipPath="url(#c)">
      <Path
        d="M40.001 20.476c-5.522 0-9.999 3.362-9.999 8.964a8.446 8.446 0 0 0 2.167 5.84 5.362 5.362 0 0 1-1.978 3.295.536.536 0 0 0 .322.941c1.578.056 4.01-.157 5.5-1.76 1.284.439 2.632.658 3.988.648 5.522 0 9.999-3.361 9.999-8.964 0-5.602-4.477-8.964-9.999-8.964Zm.833 12.326a.844.844 0 0 1-.244.594.83.83 0 0 1-1.178 0 .844.844 0 0 1-.244-.594V29.44c0-.223.087-.436.244-.594a.83.83 0 0 1 1.178 0 .844.844 0 0 1 .244.594v3.362Zm-.81-5.603a1.104 1.104 0 0 1-.788-.324 1.125 1.125 0 0 1-.008-1.585c.207-.21.49-.33.784-.332h.011c.295 0 .577.118.786.329a1.125 1.125 0 0 1 0 1.584c-.209.21-.491.328-.786.328Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={60}
        y1={50}
        x2={20}
        y2={10}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
      <ClipPath id="c">
        <Path fill="#fff" transform="translate(30 20)" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Bang;
