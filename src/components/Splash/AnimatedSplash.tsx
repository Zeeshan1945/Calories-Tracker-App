import * as SplashScreen from "expo-splash-screen";
import LottieView from "lottie-react-native";
import { useEffect } from "react";
import { Dimensions, View } from "react-native";

const { width, height } = Dimensions.get("window");

SplashScreen.preventAutoHideAsync();

export default function AnimatedSplash({ onFinish }: { onFinish: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 3000); // animation duration

    SplashScreen.hideAsync();
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="absolute inset-0 z-50 bg-[#ff7557] items-center justify-center">
      <LottieView
        source={require("../../../assets/lottie/splash.json")}
        autoPlay
        loop={false}
        style={{ width, height }}
      />
    </View>
  );
}
