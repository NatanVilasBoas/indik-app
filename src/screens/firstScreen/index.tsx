import BaseInput from "@/components/BaseInput";
import theme from "@/shared/theme/theme";
import { View } from "react-native";
import { TextThemed } from "./styles";

export default function FirstScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.white,
      }}
    >
      <TextThemed>
        Edit screens/firstScreen/index.tsx to edit this screen.
      </TextThemed>
      <View style={{ width: "80%", marginTop: 20 }}>
        <BaseInput
          required
          label="Título"
          placeholder="Teste input container"
          supportText="Texto de suporte"
        />
      </View>
    </View>
  );
}
