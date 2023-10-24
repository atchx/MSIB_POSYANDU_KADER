import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  StatusBar,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { height, width } from "../components/Dimension";
import CheckupRows from "../components/CheckupRows";
import styles from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import ImunizationRows from "../components/ImunizationRows";
import { getDataChildren } from "../apis/Children";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../apis/Axios";

export default function ParticipantChildScreen({ navigation, route }) {
  const { id } = route.params;
  const [beratBadan, setBeratBadan] = useState([0, 10, 20]);
  const [tinggiBadan, setTinggiBadan] = useState([0, 10, 20]);
  const [lingkarKepala, setLingkarKepala] = useState([0, 10, 20]);
  const [lingkarLengan, setLingkarLengan] = useState([0, 10, 20]);
  const [labelBulan, setLabelBulan] = useState(["Jan", "Feb", "Mar"]);
  const [dataChildren, setDataChildren] = useState([]);
  const [birthDate, setBirthDate] = useState("-");

  const [showLoad, setShowLoad] = useState(false);

  const getDataChildrens = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      setShowLoad(true);
      await getDataChildren(token, id).then((res) => {
        // console.log(res.data.data);
        setDataChildren(res.data.data);
        setBirthDate(
          new Date(res.data.data.birth_date)
            .toISOString()
            .substring(0, 10)
            .split("-")
            .reverse()
            .join("-")
        );
        let bbadan = [0];
        let tbadan = [0];
        let lkepala = [0];
        let llengan = [0];
        let lbulan = [""];
        const monthName = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "Mei",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Oct",
          "Nov",
          "Des",
        ];
        res.data.data.checkup.forEach((element) => {
          bbadan.push(parseInt(element.weight));
          tbadan.push(parseInt(element.tall));
          lkepala.push(parseInt(element.headCircumference));
          llengan.push(parseInt(element.armCircumference));
          const monthIndex = new Date(element.createdAt).getMonth();
          const months = monthName[monthIndex];
          const year = new Date(element.createdAt).getFullYear();
          lbulan.push(`${months} ${year}`);
        });
        setBeratBadan(bbadan);
        setLabelBulan(lbulan);
        setTinggiBadan(tbadan);
        setLingkarKepala(lkepala);
        setLingkarLengan(llengan);
        // console.log(dataChildren);
      });
      setShowLoad(false);
    });
  };

  const kidsAge = (value) => {
    const today = new Date();
    const birthDate = new Date(value);
    let age_now = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate)) {
      age_now--;
    }
    return `${age_now} Tahun ${m} Bulan`;
  };

  const dateCheckUp = (value) => {
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

  const Vaccine = () => {
    let dataa = {
      id: dataChildren.id,
      name: dataChildren.name,
      place: dataChildren.born_place,
      date: dataChildren.birth_date,
      sex: dataChildren.sex,
      mother: dataChildren.user.id,
    };
    console.log(dataa);
    navigation.navigate("ParticipantCheckUpAddScreen", {
      data: JSON.stringify(dataa),
    });
  };

  useEffect(() => {
    getDataChildrens();
  }, []);

  let [category, setCategory] = useState("Data");

  const BeratBadan = () => {
    return (
      <>
        <View style={{ alignItems: "center", paddingHorizontal: 25 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 14 }}>
            Grafik Perkembangan Berat Badan Anak
          </Text>
          <LineChart
            data={{
              labels: labelBulan,
              datasets: [
                {
                  data: beratBadan,
                  strokeWidth: 1,
                },
              ],
            }}
            width={width - 50}
            height={220}
            yAxisSuffix={" kg"}
            chartConfig={{
              backgroundGradientFrom: "#F6F7FA",
              backgroundGradientTo: "#F6F7FA",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(14, 110, 186, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              // padding: 8,
              paddingVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>
      </>
    );
  };
  const TinggiBadan = () => {
    return (
      <>
        <View style={{ alignItems: "center", paddingHorizontal: 25 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 14 }}>
            Grafik Perkembangan Tinggi Badan Anak
          </Text>
          <LineChart
            data={{
              labels: labelBulan,
              datasets: [
                {
                  data: tinggiBadan,
                  strokeWidth: 1,
                },
              ],
            }}
            width={width - 50}
            height={220}
            yAxisSuffix={" cm"}
            chartConfig={{
              backgroundGradientFrom: "#F6F7FA",
              backgroundGradientTo: "#F6F7FA",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(14, 110, 186, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              // padding: 8,
              paddingVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>
      </>
    );
  };
  const LingkarKepala = () => {
    return (
      <>
        <View style={{ alignItems: "center", paddingHorizontal: 25 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 14 }}>
            Grafik Perkembangan Lingkar Kepala Anak
          </Text>
          <LineChart
            data={{
              labels: labelBulan,
              datasets: [
                {
                  data: lingkarKepala,
                  strokeWidth: 1,
                },
              ],
            }}
            width={width - 50}
            height={220}
            yAxisSuffix={" cm"}
            chartConfig={{
              backgroundGradientFrom: "#F6F7FA",
              backgroundGradientTo: "#F6F7FA",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(14, 110, 186, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              // padding: 8,
              paddingVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>
      </>
    );
  };
  const LingkarLengan = () => {
    return (
      <>
        <View style={{ alignItems: "center", paddingHorizontal: 25 }}>
          <Text style={{ fontFamily: "Medium", fontSize: 14 }}>
            Grafik Perkembangan Lingkar Lengan Anak
          </Text>
          <LineChart
            data={{
              labels: labelBulan,
              datasets: [
                {
                  data: lingkarLengan,
                  strokeWidth: 1,
                },
              ],
            }}
            width={width - 50}
            height={220}
            yAxisSuffix={" cm"}
            chartConfig={{
              backgroundGradientFrom: "#F6F7FA",
              backgroundGradientTo: "#F6F7FA",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(14, 110, 186, ${opacity})`,
              style: {
                borderRadius: 16,
              },
            }}
            style={{
              // padding: 8,
              paddingVertical: 8,
              borderRadius: 10,
            }}
          />
        </View>
      </>
    );
  };

  if (category === "Data") {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
        <View
          style={{
            paddingHorizontal: 25,
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <View
              style={{
                width: "33%",
                borderBottomWidth: 2,
                paddingVertical: 5,
                borderBottomColor: "#0F78CB",
                alignItems: "center",
              }}
            >
              <Text style={styles.textParticipantActive}>Data Anak</Text>
            </View>
            <TouchableOpacity
              style={{
                width: "34%",
                borderBottomWidth: 2,
                paddingVertical: 5,
                borderBottomColor: "#C2BABA",
                alignItems: "center",
              }}
              onPress={() => setCategory("CheckUp")}
            >
              <Text style={styles.textParticipantInactive}>Pemeriksaan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "33%",
                borderBottomWidth: 2,
                paddingVertical: 5,
                borderBottomColor: "#C2BABA",
                alignItems: "center",
              }}
              onPress={() => setCategory("Imunisasi")}
            >
              <Text style={styles.textParticipantInactive}>Imunisasi</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ justifyContent: "center", flex: 1 }}>
          <ScrollView
            style={{
              paddingHorizontal: 25,
              // flex: 1,
              // backgroundColor: "yellow"
              // backgroundColor: "red",
              // justifyContent: "center",
            }}
          >
            <View>
              <View
                style={{
                  marginTop: 45,
                  width: "100%",
                  paddingHorizontal: 10,
                  backgroundColor: "#F6F7FA",
                  borderRadius: 10,
                  alignItems: "center",
                  paddingBottom: 10,
                  // backgroundColor: "red"
                }}
              >
                <Image
                  style={{
                    marginTop: -35,
                    height: 70,
                    width: 70,
                    borderRadius: 50,
                  }}
                  source={require("../../assets/images/profile-child-img.png")}
                />
                <View style={{ marginTop: 10 }}>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.textProfileChild}>Nama Lengkap</Text>
                    <Text style={styles.textProfileChildd}>:</Text>
                    <Text style={styles.valueProfileChild}>
                      {dataChildren ? dataChildren.name : "-"}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.textProfileChild}>Tempat Lahir</Text>
                    <Text style={styles.textProfileChildd}>:</Text>
                    <Text style={styles.valueProfileChild}>
                      {dataChildren ? dataChildren.born_place : "-"}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.textProfileChild}>Tanggal Lahir</Text>
                    <Text style={styles.textProfileChildd}>:</Text>
                    <Text style={styles.valueProfileChild}>{birthDate}</Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.textProfileChild}>
                      Berat Badan Saat Lahir
                    </Text>
                    <Text style={styles.textProfileChildd}>:</Text>
                    <Text style={styles.valueProfileChild}>
                      {dataChildren.checkup
                        ? dataChildren.checkup[0].weight
                        : "-"}{" "}
                      Kg
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.textProfileChild}>
                      Tinggi Badan Saat Lahir
                    </Text>
                    <Text style={styles.textProfileChildd}>:</Text>
                    <Text style={styles.valueProfileChild}>
                      {dataChildren.checkup
                        ? dataChildren.checkup[0].tall
                        : "-"}{" "}
                      cm
                    </Text>
                  </View>
                  {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.textProfileChild}>Anak ke-</Text>
                <Text style={styles.textProfileChildd}>:</Text>
                <Text style={styles.valueProfileChild}>1</Text>
              </View> */}
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.textProfileChild}>Usia</Text>
                    <Text style={styles.textProfileChildd}>:</Text>
                    <Text style={styles.valueProfileChild}>
                      {kidsAge(dataChildren.birth_date)}
                    </Text>
                  </View>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.textProfileChild}>Nama Ibu</Text>
                    <Text style={styles.textProfileChildd}>:</Text>
                    <Text style={styles.valueProfileChild}>
                      {dataChildren.user ? dataChildren.user.name : "-"}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={{ marginTop: 15 }}>
              <ScrollView
                horizontal={true}
                style={{ width: "100%", height: "100%", marginTop: 13 }}
              >
                <BeratBadan />
                <TinggiBadan />
                <LingkarKepala />
                <LingkarLengan />
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        {showLoad ? (
          <View
            style={{
              position: "absolute",
              height: height,
              width: width,
              backgroundColor: "rgba(255, 255, 255, 0.6)",
            }}
          >
            <ActivityIndicator
              style={{ top: height / 3 }}
              size={"large"}
              color={"#0F78CB"}
            />
          </View>
        ) : null}
      </SafeAreaView>
    );
  } else if (category === "CheckUp") {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
        <View style={{ paddingHorizontal: 25 }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "33%",
                borderBottomWidth: 2,
                paddingVertical: 5,
                borderBottomColor: "#C2BABA",
                alignItems: "center",
              }}
              onPress={() => setCategory("Data")}
            >
              <Text style={styles.textParticipantInactive}>Data Anak</Text>
            </TouchableOpacity>
            <View
              style={{
                width: "34%",
                borderBottomWidth: 2,
                paddingVertical: 5,
                borderBottomColor: "#0F78CB",
                alignItems: "center",
              }}
            >
              <Text style={styles.textParticipantActive}>Pemeriksaan</Text>
            </View>
            <TouchableOpacity
              style={{
                width: "33%",
                borderBottomWidth: 2,
                paddingVertical: 5,
                borderBottomColor: "#C2BABA",
                alignItems: "center",
              }}
              onPress={() => setCategory("Imunisasi")}
            >
              <Text style={styles.textParticipantInactive}>Imunisasi</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ fontFamily: "Regular", fontSize: 14, marginTop: 20 }}>
            Riwayat Pemeriksaan Anak
          </Text>
        </View>
        <FlatList
          data={dataChildren.checkup}
          renderItem={(item) => {
            return (
              <View style={{ paddingHorizontal: 25, paddingBottom: 10 }}>
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
                    {dateCheckUp(item.item.createdAt)}
                  </Text>
                  <View style={{ padding: 20 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.textDataChild}>Berat Badan</Text>
                      <Text style={styles.valueDataChild}>
                        {item.item.weight} Kg
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.textDataChild}>Tinggi Badan</Text>
                      <Text style={styles.valueDataChild}>
                        {item.item.tall} cm
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.textDataChild}>Lingkar Kepala</Text>
                      <Text style={styles.valueDataChild}>
                        {item.item.headCircumference} cm
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.textDataChild}>Lingkar Lengan</Text>
                      <Text style={styles.valueDataChild}>
                        {item.item.armCircumference} cm
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.textDataChild}>Catatan Kader</Text>
                      <Text style={styles.valueDataChild}>
                        {item.item.note}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={styles.textDataChild}>Status</Text>
                      <Text style={styles.valueDataChild}>
                        {item.item.status}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
        <View
          style={{
            // position: "absolute",
            paddingTop: 30,
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
            }}
            onPress={
              () => Vaccine()
              // navigation.navigate("ParticipantCheckUpAddScreen", {})
            }
          >
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="add-circle-outline" size={24} color="#fff" />
              <Text
                style={{
                  fontFamily: "Bold",
                  fontSize: 16,
                  color: "#FFFFFF",
                  paddingHorizontal: 10,
                }}
              >
                Pemeriksaan
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  } else if (category === "Imunisasi") {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
        <View style={{ paddingHorizontal: 25 }}>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                width: "33%",
                borderBottomWidth: 2,
                paddingVertical: 5,
                borderBottomColor: "#C2BABA",
                alignItems: "center",
              }}
              onPress={() => setCategory("Data")}
            >
              <Text style={styles.textParticipantInactive}>Data Anak</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                width: "34%",
                borderBottomWidth: 2,
                paddingVertical: 5,
                borderBottomColor: "#C2BABA",
                alignItems: "center",
              }}
              onPress={() => setCategory("CheckUp")}
            >
              <Text style={styles.textParticipantInactive}>Pemeriksaan</Text>
            </TouchableOpacity>
            <View
              style={{
                width: "33%",
                borderBottomWidth: 2,
                paddingVertical: 5,
                borderBottomColor: "#0F78CB",
                alignItems: "center",
              }}
            >
              <Text style={styles.textParticipantActive}>Imunisasi</Text>
            </View>
          </View>
          <Text style={{ fontFamily: "Regular", fontSize: 14, marginTop: 20 }}>
            Riwayat Imunisasi Anak
          </Text>
        </View>
        <FlatList
          // style={{ flex: 1 }}
          data={dataChildren.checkup}
          renderItem={(item) => {
            const tm = new Date(item.item.createdAt)
              .toISOString()
              .substring(11, 16)
              .split("-")
              .reverse()
              .join("-")
              .replace(":", "");

            const dt = item.item.vaccination
              ? new Date(item.item.vaccination.vaccine.createdAt)
                  .toISOString()
                  .substring(0, 10)
                  .replace("-", "")
                  .replace("-", "")
              : "-";
            const ticketNumber = tm + dt;
            if (item.item.vaccination)
              return (
                <View style={{ paddingHorizontal: 25, paddingBottom: 10 }}>
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
                      {item.item.vaccination
                        ? dateCheckUp(item.item.vaccination.createdAt)
                        : "-"}
                    </Text>
                    <View style={{ padding: 20 }}>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.textDataChild}>
                          Jenis Imunisasi
                        </Text>
                        <Text style={styles.valueDataChild}>
                          {item.item.vaccination
                            ? item.item.vaccination.vaccine.name
                            : "-"}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.textDataChild}>Nama Posyandu</Text>
                        <Text style={styles.valueDataChild}>
                          {item.item.posyandu.name}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.textDataChild}>
                          Lokasi Imunisasi
                        </Text>
                        <Text style={styles.valueDataChild}>
                          {item.item.posyandu.address}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.textDataChild}>
                          Jadwal Imunisasi
                        </Text>
                        <Text style={styles.valueDataChild}>
                          {dateCheckUp(
                            item.item.vaccination
                              ? item.item.vaccination.createdAt
                              : "-"
                          )}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.textDataChild}>Nomor Tiket</Text>
                        <Text style={styles.valueDataChild}>
                          {ticketNumber}
                        </Text>
                      </View>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.textDataChild}>Catatan Kader</Text>
                        <Text style={styles.valueDataChild}>
                          {item.item.vaccination
                            ? item.item.vaccination.vaccine.description
                            : "-"}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              );
            else null;
          }}
        />
      </SafeAreaView>
    );
  }
}
