import React from "react";
import { View, Text } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ProfileRows({ title, value, icon }) {
  return (
    <View
      style={{
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#C2BABA",
        alignItems: "center",
      }}
    >
      <View style={{ padding: 20 }}>
        <FontAwesome5 name={icon} size={17} color="#888889" />
      </View>
      <View>
        <Text style={{ fontFamily: "Regular", fontSize: 12, color: "#888889" }}>
          {title}
        </Text>
        <Text style={{ fontFamily: "Regular", fontSize: 16, marginTop: -5 }}>
          {value}
        </Text>
      </View>
    </View>
  );
}
