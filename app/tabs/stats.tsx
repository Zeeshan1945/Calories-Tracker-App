import React from "react";
import { ScrollView, Text, View } from "react-native";

type WeeklyRecord = {
  day: string;
  intake: number;
  burn: number;
  highlight?: boolean;
};

type MacroRecord = {
  id: string;
  label: string;
  percentage: number;
  grams: number;
  color: string;
  accent: string;
};

type FocusMetric = {
  id: string;
  label: string;
  value: string;
  delta: string;
  description: string;
  color: string;
  chip: string;
};

type HabitMetric = {
  id: string;
  title: string;
  value: string;
  target: string;
  trend: string;
  bg: string;
  border: string;
};

const weeklyCalories: WeeklyRecord[] = [
  { day: "Mon", intake: 1750, burn: 420 },
  { day: "Tue", intake: 1680, burn: 360 },
  { day: "Wed", intake: 1810, burn: 450 },
  { day: "Thu", intake: 1590, burn: 380 },
  { day: "Fri", intake: 1940, burn: 510, highlight: true },
  { day: "Sat", intake: 2130, burn: 470 },
  { day: "Sun", intake: 1620, burn: 340 },
];

const macros: MacroRecord[] = [
  {
    id: "protein",
    label: "Protein",
    percentage: 32,
    grams: 118,
    color: "#ff7557",
    accent: "#ffe1d8",
  },
  {
    id: "carbs",
    label: "Carbs",
    percentage: 44,
    grams: 162,
    color: "#ffb347",
    accent: "#fff1da",
  },
  {
    id: "fat",
    label: "Fat",
    percentage: 24,
    grams: 58,
    color: "#22c55e",
    accent: "#ddfbe8",
  },
];

const focusMetrics: FocusMetric[] = [
  {
    id: "surplus",
    label: "Net Calories",
    value: "+187 cal",
    delta: "↓ 6% vs last week",
    description:
      "Within your surplus guardrails. Maintain hydration on training days.",
    color: "#ff7557",
    chip: "#ffe1d8",
  },
  {
    id: "consistency",
    label: "Logging Consistency",
    value: "92%",
    delta: "↑ 4 days streak",
    description:
      "Only Sunday missing a meal entry. Add reminders to lock 100%.",
    color: "#4c63ff",
    chip: "#dfe3ff",
  },
];

const habits: HabitMetric[] = [
  {
    id: "hydration",
    title: "Hydration",
    value: "2.3 L",
    target: "Goal 2.5 L",
    trend: "On track • +0.4 L vs last week",
    bg: "bg-[#e9f6ff]",
    border: "border-[#b6e0ff]",
  },
  {
    id: "sleep",
    title: "Sleep Quality",
    value: "7h 45m",
    target: "Target 8h",
    trend: "Balanced • +25m vs last week",
    bg: "bg-[#f3ecff]",
    border: "border-[#d6c3ff]",
  },
];

const ranges = ["Week", "Month", "Year"] as const;
const activeRange: (typeof ranges)[number] = "Week";

export default function StatsScreen() {
  const avgIntake = Math.round(
    weeklyCalories.reduce((sum, entry) => sum + entry.intake, 0) /
      weeklyCalories.length
  );
  const avgBurn = Math.round(
    weeklyCalories.reduce((sum, entry) => sum + entry.burn, 0) /
      weeklyCalories.length
  );
  const maxValue = Math.max(
    ...weeklyCalories.map((entry) => Math.max(entry.intake, entry.burn))
  );

  return (
    <View className="flex-1 bg-[#f7f7fa]">
      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingBottom: 90 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-[#ff7557] pt-5 pb-10 px-6 rounded-b-[32px] shadow">
          {/* ✅ FIRST ROW - DATE */}
          <View className="flex-row justify-end">
            <View className="bg-white/15 rounded-2xl px-4 py-2">
              <Text className="text-white text-xs font-hmb2 uppercase tracking-[2px]">
                NOV 18 - NOV 24
              </Text>
              <Text className="text-white text-xl font-hmb7">Week 47</Text>
            </View>
          </View>

          {/* ✅ SECOND ROW - PERFORMANCE */}
          <View className="mt-6">
            <Text className="text-white/70 text-xs font-hmb2 tracking-[4px] uppercase">
              Performance
            </Text>
            <Text className="text-white text-[32px] font-hmb8 leading-[38px]">
              Advanced stats
            </Text>
            <Text className="text-white/80 font-hmb2 mt-3 text-sm">
              Review your weekly rhythm before planning the next phase.
            </Text>
          </View>

          {/* ✅ STATS CARD */}
          <View className="bg-white rounded-3xl p-4 mt-8 flex-row items-center justify-between">
            <View>
              <Text className="text-[#8e8ea2] font-hmb2 text-xs uppercase tracking-[1.5px]">
                Average intake
              </Text>
              <Text className="text-3xl font-hmb2 text-[#ff7557] mt-2">
                {avgIntake}
              </Text>
              <Text className="text-[#8e8ea2] font-hmb2 text-sm">cal / day</Text>
            </View>

            <View className="h-12 w-px bg-[#f4f4f7]" />

            <View>
              <Text className="text-[#8e8ea2] font-hmb2 text-xs uppercase tracking-[1.5px]">
                Average burn
              </Text>
              <Text className="text-3xl font-hmb2 text-[#1f1f2e] mt-2">
                {avgBurn}
              </Text>
              <Text className="text-[#8e8ea2] font-hmb2 text-sm">cal / day</Text>
            </View>
          </View>
        </View>

        <View className="px-6 mt-6">
          <View className="bg-white rounded-full p-1 flex-row shadow-sm shadow-black/5">
            {ranges.map((range) => {
              const isActive = range === activeRange;
              return (
                <View
                  key={range}
                  className={`flex-1 py-3 rounded-full ${
                    isActive ? "bg-[#ff7557]" : "bg-transparent"
                  }`}
                >
                  <Text
                    className={`text-center font-hmb2 ${
                      isActive ? "text-white" : "text-[#8e8ea2]"
                    }`}
                  >
                    {range}
                  </Text>
                </View>
              );
            })}
          </View>

          <View className="bg-white rounded-3xl p-5 mt-6 shadow-sm shadow-black/5">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-sm uppercase font-hmb2 tracking-[3px] text-[#8e8ea2]">
                  Weekly trend
                </Text>
                <Text className="text-2xl font-hmb7 text-[#1f1f2e] mt-1">
                  Intake vs burn
                </Text>
              </View>
            </View>
            <View className="flex-row items-center gap-3">
              <View className="flex-row items-center gap-1">
                <View className="w-3 h-3 rounded-full bg-[#ff7557]" />
                <Text className="text-xs font-hmb2 text-[#8e8ea2]">Consumed</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <View className="w-3 h-3 rounded-full bg-[#22c55e]" />
                <Text className="text-xs font-hmb2 text-[#8e8ea2]">Burned</Text>
              </View>
            </View>

            <View className="flex-row items-end justify-between mt-10">
              {weeklyCalories.map((entry) => {
                const intakeHeight = Math.round(
                  (entry.intake / maxValue) * 140
                );
                const burnHeight = Math.round((entry.burn / maxValue) * 140);
                return (
                  <View key={entry.day} className="items-center flex-1">
                    <View className="w-full items-center justify-end h-[160px]">
                      <View className="w-3 rounded-full bg-[#22c55e]/15 mb-2">
                        <View
                          className="w-full rounded-full bg-[#22c55e]"
                          style={{ height: burnHeight }}
                        />
                      </View>
                      <View
                        className={`w-3 rounded-full ${
                          entry.highlight ? "bg-[#ff7557]" : "bg-[#ffb6a3]"
                        }`}
                        style={{ height: intakeHeight }}
                      />
                    </View>
                    <Text
                      className={`mt-3 text-xs font-hmb2 ${
                        entry.highlight ? "text-[#ff7557]" : "text-[#8e8ea2]"
                      }`}
                    >
                      {entry.day}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
        </View>

        <View className="px-6 mt-6 flex-row gap-4">
          {macros.map((macro) => (
            <View
              key={macro.id}
              className="flex-1 bg-white rounded-3xl px-4 py-5 shadow-sm shadow-black/5"
            >
              <View
                className="w-12 h-12 rounded-2xl items-center justify-center"
                style={{ backgroundColor: macro.accent }}
              >
                <Text style={{ color: macro.color }}>🍽️</Text>
              </View>
              <Text className="text-[#8e8ea2] text-xs font-hmb2 uppercase tracking-[2px] mt-4">
                {macro.label}
              </Text>
              <Text className="text-3xl font-hmb7 text-[#1f1f2e] mt-2">
                {macro.percentage}%
              </Text>
              <Text className="text-sm font-hmb2 text-[#8e8ea2]">{macro.grams} g</Text>
              <View className="h-2 w-full bg-[#f4f4f7] rounded-full mt-4 overflow-hidden">
                <View
                  className="h-full rounded-full"
                  style={{
                    width: `${macro.percentage}%`,
                    backgroundColor: macro.color,
                  }}
                />
              </View>
            </View>
          ))}
        </View>

        <View className="px-6 mt-6">
          {focusMetrics.map((metric) => (
            <View
              key={metric.id}
              className="bg-white rounded-3xl p-5 mb-4 shadow-sm shadow-black/5"
            >
              {/* DELTA ON TOP */}
              <View className="flex-row justify-start">
                <View
                  className="px-3 py-1 rounded-full"
                  style={{ backgroundColor: metric.chip }}
                >
                  <Text className="text-xs font-hmb2 text-[#1f1f2e]">
                    {metric.delta}
                  </Text>
                </View>
              </View>

              {/* LABEL */}
              <Text className="text-xs uppercase font-hmb2 tracking-[3px] text-[#8e8ea2] mt-2">
                {metric.label}
              </Text>

              {/* VALUE */}
              <Text
                className="text-4xl font-hmb7 mt-1"
                style={{ color: metric.color }}
              >
                {metric.value}
              </Text>

              {/* DESCRIPTION */}
              <Text className="text-[#4d4d5f] text-[11px] font-hmb2 mt-4 leading-5">
                {metric.description}
              </Text>
            </View>
          ))}
        </View>

        <View className="px-6 mt-2 mb-8">
          <Text className="text-xl font-hmb7 text-[#1f1f2e] mb-4">
            Recovery & Habits
          </Text>
          <View className="gap-4">
            {habits.map((habit) => (
              <View
                key={habit.id}
                className={`rounded-3xl p-5 border ${habit.bg} ${habit.border}`}
              >
                <View className="flex-row items-center justify-between">
                  <View>
                    <Text className="text-xs uppercase font-hmb2 tracking-[3px] text-[#8e8ea2]">
                      {habit.title}
                    </Text>
                    <Text className="text-3xl font-hmb7 text-[#1f1f2e] mt-1">
                      {habit.value}
                    </Text>
                  </View>
                  <Text className="text-sm font-hmb2 text-[#1f1f2e]">
                    {habit.target}
                  </Text>
                </View>
                <Text className="text-[#4d4d5f] text-[11px]  font-hmb2 mt-3">{habit.trend}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
