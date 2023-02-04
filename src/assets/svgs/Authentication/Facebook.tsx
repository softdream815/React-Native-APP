import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const Facebook = () => (
  <Svg width={25} height={25} fill="none">
    <G clipPath="url(#a)">
      <Path
        d="M9.13 5.197V8.64H6.605v4.208H9.13v12.508h5.178V12.85h3.476s.326-2.018.484-4.224h-3.938V5.746c0-.43.563-1.008 1.122-1.008h2.823V.356h-3.838C9 .356 9.13 4.57 9.13 5.197Z"
        fill="#3B92E9"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h25v25H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Facebook;
