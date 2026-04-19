import React, { useState } from "react";
import { TextInputProps, View } from "react-native";
import BaseInputContainer from "../BaseInputContainer";
import Icon from "../Icon";
import { StyledInput } from "./styles";

interface BasePasswordProps extends TextInputProps {
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
}

const BasePasswordInput = ({
  label,
  required,
  supportText,
  disabled,
  onChangeText,
  value,
  ...props
}: BasePasswordProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <BaseInputContainer
      label={label}
      required={required}
      supportText={supportText}
      disabled={disabled}
      focused={isFocused}
      rightIcon={
        <View>
          {showPassword ? (
            <Icon
              name="eyeOpen"
              onPress={() => setShowPassword(false)}
              color="black"
              size={18}
            />
          ) : (
            <Icon
              name="eyeClose"
              onPress={() => setShowPassword(true)}
              color="black"
              size={18}
            />
          )}
        </View>
      }
    >
      <StyledInput
        secureTextEntry={!showPassword}
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
};

export default BasePasswordInput;
