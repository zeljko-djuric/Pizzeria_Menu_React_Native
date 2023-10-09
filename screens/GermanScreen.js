import { View, Image, Dimensions, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { info_german, menuItemsGerman } from "../constants";
import Carousel from "react-native-snap-carousel";
import MenuCard from "../components/menuCard";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function GermanScreen() {
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />

      <Image
        source={require("../assets/images/header.png")}
        style={{ height: height * 0.2 }}
        className="w-full absolute"
      />
      <SafeAreaView className={ios ? "-mb-8" : ""}></SafeAreaView>

      <View
        className={`overflow-visible flex justify-center flex-1 ${
          ios ? "mt-10" : ""
        }`}
      >
        <View>
          <Carousel
            containerCustomStyle={{ overflow: "visible" }}
            data={menuItemsGerman}
            renderItem={({ item }) => (
              <MenuCard item={item} info={info_german} />
            )}
            firstItem={1}
            loop={true}
            inactiveSlideScale={0.75}
            inactiveSlideOpacity={0.75}
            sliderWidth={width}
            itemWidth={width * 0.63}
            slideStyle={{ display: "flex", alignItems: "center" }}
          />
        </View>
      </View>
    </View>
  );
}
