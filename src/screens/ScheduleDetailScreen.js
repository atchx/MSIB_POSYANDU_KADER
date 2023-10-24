import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import ProfileRows from "../components/ProfileRows";
import styles from "../styles/style";
import { FontAwesome5 } from "@expo/vector-icons";

export default function ScheduleDetailScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingHorizontal: 25, marginTop: 10 }}>
        <ProfileRows
          icon={"file-alt"}
          title={"Nama Kegiatan"}
          value={"Pemeriksaan Anak"}
        />
        <ProfileRows
          icon={"plus-square"}
          title={"Nama Kegiatan"}
          value={"Pemeriksaan Anak"}
        />
        <ProfileRows
          icon={"calendar-alt"}
          title={"Tanggal Kegiatan"}
          value={"Senin, 22 Agustus 2022"}
        />
        <ProfileRows
          icon={"clock"}
          title={"Waktu Kegiatan"}
          value={"08.00 - 12.00 Wib"}
        />
        <ProfileRows
          icon={"map-marked-alt"}
          title={"Lokasi Kegiatan"}
          value={"Jl. Manggis No.42 Medan Timur "}
        />
      </View>
      <View style={styles.containerProfileButton}>
        <TouchableOpacity
          style={styles.buttonLogout}
          onPress={() => setModalVisible(true)}
        >
          <FontAwesome5 name="trash" size={24} color="#888889" />
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 16,
              color: "#888889",
              marginLeft: 7,
            }}
          >
            Hapus
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonEdit}
          //   onPress={() => navigation.navigate("ProfileEditScreen")}
        >
          <FontAwesome5 name="edit" size={24} color="#FFFFFF" />
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 16,
              color: "#FFFFFF",
              marginLeft: 7,
            }}
          >
            Edit Jadwal
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
        <View style={styles.modalContainerCenter}>
          <View style={styles.modalContainer}>
            <FontAwesome5 name="trash-alt" size={24} color="#0F78CB" />
            <Text
              style={{
                marginTop: 10,
                fontFamily: "Medium",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Anda yakin menghapus jadwal posyandu?
            </Text>
            <View style={styles.modalContainerButton}>
              <TouchableOpacity
                style={styles.modalButtonInactive}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalTextInactive}>Batal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButtonActive}
                // onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalTextActive}>Ya</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
