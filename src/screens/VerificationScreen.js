import React, { useEffect, useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Buttons from "../components/Buttons";
import { height } from "../components/Dimension";
import styles from "../styles/style";
import { EvilIcons } from "@expo/vector-icons";
import { userVerify } from "../apis/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../apis/Axios";

export default function VerificationScreen({ route, navigation }) {
  const { phone } = route.params;
  const [text, setText] = useState(null);
  const [firstCode, setFirstCode] = useState("");
  const [secondCode, setSecondCode] = useState("");
  const [thirdCode, setThirdCode] = useState("");
  const [forthCode, setForthCode] = useState("");

  let [timer, setTimer] = useState(120);
  const [showKirimUlang, setShowKirimUlang] = useState(false);

  const countDown = async () => {
    const itr = setInterval(() => {
      setTimer(timer--);
    }, 1200);

    setTimeout(() => {
      clearInterval(itr);
      setShowKirimUlang(true);
      setTimer(120);
    }, 146400);
  };

  useEffect(() => {
    countDown();
  }, []);

  const resendVerif = async () => {
    await axios.post("/auth/resend-otp", { phone: phone });

    countDown();
    setShowKirimUlang(false);
  };

  const verify = async () => {
    let code = firstCode + secondCode + thirdCode + forthCode;
    await userVerify(phone, code).then(async (result) => {
      if ((result.status = 200)) {
        await AsyncStorage.setItem("Token", result.data.token).then(() => {
          navigation.navigate("TabNavigator");
          // if (result.data) {
          //   navigation.navigate("TabNavigator");
          // } else {
          //   console.log("otp salah");
          // }
        });
      }
    });
  };

  const firstInput = (text) => {
    setFirstCode(text);
    if (text.length === 1) {
      second.current.focus();
    }
  };
  const secondInput = (text) => {
    setSecondCode(text);
    if (text.length === 1) {
      third.current.focus();
    }
  };
  const thirdInput = (text) => {
    setThirdCode(text);
    if (text.length === 1) {
      forth.current.focus();
    }
  };
  const forthInput = (text) => {
    setForthCode(text);
    if (text.length < 1) {
      forth.current.focus();
    }
  };

  const secondRemove = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue === "Backspace") {
      first.current.focus();
    }
  };

  const thirdRemove = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue === "Backspace") {
      second.current.focus();
    }
  };

  const forthRemove = ({ nativeEvent: { key: keyValue } }) => {
    if (keyValue === "Backspace") {
      third.current.focus();
    }
  };

  const first = useRef();
  const second = useRef();
  const third = useRef();
  const forth = useRef();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <View style={{ paddingHorizontal: 25, alignItems: "center" }}>
        <Text style={styles.textTop}>
          Kode verifikasi telah dikirim melalui whatsapp ke {phone}
        </Text>
        <View
          style={{
            marginTop: 50,
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <TextInput
            keyboardType="numeric"
            maxLength={1}
            style={styles.textOTP}
            ref={first}
            onChangeText={firstInput}
          />
          <TextInput
            keyboardType="numeric"
            maxLength={1}
            style={styles.textOTP}
            ref={second}
            onChangeText={secondInput}
            onKeyPress={secondRemove}
          />
          <TextInput
            keyboardType="numeric"
            maxLength={1}
            style={styles.textOTP}
            ref={third}
            onChangeText={thirdInput}
            onKeyPress={thirdRemove}
          />
          <TextInput
            keyboardType="numeric"
            maxLength={1}
            style={styles.textOTP}
            ref={forth}
            onChangeText={forthInput}
            onKeyPress={forthRemove}
          />
        </View>
        <EvilIcons
          style={{ marginTop: 44 }}
          name="clock"
          size={42}
          color="black"
        />
        <Text style={{ fontFamily: "Regular", fontSize: 16 }}>{timer}</Text>
        <View style={styles.containerBottom}>
          <Buttons
            label={"Kirim"}
            // action={() => navigation.navigate("TabNavigator")}
            action={() => verify()}
          />

          <View style={{ flexDirection: "row", marginTop: 14 }}>
            <Text style={{ fontFamily: "Regular", fontSize: 14 }}>
              Kode Verifikasi Belum Masuk?
            </Text>
            {showKirimUlang ? (
              <TouchableOpacity onPress={() => resendVerif()}>
                <Text
                  style={{
                    fontFamily: "Medium",
                    fontSize: 14,
                    marginLeft: 10,
                    color: "#0F78CB",
                    textDecorationLine: "underline",
                  }}
                >
                  Kirim Ulang
                </Text>
              </TouchableOpacity>
            ) : (
              <Text
                style={{
                  fontFamily: "Medium",
                  fontSize: 14,
                  marginLeft: 10,
                  color: "gray",
                  textDecorationLine: "underline",
                }}
              >
                Kirim Ulang
              </Text>
            )}
          </View>

          <Image
            style={{ marginTop: 100 }}
            source={require("../../assets/images/kominfo_medan.png")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
