import { View, Text, Image, Dimensions, Platform } from "react-native";
import React from "react";
import { themeColors } from "../theme";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function MenuCard({ item, info }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: themeColors.bgDark,
        height: ios ? height * 0.44 : height * 0.5,
        width: width * 0.65,
      }}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
          marginTop: ios ? -(height * 0.08) : 15,
        }}
        className="flex-row justify-center"
      >
        <Image source={item.image} className="h-40 w-40" />
      </View>
      <View className={`px-5 flex-1 justify-between ${ios ? "mt-5" : ""}`}>
        <View className="space-y-1 mt-3">
          <Text className="text-3xl text-white font-semibold z-10">
            {item.name}
          </Text>
          <View className="flex-row space-x-1 z-10 mb-6 ">
            <Text className="text-base text-white font-semibold opacity-60">
              {info.info1}
            </Text>
            <Text className="text-base text-white font-semibold">
              {" "}
              {item.volume}
            </Text>
          </View>
          {item.desc !== "-" && (
            <View className="flex-row space-x-1 z-10 mb-4">
              <Text className="text-base text-white font-semibold opacity-60">
                {info.info2}
              </Text>
              <Text className="text-base text-white font-semibold">
                {item.desc === "-" ? "" : item.desc}
              </Text>
            </View>
          )}
          <View className="flex-row space-x-1 z-10 mb-6 ">
            <Text className="text-base text-white font-semibold opacity-60">
              {info.info3}
            </Text>
            <Text className="text-base text-white font-semibold">
              {item.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
