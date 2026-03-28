import React from "react";
import { TextInputProps } from "react-native";
import BaseInputContainer from "../BaseInputContainer";
import Icon from "../Icon";
import { IconContainer, StyledInput } from "./styles";

interface BaseInputProps extends TextInputProps {
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
  showClearIcon?: boolean;
}

export default function BaseInput({
  label,
  required,
  supportText,
  value,
  onChangeText,
  disabled = false,
  showClearIcon = true,
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
      disabled={disabled}
    >
      <StyledInput
        editable={!disabled}
        disabled={disabled}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
      <IconContainer>
        {showClearIcon && value !== "" && disabled === false && (
          <Icon name="clear" onPress={handleClearInput} />
        )}
        {disabled && <Icon name="lockBold" color="black" size={18} />}
      </IconContainer>
    </BaseInputContainer>
  );
}
