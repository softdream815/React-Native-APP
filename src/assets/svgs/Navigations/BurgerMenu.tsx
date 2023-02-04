import React from 'react';
import Svg, {Rect} from 'react-native-svg';

const BurgerMenu = () => (
  <Svg width={28} height={28} fill="none">
    <Rect x={2} y={9} width={24} height={2} rx={1} fill="#473B3E" />
    <Rect x={2} y={17} width={15} height={2} rx={1} fill="#473B3E" />
  </Svg>
)

export default BurgerMenu;
