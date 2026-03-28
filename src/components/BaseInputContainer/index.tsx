import React from "react";
import { Container, LabelText, RedLabelText, SupportText } from "./styles";

interface BaseInputProps {
  children?: React.ReactNode;
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
}

export default function BaseInputContainer({
  children,
  label,
  required,
  supportText,
  disabled = false,
}: BaseInputProps) {
  return (
    <>
      {label && (
        <LabelText>
          {label}
          {required && <RedLabelText> *</RedLabelText>}
        </LabelText>
      )}
      <Container disabled={disabled}>{children}</Container>
      {supportText && <SupportText>{supportText}</SupportText>}
    </>
  );
}
