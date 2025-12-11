import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import "../global.css";

export default function RootLayout() {
  const theme = useColorScheme(); // "light" or "dark"

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style={theme === "dark" ? "light" : "dark"} backgroundColor={theme === "dark" ? "#000" : "#fff"} />
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
