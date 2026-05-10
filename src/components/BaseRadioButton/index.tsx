import React from "react";
import { Container, Label, RadioCircle, SelectedCircle } from "./styles";

interface BaseRadioButtonProps {
  label?: string | React.ReactNode;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  disabled?: boolean;
}

const BaseRadioButton = ({
  label,
  value,
  onValueChange,
  disabled,
}: BaseRadioButtonProps) => {
  return (
    <Container
      disabled={disabled}
      onPress={() => onValueChange && onValueChange(!value)}
    >
      <RadioCircle selected={!!value} disabled={disabled}>
        {value && <SelectedCircle disabled={disabled} />}
      </RadioCircle>
      {typeof label === "string" ? (
        <Label disabled={disabled}>{label}</Label>
      ) : (
        label
      )}
    </Container>
  );
};

export default BaseRadioButton;
