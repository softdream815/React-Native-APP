import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const Hire = () => (
  <Svg width={18} height={18} fill="none">
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m14.589 13.527 3.193 3.193a.75.75 0 1 1-1.061 1.06l-3.193-3.193a8.214 8.214 0 0 1-5.277 1.914C3.7 16.501 0 12.8 0 8.251 0 3.7 3.701 0 8.25 0c4.55 0 8.251 3.701 8.251 8.25 0 2.005-.719 3.845-1.912 5.277ZM8.25 1.5A6.758 6.758 0 0 0 1.5 8.25a6.758 6.758 0 0 0 6.75 6.751A6.758 6.758 0 0 0 15 8.251a6.758 6.758 0 0 0-6.75-6.75ZM10.5 6A2.25 2.25 0 1 1 6 6a2.25 2.25 0 0 1 4.5 0ZM9.367 6a1.117 1.117 0 1 1-2.233 0 1.117 1.117 0 0 1 2.233 0ZM8.251 8.25a3.5 3.5 0 0 0-3.5 3.5s1.317-2.123 3.5-2.17c2.182-.046 3.5 2.17 3.5 2.17a3.5 3.5 0 0 0-3.5-3.5Z"
        fill="#473B3E"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Hire;
