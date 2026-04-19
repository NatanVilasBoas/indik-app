import React from "react";
import { View } from "react-native";
import BaseInput from "../BaseInput";
import Icon from "../Icon";

interface BaseSearchInputProps {
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const BaseSearchInput = ({
  label,
  required,
  supportText,
  disabled,
  placeholder,
  value,
  onChangeText,
}: BaseSearchInputProps) => {
  return (
    <BaseInput
      label={label}
      required={required}
      supportText={supportText}
      disabled={disabled}
      placeholder={placeholder}
      showLockIcon={false}
      value={value}
      onChangeText={onChangeText}
      leftIcon={
        <View>
          <Icon name="search" color="black" size={18} />
        </View>
      }
    />
  );
};

export default BaseSearchInput;
