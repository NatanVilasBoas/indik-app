import { IconBase } from "@/components/Icon";
import React from "react";
import Svg, { Path } from "react-native-svg";

const EyeCloseIcon = ({ color = "black", size }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 22 10" fill="none">
      <Path
        d="M20.8999 0.900391C20.8999 0.900391 16.8999 6.90039 10.8999 6.90039C4.8999 6.90039 0.899902 0.900391 0.899902 0.900391M13.8999 6.40039L15.3999 8.90039M18.8999 3.90039L20.8999 5.90039M0.899902 5.90039L2.8999 3.90039M7.8999 6.40039L6.3999 8.90039"
        stroke={color}
        stroke-width="3.0"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default EyeCloseIcon;
