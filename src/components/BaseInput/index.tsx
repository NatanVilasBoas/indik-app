import React, { useState } from "react";
import { TextInputProps } from "react-native";
import BaseInputContainer from "../BaseInputContainer";
import Icon from "../Icon";
import { IconContainer, StyledInput } from "./styles";

interface BaseInputProps extends TextInputProps {
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
}

export default function BaseInput({
  label,
  required,
  supportText,
  value,
  onChangeText,
  disabled = false,
  ...props
}: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);

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
      disabled={disabled}
    >
      <StyledInput
        editable={!disabled}
        disabled={disabled}
        value={value}
        onChangeText={onChangeText}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
      />
      <IconContainer>
        {value !== "" && disabled === false && isFocused && (
          <Icon name="clear" onPress={handleClearInput} />
        )}
        {disabled && <Icon name="lockThin" color="black" size={18} />}
      </IconContainer>
    </BaseInputContainer>
  );
}
