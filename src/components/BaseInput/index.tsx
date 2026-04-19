import React, { useState } from "react";
import { TextInputProps } from "react-native";
import BaseInputContainer from "../BaseInputContainer";
import Icon from "../Icon";
import { StyledInput } from "./styles";

interface BaseInputProps extends TextInputProps {
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
  showLockIcon?: boolean;
  leftIcon?: React.ReactNode;
}

export default function BaseInput({
  label,
  required,
  supportText,
  value,
  onChangeText,
  disabled = false,
  leftIcon,
  showLockIcon = true,
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
      focused={isFocused}
      leftIcon={leftIcon}
      rightIcon={
        <>
          {value !== "" && disabled === false && isFocused && (
            <Icon name="clear" onPress={handleClearInput} />
          )}
          {disabled && showLockIcon && (
            <Icon name="lockThin" color="black" size={18} />
          )}
        </>
      }
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
    </BaseInputContainer>
  );
}
