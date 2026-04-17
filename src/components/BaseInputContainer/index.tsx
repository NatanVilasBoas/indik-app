import React from "react";
import { Container, LabelText, RedLabelText, SupportText } from "./styles";

interface BaseInputProps {
  children?: React.ReactNode;
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
  focused?: boolean;
}

export default function BaseInputContainer({
  children,
  label,
  required,
  supportText,
  disabled = false,
  focused = false,
}: BaseInputProps) {
  return (
    <>
      {label && (
        <LabelText>
          {label}
          {required && <RedLabelText> *</RedLabelText>}
        </LabelText>
      )}
      <Container disabled={disabled} focused={focused}>
        {children}
      </Container>
      {supportText && <SupportText>{supportText}</SupportText>}
    </>
  );
}
