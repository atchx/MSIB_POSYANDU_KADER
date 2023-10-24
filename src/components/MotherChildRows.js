import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function MotherChildRows({ name, action }) {
  return (
    <TouchableOpacity
      style={{
        marginTop: 13,
        backgroundColor: "#0F78CB",
        width: "70%",
        alignItems: "center",
        paddingVertical: 13,
        borderRadius: 10,
      }}
      onPress={action}
    >
      <Text
        style={{
          fontFamily: "Medium",
          fontSize: 16,
          color: "#fff",
          textAlign: "center",
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}
