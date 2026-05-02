import Icon from "@/components/Icon";
import ThemeProvider from "@/providers/ThemeProvider";
import { Stack, useRouter } from "expo-router";

export default function RootLayout() {
  const router = useRouter();
  return (
    <ThemeProvider>
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: "transparent",
          },
          headerLeft: () =>
            router.canGoBack() ? (
              <Icon
                name="arrowLeft"
                color="black"
                onPress={() => router.back()}
              />
            ) : null,
        }}
      ></Stack>
    </ThemeProvider>
  );
}
