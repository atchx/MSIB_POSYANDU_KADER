import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";

export default function Menus({ label, icon, action }) {
  return (
    <View style={{ width: "50%", padding: 10 }}>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          height: Dimensions.get('window').height / 5,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
          elevation: 8,
          // shadowColor: "#171717",
          // shadowOffset: { width: -2, height: 4 },
          // shadowOpacity: 0.2,
          // shadowRadius: 3,
        }}
        onPress={action}
      >
        <LinearGradient
          colors={["#EEF7FE", "#C9E5FB", "#EEF7FE"]}
          style={{
            height: 60,
            width: 60,
            borderRadius: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MaterialIcons name={icon} size={31} color="#0F78CB" />
        </LinearGradient>
        <Text
          style={{
            fontFamily: "Medium",
            width: 100,
            textAlign: "center",
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
