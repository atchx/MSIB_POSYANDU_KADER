import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import styles from "../styles/style";

export default function MotherRows({ action }) {
  return (
    <TouchableOpacity
      style={{
        marginTop: 10,
        width: "100%",
        backgroundColor: "#FFFFFF",
        borderRadius: 10,
        elevation: 8,
        flexDirection: "row",
        alignItems: "center",
      }}
      onPress={action}
    >
      <View
        style={{
          width: "13%",
          height: "50%",
          position: "absolute",
          borderTopLeftRadius: 10,
          left: 0,
          top: 0,
          backgroundColor: "#92CAF7",
        }}
      />
      <View
        style={{
          width: "30%",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 80, height: 80, borderRadius: 50 }}
          source={require("../../assets/images/mother-img.png")}
        />
      </View>
      <View
        style={{
          width: "70%",
          paddingRight: 10,
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "35%" }}>
            <Text style={styles.textMotherRow}>Id Peserta</Text>
          </View>
          <View style={{ width: "5%" }}>
            <Text style={styles.textMotherRow}>:</Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={styles.textMotherRow}>{id}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "35%" }}>
            <Text style={styles.textMotherRow}>Nama Ibu</Text>
          </View>
          <View style={{ width: "5%" }}>
            <Text style={styles.textMotherRow}>:</Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={styles.textMotherRow}>{motherName}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "35%" }}>
            <Text style={styles.textMotherRow}>NIK</Text>
          </View>
          <View style={{ width: "5%" }}>
            <Text style={styles.textMotherRow}>:</Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={styles.textMotherRow}>{nik}</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: "35%" }}>
            <Text style={styles.textMotherRow}>Nama Anak</Text>
          </View>
          <View style={{ width: "5%" }}>
            <Text style={styles.textMotherRow}>:</Text>
          </View>
          <View style={{ width: "60%" }}>
            <Text style={styles.textMotherRow}>Tany Danza</Text>
            <Text style={styles.textMotherRow}>Tany Danza</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
