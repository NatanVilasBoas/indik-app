import React from "react";
import { Container, LabelText, RedLabelText, SupportText } from "./styles";

interface BaseInputProps {
  children?: React.ReactNode;
  label?: string;
  required?: boolean;
  supportText?: string;
}

export default function BaseInputContainer({
  children,
  label,
  required,
  supportText,
}: BaseInputProps) {
  return (
    <>
      {label && (
        <LabelText>
          {label}
          {required && <RedLabelText> *</RedLabelText>}
        </LabelText>
      )}
      <Container>{children}</Container>
      {supportText && <SupportText>{supportText}</SupportText>}
    </>
  );
}
