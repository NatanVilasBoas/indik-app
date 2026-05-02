import React from "react";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import Icon, { IconName } from "../Icon";
import { Container, Label } from "./styles";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "link";

interface BaseButtonProps extends TouchableOpacityProps {
  title?: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: IconName;
  rightIcon?: IconName;
  iconOnly?: boolean;
}

export default function BaseButton({
  title,
  variant = "primary",
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  iconOnly = false,
  ...props
}: BaseButtonProps) {
  const isDisabled = disabled || loading;
  const isWhiteColor =
    (variant === "primary" || variant === "secondary") && !isDisabled;

  return (
    <Container
      activeOpacity={0.7}
      variant={variant}
      disabled={isDisabled}
      iconOnly={iconOnly}
      {...props}
    >
      {loading ? (
        <ActivityIndicator />
      ) : (
        <>
          {leftIcon && !iconOnly && (
            <Icon
              name={leftIcon}
              color={isWhiteColor ? "white" : "black"}
              size={18}
            />
          )}

          {!iconOnly && title && (
            <Label variant={variant} disabled={isDisabled}>
              {title}
            </Label>
          )}

          {rightIcon && !iconOnly && (
            <Icon
              name={rightIcon}
              color={isWhiteColor ? "white" : "black"}
              size={18}
            />
          )}

          {iconOnly && leftIcon && (
            <Icon
              name={leftIcon}
              color={isWhiteColor ? "white" : "black"}
              size={18}
            />
          )}
        </>
      )}
    </Container>
  );
}
