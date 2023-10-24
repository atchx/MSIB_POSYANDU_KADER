import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import { width } from "../components/Dimension";
import styles from "../styles/style";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import axios from "../apis/Axios";
import { setReport } from "../apis/Report";

export default function ReportEditScreen({ navigation, route }) {
  const { data } = route.params;
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [textDate, setTextDate] = useState(new Date());
  const [detail, setDetail] = useState("");
  const [reportImage, setReportImage] = useState(null);
  const [valueImage, setValueImage] = useState(data.image);

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
    setTextDate(new Date(currentDate));
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

  const uploadImage = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [16, 9],
        quality: 1,
      });
      if (result.cancelled) {
        return;
      }

      const data = new FormData();
      data.append("image", {
        uri: result.uri,
        name: "image.jpg",
        type: "image/jpg",
      });
      if (token) {
        console.log(data);

        await axios
          .post("/kader/report/upload", data, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          })
          .then(async (res) => {
            console.log(res.data.image);
            setReportImage(res.data.image);
            // if ((res.status = 200)) {
            //   console.log(res.data.image);
            //   await getReportKader(token).then(async (result) => {
            //     await AsyncStorage.setItem(
            //       "reportData",
            //       JSON.stringify(result.data.data)
            //     ).then(() => {
            //       AsyncStorage.setItem("Token", result.data.token).then(() => {
            //         dataReport();
            //       });
            //     });
            //   });
            // }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const getReportImage = (value) => {
    console.log(value);
    if (value) {
      let uris = axios.defaults.baseURL + "images/report/kader/" + value;
      let uriss = uris.replace("api/", "");
      return (
        <View style={{ marginTop: 10 }}>
          <Image
            style={{
              width: 120,
              height: 100,
              borderRadius: 10,
            }}
            source={{ uri: uriss }}
          />
        </View>
      );
    } else {
      return (
        <View style={{ marginTop: 10 }}>
          <Image
            style={{
              width: 120,
              height: 100,
              borderRadius: 10,
            }}
            source={require("../../assets/images/stock-report.png")}
          />
        </View>
      );
    }
  };

  const submit = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      let dataa = {
        time: textDate.toLocaleString(),
        detail: detail,
        image: reportImage,
      };
      await setReport(token, dataa).then((res) => {
        // console.log(res.data.message); //update if time is today
        console.log(res.data.data);
      });
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View
          style={{ paddingHorizontal: 25, width: "100%", paddingBottom: 90 }}
        >
          <Text style={styles.labelForm}>Tanggal Kegiatan</Text>
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
          <Text style={styles.labelForm}>Keterangan Kegiatan</Text>
          <TextInput
            placeholder="Tambahkan penjelasan singkat tentang kegiatan posyandu"
            multiline={true}
            style={[
              styles.inputForm,
              { height: 100, textAlignVertical: "top" },
            ]}
            onChangeText={(text) => setDetail(text)}
          />
          <Text style={styles.labelForm}>Dokumentasi Kegiatan</Text>
          <TouchableOpacity onPress={() => uploadImage()}>
            <TextInput
              editable={false}
              placeholder="Gambar file"
              style={styles.inputForm}
            />
          </TouchableOpacity>
          {getReportImage(valueImage)}
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
              Selesai
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
          display="default"
          onChange={onChange}
        />
      )}
    </SafeAreaView>
  );
}
