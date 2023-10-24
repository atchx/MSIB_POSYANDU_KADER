import React, { useEffect } from "react";
import { SafeAreaView, View, Image, StatusBar } from "react-native";
import styles from "../styles/style";
import { StackActions } from "@react-navigation/native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("IntroScreen"));
    }, 1500);
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <View style={{ alignItems: "center" }}>
        <Image
          style={{ marginTop: "75%" }}
          source={require("../../assets/images/balitaku.png")}
        />
        <Image
          style={{ marginTop: "50%" }}
          source={require("../../assets/images/kominfo_medan.png")}
        />
      </View>
    </SafeAreaView>
  );
}
