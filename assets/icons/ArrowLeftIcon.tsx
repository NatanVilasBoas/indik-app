import { IconBase } from "@/components/Icon";
import { Path, Svg } from "react-native-svg";

export function ArrowLeftIcon({ color = "black", size = 18 }: IconBase) {
  return (
    <Svg width={size} height={size} viewBox="0 0 14 12" fill="none">
      <Path
        d="M1.52825 5.90015H13.0997M6.24297 10.9001C6.24297 10.9001 1.10011 7.21765 1.10011 5.90015C1.10011 4.58265 6.24297 0.900146 6.24297 0.900146"
        stroke={color}
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
