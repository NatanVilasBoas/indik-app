import React from "react";
import BaseInputContainer from "../BaseInputContainer";
import { StyledInput } from "./styles";

interface BaseInputProps {
  placeholder?: string;
  label?: string;
  required?: boolean;
  supportText?: string;
}

export default function BaseInput({
  placeholder,
  label,
  required,
  supportText,
}: BaseInputProps) {
  return (
    <BaseInputContainer
      label={label}
      required={required}
      supportText={supportText}
    >
      <StyledInput placeholder={placeholder} />
    </BaseInputContainer>
  );
}
