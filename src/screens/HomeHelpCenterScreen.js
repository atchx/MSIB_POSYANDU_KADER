import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import { height, width } from "../components/Dimension";
import styles from "../styles/style";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export default function HomeHelpCenterScreen() {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  const [toggleFour, setToggleFour] = useState(false);
  const [toggleFive, setToggleFive] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <ScrollView style={{ paddingHorizontal: 25 }}>
        {/* Toggle One */}
        <View
          style={{
            paddingVertical: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: "#888889",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => setToggleOne(!toggleOne)}
          >
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-start",
              }}
            >
              <FontAwesome name="question-circle" size={26} color="#0F78CB" />
            </View>
            <View
              style={{
                width: "80%",
              }}
            >
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 13,
                }}
              >
                Apa itu Aplikasi Balitaku?
              </Text>
            </View>
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-end",
              }}
            >
              {toggleOne ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </View>
          </TouchableOpacity>
          {toggleOne && (
            <View>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  marginTop: 10,
                  marginLeft: "10%",
                  // textAlign: "justify",
                }}
              >
                Aplikasi <Text style={{ color: "#0F78CB" }}>Balitaku</Text>{" "}
                merupakan aplikasi pencegahan stunting pada anak. Aplikasi
                Balitaku digunakan Kader untuk mempermudah proses kegiatan
                posyadu mulai dari penginputan data, pengaturan jadwal posyandu,
                melihat status perkembangan anak dan melakukan laporan posyandu
                melalui aplikasi dengan mudah dan cepat. Aplikasi Balitaku juga
                menyediakan berbagai informasi mengenai kesehatan ibu dan anak.
              </Text>
            </View>
          )}
        </View>
        {/* ToggleTwo */}
        <View
          style={{
            paddingVertical: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: "#888889",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => setToggleTwo(!toggleTwo)}
          >
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-start",
              }}
            >
              <FontAwesome name="question-circle" size={26} color="#0F78CB" />
            </View>
            <View
              style={{
                width: "80%",
              }}
            >
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 13,
                }}
              >
                Apa saja fitur-fitur yang ada di aplikasi Balitaku?
              </Text>
            </View>
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-end",
              }}
            >
              {toggleTwo ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </View>
          </TouchableOpacity>
          {toggleTwo && (
            <View>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  marginTop: 10,
                  marginLeft: "10%",
                  // textAlign: "justify",
                }}
              >
                Fitur-fitur yang tersedia pada aplikasi Balitaku antara lain :
                {"\n"}
                <Text style={{ color: "#0F78CB" }}>
                  • Fitur Jadwal posyandu
                </Text>
                {"\n"}Pada fitur ini terdapat kalender dan kader dapat membuat
                jadwal posyandu sendiri.{"\n"}
                <Text style={{ color: "#0F78CB" }}>
                  • Fitur Data peserta pemeriksaan
                </Text>
                {"\n"}Pada fitur ini terdapat data peserta posyandu,
                dikategorikan menjadi dua yaitu list ibu dan anak. Kemudian
                kader dapat melihat jumlah anak yang terkena stunting. Kader
                juga dapat melakukan input data pemeriksaan anak serta melihat
                riwayat pemeriksaan anak.{"\n"}
                <Text style={{ color: "#0F78CB" }}>
                  • Fitur Laporan Posyandu
                </Text>
                {"\n"}
                Pada fitur ini terdapat grafik peserta yang hadir saat kegiatan
                posyandu. Kader juga dapat membuat laporan posyandu dengan
                formulir yang sudah tersedia.{"\n"}
                <Text style={{ color: "#0F78CB" }}>
                  • Fitur Artikel Kesehatan
                </Text>
                {"\n"}Pada fitur ini terdapat informasi tentang kesehatan ibu
                dan anak. Kader dapat menambah wawasan dengan membaca artikel.
                {"\n"}
                <Text style={{ color: "#0F78CB" }}>
                  • Fitur Notifikasi Jadwal
                </Text>
                {"\n"}Pada fitur ini terdapat notifikasi dari jadwal posyandu
                yang dibuat. Bertujuan agar kader ingat dengan kegiatan posyandu
                yang akan dilaksanakan.
                {"\n"}
                <Text style={{ color: "#0F78CB" }}>
                  • Chat kader dengan Nakes
                </Text>
                {"\n"}
                Pada fitur ini langsung terhubung dengan Nakes terdekat yang
                tersedia, sehingga kader dapat mengajukan pertanyaan kapanpun
                selama jam kerja. Fitur ini bertujuan agar kebutuhan atau
                keluhan mendesak dari kader dapat segera ditangani oleh Nakes.
              </Text>
            </View>
          )}
        </View>
        <View
          style={{
            paddingVertical: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: "#888889",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => setToggleThree(!toggleThree)}
          >
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-start",
              }}
            >
              <FontAwesome name="question-circle" size={26} color="#0F78CB" />
            </View>
            <View
              style={{
                width: "80%",
              }}
            >
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 13,
                }}
              >
                Saya mencoba login berulang kali, tetapi selalu gagal, apa yang
                harus saya lakukan?
              </Text>
            </View>
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-end",
              }}
            >
              {toggleThree ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </View>
          </TouchableOpacity>
          {toggleThree && (
            <View>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  marginTop: 10,
                  marginLeft: "10%",
                  // textAlign: "justify",
                }}
              >
                Kader tidak perlu khawatir jika kader mengalami hal ini, mohon
                lakukan hal berikut ini:{"\n"}• Periksa koneksi internet{"\n"}•
                Lakukan login Kembali{"\n"}• Pastikan no handphone sudah benar
              </Text>
            </View>
          )}
        </View>
        {/* ToggleFour */}
        <View
          style={{
            paddingVertical: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: "#888889",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => setToggleFour(!toggleFour)}
          >
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-start",
              }}
            >
              <FontAwesome name="question-circle" size={26} color="#0F78CB" />
            </View>
            <View
              style={{
                width: "80%",
              }}
            >
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 13,
                }}
              >
                Apakah Kader dapat mengubah atau mengedit profile kader?
              </Text>
            </View>
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-end",
              }}
            >
              {toggleFour ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </View>
          </TouchableOpacity>
          {toggleFour && (
            <View>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  marginTop: 10,
                  marginLeft: "10%",
                  // textAlign: "justify",
                }}
              >
                Kader dapat mengubah atau mengedit profile dengan klik menu
                profile sebelah kanan bawah.
              </Text>
            </View>
          )}
        </View>
        {/* ToggleFive */}
        <View
          style={{
            paddingVertical: 20,
            borderBottomWidth: 0.5,
            borderBottomColor: "#888889",
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            onPress={() => setToggleFive(!toggleFive)}
          >
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-start",
              }}
            >
              <FontAwesome name="question-circle" size={26} color="#0F78CB" />
            </View>
            <View
              style={{
                width: "80%",
              }}
            >
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 13,
                }}
              >
                Bagaimana jika aplikasi tidak berjalan?
              </Text>
            </View>
            <View
              style={{
                width: "10%",
                height: "100%",
                alignItems: "flex-end",
              }}
            >
              {toggleFive ? (
                <MaterialIcons
                  name="keyboard-arrow-up"
                  size={24}
                  color="black"
                />
              ) : (
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color="black"
                />
              )}
            </View>
          </TouchableOpacity>
          {toggleFive && (
            <View>
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 12,
                  marginTop: 10,
                  marginLeft: "10%",
                  // textAlign: "justify",
                }}
              >
                Kader tidak perlu khawatir jika kader mengalami hal ini, mohon
                lakukan hal berikut ini:{"\n"}• Periksa koneksi internet{"\n"}•
                Lakukan login Kembali
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
