import React from "react";
import { TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function FloatButtons({ action }) {
  return (
    <TouchableOpacity
      style={{
        height: 60,
        width: 60,
        backgroundColor: "#0F78CB",
        position: "absolute",
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
        right: 25,
      }}
      onPress={action}
    >
      <FontAwesome5 name="plus" size={28} color="#FFFFFF" />
    </TouchableOpacity>
  );
}
