import React from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

type PlanOption = {
  id: string;
  title: string;
  subtitle: string;
  calories: number;
  tag: string;
  accent: string;
  focus: string;
};

type WeeklyMacro = {
  day: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

type MealBlock = {
  id: string;
  label: string;
  time: string;
  calories: number;
  description: string;
  items: string[];
  image: string;
  accent: string;
};

const planOptions: PlanOption[] = [
  {
    id: "lean-recomp",
    title: "Lean Recomp",
    subtitle: "Keep lifting 4x week",
    calories: 1950,
    tag: "Active",
    accent: "#ff7557",
    focus: "High protein / slow deficit",
  },
  {
    id: "carb-cycle",
    title: "Carb Cycling",
    subtitle: "Boost HIIT performance",
    calories: 2050,
    tag: "Performance",
    accent: "#4c63ff",
    focus: "Higher carbs on training days",
  },
  {
    id: "reset",
    title: "Metabolic Reset",
    subtitle: "Dialed recovery focus",
    calories: 1850,
    tag: "Rest",
    accent: "#38b778",
    focus: "Balanced macros / micronutrients",
  },
];

const weeklyMacros: WeeklyMacro[] = [
  { day: "Mon", calories: 1900, protein: 125, carbs: 180, fat: 55 },
  { day: "Tue", calories: 2000, protein: 135, carbs: 210, fat: 52 },
  { day: "Wed", calories: 1850, protein: 118, carbs: 170, fat: 58 },
  { day: "Thu", calories: 2100, protein: 140, carbs: 230, fat: 50 },
  { day: "Fri", calories: 1950, protein: 128, carbs: 190, fat: 55 },
  { day: "Sat", calories: 2050, protein: 132, carbs: 215, fat: 54 },
  { day: "Sun", calories: 1750, protein: 112, carbs: 160, fat: 48 },
];

const mealBlocks: MealBlock[] = [
  {
    id: "breakfast",
    label: "Breakfast",
    time: "07:30 AM",
    calories: 420,
    description: "Slow carbs + omega-3s to kickstart the day.",
    items: ["Smoked salmon toast", "Spinach omelette", "Berries + chia"],
    image:
      "https://images.unsplash.com/photo-1506086679524-493c64fdfaa6?auto=format&fit=crop&w=600&q=60",
    accent: "bg-[#fff5ef] border-[#ffdacc]",
  },
  {
    id: "lunch",
    label: "Lunch",
    time: "12:45 PM",
    calories: 560,
    description: "Volume meal with lean protein and crispy veggies.",
    items: ["Miso glazed tofu bowl", "Wild rice", "Pickled cucumbers"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
    accent: "bg-[#f3fff6] border-[#cde6d5]",
  },
  {
    id: "dinner",
    label: "Dinner",
    time: "07:15 PM",
    calories: 510,
    description: "Higher protein to support recovery overnight.",
    items: ["Herb chicken thighs", "Roasted carrots", "Cauli mash"],
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=60",
    accent: "bg-[#fbf7ff] border-[#e8d5ff]",
  },
];

const habitCards = [
  {
    id: "hydration",
    title: "Hydration",
    target: "2.5L target",
    progress: 1.9,
    total: 2.5,
    color: "#4c63ff",
  },
  {
    id: "steps",
    title: "Steps",
    target: "10k daily",
    progress: 7200,
    total: 10000,
    color: "#38b778",
  },
  {
    id: "sleep",
    title: "Sleep",
    target: "8h routine",
    progress: 7.2,
    total: 8,
    color: "#ff7557",
  },
];

export default function PlanScreen() {
  const focusDay = "Thu";

  return (
    <View className="flex-1 bg-[#f7f7fa]">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Hero */}
        <View className="bg-[#ff7557] pt-5 pb-10 px-6 rounded-b-[32px] shadow-lg shadow-black/15">
          <View className="flex-row items-center justify-between">
            <View className="flex-1 pr-6">
              <Text className="text-white/70 text-xs font-hmb2 uppercase tracking-[4px]">
                Personalized plan
              </Text>
              <Text className="text-white text-[30px] font-hmb8 mt-2 leading-tight">
                Fuel lean muscle while staying in control
              </Text>
              <View className="mt-4 flex-row items-center gap-3">
                <View className="bg-white/15 rounded-full px-3 py-1">
                  <Text className="text-white font-hmb2  text-xs tracking-wide">
                    28-day cycle
                  </Text>
                </View>
                <View className="bg-white/15 rounded-full px-3 py-1">
                  <Text className="text-white font-hmb2 text-xs tracking-wide">
                    Coach: Riley
                  </Text>
                </View>
              </View>
            </View>
            <View className="w-24 h-24 bg-white/25 rounded-3xl overflow-hidden items-center justify-center">
              <Image
                source={{
                  uri: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=60",
                }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
          </View>

          <View className="mt-8 bg-white rounded-3xl p-5 flex-row items-center justify-between shadow-md shadow-black/10">
            <View className="flex-1 pr-3">
              <Text className="text-[#8e8ea2] font-hmb2 text-xs uppercase tracking-widest">
                Next nutrition check-in
              </Text>
              <Text className="text-[#1f1f2e] text-3xl font-hmb7 mt-2">
                Sunday 09:00
              </Text>
              <Text className="text-[#8e8ea2] font-hmb2 mt-1">
                Coach review + new recipes
              </Text>
            </View>

            <Pressable className="bg-[#ff7557] rounded-2xl px-4 py-3 flex-shrink-0">
              <Text className="text-white font-hmb7">Reschedule</Text>
            </Pressable>
          </View>
        </View>

        {/* Plan selector */}
        <View className="px-6 mt-8">
          <View className="flex-row items-center justify-between mb-4">
            <View>
              <Text className="text-xl font-hmb7 text-[#1f1f2e]">
                Coach picks
              </Text>
              <Text className="text-[#8e8ea2] font-hmb2 text-sm">
                Crafted for your training split
              </Text>
            </View>
            <Pressable>
              <Text className="text-[#ff7557] font-hmb2 text-[10px]">See history</Text>
            </Pressable>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View className="flex-row pr-4">
              {planOptions.map((plan) => (
                <View
                  key={plan.id}
                  className="w-64 mr-4 bg-white rounded-3xl p-5 shadow-sm shadow-black/10"
                >
                  {/* Tag row */}
                  <View className="flex-row justify-end">
                    <View
                      className="px-3 py-1 rounded-full"
                      style={{ backgroundColor: plan.accent + "22" }}
                    >
                      <Text
                        style={{ color: plan.accent }}
                        className="text-xs font-hmb2 text-center"
                      >
                        {plan.tag}
                      </Text>
                    </View>
                  </View>

                  {/* Title on new row */}
                  <Text className="text-xl font-hmb2 text-[#1f1f2e] mt-2">
                    {plan.title}
                  </Text>

                  <Text className="text-[#8e8ea2] text-[11px] font-hmb2 mt-1">{plan.subtitle}</Text>

                  {/* Calories */}
                  <View className="mt-4 flex-row items-end">
                    <Text className="text-3xl font-hmb2 text-[#1f1f2e]">
                      {plan.calories}
                    </Text>
                    <Text className="text-[#8e8ea2] font-hmb2 text-base ml-2 mb-1">
                      cal
                    </Text>
                  </View>

                  <Text className="text-[#8e8ea2] font-hmb2 text-[11px] mt-1">
                    {plan.focus}
                  </Text>

                  {/* Button */}
                  <Pressable
                    className="mt-6 rounded-2xl py-3"
                    style={{ backgroundColor: plan.accent }}
                  >
                    <Text className="text-white text-center font-hmb7">
                      Apply plan
                    </Text>
                  </Pressable>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Weekly macros */}
        <View className="px-6 mt-8">
          <Text className="text-xl font-hmb7 text-[#1f1f2e] mb-3">
            Weekly rhythm
          </Text>
          <View className="bg-white rounded-3xl p-5 shadow-sm shadow-black/5">
            {weeklyMacros.map((macro) => {
              const isFocus = macro.day === focusDay;
              const ratio = Math.min(1, macro.calories / 2200);
              return (
                <View
                  key={macro.day}
                  className={`flex-row items-center py-3 ${macro.day !== "Sun" ? "border-b border-[#f0f0f5]" : ""}`}
                >
                  <View className="w-12">
                    <Text
                      className={`text-sm font-hmb2 ${isFocus ? "text-[#ff7557]" : "text-[#8e8ea2]"}`}
                    >
                      {macro.day}
                    </Text>
                  </View>
                  <View className="flex-1 px-3">
                    <View className="w-full h-3 bg-[#ededf5] rounded-full overflow-hidden">
                      <View
                        className="h-3 rounded-full"
                        style={{
                          width: `${ratio * 100}%`,
                          backgroundColor: "#ffb347",
                        }}
                      />
                    </View>
                    <View className="flex-row justify-between mt-2">
                      <Text className="text-xs font-hmb2 text-[#8e8ea2]">
                        {macro.calories} cal
                      </Text>
                      <Text className="text-xs font-hmb2 text-[#8e8ea2]">
                        P {macro.protein} • C {macro.carbs} • F {macro.fat}
                      </Text>
                    </View>
                  </View>
                  <Pressable className="px-3 py-1 rounded-full bg-[#f7f7fa]">
                    <Text className="text-xs font-hmb2 text-[#1f1f2e]">
                      Edit
                    </Text>
                  </Pressable>
                </View>
              );
            })}
          </View>
        </View>

        {/* Meals */}
        <View className="px-6 mt-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-hmb7 text-[#1f1f2e]">
              Today&apos;s blueprint
            </Text>
            <Pressable>
              <Text className="text-[#ff7557] font-hmb2 text-[10px]">Swap meals</Text>
            </Pressable>
          </View>
          <View className="gap-4">
            {mealBlocks.map((meal) => (
              <View
                key={meal.id}
                className={`flex-row p-4 rounded-3xl border ${meal.accent} shadow-sm shadow-black/5`}
              >
                <Image
                  source={{ uri: meal.image }}
                  className="w-24 h-24 rounded-2xl mr-4"
                />
                <View className="flex-1">
                  <View className="flex-row items-center justify-between">
                    <View>
                      <Text className="text-[#ff7557] text-xs font-hmb2 uppercase tracking-widest">
                        {meal.label}
                      </Text>
                      <Text className="text-lg font-hmb2 text-[#1f1f2e]">
                        {meal.time}
                      </Text>
                    </View>
                    <Text className="text-[#1f1f2e] font-hmb2">
                      {meal.calories} cal
                    </Text>
                  </View>
                  <Text className="text-[#8e8ea2] font-hmb2 text-sm mt-2">
                    {meal.description}
                  </Text>
                  <View className="flex-row flex-wrap gap-2 mt-3">
                    {meal.items.map((item) => (
                      <View
                        key={item}
                        className="bg-white/70 px-3 py-1 rounded-full"
                      >
                        <Text className="text-xs font-hmb2 text-[#4d4d63]">{item}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Habits */}
        <View className="px-6 mt-8">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-xl font-hmb7 text-[#1f1f2e]">
              Daily habits
            </Text>
            <Pressable>
              <Text className="text-[#ff7557] font-hmb2 text-[10px]">View logs</Text>
            </Pressable>
          </View>
          <View className="flex-row flex-wrap gap-4">
            {habitCards.map((habit) => {
              const ratio = Math.min(1, habit.progress / habit.total);
              const metric =
                habit.id === "steps"
                  ? `${habit.progress.toLocaleString()} / ${habit.total.toLocaleString()}`
                  : `${habit.progress} / ${habit.total}`;

              return (
                <View
                  key={habit.id}
                  className="flex-1 min-w-[150px] bg-white rounded-3xl p-4 shadow-sm shadow-black/5"
                >
                  <Text className="text-sm font-hmb2 text-[#1f1f2e]">
                    {habit.title}
                  </Text>
                  <Text className="text-xs font-hmb2 text-[#8e8ea2] mt-1">
                    {habit.target}
                  </Text>
                  <View className="mt-4 h-2 rounded-full bg-[#ededf5] overflow-hidden">
                    <View
                      className="h-full rounded-full"
                      style={{
                        width: `${ratio * 100}%`,
                        backgroundColor: habit.color,
                      }}
                    />
                  </View>
                  <Text className="text-sm font-hmb2 text-[#1f1f2e] mt-2">
                    {metric}
                  </Text>
                </View>
              );
            })}
          </View>
        </View>

        {/* CTA */}
        <View className="px-6 mt-10">
          <Pressable className="bg-[#1f1f2e] rounded-3xl py-5 items-center justify-center shadow-lg shadow-black/20">
            <Text className="text-white text-lg font-hmb7">
              Generate grocery list
            </Text>
            <Text className="text-white/70 text-xs font-hmb2 mt-1">
              Syncs macronutrients + pantry inventory
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
