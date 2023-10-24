import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Platform,
  StatusBar,
} from "react-native";
import Buttons from "../components/Buttons";
import styles from "../styles/style";
import { width } from "../components/Dimension";
import { Ionicons } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function ParticipantChildAddScreen({ route, navigation }) {
  const { data } = route.params;
  const [dropDown, setDropDown] = useState(false);

  const [name, setName] = useState("-");
  const [place, setPlace] = useState("-");
  const [sex, setSex] = useState("Laki-Laki");

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

  const submit = () => {
    const mId = textDate.toString;
    let dataa = {
      name: name,
      bornPlace: place,
      // birthDate: new Date(textDate).toISOString,
      birthDate: textDate,
      sex: sex,
      motherId: data.id,
    };
    // console.log(dataa);
    navigation.navigate("ParticipantCheckUpAddScreen", {
      data: JSON.stringify(dataa),
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <ScrollView>
        <View
          style={{ paddingHorizontal: 25, width: "100%", paddingBottom: 90 }}
        >
          <Text style={styles.labelForm}>Nama Lengkap</Text>
          <TextInput
            placeholder="Masukan Nama"
            style={styles.inputForm}
            onChangeText={(text) => setName(text)}
          />
          <Text style={styles.labelForm}>Tempat Lahir</Text>
          <TextInput
            placeholder="Masukkan Tempat"
            style={styles.inputForm}
            onChangeText={(text) => setPlace(text)}
          />
          <Text style={styles.labelForm}>Tanggal Lahir</Text>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "#C2BABA",
              paddingVertical: 6,
              borderRadius: 10,
            }}
            onPress={() => showMode("date")}
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
            </View>
          </TouchableOpacity>
          <Text style={styles.labelForm}>Jenis Kelamin</Text>
          <TouchableOpacity
            style={styles.containerMainDropDown}
            onPress={() => setDropDown(!dropDown)}
          >
            <Text style={styles.labelMainDropDown}>{sex}</Text>
            {!dropDown ? (
              <Ionicons name="ios-caret-down-sharp" size={15} color="#C2BABA" />
            ) : (
              <Ionicons name="ios-caret-up-sharp" size={15} color="#C2BABA" />
            )}
          </TouchableOpacity>
          {dropDown && (
            <View style={styles.containerDropDown}>
              <TouchableOpacity
                style={styles.containerLabelDropDown}
                onPress={() => {
                  setSex("Laki-Laki"), setDropDown(!dropDown);
                }}
              >
                <Text style={styles.labelDropDown}>Laki-Laki</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.containerLabelDropDownLast}
                onPress={() => {
                  setSex("Perempuan"), setDropDown(!dropDown);
                }}
              >
                <Text style={styles.labelDropDown}>Perempuan</Text>
              </TouchableOpacity>
            </View>
          )}
          {/* <Text style={styles.labelForm}>Berat Badan Saat Lahir</Text>
          <TextInput
            placeholder="Masukkan Berat Badan"
            style={styles.inputForm}
            onChangeText={(text) => setWeight(text)}
          /> */}
          {/* <Text style={styles.labelForm}>Tinggi Badan Saat Lahir</Text>
          <TextInput
            placeholder="Masukkan Tinggi Badan"
            style={styles.inputForm}
            onChangeText={(text) => setTall(text)}
          /> */}
          {/* <Text style={styles.labelForm}>Anak Ke-</Text>
          <TextInput placeholder="Masukkan angka" style={styles.inputForm} /> */}
          {/* <Text style={styles.labelForm}>Usia</Text>
          <TextInput placeholder="Masukkan Usia" style={styles.inputForm} /> */}
          <Text style={styles.labelForm}>Nama Ibu</Text>
          <TextInput
            editable={false}
            placeholder="Masukkan nama ibu"
            style={styles.inputForm}
            value={data.name}
          />
          {/* <Text style={styles.labelForm}>Nama Ayah</Text>
          <TextInput
            placeholder="Masukkan nama Ayah"
            style={styles.inputForm}
          /> */}
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
              Selanjutnya
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
