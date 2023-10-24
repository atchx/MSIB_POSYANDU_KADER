import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  StatusBar,
} from "react-native";
import Buttons from "../components/Buttons";
import { height, width } from "../components/Dimension";
import styles from "../styles/style";
import { MaterialIcons } from "@expo/vector-icons";

import { userLogin } from "../apis/Auth";

export default function LoginScreen({ navigation }) {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState(false);

  const navi = (data) => {
    navigation.navigate("VerificationScreen", {
      phone: data,
    });
    setError(false);
  };

  const login = async () => {
    let phoneNumber = phone;
    await userLogin(
      phoneNumber[0] === "0"
        ? phoneNumber.replace(phoneNumber[0], "+62")
        : phoneNumber
    ).then((res) => {
      // console.log(res.data.data[0].level);
      res.status =
        200 && res.data.data[0].level === "kader"
          ? navi(res.data.data[0].phone)
          : /*task : set null to error message*/
            // null;
            // console.log("nomor salah");
            setError(true);
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      {error ? (
        <View
          style={{
            backgroundColor: "#FF5050",
            paddingVertical: 10,
            paddingHorizontal: 25,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
            }}
          >
            <MaterialIcons name="warning" size={32} color="#FFDD15" />
            <Text
              style={{
                fontFamily: "Regular",
                fontSize: 14,
                color: "#fff",
                // backgroundColor: "blue",
              }}
            >
              Maaf Nomor yang anda masukkan tidak terdaftar! Periksa ulang nomor
              anda.
            </Text>
          </View>
        </View>
      ) : null}
      <View style={{ paddingHorizontal: 25, alignItems: "center" }}>
        <Image
          style={{ resizeMode: "contain", height: 180, marginTop: "10%" }}
          source={require("../../assets/images/logo.png")}
        />
        <Text style={styles.textLogin}>
          Masukkan nomor handphone anda yang aktif
        </Text>
        <View style={styles.containerPhoneInput}>
          <View style={styles.containerPhoneIcon}>
            <MaterialIcons name="phone-iphone" size={24} color="#C2BABA" />
          </View>
          <TextInput
            keyboardType="numeric"
            placeholder="+62"
            style={styles.textPhoneInput}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <View style={{ marginVertical: 10 }}></View>
        <Buttons
          label={"Lanjut"}
          // action={() => navigation.navigate("VerificationScreen")}
          action={() => login()}
        />
        <View>
          {/* <View style={{ flexDirection: "row", marginTop: 14 }}>
            <Text style={{ fontFamily: "Regular", fontSize: 14 }}>
              Nomor Hp Bermasalah?
            </Text>
            <Text style={styles.textChangeNumber}>Ganti No.Hp</Text>
          </View> */}
          <Image
            style={{ marginTop: 150 }}
            source={require("../../assets/images/kominfo_medan.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
