import { useFonts } from "expo-font";
import { Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    DMSansBold: require("../../assets/fonts/Dm_Sans/DMSans-Bold.ttf"),
    DMSansExtraBold: require("../../assets/fonts/Dm_Sans/DMSans-ExtraBold.ttf"),
    DMSansExtraLight: require("../../assets/fonts/Dm_Sans/DMSans-ExtraLight.ttf"),
    DMSansLight: require("../../assets/fonts/Dm_Sans/DMSans-Light.ttf"),
    DMSansMedium: require("../../assets/fonts/Dm_Sans/DMSans-Medium.ttf"),
    DMSansRegular: require("../../assets/fonts/Dm_Sans/DMSans-Regular.ttf"),
    DMSansSemiBold: require("../../assets/fonts/Dm_Sans/DMSans-SemiBold.ttf"),
    DMSansThin: require("../../assets/fonts/Dm_Sans/DMSans-Thin.ttf"),
    PlusJakartaSansBold: require("../../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Bold.ttf"),
    PlusJakartaSansExtraBold: require("../../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-ExtraBold.ttf"),
    PlusJakartaSansExtraLight: require("../../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-ExtraLight.ttf"),
    PlusJakartaSansLight: require("../../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Light.ttf"),
    PlusJakartaSansMedium: require("../../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Medium.ttf"),
    PlusJakartaSansRegular: require("../../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-Regular.ttf"),
    PlusJakartaSansSemiBold: require("../../assets/fonts/Plus_Jakarta_Sans/PlusJakartaSans-SemiBold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
