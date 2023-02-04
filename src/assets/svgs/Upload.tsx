import React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Upload = () => (
  <Svg width={20} height={20} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M19 17.875a1.125 1.125 0 1 0-2.25 0 1.125 1.125 0 0 0 2.25 0ZM14.5 19H5.453A4.453 4.453 0 0 1 1 14.547V5.453A4.453 4.453 0 0 1 5.453 1h9.094A4.453 4.453 0 0 1 19 5.453V14.5a1.125 1.125 0 0 1-2.25 0V5.453a2.202 2.202 0 0 0-2.202-2.203H5.453A2.202 2.202 0 0 0 3.25 5.452v9.095c0 1.217.986 2.203 2.203 2.203H14.5a1.125 1.125 0 0 1 0 2.25Zm-6.75-5.625h4.5a1.125 1.125 0 0 1 0 2.25h-4.5a1.125 1.125 0 0 1 0-2.25Zm3.375-5.16v2.91a1.125 1.125 0 0 1-2.25 0v-2.91l-.33.33a1.126 1.126 0 0 1-1.59-1.59l2.25-2.25a1.124 1.124 0 0 1 1.59 0l2.25 2.25a1.126 1.126 0 0 1-1.59 1.59l-.33-.33Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={1}
        y1={19}
        x2={19}
        y2={1}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Upload;
