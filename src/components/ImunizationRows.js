import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/style";

export default function ImunizationRows() {
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
          <Text style={styles.textDataChild}>Jenis Imunisasi</Text>
          <Text style={styles.valueDataChild}>Vaksin Polio 1</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Nama Posyandu</Text>
          <Text style={styles.valueDataChild}>Posyandu Mawar</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Lokasi Imunisasi</Text>
          <Text style={styles.valueDataChild}>
            Jl. Manggis No.42 Kec. Medan Timur Kel. Pulo Brayan 1
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Jadwal Imunisasi</Text>
          <Text style={styles.valueDataChild}>Senin, 22 Agustus 2022</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Nomor Tiket</Text>
          <Text style={styles.valueDataChild}>10274884</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Text style={styles.textDataChild}>Catatan Kader</Text>
          <Text style={styles.valueDataChild}>
            Anak imunisasi dengan tepat waktu
          </Text>
        </View>
      </View>
    </View>
  );
}
