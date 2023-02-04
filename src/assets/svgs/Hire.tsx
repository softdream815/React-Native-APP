import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from 'react-native-svg';

const Hire = () => (
  <Svg width={14} height={14} fill="none">
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m11.347 10.52 2.483 2.484a.583.583 0 0 1-.825.825l-2.483-2.483a6.388 6.388 0 0 1-4.105 1.488A6.424 6.424 0 0 1 0 6.417 6.424 6.424 0 0 1 6.417 0a6.424 6.424 0 0 1 6.417 6.417c0 1.56-.56 2.99-1.487 4.104Zm-4.93-9.353a5.256 5.256 0 0 0-5.25 5.25 5.256 5.256 0 0 0 5.25 5.25 5.256 5.256 0 0 0 5.25-5.25 5.256 5.256 0 0 0-5.25-5.25Zm1.75 3.5a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Zm-.881 0a.869.869 0 1 1-1.738 0 .869.869 0 0 1 1.738 0Zm-.869 1.75a2.722 2.722 0 0 0-2.722 2.722S4.72 7.488 6.417 7.451C8.115 7.415 9.14 9.14 9.14 9.14a2.722 2.722 0 0 0-2.722-2.722Z"
        fill="url(#b)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={11.813}
        y1={14}
        x2={-0.363}
        y2={0.324}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D93647" />
        <Stop offset={1} stopColor="#FE7585" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Hire;
