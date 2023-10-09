import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import GermanScreen from "../screens/GermanScreen";
import EnglishScreen from "../screens/EnglishScreen";
import { LogBox, Platform, View, Image } from "react-native"; // Import Image from 'react-native'
import { themeColors } from "../theme";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == "ios";
LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: "white" },
        }}
      >
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={HomeTabs}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          height: 75,
          alignItems: "center",

          borderRadius: 100,
          marginHorizontal: 20,
          backgroundColor: themeColors.bgLight,
        },
        tabBarItemStyle: {
          marginTop: ios ? 30 : 0,
        },
      })}
    >
      <Tab.Screen name="serbian" component={HomeScreen} />
      <Tab.Screen name="german" component={GermanScreen} />
      <Tab.Screen name="english" component={EnglishScreen} />
    </Tab.Navigator>
  );
}

const menuIcons = (route, focused) => {
  let icon;

  if (route.name === "serbian") {
    // Replace with the actual path to the Serbian flag image
    icon = (
      <Image
        source={require("../assets/images/serbian-flag.png")}
        style={{
          width: 50,
          height: 50,
          opacity: focused ? 1 : 0.5, // Adjust opacity based on focus state
        }}
      />
    );
  } else if (route.name === "german") {
    // Replace with the actual path to the German flag image
    icon = (
      <Image
        source={require("../assets/images/german-flag.png")}
        style={{
          width: 50,
          height: 50,
          opacity: focused ? 1 : 0.5, // Adjust opacity based on focus state
        }}
      />
    );
  } else if (route.name === "english") {
    // Replace with the actual path to the English flag image
    icon = (
      <Image
        source={require("../assets/images/english-flag.png")}
        style={{
          width: 50,
          height: 50,
          opacity: focused ? 1 : 0.5, // Adjust opacity based on focus state
        }}
      />
    );
  }

  let buttonClass = focused ? "bg-white" : "";
  return (
    <View
      className={"flex items-center rounded-full p-3 shadow " + buttonClass}
    >
      {icon}
    </View>
  );
};
