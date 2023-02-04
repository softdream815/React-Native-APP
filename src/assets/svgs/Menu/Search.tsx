import React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';

const Search = () => (
  <Svg width={18} height={18} fill="none">
    <G clipPath="url(#a)">
      <Path
        d="m12.706 11.957.42-.42a.53.53 0 0 1 .748 0l3.971 3.971a.53.53 0 0 1 0 .749l-1.588 1.588a.53.53 0 0 1-.749 0l-3.97-3.97a.53.53 0 0 1 0-.75l.42-.42-.598-.596a6.882 6.882 0 1 1 .749-.749l.597.597Zm-5.824.749a5.824 5.824 0 1 0 0-11.647 5.824 5.824 0 0 0 0 11.647Zm5.779.794 3.221 3.222.84-.84-3.222-3.221-.84.839ZM5.294 8.47a.53.53 0 1 1-1.059 0V6.883a.53.53 0 1 1 1.06 0v1.589Zm2.118 0a.53.53 0 1 1-1.059 0V4.236a.53.53 0 1 1 1.059 0v4.236Zm2.117 0a.53.53 0 1 1-1.058 0V5.825a.53.53 0 0 1 1.058 0V8.47Z"
        fill="#473B3E"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h18v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Search;
