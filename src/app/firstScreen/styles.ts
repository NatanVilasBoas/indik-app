import { Text } from "react-native";
import { styled } from "styled-components/native";

export const TextThemed = styled(Text)`
  font-family: ${(props) => props.theme.fonts.DMSansSemiBold};
`;
