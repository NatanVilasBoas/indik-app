import { IconBase } from "@/components/Icon";
import { Path, Svg } from "react-native-svg";

export function ArrowRightIcon({ color = "black", size = 18 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 12" fill="none">
      <Path
        d="M12.4718 5.90015H0.900391M7.75753 10.9001C7.75753 10.9001 12.9004 7.21765 12.9004 5.90015C12.9004 4.58265 7.75753 0.900146 7.75753 0.900146"
        stroke={color}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
