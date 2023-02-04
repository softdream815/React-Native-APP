import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ChartIncrease = (props) => (
  <Svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.333 2a.667.667 0 0 0 0 1.333h2.527l-4.958 7.293-2.764-2.764a.667.667 0 0 0-.943 0l-5 5a.667.667 0 1 0 .943.943l4.529-4.529 2.862 2.862a.667.667 0 0 0 1.022-.097l5.116-7.522v2.148a.667.667 0 1 0 1.333 0v-4A.667.667 0 0 0 15.333 2h-4Z"
        fill="#24CE09"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)

export default ChartIncrease