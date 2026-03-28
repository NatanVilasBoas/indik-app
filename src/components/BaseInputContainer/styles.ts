import { styled } from "styled-components/native";

interface ContainerProps {
  disabled?: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  justify-content: space-between;
  padding: 14px 12px;
  border-radius: 1000px;
  border-width: 2px;
  width: 100%;
  border-color: ${(props) => props.theme.colors.greyLight};
  background-color: ${(props) =>
    props.disabled ? props.theme.colors.greyLight2 : "transparent"};
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
