import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ScheduleRows({
  action,
  kegiatan,
  posyandu,
  waktu,
  hari,
  tanggal,
}) {
  return (
    <TouchableOpacity
      style={{
        marginTop: 13,
        width: "100%",
        backgroundColor: "#F6F7FA",
        borderRadius: 10,
        flexDirection: "row",
        elevation: 8,
      }}
      onPress={action}
    >
      <View style={{ width: "20%", alignItems: "center", paddingVertical: 22 }}>
        <Text style={{ fontFamily: "Regular", fontSize: 14 }}>{hari}</Text>
        <Text style={{ fontFamily: "Regular", fontSize: 22 }}>{tanggal}</Text>
      </View>
      <View
        style={{
          paddingVertical: 15,
          paddingHorizontal: 20,
          justifyContent: "center",
          backgroundColor: "#D4E6F3",
          width: "80%",
          borderRadius: 10,
        }}
      >
        <Text style={{ fontFamily: "Medium", fontSize: 16 }}>{kegiatan}</Text>
        <Text style={{ fontFamily: "Regular", fontSize: 12, marginTop: -5 }}>
          {waktu}
        </Text>
        <Text style={{ fontFamily: "Regular", fontSize: 12, marginTop: -5 }}>
          {posyandu}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
