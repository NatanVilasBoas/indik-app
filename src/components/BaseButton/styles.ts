import { TouchableOpacity } from "react-native";
import { styled } from "styled-components/native";
import { ButtonVariant } from ".";

interface ContainerProps {
  variant: ButtonVariant;
  disabled?: boolean;
  iconOnly?: boolean;
}

export const Container = styled(TouchableOpacity)<ContainerProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;

  height: 48px;
  padding: ${({ iconOnly }) => (iconOnly ? "0px" : "0 16px")};

  border-radius: ${({ iconOnly }) => (iconOnly ? "24px" : "999px")};

  background-color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.greyLight;

    switch (variant) {
      case "primary":
        return theme.colors.black;
      case "secondary":
        return theme.colors.greyMedium;
      case "ghost":
      case "link":
        return "transparent";
      default:
        return theme.colors.black;
    }
  }};

  border-width: ${({ variant }) => (variant === "ghost" ? "2px" : "0px")};

  border-color: ${({ theme, variant }) =>
    variant === "ghost" ? theme.colors.black : "transparent"};

  width: ${({ iconOnly }) => (iconOnly ? "48px" : "auto")};
`;

interface LabelProps {
  variant: ButtonVariant;
  disabled?: boolean;
}

export const Label = styled.Text<LabelProps>`
  font-family: ${({ theme }) => theme.fonts.PlusJakartaSansMedium};
  font-size: ${({ theme }) => theme.fonts.sizeSmall}px;

  color: ${({ theme, variant, disabled }) => {
    if (disabled) return theme.colors.greyMedium;

    switch (variant) {
      case "primary":
        return theme.colors.white;
      case "secondary":
        return theme.colors.white;
      case "ghost":
      case "link":
        return theme.colors.black;
      default:
        return theme.colors.white;
    }
  }};

  ${({ variant }) =>
    variant === "link" &&
    `
    text-decoration: underline;
  `}
`;
