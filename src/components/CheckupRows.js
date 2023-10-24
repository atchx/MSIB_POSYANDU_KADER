import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/style";
import { width } from "./Dimension";

export default function CheckupRows() {
  return (
    <View
      style={{
        marginTop: 15,
        width: "100%",
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        borderRadius: 10,
        elevation: 8,
      }}
    >
      <Text
        style={{
          width: "100%",
          textAlign: "center",
          paddingVertical: 10,
          backgroundColor: "#F1F6FA",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          fontFamily: "Medium",
          fontSize: 14,
        }}
      >
        Senin, 22 Agustus 2022
      </Text>
      <View style={{ padding: 20 }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Berat Badan</Text>
          <Text style={styles.valueDataChild}>6 Kg</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Tinggi Badan</Text>
          <Text style={styles.valueDataChild}>70 cm</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Lingkar Kepala</Text>
          <Text style={styles.valueDataChild}>41 cm</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Lingkar Lengan</Text>
          <Text style={styles.valueDataChild}>14 cm</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Catatan Kader</Text>
          <Text style={styles.valueDataChild}>
            Anak sudah mulai bisa merespon suara
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Status</Text>
          <Text style={styles.valueDataChild}>Normal</Text>
        </View>
      </View>
    </View>
  );
}
