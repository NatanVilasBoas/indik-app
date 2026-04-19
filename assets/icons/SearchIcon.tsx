import { IconBase } from "@/components/Icon";
import React from "react";
import Svg, { Path } from "react-native-svg";

const SearchIcon = ({ color = "black", size }: IconBase) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 18 18" fill="none">
      <Path
        d="M11.6755 11.6812L16.75 16.75M11.6755 11.6812C10.4753 12.882 8.84739 13.5567 7.15 13.5567C5.45261 13.5567 3.82475 12.882 2.62452 11.6812C1.42428 10.4803 0.75 8.8516 0.75 7.15333C0.75 5.45506 1.42428 3.82635 2.62452 2.62549C3.82475 1.42464 5.45261 0.75 7.15 0.75C8.84739 0.75 10.4753 1.42464 11.6755 2.62549C12.8757 3.82635 13.55 5.45506 13.55 7.15333C13.55 8.8516 12.8757 10.4803 11.6755 11.6812Z"
        stroke={color}
        strokeWidth="1.5"
      />
    </Svg>
  );
};

export default SearchIcon;
