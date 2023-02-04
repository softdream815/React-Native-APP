import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const Mail = () => (
  <Svg width={18} height={18} fill="none">
    <G clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#756569">
      <Path d="M2.455 3.167A.83.83 0 0 0 1.636 4v10c0 .456.37.833.819.833h13.09a.83.83 0 0 0 .819-.833V4a.83.83 0 0 0-.819-.833H2.455ZM0 4c0-1.377 1.103-2.5 2.455-2.5h13.09C16.897 1.5 18 2.623 18 4v10c0 1.377-1.103 2.5-2.455 2.5H2.455C1.103 16.5 0 15.377 0 14V4Z" />
      <Path d="M.148 3.522a.809.809 0 0 1 1.14-.205L9 8.817l7.713-5.5a.809.809 0 0 1 1.139.205c.26.377.17.897-.201 1.16l-8.182 5.834c-.282.2-.656.2-.938 0L.349 4.683a.843.843 0 0 1-.201-1.16Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Mail;
