import React, { useRef, useState } from "react";
import { NativeSyntheticEvent, TextInput } from "react-native";
import { Container, Input } from "./styles";

interface BaseTokenInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  length?: number;
  disabled?: boolean;
}

const DEFAULT_LENGTH = 6;

const BaseTokenInput = ({
  value,
  onChange,
  length = DEFAULT_LENGTH,
  disabled = false,
}: BaseTokenInputProps) => {
  const inputsRef = useRef<(TextInput | null)[]>([]);
  const [isAnyFocused, setIsAnyFocused] = useState(false);

  const focusInput = (idx: number) => {
    inputsRef.current[idx]?.focus();
  };

  const handleChange = (text: string, idx: number) => {
    const digits = text.replace(/\D/g, "").split("");

    const newValue = [...value];

    // 🧠 Caso colar código inteiro
    if (digits.length > 1) {
      digits.slice(0, length).forEach((digit, i) => {
        newValue[i] = digit;
      });
      onChange(newValue);
      focusInput(Math.min(digits.length, length - 1));
      return;
    }

    // 🧠 Caso digitar normalmente
    if (digits.length === 1) {
      newValue[idx] = digits[0];
      onChange(newValue);

      if (idx < length - 1) {
        focusInput(idx + 1);
      }
      return;
    }

    // 🧠 Caso apagar via teclado virtual (Android principalmente)
    newValue[idx] = "";
    onChange(newValue);
  };

  const handleKeyPress = (e: NativeSyntheticEvent<any>, idx: number) => {
    if (e.nativeEvent.key === "Backspace") {
      const newValue = [...value];

      if (newValue[idx]) {
        newValue[idx] = "";
        onChange(newValue);
      } else if (idx > 0) {
        focusInput(idx - 1);
      }
    }
  };

  return (
    <Container>
      {Array.from({ length }).map((_, idx) => (
        <Input
          key={idx}
          ref={(ref) => {
            inputsRef.current[idx] = ref;
          }}
          value={value[idx] || ""}
          isFocused={isAnyFocused}
          onFocus={() => setIsAnyFocused(true)}
          onBlur={() => {
            setTimeout(() => {
              const stillFocused = inputsRef.current.some((input) =>
                input?.isFocused?.(),
              );
              setIsAnyFocused(stillFocused);
            }, 10);
          }}
          onChangeText={(text) => handleChange(text, idx)}
          onKeyPress={(e) => handleKeyPress(e, idx)}
          keyboardType="number-pad"
          maxLength={length}
          editable={!disabled}
          disabled={disabled}
          selectTextOnFocus
          textAlign="center"
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
        />
      ))}
    </Container>
  );
};

export default BaseTokenInput;
