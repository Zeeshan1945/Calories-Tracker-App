import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const nutritionalFacts = [
  { label: "Calories", value: "520", icon: "flame", color: "#ff9d7a" },
  { label: "Protein", value: "28g", icon: "drumstick-bite", color: "#bd9bff" },
  { label: "Carbs", value: "48g", icon: "leaf", color: "#ffd262" },
  { label: "Fat", value: "22g", icon: "nutrition", color: "#94e4c9" },
];

const mealInsights = [
  {
    title: "Preparation",
    description: "Grilled beef with fresh garden salad",
  },
  {
    title: "Ingredients",
    description: "Premium beef, mixed greens, tomatoes, olive oil",
  },
  {
    title: "Benefits",
    description: "High protein, rich in vitamins, balanced meal",
  },
];

const dailyProgress = [
  { label: "Calories", value: 520, total: 2000, color: "#ffb49b" },
  { label: "Protein", value: 28, total: 150, color: "#c4b1ff" },
  { label: "Carbs", value: 48, total: 250, color: "#ffe28d" },
];

export default function MealDetailScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  const photoUri = typeof params.photoUri === "string" ? params.photoUri : "";

  return (
    <View className="flex-1 bg-[#f7f7fa]">
      <ImageBackground
        source={
          photoUri && photoUri.length > 0
            ? { uri: photoUri }
            : require("../assets/images/blank.png")
        }
        className="h-[380px]"
      >
        <View className="flex-1 bg-black/30 px-5 pt-5 pb-6 justify-between">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              className="w-11 h-11 rounded-full bg-black/40 items-center justify-center border border-white/20"
              onPress={() => router.back()}
            >
              <Ionicons name="arrow-back" size={22} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity className="w-11 h-11 rounded-full bg-black/40 items-center justify-center border border-white/20">
              <Ionicons name="heart-outline" size={22} color="#fff" />
            </TouchableOpacity>
          </View>

          <View>
            <View className="flex-row items-center">
              {/* LEFT SIDE */}
              <View className="flex-1 pr-2">
                <View className="flex-row items-center gap-1">
                  <View className="px-2 py-1 rounded-full bg-white/20">
                    <Text className="text-white text-xs font-hmb2">
                      LUNCH
                    </Text>
                  </View>
                  <Text className="text-white/80 font-hmb2 text-xs">
                    Today • 12:30 PM
                  </Text>
                </View>

                <Text
                  className="text-white text-2xl font-hmb2 mt-2"
                  numberOfLines={2}
                >
                  Beef Steak and Salad
                </Text>
              </View>

              {/* RIGHT SIDE */}
              <View className="items-center ml-2">
                <Text className="text-white/80 font-hmb2 text-xs">Health Score</Text>
                <View className="w-12 h-12 rounded-full bg-white/15 items-center justify-center mt-1 border border-white/30">
                  <Text className="text-white text-lg font-hmb7">A+</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>

      <ScrollView
        className="flex-1 -mt-5"
        contentContainerStyle={{ paddingBottom: 30 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="mx-5 bg-white rounded-3xl px-6 py-5 shadow-sm shadow-black/5">
          <View className="flex-row items-center justify-between mb-5">
            <View>
              <Text className="text-[#6c6d7a] font-hmb2 uppercase text-xs tracking-[2px]">
                Nutritional Facts
              </Text>
              <Text className="text-2xl font-hmb7 text-[#1f1f2e] mt-1">
                Balanced meal
              </Text>
            </View>
            <TouchableOpacity className="px-4 py-2 rounded-2xl bg-[#f8f8fb]">
              <Text className="text-[#ff7557] font-hmb2 text-[10px]">
                Log Meal
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap justify-between">
            {nutritionalFacts.map((fact) => (
              <View
                key={fact.label}
                className="w-[48%] bg-[#f8f8fb] rounded-2xl p-4 mb-4"
              >
                <View
                  className="w-10 h-10 rounded-2xl items-center justify-center mb-3"
                  style={{ backgroundColor: fact.color + "22" }}
                >
                  <Ionicons
                    name={fact.icon as any}
                    size={20}
                    color={fact.color}
                  />
                </View>
                <Text className="text-2xl font-hmb2 text-[#1f1f2e]">
                  {fact.value}
                </Text>
                <Text className="text-[#8b8b9b] font-hmb2 mt-1">{fact.label}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="mx-5 mt-5 rounded-3xl p-5 bg-white shadow-sm shadow-black/5">
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="text-[#6c6d7a] font-hmb2 uppercase text-xs tracking-[2px]">
                Health Score
              </Text>
              <Text className="text-[#1f1f2e] text-xl font-hmb2 mt-1">
                Excellent choice
              </Text>
            </View>
            <View className="items-center">
              <Text className="text-[#ff7592] text-3xl font-hmb2">85</Text>
              <Text className="text-[#8b8b9b] text-xs font-hmb2">/100</Text>
            </View>
          </View>
          <View className="h-3 rounded-full bg-[#ffeaf0] overflow-hidden">
            <View className="h-3 rounded-full bg-[#ff77ac] w-[85%]" />
          </View>
        </View>

        <View className="mx-5 mt-5 rounded-3xl p-5 bg-white shadow-sm shadow-black/5">
          <Text className="text-[#1f1f2e] text-xl font-hmb7 mb-4">
            Meal Details
          </Text>
          {mealInsights.map((item, index) => (
            <View
              key={item.title}
              className={
                index !== mealInsights.length - 1
                  ? "pb-4 mb-4 border-b border-[#f1f1f5]"
                  : ""
              }
            >
              <Text className="text-[#8b8b9b] text-xs font-hmb2 uppercase tracking-[2px]">
                {item.title}
              </Text>
              <Text className="text-gray-600 text-[12px] font-hmb2 mt-1">
                {item.description}
              </Text>
            </View>
          ))}
        </View>

        <View className="mx-5 mt-5 rounded-3xl p-5 bg-white shadow-sm shadow-black/5">
          <Text className="text-[#1f1f2e] text-xl font-hmb7 mb-5">
            Daily Progress
          </Text>
          {dailyProgress.map((item, index) => {
            const percent = Math.min(1, item.value / item.total) * 100;
            return (
              <View
                key={item.label}
                className={index !== dailyProgress.length - 1 ? "mb-5" : ""}
              >
                <View className="flex-row items-center justify-between mb-2">
                  <Text className="text-[#8b8b9b] font-hmb2 text-sm">{item.label}</Text>
                  <Text className="text-[#1f1f2e] text-[12px] font-hmb2">
                    {item.value} / {item.total}
                  </Text>
                </View>
                <View className="h-3 rounded-full bg-[#f3f4f6] overflow-hidden">
                  <View
                    className="h-3 rounded-full"
                    style={{
                      width: `${percent}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </View>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}
