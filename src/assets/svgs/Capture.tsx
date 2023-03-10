import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const Capture = () => (
  <Svg width={20} height={20} fill="none">
    <G clipPath="url(#a)" fillRule="evenodd" clipRule="evenodd" fill="#D52E3F">
      <Path d="M0 14.286v4.524A1.19 1.19 0 0 0 1.19 20h4.524a.476.476 0 0 0 0-.952H1.19a.24.24 0 0 1-.168-.07.24.24 0 0 1-.07-.169v-4.523a.476.476 0 0 0-.952 0ZM14.286 20h4.524A1.19 1.19 0 0 0 20 18.81v-4.524a.476.476 0 0 0-.952 0v4.524a.24.24 0 0 1-.07.168.24.24 0 0 1-.169.07h-4.523a.476.476 0 0 0 0 .952ZM20 5.714V1.19A1.19 1.19 0 0 0 18.81 0h-4.524a.476.476 0 0 0 0 .952h4.524a.24.24 0 0 1 .168.07.24.24 0 0 1 .07.168v4.524a.476.476 0 0 0 .952 0ZM5.714 0H1.19A1.19 1.19 0 0 0 0 1.19v4.524a.476.476 0 0 0 .952 0V1.19a.24.24 0 0 1 .07-.168.24.24 0 0 1 .168-.07h4.524a.476.476 0 0 0 0-.952ZM15.017 7.143h-1.443a.239.239 0 0 1-.198-.106l-.846-1.269a1.19 1.19 0 0 0-.99-.53H8.495c-.398 0-.77.2-.99.53l-.846 1.269a.239.239 0 0 1-.199.106H5.017a1.19 1.19 0 0 0-1.19 1.19v5.238c0 .658.533 1.19 1.19 1.19h10a1.19 1.19 0 0 0 1.19-1.19V8.333a1.19 1.19 0 0 0-1.19-1.19Zm-5 .952a2.382 2.382 0 1 0 .002 4.764 2.382 2.382 0 0 0-.002-4.764Zm0 .953a1.43 1.43 0 1 1 0 2.858 1.43 1.43 0 0 1 0-2.858Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h20v20H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Capture;
