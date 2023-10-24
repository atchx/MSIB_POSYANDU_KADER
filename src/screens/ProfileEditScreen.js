import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Buttons from "../components/Buttons";
import styles from "../styles/style";
import { width } from "../components/Dimension";
import { Ionicons } from "@expo/vector-icons";
import { updateUser } from "../apis/User";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ProfileEditScreen({ navigation, route }) {
  const { data } = route.params;
  console.log(data);
  const [modalVisible, setModalVisible] = useState(false);
  const [phone, setPhone] = useState("");
  const [eyoy, setEyoy] = useState(false);
  // const tempPhone = data.user.phone;
  // console.log();

  const submit = async () => {
    if (phone.length < 13) {
      setEyoy(true);
    } else {
      await AsyncStorage.getItem("Token").then(async (token) => {
        let dataa = {
          id: data.user_id,
          phone: phone,
        };
        await updateUser(token, dataa).then((res) => {
          console.log(res.data.data);
        });
      });
      setEyoy(true);
      navigation.goBack();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <ScrollView>
        <View
          style={{ paddingHorizontal: 25, width: "100%", paddingBottom: 90 }}
        >
          <Text style={styles.labelForm}>No. Hp</Text>
          <TextInput
            placeholder={data.user.phone}
            // value={data.user.phone}
            style={styles.inputForm}
            onChangeText={(text) => setPhone(text)}
          />
          {eyoy ? (
            <Text style={[styles.labelForm, { color: "red" }]}>
              Format No. Hp Salah
            </Text>
          ) : null}
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
              Simpan
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
              Anda yakin menyimpan perubahan?
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
                onPress={() => {
                  setModalVisible(false);
                  submit();
                }}
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
