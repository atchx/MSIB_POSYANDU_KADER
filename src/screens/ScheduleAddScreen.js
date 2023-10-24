import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Buttons from "../components/Buttons";
import { height, width } from "../components/Dimension";
import styles from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setSchedule } from "../apis/Schedule";

export default function ScheduleAddScreen({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;

    if (Platform.OS === "android") {
      setShow(false);
    }
    if (event.type === "neutralButtonPressed") {
      setDate(new Date(0));
    } else {
      setDate(currentDate);
    }
    // setTextDate(new Date(currentDate));
    setTextDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const submit = async () => {
    let locale = textDate.toLocaleString();
    // let combine = locale
    let last = new Date(textDate).toUTCString();
    let iso = new Date(textDate).toISOString();
    let timezone = textDate.getTimezoneOffset();

    await AsyncStorage.getItem("Token").then(async (token) => {
      await setSchedule(token, locale).then((res) => {
        // console.log(res.data.message); //update if time is today
        console.log(res.data.data);
      });
    });
    navigation.goBack();
    console.log("locale", locale);
    // console.log("uts", last);
    // console.log("iso", iso);
    console.log("text date", textDate);
    // console.log("tz", timezone);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{ paddingHorizontal: 25, width: "100%", paddingBottom: 90 }}
        >
          <Text style={styles.labelForm}>Tanggal Kegiatan</Text>
          {/* <Text>
            selected: {textDate.toLocaleString()}
            {textDate.toString}
          </Text> */}
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#C2BABA",
              paddingVertical: 6,
              borderRadius: 10,
            }}
            onPress={() => showDatepicker()}
          >
            <TextInput
              editable={false}
              placeholder="Tgl/Bln/Thn"
              style={{
                width: "80%",
                fontFamily: "Regular",
                fontSize: 12,
                paddingHorizontal: 15,
              }}
              value={new Date(textDate)
                .toISOString()
                .substring(0, 10)
                .split("-")
                .reverse()
                .join("-")}
              // value={textDate}
            />
            <View
              style={{
                width: "20%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="calendar" size={20} color="#C2BABA" />
            </View>
          </TouchableOpacity>
          <Text style={styles.labelForm}>Waktu Kegiatan</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#C2BABA",
              paddingVertical: 6,
              borderRadius: 10,
            }}
            onPress={() => showTimepicker()}
          >
            <TextInput
              editable={false}
              placeholder="Mulai"
              style={{
                width: "80%",
                fontFamily: "Regular",
                fontSize: 12,
                paddingHorizontal: 15,
              }}
              value={textDate.toLocaleString().substring(11, 16)}
            />
            <View
              style={{
                width: "20%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Ionicons name="time" size={20} color="#C2BABA" />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
          }}
          onPress={() => submit()}
        >
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontFamily: "Bold",
                fontSize: 16,
                color: "#FFFFFF",
                paddingHorizontal: 10,
              }}
            >
              Simpan
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
}
