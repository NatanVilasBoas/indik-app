import React from "react";
import { View } from "react-native";
import {
  Container,
  Content,
  LabelText,
  LeftIconContainer,
  RedLabelText,
  RightIconContainer,
  SupportText,
} from "./styles";

interface BaseInputProps {
  children?: React.ReactNode;
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
  focused?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export default function BaseInputContainer({
  children,
  label,
  required,
  supportText,
  disabled = false,
  focused = false,
  leftIcon,
  rightIcon,
}: BaseInputProps) {
  return (
    <View>
      {label && (
        <LabelText>
          {label}
          {required && <RedLabelText> *</RedLabelText>}
        </LabelText>
      )}
      <Container disabled={disabled} focused={focused}>
        {leftIcon && <LeftIconContainer>{leftIcon}</LeftIconContainer>}
        <Content>{children}</Content>
        {rightIcon && <RightIconContainer>{rightIcon}</RightIconContainer>}
      </Container>
      {supportText && <SupportText>{supportText}</SupportText>}
    </View>
  );
}
