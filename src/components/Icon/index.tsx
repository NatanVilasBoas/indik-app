import theme from "@/shared/theme/theme";
import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import { ArrowLeftIcon } from "../../../assets/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../../assets/icons/ArrowRightIcon";
import { ClearIcon } from "../../../assets/icons/ClearIcon";
import EyeCloseIcon from "../../../assets/icons/EyeCloseIcon";
import EyeOpenIcon from "../../../assets/icons/EyeOpenIcon";
import LinkIcon from "../../../assets/icons/LinkIcon";
import LockThinIcon from "../../../assets/icons/LockThinIcon";
import SearchIcon from "../../../assets/icons/SearchIcon";

const iconRegistry = {
  clear: ClearIcon,
  lockThin: LockThinIcon,
  arrowRight: ArrowRightIcon,
  arrowLeft: ArrowLeftIcon,
  eyeOpen: EyeOpenIcon,
  eyeClose: EyeCloseIcon,
  search: SearchIcon,
  link: LinkIcon,
};

export interface IconProps {
  name: IconName;
  color?: keyof typeof theme.colors;
  size?: number;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  testID?: string;
  strokeWidth?: string | number;
}

export interface IconBase {
  size?: number;
  color?: string;
  strokeWidth?: string | number;
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
  strokeWidth = 0.5,
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
          strokeWidth={strokeWidth}
          color={iconColor}
          size={size}
          style={style}
        />
      </Pressable>
    );
  }

  return (
    <View style={style}>
      <SVGIcon color={iconColor} size={size} strokeWidth={strokeWidth} />
    </View>
  );
}
