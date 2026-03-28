import theme from "@/shared/theme/theme";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import { ArrowLeftIcon } from "../../../assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../../assets/icons/ArrowRightIcon";
import { ClearIcon } from "../../../assets/icons/ClearIcon";
import LockBoldIcon from "../../../assets/icons/LockBoldIcon";
import LockThinIcon from "../../../assets/icons/LockThinIcon";

const iconRegistry = {
  clear: ClearIcon,
  lockThin: LockThinIcon,
  lockBold: LockBoldIcon,
  arrowRight: ArrowRightIcon,
  arrowLeft: ArrowLeftIcon,
};

export interface IconProps {
  name: IconName;
  color?: keyof typeof theme.colors;
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  testID?: string;
  strokeWitdh?: string | number;
}

export interface IconBase {
  size?: number;
  color?: string;
  strokeWitdh?: string | number;
  style?: StyleProp<ViewStyle>;
}

type IconType = typeof iconRegistry;
export type IconName = keyof IconType;

export default function Icon({
  name,
  color,
  onPress,
  size,
  style,
  testID,
  strokeWitdh = 0.5,
}: IconProps) {
  const iconColor =
    theme.colors[color as keyof typeof theme.colors] || theme.colors.black;
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        hitSlop={10}
        testID={testID ?? "pressable-icon"}
      >
        <SVGIcon
          strokeWitdh={strokeWitdh}
          color={iconColor}
          size={size}
          style={style}
        />
      </Pressable>
    );
  }

  return (
    <View style={style}>
      <SVGIcon color={iconColor} size={size} strokeWitdh={strokeWitdh} />
    </View>
  );
}
