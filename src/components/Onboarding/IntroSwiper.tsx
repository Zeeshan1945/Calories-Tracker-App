import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeInDown, FadeInUp, FadeOut, Layout } from "react-native-reanimated";
import Swiper from "react-native-swiper";

const { width, height } = Dimensions.get("window");

const slides = [
  {
    title: "Hydrate",
    highlight: "Smarter",
    description: "Personalized hydration plans, daily reminders & streaks.",
    icon: "water-outline",
    background: "#ff8a9b",
    stats: { label: "Daily goal", value: "2.2L" },
  },
  {
    title: "Holistic",
    highlight: "Insights",
    description: "360° view across sleep, mood, nutrition & recovery in one place.",
    icon: "sparkles-outline",
    background: "#ffb68d",
    stats: { label: "Readiness score", value: "92" },
  },
  {
    title: "Stay",
    highlight: "Motivated",
    description: "Adaptive coaching, mindful breaks, and weekly wins to keep you going.",
    icon: "pulse-outline",
    background: "#c79adf",
    isLast: true,
  },
];

type IntroSwiperProps = {
  onDone?: () => void; // optional callback
};

export default function IntroSwiper({ onDone }: IntroSwiperProps) {
  // handle completion: set flag and call optional callback
  const handleDone = async () => {
    await AsyncStorage.setItem("onboardingCompleted", "true");
    if (onDone) onDone();
  };

  return (
    <Swiper
      loop={false}
      showsPagination
      dotColor="rgba(255,255,255,0.4)"
      activeDotColor="#fff"
      paginationStyle={{ bottom: 60 }}
      containerStyle={{ flex: 1 }}
    >
      {slides.map((slide) => (
        <Animated.View
          key={slide.title}
          entering={FadeInUp}
          exiting={FadeOut}
          layout={Layout.springify()}
          style={{
            flex: 1,
            width,
            height,
            padding: 24,
            justifyContent: "space-between",
            backgroundColor: slide.background,
          }}
        >
          {/* Header */}
          <View className="flex-row items-center justify-between">
            <View className="bg-white/20 rounded-full p-3">
              <Ionicons name={slide.icon as any} size={32} color="#fff" />
            </View>
            <Animated.Text
              entering={FadeInDown.delay(200).duration(800)}
              className="text-white/80 text-sm font-hmb2 tracking-[0.2em] uppercase"
            >
              Health Tracker
            </Animated.Text>
          </View>

          {/* Content */}
          <View className="gap-4">
            <View className="flex-row flex-wrap items-baseline">
              <Animated.Text
                entering={FadeInDown.delay(400).duration(1200)}
                className="text-white text-4xl font-hmb8 leading-tight"
              >
                {slide.title}{" "}
              </Animated.Text>
              <Text className="text-white/80 font-hmb8 text-4xl">{slide.highlight}</Text>
            </View>

            <Animated.Text
              entering={FadeInDown.delay(800).duration(1400)}
              className="text-white/90 text-base font-hmb2 leading-relaxed"
            >
              {slide.description}
            </Animated.Text>

            {slide.stats && (
              <Animated.View
                entering={FadeInUp.delay(1000).duration(1400)}
                className="bg-white/15 rounded-2xl px-4 py-3 w-40"
              >
                <Text className="text-white/70 text-xs uppercase font-hmb2 tracking-wide">
                  {slide.stats.label}
                </Text>
                <Text className="text-white text-2xl font-hmb2">{slide.stats.value}</Text>
              </Animated.View>
            )}
          </View>

          {/* Footer */}
          {slide.isLast ? (
            <TouchableOpacity
              onPress={handleDone}
              className="bg-white rounded-full py-4"
              activeOpacity={0.9}
            >
              <Text className="text-center text-[#ff6b7a] font-hmb7 text-base">
                Launch Dashboard
              </Text>
            </TouchableOpacity>
          ) : (
            <View className="flex-row gap-3 items-center">
              <Ionicons name="lock-open-outline" size={20} color="#fff" />
              <Text className="text-white/80 font-hmb2 text-sm">
                Swipe to unlock more features
              </Text>
            </View>
          )}
        </Animated.View>
      ))}
    </Swiper>
  );
}
