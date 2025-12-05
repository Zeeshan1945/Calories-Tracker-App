import { useFonts } from "expo-font";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

import IntroSwiper from "../src/components/Onboarding/IntroSwiper";
import AnimatedSplash from "../src/components/Splash/AnimatedSplash";

export default function Index() {
  const router = useRouter();

  const [fontsLoaded] = useFonts({
    hmb: require("../assets/fonts/hmb.ttf"),
    hmb2: require("../assets/fonts/hmb2.ttf"),
    hmb7: require("../assets/fonts/hmb7.ttf"),
    hmb8: require("../assets/fonts/hmb8.ttf"),
  });

  const [splashFinished, setSplashFinished] = useState(false);

  const ready = fontsLoaded && splashFinished;

  return (
    <View style={{ flex: 1, backgroundColor: "#FF8A9B" }}>
      {!ready && (
        <AnimatedSplash onFinish={() => setSplashFinished(true)} />
      )}

      {ready && (
        <IntroSwiper onDone={() => router.push("/tabs/dashboard")} />
      )}
    </View>
  );
}
