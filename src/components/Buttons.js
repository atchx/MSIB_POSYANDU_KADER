import React from "react";
import { TouchableOpacity, Dimensions, Text } from "react-native";

export default function Buttons({ label, action }) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: "#0F78CB",
        alignItems: "center",
        padding: 15,
        borderRadius: 10,
        width: "100%",
      }}
      onPress={action}
    >
      <Text
        style={{
          fontFamily: "Bold",
          fontSize: 16,
          color: "#fff",
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
