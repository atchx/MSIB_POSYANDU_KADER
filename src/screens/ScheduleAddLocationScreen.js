import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
} from "react-native";
import styles from "../styles/style";
import { height, width } from "../components/Dimension";
import { MaterialIcons } from "@expo/vector-icons";

export default function ScheduleAddLocationScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 25, width: "100%" }}>
        <View style={[styles.containerSearch, { marginTop: 20 }]}>
          <View style={styles.containerSearchIcon}>
            <MaterialIcons name="search" size={24} color="#00000080" />
          </View>
          <TextInput
            placeholder="Cari Lokasi"
            style={{
              width: "85%",
              fontFamily: "Medium",
              fontSize: 16,
              paddingRight: 15,
            }}
          />
        </View>
        <Text
          style={{
            fontFamily: "Regular",
            fontSize: 12,
            color: "#888889",
            marginTop: 15,
            marginLeft: 70,
          }}
        >
          Terakhir dicari
        </Text>
        <ScrollView>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              paddingHorizontal: 25,
              marginTop: 15,
            }}
          >
            <MaterialIcons name="location-pin" size={24} color="#292A2E" />
            <View style={{ paddingLeft: 20 }}>
              <Text
                style={{ fontFamily: "Medium", fontSize: 14, color: "#000" }}
              >
                Jl. Manggis No.42 Medan Timur
              </Text>
              <Text
                style={{
                  fontFamily: "Regular",
                  fontSize: 12,
                  color: "#888889",
                }}
              >
                Kota Medan, Sumatera Utara
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 16,
          left: 25,
        }}
      >
        <TouchableOpacity
          style={{
            width: width - 50,
            borderRadius: 10,
            backgroundColor: "#0F78CB",
            paddingVertical: 15,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
          onPress={() => setModalVisible(true)}
        >
          <MaterialIcons name="add-location" size={24} color="#FFFFFF" />
          <Text
            style={{
              fontFamily: "Bold",
              fontSize: 16,
              color: "#FFFFFF",
              marginLeft: 10,
            }}
          >
            Tambah Lokasi
          </Text>
        </TouchableOpacity>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            opacity: 0.5,
            backgroundColor: "#000",
          }}
        />
        <View style={[styles.modalContainerCenter, { marginTop: height / 4 }]}>
          <View style={styles.modalContainer}>
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Tambah Lokasi
            </Text>
            <View style={{ width: "100%", paddingHorizontal: 18 }}>
              <Text style={styles.labelForm}>Alamat</Text>
              <TextInput
                placeholder="Masukkan Alamat"
                style={styles.inputForm}
              />
              <Text style={styles.labelForm}>Kecamatan</Text>
              <TextInput
                placeholder="Tambahkan Kecamatan"
                style={styles.inputForm}
              />
              <Text style={styles.labelForm}>Kelurahan</Text>
              <TextInput
                placeholder="Tambahkan Kelurahan"
                style={styles.inputForm}
              />
            </View>
            <View style={styles.modalContainerButton}>
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  borderRadius: 8,
                  width: "100%",
                  alignItems: "center",
                  backgroundColor: "#0F78CB",
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text
                  style={{
                    fontFamily: "Bold",
                    fontSize: 16,
                    color: "#FFFFFF",
                  }}
                >
                  Tambahkan
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
