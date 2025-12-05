import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

type MacroLabel = "Protein" | "Carbs" | "Fat" | "Water";

type Macro = {
  id: string;
  label: MacroLabel;
  color: string;
  progressColor: string;
  value: number;
  total: number;
  unit: string;
  subtitle: string;
};

type Meal = {
  id: string;
  type: string;
  time: string;
  title: string;
  calories: number;
  protein: number;
  image: string;
  border: string;
  bg: string;
};

const macros: Macro[] = [
  {
    id: "protein",
    label: "Protein",
    color: "#7f3dff",
    progressColor: "#9e6dff",
    value: 68,
    total: 120,
    unit: "g",
    subtitle: "57% of goal",
  },
  {
    id: "carbs",
    label: "Carbs",
    color: "#ff8b00",
    progressColor: "#ffb347",
    value: 142,
    total: 200,
    unit: "g",
    subtitle: "71% of goal",
  },
  {
    id: "fat",
    label: "Fat",
    color: "#22c55e",
    progressColor: "#6ee7b7",
    value: 38,
    total: 65,
    unit: "g",
    subtitle: "58% of goal",
  },
  {
    id: "water",
    label: "Water",
    color: "#0ea5e9",
    progressColor: "#38bdf8",
    value: 1.8,
    total: 2.5,
    unit: "L",
    subtitle: "72% of goal",
  },
];

// Icon mapping
const macroIcons: { [key in "Protein" | "Carbs" | "Fat" | "Water"]: string } = {
  Protein: "🥩",
  Carbs: "🍞",
  Fat: "🥑",
  Water: "💧"
};

const meals: Meal[] = [
  {
    id: "breakfast",
    type: "BREAKFAST",
    time: "8:30 AM",
    title: "Avocado Toast & Eggs",
    calories: 387,
    protein: 18,
    image:
      "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=600&q=60",
    border: "border-[#fcd7c4]",
    bg: "bg-[#fff5ef]",
  },
  {
    id: "lunch",
    type: "LUNCH",
    time: "1:15 PM",
    title: "Grilled Chicken Salad",
    calories: 425,
    protein: 35,
    image:
      "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=600&q=60",
    border: "border-[#cde6d5]",
    bg: "bg-[#f3fff6]",
  },
  {
    id: "snack",
    type: "SNACK",
    time: "4:00 PM",
    title: "Greek Yogurt & Berries",
    calories: 186,
    protein: 12,
    image:
      "https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=600&q=60",
    border: "border-[#e8d5ff]",
    bg: "bg-[#fbf7ff]",
  },
];

export default function DashboardScreen() {
  const dailyGoal = 2000;
  const consumed = 1153;
  const burned = 320;
  const net = consumed - burned;
  const progress = Math.min(1, net / dailyGoal);
  const percentage = Math.round(progress * 100);

  return (
    <View className="flex-1 bg-[#f7f7fa]">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View className="bg-[#ff7557] pt-5 pb-10 px-6 rounded-b-[32px] shadow-lg shadow-black/10">
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center gap-4">
              <View className="w-12 h-12 bg-white/20 rounded-2xl items-center justify-center overflow-hidden">
                <Image
                  source={{
                    uri: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=60",
                  }}
                  className="w-full h-full"
                  resizeMode="cover"
                />
              </View>
              <View>
                <Text className="text-white/70 text-xs font-hmb2 tracking-widest">
                  WELCOME BACK
                </Text>
                <Text className="text-white text-2xl font-hmb7">
                  Sarah Johnson
                </Text>
              </View>
            </View>
            <View className="w-11 h-11 bg-white rounded-full items-center justify-center shadow-sm">
              <Text className="text-[#ff7557] text-lg">🔔</Text>
            </View>
          </View>

          <View className="bg-white mt-8 rounded-3xl p-5 flex-row items-center justify-between">
            <View className="flex-1">
              <Text className="text-[#a0a0b0] uppercase font-hmb2 tracking-widest text-xs">
                Today&apos;s Progress
              </Text>
              <View className="flex-row items-end gap-1 mt-3">
                <Text className="text-4xl font-hmb7 text-[#ff7557]">
                  {dailyGoal - net}
                </Text>
                <Text className="text-base font-hmb2 text-[12px] text-[#a0a0b0] mb-1">cal left</Text>
              </View>
              <Text className="text-[#a0a0b0] text-[12px] font-hmb2 mt-1">
                of {dailyGoal} daily goal
              </Text>
            </View>

            <View className="items-center justify-center">
              <View className="w-24 h-24 rounded-full items-center justify-center">
                <View className="w-24 h-24 rounded-full border-[10px] border-[#ffe1d8] items-center justify-center">
                  <View
                    className="absolute w-24 h-24 rounded-full border-[10px]"
                    style={{
                      borderColor: "#ff7557",
                      borderRightColor: "transparent",
                      borderBottomColor: "transparent",
                      transform: [{ rotate: `${percentage * 1.8}deg` }],
                    }}
                  />
                  <View className="w-16 h-16 bg-white rounded-full items-center justify-center">
                    <Text className="text-[#ff7557] text-xl font-hmb8">
                      {percentage}%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row gap-3 mt-5">
            <View className="flex-1 bg-[#fceaf0] rounded-2xl p-4">
              <Text className="text-[#a0606a] font-hmb2 text-[10px] uppercase">Consumed</Text>
              <Text className="text-2xl font-hmb7 text-[#ff557a] mt-1">
                {consumed}
              </Text>
            </View>
            <View className="flex-1 bg-[#e9f9ee] rounded-2xl p-4">
              <Text className="text-[#4d7c63] font-hmb2 text-[10px] uppercase">Burned</Text>
              <Text className="text-2xl font-hmb7 text-[#38b778] mt-1">
                {burned}
              </Text>
            </View>
            <View className="flex-1 bg-[#eaf2ff] rounded-2xl p-4">
              <Text className="text-[#4d6893] font-hmb2 text-[10px] uppercase">Net</Text>
              <Text className="text-2xl font-hmb7 text-[#4c63ff] mt-1">
                {net}
              </Text>
            </View>
          </View>
        </View>

        {/* Nutrition */}
        <View className="px-6 mt-6">
      <View className="flex-row items-center justify-between mb-4">
        <Text className="text-xl font-hmb7 text-[#1f1f2e]">
          Nutrition Breakdown
        </Text>
        <Text className="text-[#ff7557] font-hmb2 text-[10px]">Details</Text>
      </View>

      <View className="bg-white rounded-3xl p-5 shadow-sm shadow-black/5">
        {macros.map((macro, index) => {
          const ratio = Math.min(1, macro.value / macro.total);
          return (
            <View key={macro.id} className={index !== macros.length - 1 ? "mb-5" : ""}>
              <View className="flex-row items-center justify-between">
                <View className="flex-row items-center gap-3">
                  <View
                    className="w-10 h-10 rounded-2xl items-center justify-center"
                    style={{ backgroundColor: macro.color + "12" }}
                  >
                    <Text style={{ color: macro.color, fontSize: 18 }}>
                      {macroIcons[macro.label] || "🍽️"}
                    </Text>
                  </View>
                  <View>
                    <Text className="text-base text-[12px] font-hmb2 text-[#1f1f2e]">
                      {macro.label}
                    </Text>
                    <Text className="text-xs font-hmb2 text-[#8e8ea2]">
                      {macro.subtitle}
                    </Text>
                  </View>
                </View>
                <Text className="text-sm font-hmb2 text-[12px] text-[#1f1f2e]">
                  {macro.value}
                  {macro.unit}/{macro.total}
                  {macro.unit}
                </Text>
              </View>
              <View className="w-full h-3 rounded-full bg-[#ededf5] mt-3 overflow-hidden">
                <View
                  className="h-3 rounded-full"
                  style={{
                    width: `${ratio * 100}%`,
                    backgroundColor: macro.progressColor,
                  }}
                />
              </View>
            </View>
          );
        })}
      </View>
    </View>

        {/* Meals */}
        <View className="px-6 mt-6">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-hmb7 text-[#1f1f2e]">
              Today&apos;s Meals
            </Text>
            <Pressable>
              <Text className="text-[#ff7557] font-hmb2 text-[10px]">View All →</Text>
            </Pressable>
          </View>

          <View className="gap-4">
            {meals.map((meal) => (
              <View
                key={meal.id}
                className={`flex-row rounded-3xl ${meal.bg} border ${meal.border} p-4 items-center`}
              >
                <Image
                  source={{ uri: meal.image }}
                  className="w-20 h-20 rounded-2xl mr-4"
                />
                <View className="flex-1">
                  <View className="flex-row items-center gap-2">
                    <Text className="text-[#ff7557] text-xs font-hmb2">
                      {meal.type}
                    </Text>
                    <Text className="text-[#a0a0b0] font-hmb2 text-xs">{meal.time}</Text>
                  </View>
                  <Text className="text-[12px] font-hmb2 text-[#1f1f2e] mt-1">
                    {meal.title}
                  </Text>
                  <View className="flex-row items-center gap-4 mt-2">
                    <View className="flex-row items-center gap-1">
                      <Text className="text-[#ff7557] font-hmb8">
                        {meal.calories}
                      </Text>
                      <Text className="text-[#a0a0b0] font-hmb2 text-sm">cal</Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <Text className="text-[#1f1f2e] font-hmb8">
                        {meal.protein}
                      </Text>
                      <Text className="text-[#a0a0b0] font-hmb2 text-sm">g protein</Text>
                    </View>
                  </View>
                </View>
                <View className="w-10 h-10 rounded-full bg-white/70 items-center justify-center">
                  <Text className="text-[#a0a0b0] text-lg">⋮</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
