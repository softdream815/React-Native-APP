import * as React from 'react';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const CheckBoxCircle = (props) => (
  <Svg width={15} height={15} fill="none">
    <G filter="url(#a)">
      <Rect width={15} height={15} rx={7.5} fill="#F9C3C9" />
    </G>
    <Path d="M4 7.692 6.21 10 11 5" stroke="#D93647" strokeLinecap="round" />
    <Defs></Defs>
  </Svg>
);

export default CheckBoxCircle;
