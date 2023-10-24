import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

export default function ReportRows({ action, gambar, kegiatan, tanggal, isi }) {
  return (
    <TouchableOpacity
      style={{
        marginTop: 10,
        width: "100%",
        borderRadius: 12,
        borderWidth: 1,
        padding: 10,
        backgroundColor: "#fff",
        borderColor: "#fff",
        elevation: 8,
        flexDirection: "row",
      }}
      onPress={action}
    >
      <Image
        style={{
          width: 120,
          height: 100,
          borderRadius: 10,
        }}
        source={gambar}
      />
      <View style={{ width: "63%", paddingLeft: 10, justifyContent: "center" }}>
        <Text style={{ fontFamily: "Medium", fontSize: 12, color: "#000" }}>
          {kegiatan}
        </Text>
        <Text
          style={{
            fontFamily: "Medium",
            fontSize: 12,
            color: "#0F78CB",
            marginTop: -8,
          }}
        >
          {tanggal}
        </Text>
        <Text
          numberOfLines={5}
          style={{
            fontFamily: "Regular",
            fontSize: 10,
            color: "#646468",
          }}
        >
          {isi}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
