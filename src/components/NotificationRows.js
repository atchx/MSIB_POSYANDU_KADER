import React from "react";
import { View, Text, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function NotificaitonRows({ place, schedule }) {
  return (
    <View
      style={{
        paddingVertical: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: "#888889",
        flexDirection: "row",
      }}
    >
      <MaterialIcons name="circle-notifications" size={32} color="#0F78CB" />
      <View style={{ marginLeft: 20 }}>
        <Text
          style={{
            fontFamily: "Medium",
            fontSize: 13,
            color: "#292A2E",
          }}
        >
          Hari ini, Kegiatan {place}
        </Text>
        <Text
          style={{
            fontFamily: "Regular",
            fontSize: 12,
            color: "#292A2E",
            marginTop: -3,
          }}
        >
          Persiapkan dirimu untuk beraktivitas!
        </Text>
        <Text
          style={{
            fontFamily: "Regular",
            fontSize: 12,
            color: "#292A2E",
            marginTop: 5,
          }}
        >
          {schedule}
        </Text>
      </View>
    </View>
  );
}
