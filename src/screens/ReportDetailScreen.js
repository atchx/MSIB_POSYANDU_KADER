import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  StatusBar,
} from "react-native";
import styles from "../styles/style";
import { FontAwesome5 } from "@expo/vector-icons";
import axios from "../apis/Axios";
import { getUser } from "../apis/User";
import { deleteReport } from "../apis/Report";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ReportDetailScreen({ route, navigation }) {
  const { data } = route.params;
  const [me, setMe] = useState([]);

  const getUsers = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getUser(token).then((res) => {
        setMe(res.data.data);
        console.log(res.data.data);
      });
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const getReportImage = (value) => {
    console.log(value);
    if (value) {
      let uris = axios.defaults.baseURL + "images/report/kader/" + value;
      let uriss = uris.replace("api/", "");
      return (
        <Image
          style={{
            width: 263,
            height: 147,
            borderRadius: 10,
          }}
          source={{ uri: uriss }}
        />
      );
    } else {
      return (
        <Image
          style={{
            width: 263,
            height: 147,
            borderRadius: 10,
          }}
          source={require("../../assets/images/stock-report.png")}
        />
      );
    }
  };

  const dateReport = (value) => {
    const dates = new Date(value);
    const monthName = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const dayName = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu",
    ];
    const nowDate = dates.getDate();
    const monthIndex = dates.getMonth();
    const months = monthName[monthIndex];
    const year = dates.getFullYear();
    const dayNow = dayName[dates.getDay()];
    return `${dayNow}, ${nowDate} ${months} ${year}`;
  };

  const submit = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await deleteReport(token, data.id).then((res) => {});
    });
    navigation.goBack();
  };

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <ScrollView
        style={{
          paddingHorizontal: 25,
        }}
      >
        <View
          style={{
            alignItems: "center",
            paddingVertical: 10,
            borderBottomWidth: 0.5,
            borderBottomColor: "#888889",
          }}
        >
          <Text style={{ fontFamily: "Medium", fontSize: 14 }}>
            Kegiatan Posyandu
          </Text>
          <Text style={{ fontFamily: "Regular", fontSize: 12 }}>
            {/* Posyandu Mawar */}
            {me.posyandu ? me.posyandu.name : "-"}
            {/* {me ? me.posyandu.name : ""} */}
          </Text>
          <Text
            style={{ fontFamily: "Regular", fontSize: 12, textAlign: "center" }}
          >
            {/* Jl. Manggis No.42 Kec.Medan Timur Kel. Pulo Brayan */}
            {me.posyandu
              ? me.posyandu.address +
                " Kec. " +
                me.posyandu.district +
                " Kel. " +
                me.posyandu.village
              : "-"}
            {/* {me ? me.posyandu.address : ""} */}
          </Text>
        </View>
        <View
          style={{
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 12,
              color: "#0F78CB",
            }}
          >
            {dateReport(data.time.substring(0, 10))}
          </Text>
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 12,
              color: "#0F78CB",
              marginTop: -5,
            }}
          >
            {data.time.substring(11, 16) + " WIB"}
          </Text>
        </View>
        {/* <View style={{ paddingVertical: 8 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 12 }}>
            Jumlah Peserta :
          </Text>
          <Text style={{ fontFamily: "Regular", fontSize: 12, marginLeft: 24 }}>
            - Bayi dan balita 44 orang{"\n"}- Kader posyandu 4 orang{"\n"}-
            Bidan 2 orang
          </Text>
        </View> */}
        <View style={{ paddingVertical: 8 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 12 }}>
            Keterangan Kegiatan :
          </Text>
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 12,
              marginLeft: 24,
            }}
          >
            {data.detail}
          </Text>
        </View>
        <View style={{ paddingVertical: 8, paddingBottom: 90 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 12 }}>
            Dokumentasi Kegiatan :
          </Text>
          <View style={{ paddingVertical: 5, alignItems: "center" }}>
            {getReportImage(data.image)}
          </View>
        </View>
      </ScrollView>
      <View style={styles.containerProfileButton}>
        <TouchableOpacity
          style={[styles.buttonLogout, { width: "100%" }]}
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
        {/* <TouchableOpacity
          style={styles.buttonEdit}
          onPress={() =>
            navigation.navigate("ReportEditScreen", { data: data })
          }
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
            Edit Laporan
          </Text>
        </TouchableOpacity> */}
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
              Anda yakin menghapus laporan posyandu?
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
                onPress={() => {
                  setModalVisible(false);
                  submit();
                }}
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
