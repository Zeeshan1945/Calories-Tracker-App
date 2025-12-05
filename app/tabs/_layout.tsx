import { Ionicons } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

const tabs = [
  { name: "dashboard", label: "Home", icon: "home" },
  { name: "stats", label: "Stats", icon: "stats-chart" },
  { name: "add", label: "", icon: "add" }, // center button
  { name: "plan", label: "Plan", icon: "restaurant" },
  { name: "profile", label: "Profile", icon: "person" },
];

export default function TabsLayout() {
  const router = useRouter();

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={({ state, navigation }) => (
        <View className="absolute inset-x-0 bottom-1 px-5">
          <View className="flex-row items-center justify-between rounded-full bg-[#f7f7fa] px-6 py-4 border border-white/5">
            {tabs.map((tab, index) => {
              const isFocused = state.routes[state.index].name === tab.name;
              const isCenter = index === 2;

              return (
                <TouchableOpacity
                  key={tab.name}
                  onPress={() => {
                    if (isCenter) {
                      router.push("/camera");
                      return;
                    }
                    navigation.navigate(tab.name);
                  }}
                  className={`items-center ${
                    isCenter ? "rounded-full bg-[#ff7557] p-4 -mt-8 shadow-lg" : ""
                  }`}
                >
                  <Ionicons
                    name={tab.icon as any}
                    size={isCenter ? 32 : 22}
                    color={
                      isCenter ? "#fff" : isFocused ? "#ff7557" : "#6b6a72"
                    }
                  />
                  {!isCenter && (
                    <Text
                      className={`text-[11px] font-hmb2 mt-1 ${
                        isFocused ? "text-[#ff7557]" : "text-[#6b6a72]"
                      }`}
                    >
                      {tab.label}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      )}
    >
      <Tabs.Screen name="dashboard" options={{ title: "Dashboard" }} />
      <Tabs.Screen name="stats" options={{ title: "Stats" }} />
      <Tabs.Screen name="plan" options={{ title: "Plan" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
