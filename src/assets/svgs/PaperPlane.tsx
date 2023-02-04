import React from 'react';
import Svg, {Path} from 'react-native-svg';

const PaperPlane = () => (
  <Svg width={22} height={22} fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M21.997.923a1 1 0 0 0-1.35-.859L.67 7.056a1 1 0 0 0-.076 1.858l8.648 3.844 3.844 8.648a1 1 0 0 0 1.858-.076l6.993-19.98c.051-.137.071-.283.06-.427Zm-4.803 2.469L3.711 8.11l6.068 2.696 7.415-7.415Zm-6.001 8.83 7.416-7.416-4.72 13.483-2.696-6.068Z"
      fill="#DB3A4A"
    />
  </Svg>
);

export default PaperPlane;
