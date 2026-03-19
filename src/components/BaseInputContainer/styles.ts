import { styled } from "styled-components/native";

export const Container = styled.View`
  padding: 14px 12px;
  border-radius: 1000px;
  border-width: 1px;
  width: 100%;
  border-color: ${(props) => props.theme.colors.greyLight};
`;

export const LabelText = styled.Text`
  font-family: ${(props) => props.theme.fonts.PlusJakartaSansRegular};
  font-size: ${(props) => props.theme.fonts.sizeSmall}px;
  color: ${(props) => props.theme.colors.greyMedium};
  margin-bottom: 6px;
`;

export const RedLabelText = styled(LabelText)`
  color: ${(props) => props.theme.colors.redLight};
`;

export const SupportText = styled(LabelText)`
  font-size: ${(props) => props.theme.fonts.sizeTiny}px;
  margin-left: 12px;
  margin-top: 6px;
`;
