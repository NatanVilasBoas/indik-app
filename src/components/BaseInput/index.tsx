import React from "react";
import { Button, TextInputProps } from "react-native";
import BaseInputContainer from "../BaseInputContainer";
import { StyledInput } from "./styles";

interface BaseInputProps extends TextInputProps {
  label?: string;
  required?: boolean;
  supportText?: string;
}

export default function BaseInput({
  label,
  required,
  supportText,
  value,
  onChangeText,
  ...props
}: BaseInputProps) {
  const handleClearInput = () => {
    if (onChangeText) {
      onChangeText("");
    }
  };

  return (
    <BaseInputContainer
      label={label}
      required={required}
      supportText={supportText}
    >
      <StyledInput value={value} onChangeText={onChangeText} {...props} />
      {value !== "" && onChangeText && (
        <Button title="Clear" onPress={handleClearInput} />
      )}
    </BaseInputContainer>
  );
}
