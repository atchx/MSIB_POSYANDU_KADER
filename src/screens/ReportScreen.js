import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  RefreshControl,
  StatusBar,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import ReportRows from "../components/ReportRows";
import FloatButtons from "../components/FloatButtons";
import styles from "../styles/style";
import { width } from "../components/Dimension";
import { getReport } from "../apis/Report";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../apis/Axios";

export default function ReportScreen({ navigation }) {
  const [report, setReport] = useState([]);

  const getReports = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getReport(token).then((res) => {
        setReport(res.data.data);
        console.log(res.data.data);
        // console.log(res.data.data.image);
      });
    });
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getReports();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getReports();
  }, []);

  const getReportImage = (value) => {
    // console.log(value);
    if (value) {
      let uris = axios.defaults.baseURL + "images/report/kader/" + value;
      let uriss = uris.replace("api/", "");
      return (
        <Image
          style={{
            width: 120,
            height: 100,
            borderRadius: 10,
          }}
          source={{ uri: uriss }}
        />
      );
    } else {
      return (
        <Image
          style={{
            width: 120,
            height: 100,
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
    const nowDate = dates.getDate();
    const monthIndex = dates.getMonth();
    const months = monthName[monthIndex];
    const year = dates.getFullYear();
    return `${nowDate} ${months} ${year}`;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <View
        style={{ paddingHorizontal: 25, paddingTop: 10, alignItems: "center" }}
      >
        {/* <Text style={{ fontFamily: "Medium" }}>Riwayat Kegiatan Posyandu</Text>
        <ReportRows
          gambar={require("../../assets/images/123.jpeg")}
          kegiatan={"Pemeriksaan Anak"}
          tanggal={"22 Agustus 2022"}
          isi={
            "Imunisasi Polio yang dilaksanakan berjalan dengan baik, seluruh balita yang hadir telah di imunisasi dan diberikan sosialisasi...."
          }
          action={() => navigation.navigate("ReportDetailScreen")}
        />
        <ReportRows
          gambar={require("../../assets/images/123.jpeg")}
          kegiatan={"Imunisasi Polio"}
          tanggal={"18 Juli 2022"}
          isi={
            "Imunisasi Polio yang dilaksanakan berjalan dengan baik, seluruh balita yang hadir telah di imunisasi dan diberikan sosialisasi...."
          }
          action={() => navigation.navigate("ReportDetailScreen")}
        /> */}
      </View>
      <FlatList
        data={report}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={(item) => {
          return (
            <View
              style={{
                paddingHorizontal: 25,
                // paddingTop: 10,
                alignItems: "center",
                paddingBottom: 10,
              }}
            >
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
                onPress={() =>
                  navigation.navigate("ReportDetailScreen", { data: item.item })
                }
              >
                {getReportImage(item.item.image)}
                <View
                  style={{
                    width: "63%",
                    paddingLeft: 10,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "Medium",
                      fontSize: 12,
                      color: "#000",
                    }}
                  >
                    Kegiatan Posyandu
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Medium",
                      fontSize: 12,
                      color: "#0F78CB",
                      // marginTop: -8,
                    }}
                  >
                    {dateReport(item.item.time.substring(0, 10))}
                  </Text>
                  <Text
                    numberOfLines={5}
                    style={{
                      fontFamily: "Regular",
                      fontSize: 10,
                      color: "#646468",
                    }}
                  >
                    {item.item.detail.substring(0, 127)}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
        keyExtractor={(item, index) => item.id}
      />
      <FloatButtons action={() => navigation.navigate("ReportAddScreen")} />
    </SafeAreaView>
  );
}
