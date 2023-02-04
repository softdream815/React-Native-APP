import React from 'react';
import Svg, {G, Rect} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */

const UnCheckedBox = () => (
  <Svg width={16} height={16} fill="none">
    <G filter="url(#a)">
      <Rect width={16} height={16} rx={2} fill="#FFF6F7" />
    </G>
    <Rect x={0.5} y={0.5} width={15} height={15} rx={1.5} stroke="#F7CED2" />
  </Svg>
);

export default UnCheckedBox;
