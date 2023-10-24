import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TextInput,
  Modal,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import styles from "../styles/style";
import { getVaccine } from "../apis/Vaccine";
import { width } from "../components/Dimension";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { setCheckup } from "../apis/CheckUp";

export default function ParticipantImunizationAddScreen({ navigation, route }) {
  const { data } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [vac, setVac] = useState([]);
  // console.log(data);
  const [dropDown, setDropDown] = useState(false);
  let [vacId, setVacId] = useState(null);
  let [vacName, setVacName] = useState("Pilih Nama Vaksin");
  let [vacType, setVacType] = useState("");
  let [vacDesc, setVacDesc] = useState("");
  const [note, setNote] = useState("-");

  const getVaccines = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getVaccine(token).then((res) => {
        setVac(res.data.data);
        // console.log(vac);
      });
    });
  };

  useEffect(() => {
    getVaccines();
  }, []);

  const submit = async () => {
    let dataa = {
      checkup: JSON.parse(data),
      vacId: vacId,
      note: note,
    };
    console.log(dataa);
    await AsyncStorage.getItem("Token").then(async (token) => {
      await setCheckup(token, dataa).then((res) => {
        console.log(res.data.data);
      });
    });
    navigation.navigate("ParticipantScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <ScrollView>
        <View
          style={{ paddingHorizontal: 25, width: "100%", paddingBottom: 90 }}
        >
          {/* <Text>{data.dataChild.name}</Text> */}
          {/* <Text style={styles.labelForm}>Waktu Pelaksanaan</Text>
          <TextInput placeholder="Tgl/Bln/Thn" style={styles.inputForm} /> */}
          <Text style={styles.labelForm}>Nama Vaksin</Text>
          <TouchableOpacity
            style={styles.containerMainDropDown}
            onPress={() => setDropDown(!dropDown)}
          >
            <Text style={[styles.labelMainDropDown, { color: "#000" }]}>
              {vacName}
            </Text>
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
                  setVacName("-"),
                    setDropDown(!dropDown),
                    setVacDesc("-"),
                    setVacType("-"),
                    setVacDesc("-"),
                    setVacId(null);
                }}
              >
                <Text style={styles.labelDropDown}>-</Text>
              </TouchableOpacity>
              {vac.map((value, index) => {
                let indicator = false;
                let last = vac.length;
                if ((last = index)) {
                  indicator = true;
                }
                return (
                  <TouchableOpacity
                    key={value.id}
                    style={
                      indicator
                        ? styles.containerLabelDropDownLast
                        : styles.containerLabelDropDown
                    }
                    onPress={() => {
                      setVacName(value.name),
                        setDropDown(!dropDown),
                        setVacType(value.type),
                        setVacDesc(value.description),
                        setVacId(value.id);
                    }}
                  >
                    <Text style={styles.labelDropDown}>{value.name}</Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
          <Text style={styles.labelForm}>Tipe Vaksin</Text>
          <TextInput
            editable={false}
            value={vacType}
            placeholder="Masukkan Tipe Vaksin"
            style={styles.inputForm}
          />
          {/* <Text style={styles.labelForm}>Lokasi Imunisasi</Text>
          <TextInput placeholder="Masukkan alamat" style={styles.inputForm} />
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextInput placeholder="Kecamatan" style={styles.inputTwoForm} />
            <TextInput placeholder="Kelurahan" style={styles.inputTwoForm} />
          </View> */}
          <Text style={styles.labelForm}>Deskripsi Vaksin</Text>
          <TextInput
            editable={false}
            placeholder="Masukan Deskripsi Vaksin"
            value={vacDesc}
            style={[
              styles.inputForm,
              { height: 100, textAlignVertical: "top" },
            ]}
          />
          {/* <Text style={styles.labelForm}>No Tiket</Text>
          <TextInput
            placeholder="Masukkan nomor tiket"
            style={styles.inputForm}
          /> */}
          <Text style={styles.labelForm}>Catatan Kader</Text>
          <TextInput
            multiline={true}
            placeholder="Tambahkan catatan tentang pertumbuhan anak"
            style={[
              styles.inputForm,
              { height: 100, textAlignVertical: "top" },
            ]}
            onChangeText={(text) => setNote(text)}
          />
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
          // onPress={() => navigation.navigate("ParticipantImunizationAddScreen")}

          onPress={() => setModalVisible(true)}
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
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              Anda yakin data yang anda masukan sudah benar?
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
                onPress={() => submit()}
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
