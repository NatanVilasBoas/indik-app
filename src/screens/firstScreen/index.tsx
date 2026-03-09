import { View } from "react-native";
import { TextThemed } from "./styles";

export default function FirstScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextThemed>
        Edit screens/firstScreen/index.tsx to edit this screen.
      </TextThemed>
    </View>
  );
}
