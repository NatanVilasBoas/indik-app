import BaseButton from "@/components/BaseButton";
import theme from "@/shared/theme/theme";
import { useRouter } from "expo-router";
import { View } from "react-native";

export default function FirstScreen() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.colors.white,
      }}
    >
      <View style={{ width: "80%", marginTop: 20, gap: 16 }}>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <BaseButton
            variant="primary"
            title="Button"
            onPress={() => router.push("/login")}
          />
        </View>
      </View>
    </View>
  );
}
