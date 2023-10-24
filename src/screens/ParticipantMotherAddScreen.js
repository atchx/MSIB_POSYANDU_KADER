import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Modal,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import styles from "../styles/style";
import { MaterialIcons } from "@expo/vector-icons";
import { getScan } from "../apis/Scan";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { Camera } from "expo-camera";
import { BarCodeScanner } from "expo-barcode-scanner";
import { height, width } from "../components/Dimension";

export default function ParticipantMotherAddScreen({ navigation }) {
  const [id, setId] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No Access to camera</Text>;
  }

  const getScans = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getScan(token, id).then((res) => {
        if (res.data.data) {
          navigation.navigate("ParticipantMotherScreen", {
            data: res.data.data,
          });
          console.log(res.data.data);
        } else {
          setModalVisible(true);
        }
      });
    });
  };

  const handleBarcodeScanner = async ({ type, data }) => {
    setScanned(true);
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getScan(token, data).then((res) => {
        // console.log(data);
        navigation.navigate("ParticipantMotherScreen", { data: res.data.data });
        console.log(res.data.data);
      });
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <View style={{ flex: 1 }}>
        <Camera
          ratio="16:9"
          style={{
            height: height,
            width: "100%",
          }}
          type={type}
          barCodeScannerSettings={{
            barCodeTypes: [BarCodeScanner.Constants.BarCodeType.qr],
          }}
          onBarCodeScanned={scanned ? undefined : handleBarcodeScanner}
        />
      </View>

      <View
        style={{
          backgroundColor: "#fff",
          elevation: 8,
          paddingHorizontal: 25,
          position: "absolute",
          bottom: 0,
          width: "100%",
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          paddingTop: 40,
          paddingBottom: 90,
          // height: "30%",
          flex: 1,
        }}
      >
        <Text style={{ fontFamily: "Regular", fontSize: 12 }}>
          Tambahkan Melalui NIK
        </Text>
        <View
          style={{
            marginTop: 14,
            borderWidth: 1,
            backgroundColor: "#fff",
            borderRadius: 10,
            borderColor: "#888889",
            paddingVertical: 10,
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "15%",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="search" size={24} color="#888889" />
          </View>
          <TextInput
            keyboardType="numeric"
            onSubmitEditing={() => getScans()}
            onChangeText={(text) => setId(text)}
            placeholder="Cari NIK"
            style={{
              fontFamily: "Regular",
              fontSize: 16,
              width: "85%",
              paddingRight: 10,
            }}
          />
        </View>
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
              NIK yang Anda masukan tidak terdaftar
            </Text>
            <View style={styles.modalContainerButton}>
              <TouchableOpacity
                style={[styles.modalButtonActive, { width: "100%" }]}
                onPress={() => {
                  setModalVisible(false);
                }}
              >
                <Text style={styles.modalTextActive}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
