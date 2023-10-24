import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { width, height } from "../components/Dimension";
import AppIntroSlider from "react-native-app-intro-slider";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function IntroScreen({ navigation }) {
  const checkValid = async () => {
    await AsyncStorage.getItem("Token").then((token) => {
      if (token) {
        navigation.navigate("TabNavigator");
      }
    });
  };

  useEffect(() => {
    checkValid();
  }, []);
  const slides = [
    {
      key: 1,
      image: require("../../assets/images/intro/intro-1.png"),
    },
    {
      key: 2,
      image: require("../../assets/images/intro/intro-2.png"),
    },
    {
      key: 3,
      image: require("../../assets/images/intro/intro-3.png"),
    },
    {
      key: 4,
      image: require("../../assets/images/intro/intro-4.png"),
    },
  ];

  const item = ({ item }) => {
    return (
      <View>
        <Image style={{ width: "100%", height: "100%" }} source={item.image} />
      </View>
    );
  };

  const button = () => {
    return (
      <View
        style={{
          paddingHorizontal: 10,
          marginTop: 30,
          marginBottom: height / 10,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: "#0F78CB",
            paddingVertical: 15,
            alignItems: "center",
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <Text
            style={{
              fontFamily: "Bold",
              color: "#fff",
              fontSize: 16,
            }}
          >
            Masuk
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <AppIntroSlider
      renderItem={item}
      data={slides}
      bottomButton="1"
      renderNextButton={button}
      renderDoneButton={button}
      activeDotStyle={{ backgroundColor: "#0F78CB" }}
      dotStyle={{ backgroundColor: "#FFF" }}
    />
  );
}
