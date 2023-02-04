import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const HireLarge = () => (
  <Svg width={20} height={20} fill="none">
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m16.21 15.03 3.547 3.547a.833.833 0 1 1-1.178 1.179l-3.548-3.548a9.126 9.126 0 0 1-5.864 2.127C4.112 18.335 0 14.222 0 9.167 0 4.112 4.112 0 9.167 0s9.168 4.112 9.168 9.167a9.125 9.125 0 0 1-2.125 5.863ZM9.167 1.667c-4.135 0-7.5 3.365-7.5 7.5 0 4.136 3.365 7.5 7.5 7.5 4.136 0 7.5-3.364 7.5-7.5 0-4.135-3.364-7.5-7.5-7.5Zm2.5 5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-1.259 0a1.24 1.24 0 1 1-2.482 0 1.24 1.24 0 0 1 2.482 0Zm-1.24 2.5a3.89 3.89 0 0 0-3.89 3.89s1.464-2.36 3.89-2.412c2.424-.052 3.888 2.411 3.888 2.411a3.89 3.89 0 0 0-3.889-3.889Z"
        fill="#fff"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default HireLarge;
