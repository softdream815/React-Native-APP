import React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

const ChevronBack = () => (
  <Svg width={28} height={28} fill="none">
    <Rect width={28} height={28} rx={5} fill="#fff" fillOpacity={0.01} />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.865 5.34a1.174 1.174 0 0 0-1.653 0L9 13.5l8.212 8.16a1.174 1.174 0 0 0 1.653 0 1.164 1.164 0 0 0 0-1.653L12.316 13.5l6.55-6.507a1.164 1.164 0 0 0 0-1.652Z"
      fill="#473B3E"
    />
  </Svg>
);

export default ChevronBack;
