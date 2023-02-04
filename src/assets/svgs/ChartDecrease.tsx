import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

const ChartDecrease = (props) => (
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
                d="M4.667 14a.667.667 0 0 0 0-1.333H2.14l4.958-7.293 2.764 2.764c.26.26.682.26.943 0l5-5a.667.667 0 1 0-.943-.943l-4.529 4.529-2.862-2.862a.667.667 0 0 0-1.022.096l-5.116 7.523V9.333a.667.667 0 1 0-1.333 0v4c0 .368.298.667.667.667h4Z"
                fill="#E04252"
            />
        </G>
        <Defs>
            <ClipPath id="a">
                <Path fill="#fff" d="M0 0h16v16H0z" />
            </ClipPath>
        </Defs>
    </Svg>
)

export default ChartDecrease
