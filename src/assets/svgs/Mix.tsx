import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';

const Mix = () => (
  <Svg width={18} height={18} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 1a.75.75 0 0 1 .75.75V7a.75.75 0 0 1-1.5 0V1.75A.75.75 0 0 1 3 1Zm-.75 9.75v4.5a.75.75 0 0 0 1.5 0v-4.5h1.5a.75.75 0 0 0 0-1.5H.75a.75.75 0 0 0 0 1.5h1.5Zm7.5-2.25a.75.75 0 0 0-1.5 0v6.75a.75.75 0 0 0 1.5 0V8.5ZM9 1a.75.75 0 0 1 .75.75v3h1.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5h1.5v-3A.75.75 0 0 1 9 1Zm6 9.75h2.25a.75.75 0 0 1 0 1.5h-1.5v3a.75.75 0 0 1-1.5 0v-3h-1.5a.75.75 0 0 1 0-1.5H15ZM15 1a.75.75 0 0 1 .75.75V8.5a.75.75 0 0 1-1.5 0V1.75A.75.75 0 0 1 15 1Z"
      fill="url(#a)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={18}
        y1={16}
        x2={3.246}
        y2={-1.705}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default Mix;
