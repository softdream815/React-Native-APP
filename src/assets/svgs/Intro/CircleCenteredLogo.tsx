import React from 'react';
import Svg, {Ellipse, Defs, LinearGradient, Stop} from 'react-native-svg';

const CircleCenteredLogo = () => (
  <Svg width={198} height={200} fill="none">
    <Ellipse
      opacity={0.15}
      cx={99.075}
      cy={100}
      rx={98.925}
      ry={100}
      fill="url(#a)"
    />
    <Ellipse
      opacity={0.15}
      cx={99.075}
      cy={100}
      rx={90.323}
      ry={91.398}
      fill="url(#b)"
    />
    <Ellipse
      opacity={0.15}
      cx={99.075}
      cy={100}
      rx={81.72}
      ry={82.796}
      fill="url(#c)"
    />
    <Ellipse
      opacity={0.15}
      cx={99.076}
      cy={100}
      rx={72.043}
      ry={73.118}
      fill="url(#d)"
    />
    <Ellipse
      opacity={0.15}
      cx={99.076}
      cy={100}
      rx={62.366}
      ry={63.441}
      fill="url(#e)"
    />
    <Ellipse
      opacity={0.15}
      cx={99.075}
      cy={100}
      rx={52.688}
      ry={53.763}
      fill="url(#f)"
    />
    <Ellipse
      opacity={0.15}
      cx={99.075}
      cy={100}
      rx={46.237}
      ry={47.312}
      fill="url(#g)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={198}
        y1={200}
        x2={-1.988}
        y2={2.162}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={189.397}
        y1={191.398}
        x2={6.614}
        y2={10.765}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={180.795}
        y1={182.796}
        x2={15.218}
        y2={19.369}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={171.119}
        y1={173.118}
        x2={24.899}
        y2={29.048}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={161.441}
        y1={163.441}
        x2={34.578}
        y2={38.728}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
      <LinearGradient
        id="f"
        x1={151.763}
        y1={153.763}
        x2={44.258}
        y2={48.409}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={145.312}
        y1={147.312}
        x2={50.713}
        y2={54.863}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#D52E3F" />
        <Stop offset={1} stopColor="#FF7786" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default CircleCenteredLogo;
