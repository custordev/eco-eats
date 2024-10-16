import { Tabs } from "expo-router";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign"; // Ensure AntDesign is correctly imported
import { useColorScheme } from "react-native"; // Using the default React Native hook
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { EvilIcons } from "@expo/vector-icons";
import { Heart } from "lucide-react-native";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const inactiveColor = "#000000";
  const activeColor = "#019934";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "favorites",
          tabBarLabel: "favorites",
          tabBarIcon: ({ color, focused }) => (
            <Heart
              name={focused ? "heart" : "search"}
              color={color}
              size={30}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color, focused }) => (
            <AntDesign name="shoppingcart" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, focused }) => (
            <MaterialIcons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
