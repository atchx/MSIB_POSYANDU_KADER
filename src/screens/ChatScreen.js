import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { SafeAreaView, View, Text, Image } from "react-native";
import { height } from "../components/Dimension";
import styles from "../styles/style";

export default function ChatScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#0F78CB", "#0F78CB", "#168BE7", "#5CB0F3"]}
        style={{
          height: height / 5,
          paddingHorizontal: 25,
          // alignItems: "center",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        <Text style={{ fontFamily: "Medium", color: "#fff", fontSize: 13 }}>
          Nakes terdekat yang tersedia
        </Text>
        <View
          style={{
            marginTop: 10,
            backgroundColor: "#fff",
            height: "70%",
            width: "90%",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 80, height: 80 }}
            source={require("../../assets/images/mother-img.png")}
          />
          <View>
            <Text>April Curtis</Text>
            <Text>Nakes Wilayah Medan Timur</Text>
            <View>
              <Text>Chat</Text>
            </View>
          </View>
        </View>
      </LinearGradient>
      <View style={{ paddingHorizontal: 25, paddingVertical: 25 }}>
        <Text style={{ fontFamily: "Medium", fontSize: 13, color: "#000" }}>
          Riwayat Obrolan
        </Text>
      </View>
    </SafeAreaView>
  );
}
