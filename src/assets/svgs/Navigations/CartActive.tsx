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

const CartActive = () => (
  <Svg width={18} height={18} fill="none">
    <G filter="url(#b)" clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.61 2.994a1.784 1.784 0 0 0-.627-.49 1.836 1.836 0 0 0-.784-.173H4.039L3.585.449a.581.581 0 0 0-.212-.323A.611.611 0 0 0 3 0H.6a.61.61 0 0 0-.424.17.574.574 0 0 0 0 .825.61.61 0 0 0 .424.17h1.925l2.12 8.757a1.815 1.815 0 0 0-1.199.584 1.714 1.714 0 0 0-.448 1.228c.02.45.22.876.555 1.187.336.311.783.484 1.247.482H15c.158 0 .31-.062.423-.17a.574.574 0 0 0 0-.825.609.609 0 0 0-.424-.17H4.8a.609.609 0 0 1-.424-.171.574.574 0 0 1 0-.824.609.609 0 0 1 .425-.171h10.128c.406.001.8-.132 1.119-.377.318-.245.541-.587.633-.97l1.271-5.246a1.692 1.692 0 0 0-.34-1.486ZM13.8 18c.993 0 1.799-.783 1.799-1.748 0-.966-.806-1.748-1.8-1.748s-1.8.782-1.8 1.748c0 .965.806 1.748 1.8 1.748ZM9 16.252C9 17.217 8.193 18 7.2 18c-.995 0-1.8-.783-1.8-1.748 0-.966.805-1.748 1.8-1.748.994 0 1.8.782 1.8 1.748Z"
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

export default CartActive;
