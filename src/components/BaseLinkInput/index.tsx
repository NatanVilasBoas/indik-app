import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import BaseInput from "../BaseInput";
import Icon from "../Icon";

interface BaseLinkInputProps {
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

const BaseLinkInput = ({
  label,
  required,
  supportText,
  disabled,
  placeholder,
  value,
  onChangeText,
}: BaseLinkInputProps) => {
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
        <LinearGradient
          colors={["#B0B0B0", "#FFFFFF"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: 16,
            width: 40,
            height: 46,
          }}
        >
          <Icon name="link" color="black" size={18} />
        </LinearGradient>
      }
    />
  );
};

export default BaseLinkInput;
