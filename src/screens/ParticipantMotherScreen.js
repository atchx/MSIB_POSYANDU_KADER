import { LinearGradient } from "expo-linear-gradient";
import React from "react";
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
import MotherChildRows from "../components/MotherChildRows";
import styles from "../styles/style";
import axios from "../apis/Axios";

export default function ParticipantMotherScreen({ navigation, route }) {
  const { data } = route.params;
  const getPhotoMother = (value) => {
    if (value) {
      let uris = axios.defaults.baseURL + "images/users/" + data.photos;
      let uriss = uris.replace("api/", "");
      return (
        <Image
          style={{
            resizeMode: "contain",
            height: width / 3,
            width: width / 3,
            borderRadius: 75,
            borderWidth: 2,
            borderColor: "#0F78CB",
          }}
          source={{ uri: uriss }}
        />
      );
    } else {
      return (
        <Image
          style={{
            height: 130,
            width: 130,
            borderRadius: 75,
            borderWidth: 2,
            borderColor: "#0F78CB",
          }}
          source={require("../../assets/images/profile-mother-img.png")}
        />
      );
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <View style={{ height: height / 5 }}>
        <LinearGradient
          colors={["#0F78CB", "#0F78CB", "#168BE7", "#5CB0F3"]}
          style={{
            height: height / 12,
            alignItems: "center",
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        >
          {getPhotoMother(data ? data.photos : null)}
        </LinearGradient>
      </View>
      <ScrollView>
        <View style={{ width: "100%", paddingHorizontal: 35 }}>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textProfileMother}>Id Peserta</Text>
            <Text style={styles.textProfileMotherr}>:</Text>
            <Text style={styles.valueIDProfileMother}>
              {data ? data.id : null}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textProfileMother}>Nama</Text>
            <Text style={styles.textProfileMotherr}>:</Text>
            <Text style={styles.valueProfileMother}>
              {data ? data.name : null}
            </Text>
          </View>
          {/* <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.textProfileMother}>Nama Suami</Text>
          <Text style={styles.textProfileMotherr}>:</Text>
          <Text style={styles.valueProfileMother}>Willie Tanner</Text>
        </View> */}
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textProfileMother}>NIK</Text>
            <Text style={styles.textProfileMotherr}>:</Text>
            <Text style={styles.valueProfileMother}>
              {data ? data.nik : null}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textProfileMother}>No. Hp</Text>
            <Text style={styles.textProfileMotherr}>:</Text>
            <Text style={styles.valueProfileMother}>
              {data ? data.phone : null}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.textProfileMother}>Alamat</Text>
            <Text style={styles.textProfileMotherr}>:</Text>
            <Text style={styles.valueProfileMother}>
              {data ? data.address : null}
            </Text>
          </View>
        </View>

        <View style={{ alignItems: "center", marginTop: 20 }}>
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 14,
            }}
          >
            Nama Anak
          </Text>
          {data
            ? data.children.map((value) => {
                return (
                  <MotherChildRows
                    key={value.id}
                    name={value.name}
                    action={() =>
                      navigation.navigate("ParticipantChildScreen", {
                        id: value.id,
                      })
                    }
                  />
                );
              })
            : null}
        </View>
      </ScrollView>

      <View
        style={{
          // position: "absolute",
          // bottom: 16,
          // left: 25,
          paddingVertical: 10,
          paddingHorizontal: 25,
        }}
      >
        <TouchableOpacity
          style={{
            width: width - 50,
            borderWidth: 1,
            borderColor: "#C2BABA",
            borderRadius: 10,
            backgroundColor: "#fff",
            paddingVertical: 15,
            alignItems: "center",
          }}
          onPress={() =>
            navigation.navigate("ParticipantChildAddScreen", {
              data: data,
            })
          }
        >
          <Text
            style={{ fontFamily: "Medium", fontSize: 16, color: "#888889" }}
          >
            Tambah Data Anak
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
