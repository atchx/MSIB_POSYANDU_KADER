import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function ChildRows({ action }) {
  return (
    <TouchableOpacity
      style={{
        width: "100%",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#C2BABA",
        alignItems: "center",
      }}
      onPress={action}
    >
      <View
        style={{
          paddingVertical: 10,
          width: "20%",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 50, height: 50, borderRadius: 50 }}
          source={require("../../assets/images/child-img.png")}
        />
      </View>
      <View style={{ width: "75%", paddingHorizontal: 10 }}>
        <Text style={{ fontFamily: "Medium", fontSize: 13 }}>Halo</Text>
        <Text style={{ fontFamily: "Regular", fontSize: 12 }}>Perempuan</Text>
      </View>
      <View style={{ width: "5%" }}>
        <MaterialIcons name="chevron-right" size={24} color="#292A2E" />
      </View>
    </TouchableOpacity>
  );
}
