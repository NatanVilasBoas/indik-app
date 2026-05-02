import theme from "@/shared/theme/theme";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback } from "react";
import BaseInput from "../BaseInput";
import { IconText } from "./styles";

interface BaseValueInputProps {
  label?: string;
  required?: boolean;
  supportText?: string;
  disabled?: boolean;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
}

function formatCurrency(value: string) {
  if (!value || value.replace(/\D/g, "") === "") return "";
  const numericValue = value.replace(/\D/g, "");
  const intValue = parseInt(numericValue, 10);
  const floatValue = intValue / 100;
  return floatValue
    .toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 2,
    })
    .replace(/^R\$\s?/, "");
}

const BaseValueInput = ({
  label,
  required,
  supportText,
  disabled,
  placeholder,
  value,
  onChangeText,
}: BaseValueInputProps) => {
  const handleChangeText = useCallback(
    (text: string) => {
      const numericValue = text.replace(/\D/g, "");
      onChangeText(numericValue);
    },
    [onChangeText],
  );

  return (
    <BaseInput
      label={label}
      required={required}
      supportText={supportText}
      disabled={disabled}
      placeholder={placeholder}
      showLockIcon={false}
      value={formatCurrency(value)}
      onChangeText={handleChangeText}
      keyboardType="numeric"
      inputMode="numeric"
      leftIcon={
        <LinearGradient
          colors={[
            theme.colors.greyLight,
            disabled ? theme.colors.greyLight2 : "#FFFFFF",
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{
            borderTopLeftRadius: 100,
            borderBottomLeftRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            width: 46,
            height: 46,
          }}
        >
          <IconText>R$</IconText>
        </LinearGradient>
      }
    />
  );
};

export default BaseValueInput;
