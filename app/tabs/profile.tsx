import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { ScrollView, Switch, Text, View } from "react-native";

const planHighlights = [
  {
    label: "Calorie budget",
    value: "1,850 cal",
    helper: "Net target",
    progress: 0.72,
    color: "#ff7557",
  },
  {
    label: "Protein focus",
    value: "118 g",
    helper: "Out of 130 g",
    progress: 0.9,
    color: "#7f3dff",
  },
  {
    label: "Hydration",
    value: "2.1 L",
    helper: "Goal 2.5 L",
    progress: 0.84,
    color: "#0ea5e9",
  },
];

const wellnessSignals = [
  {
    title: "Energy window",
    value: "High",
    detail: "Next meal 12:30p",
    trend: "+120 cal burn",
    icon: "flash",
    color: "#ffb347",
  },
  {
    title: "Recovery",
    value: "82%",
    detail: "Up 12 pts",
    trend: "Balanced",
    icon: "pulse",
    color: "#7f3dff",
  },
  {
    title: "Sleep avg",
    value: "7h 45m",
    detail: "Wind-down in 4h",
    trend: "2 great nights",
    icon: "moon",
    color: "#0ea5e9",
  },
];

const focusActions = [
  {
    title: "Add 18g lean protein",
    subtitle: "Greek yogurt or tofu snack keeps macros on track.",
    icon: "nutrition",
    color: "#ff7557",
  },
  {
    title: "Finish dinner before 8p",
    subtitle: "Improves glucose stability overnight.",
    icon: "time",
    color: "#7f3dff",
  },
  {
    title: "Schedule recovery walk",
    subtitle: "20 min light walk keeps readiness green.",
    icon: "walk",
    color: "#22c55e",
  },
];

const milestoneBadges = [
  { title: "Consistency streak", value: "21 days", icon: "flame", color: "#ff7557" },
  { title: "Hydration hero", value: "98%", icon: "water", color: "#0ea5e9" },
  { title: "Meal prep master", value: "5/5 days", icon: "restaurant", color: "#7f3dff" },
  { title: "Mindful minutes", value: "48 min", icon: "leaf", color: "#22c55e" },
];

const readinessTrend = [
  { day: "MON", value: 0.6 },
  { day: "TUE", value: 0.72 },
  { day: "WED", value: 0.88 },
  { day: "THU", value: 0.78 },
  { day: "FRI", value: 0.9 },
  { day: "SAT", value: 1 },
  { day: "SUN", value: 0.82 },
];

export default function ProfileScreen() {
  const [preferences, setPreferences] = useState({
    notifications: true,
    sleepCoach: false,
    autoSync: true,
  });

  const togglePreference = (key: keyof typeof preferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <View className="flex-1 bg-[#f7f7fa]">
      <ScrollView
        contentContainerStyle={{ paddingBottom: 70 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="px-5 pt-5 pb-6 gap-5">
          <HeroBanner />
          <PlanOverview />
          <WellnessSignals />
          <FocusActionList />
          <ReadinessTimeline />
          <MilestoneGrid />
          <PreferenceCard preferences={preferences} onToggle={togglePreference} />
        </View>
      </ScrollView>
    </View>
  );
}

function HeroBanner() {
  return (
    <View className="rounded-3xl bg-[#ff7557] px-5 py-6 overflow-hidden shadow-lg shadow-[#ff7557]/30">
      <View className="flex-row items-center gap-4">
        <View className="w-16 h-16 rounded-2xl overflow-hidden bg-white/20 border border-white/30">
          <Image
            source="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=60"
            className="w-full h-full"
            contentFit="cover"
          />
        </View>
        <View className="flex-1">
          <Text className="text-white/80 text-xs tracking-[0.4em] font-hmb2">PROFILE</Text>
          <Text className="text-white font-hmb8 text-2xl mt-1">Jordan Avery</Text>
          <Text className="text-white/80 font-hmb2 text-sm mt-1">Balanced cut • Week 4</Text>
        </View>
        <View className="items-end">
          <Text className="text-white/80 text-[10px] tracking-[0.4em] font-hmb2">LEVEL</Text>
          <Text className="text-white font-hmb8 text-3xl leading-none mt-1">04</Text>
          <View className="px-3 py-1 rounded-full bg-white/10 mt-2">
            <Text className="text-white font-hmb7 text-xs">Coach synced</Text>
          </View>
        </View>
      </View>

      <View className="mt-6 rounded-3xl bg-white px-4 py-3">
        <Text className="text-[#ff7557]/80 font-hmb2 text-xs tracking-[0.3em]">Today&apos;s net</Text>
        <View className="flex-row items-end mt-2">
          <Text className="text-[#ff7557] font-hmb8 text-3xl">742</Text>
          <Text className="text-[#a0a0b0] font-hmb2 text-sm mb-1 ml-1">cal left</Text>
        </View>
        <Text className="text-[#a0a0b0] font-hmb2 text-xs mt-1">of 1,850 goal • dinner in 3h</Text>
        <View className="mt-3 h-2 rounded-full bg-[#ffe1d8] overflow-hidden">
          <View className="h-full rounded-full bg-[#ff7557]" style={{ width: "62%" }} />
        </View>
      </View>
    </View>
  );
}

function PlanOverview() {
  return (
    <View className="rounded-3xl bg-white border border-[#f0f0f5] p-5">
      <SectionHeading title="Plan overview" subtitle="Macro + hydration" />
      <View className="mt-4 gap-4">
        {planHighlights.map((item) => (
          <View
            key={item.label}
            className="rounded-2xl border border-[#f4f4fb] bg-[#fbfbff] px-4 py-3"
          >
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-[#a0a0b0] font-hmb2 text-[11px] uppercase tracking-[0.4em]">
                  {item.label}
                </Text>
                <Text className="text-[#1d1b2f] font-hmb8 text-xl mt-1">{item.value}</Text>
                <Text className="text-[#7d7b9b] font-hmb2 text-xs mt-1">{item.helper}</Text>
              </View>
              <View className="w-12 h-12 rounded-2xl items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                <Ionicons name="stats-chart" size={20} color={item.color} />
              </View>
            </View>
            <View className="mt-3 h-2 rounded-full bg-[#e6e5f2] overflow-hidden">
              <View
                className="h-full rounded-full"
                style={{ backgroundColor: item.color, width: `${Math.min(1, item.progress) * 100}%` }}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

function WellnessSignals() {
  return (
    <View className="rounded-3xl bg-white border border-[#f0f0f5] p-5 gap-4">
      <SectionHeading title="Wellness signals" subtitle="Live coaching" />
      <View className="flex-col flex-wrap gap-4">
        {wellnessSignals.map((signal) => (
          <View
            key={signal.title}
            className="flex-1 min-w-[45%] rounded-3xl bg-[#fdf4f1] px-4 py-4"
            style={{ backgroundColor: "#fff", borderWidth: 1, borderColor: "#f5f5fb" }}
          >
            <View className="flex-row items-center gap-3">
              <View
                className="w-10 h-10 rounded-2xl items-center justify-center"
                style={{ backgroundColor: `${signal.color}20` }}
              >
                <Ionicons
                  name={signal.icon as keyof typeof Ionicons.glyphMap}
                  size={18}
                  color={signal.color}
                />
              </View>
              <Text className="text-[#7d7b9b] font-hmb2 text-[11px] tracking-[0.3em] uppercase">
                {signal.title}
              </Text>
            </View>
            <Text className="text-[#1d1b2f] font-hmb8 text-xl mt-3">{signal.value}</Text>
            <Text className="text-[#7d7b9b] font-hmb2 text-xs mt-1">{signal.detail}</Text>
            <Text className="text-[#ff7557] font-hmb2 text-xs mt-2">{signal.trend}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function FocusActionList() {
  return (
    <View className="rounded-3xl bg-white border border-[#f0f0f5] p-5 gap-4">
      <SectionHeading title="Focus actions" subtitle="Coach priorities" />
      {focusActions.map((action) => (
        <View
          key={action.title}
          className="flex-row items-center gap-4 rounded-2xl bg-[#fdf2ef] px-4 py-3"
          style={{ backgroundColor: "#fbfbff", borderWidth: 1, borderColor: "#f2f1fb" }}
        >
          <View
            className="w-12 h-12 rounded-2xl items-center justify-center"
            style={{ backgroundColor: `${action.color}15` }}
          >
            <Ionicons name={action.icon as keyof typeof Ionicons.glyphMap} size={20} color={action.color} />
          </View>
          <View className="flex-1">
            <Text className="text-[#1d1b2f] font-hmb7 text-base">{action.title}</Text>
            <Text className="text-[#7d7b9b] font-hmb2 text-xs mt-1">{action.subtitle}</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#c7c5df" />
        </View>
      ))}
    </View>
  );
}

function ReadinessTimeline() {
  return (
    <View className="rounded-3xl bg-white border border-[#f0f0f5] p-5 gap-5">
      <SectionHeading title="Readiness trend" subtitle="Last 7 days" />
      <View className="flex-row justify-between items-end">
        {readinessTrend.map((item) => (
          <View key={item.day} className="items-center gap-2">
            <View
              className="w-9 rounded-2xl bg-[#ffe5de]"
              style={{ height: 100 * item.value }}
            >
              <View className="flex-1 rounded-2xl" style={{ backgroundColor: "#ff7557" }} />
            </View>
            <Text className="text-[#a0a0b0] font-hmb2 text-[10px] tracking-[0.4em]">{item.day}</Text>
          </View>
        ))}
      </View>
      <View className="rounded-2xl bg-[#fff5f2] px-4 py-3 border border-[#ffe0d6]">
        <Text className="text-[#ff7557] font-hmb7">Balanced recovery</Text>
        <Text className="text-[#7d7b9b] font-hmb2 text-xs mt-1">
          Keep tonight&apos;s low-intensity walk to lock in tomorrow&apos;s readiness bump.
        </Text>
      </View>
    </View>
  );
}

function MilestoneGrid() {
  return (
    <View className="rounded-3xl bg-white border border-[#f0f0f5] p-5 gap-4">
      <SectionHeading title="Milestones" subtitle="Live badges" />
      <View className="flex-row flex-wrap gap-4">
        {milestoneBadges.map((badge) => (
          <View
            key={badge.title}
            className="flex-1 min-w-[45%] rounded-3xl border border-[#f2f1fb] bg-[#fbfbff] p-4 gap-3"
          >
            <View
              className="w-10 h-10 rounded-2xl items-center justify-center"
              style={{ backgroundColor: `${badge.color}15` }}
            >
              <Ionicons name={badge.icon as keyof typeof Ionicons.glyphMap} size={18} color={badge.color} />
            </View>
            <Text className="text-[#1d1b2f] font-hmb7 text-lg">{badge.value}</Text>
            <Text className="text-[#7d7b9b] font-hmb2 text-[11px] uppercase tracking-[0.4em]">
              {badge.title}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

function PreferenceCard({
  preferences,
  onToggle,
}: {
  preferences: { notifications: boolean; sleepCoach: boolean; autoSync: boolean };
  onToggle: (key: keyof typeof preferences) => void;
}) {
  return (
    <View className="rounded-3xl bg-white border border-[#f0f0f5] p-5 gap-4 mb-4">
      <SectionHeading title="Preferences" subtitle="Personalized nudges" />
      {(
        [
          { key: "notifications", label: "Performance nudges", helper: "Daily 8a + 8p refresh" },
          { key: "sleepCoach", label: "Sleep coach", helper: "Bedtime reminders" },
          { key: "autoSync", label: "Auto sync devices", helper: "Syncs every 15 min" },
        ] as const
      ).map((item) => (
        <View
          key={item.key}
          className="flex-row items-center justify-between rounded-2xl bg-[#fbfbff] px-4 py-3 border border-[#f2f1fb]"
        >
          <View className="flex-1 pr-4">
            <Text className="text-[#1d1b2f] font-hmb7">{item.label}</Text>
            <Text className="text-[#7d7b9b] font-hmb2 text-xs mt-1">{item.helper}</Text>
          </View>
          <Switch
            value={preferences[item.key]}
            onValueChange={() => onToggle(item.key)}
            trackColor={{ false: "#d9d9e8", true: "#ff7557" }}
            thumbColor="#ffffff"
          />
        </View>
      ))}
    </View>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <View className="flex-row items-end justify-between">
      <View>
        <Text className="text-[#a0a0b0] font-hmb2 uppercase tracking-[0.4em] text-[11px]">
          {title}
        </Text>
        {subtitle ? (
          <Text className="text-[#c1c0d8] font-hmb2 text-[11px] mt-1">{subtitle}</Text>
        ) : null}
      </View>
      <View className="w-9 h-9 rounded-2xl bg-[#f7f7fa] border border-[#f0f0f5] items-center justify-center">
        <Ionicons name="arrow-forward" size={16} color="#b5b3cd" />
      </View>
    </View>
  );
}
