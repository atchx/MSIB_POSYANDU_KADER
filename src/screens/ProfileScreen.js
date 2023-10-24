import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Modal,
  RefreshControl,
  ScrollView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import ProfileRows from "../components/ProfileRows";
import styles from "../styles/style";
import { height } from "../components/Dimension";
import { FontAwesome5 } from "@expo/vector-icons";
import { getUser } from "../apis/User";
import { setImage } from "../apis/User";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as ImagePicker from "expo-image-picker";
import axios from "../apis/Axios";

export default function ProfileScreen({ navigation }) {
  const [me, setMe] = useState([]);
  const [userImage, setUserImage] = useState(null);

  const getUsers = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getUser(token).then((res) => {
        setMe(res.data.data);
        console.log(res.data.data);
      });
    });
  };

  const uploadImage = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [1, 1],
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
          .post("/kader/me/change-photos", data, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          })
          .then(async (res) => {
            console.log("gambar", res.data.image);
            getUsers();
            // console.log("gambar", res.data.image)
            // setUserImage(res.data.image);
            // let dataa = {
            //   id: me.user_id,
            //   image: res.data.image,
            // };
            // await setImage(token, dataa).then((res) => {
            //   console.log(res.data.data);
            //   getUsers();
            // });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  const logout = async () => {
    await AsyncStorage.clear().then(() => navigation.navigate("LoginScreen"));
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getUsers();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getUsers();
  }, []);

  const getUserImage = (value) => {
    console.log(value);
    if (value) {
      let uris = axios.defaults.baseURL + "images/users/" + value;
      let uriss = uris.replace("api/", "");
      return (
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#0F78CB",
          }}
          source={{ uri: uriss }}
        />
      );
    } else {
      return (
        <Image
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#0F78CB",
          }}
          source={require("../../assets/images/profile-img.png")}
        />
      );
    }
  };

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <LinearGradient
        colors={["#0F78CB", "#0F78CB", "#168BE7", "#5CB0F3"]}
        style={{
          height: height / 15,
          alignItems: "center",
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}
      >
        {getUserImage(me.user ? me.user.photos : null)}
      </LinearGradient>
      <View style={{ alignItems: "center", marginTop: 50 }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            padding: 10,
            // backgroundColor: "red",
          }}
          onPress={() => uploadImage()}
        >
          <FontAwesome5 name="camera" size={12} color="#168BE7" />
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 12,
              color: "#0F78CB",
              marginLeft: 5,
            }}
          >
            Ganti Foto Profile
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ paddingHorizontal: 25 }}>
          <ProfileRows
            icon={"user-alt"}
            title={"Nama Lengkap"}
            value={me.user ? me.user.name : "-"}
          />
          <ProfileRows
            icon={"phone-alt"}
            title={"No. Hp"}
            value={me.user ? me.user.phone : "-"}
          />
          <ProfileRows
            icon={"id-card"}
            title={"NIK"}
            value={me.user ? me.user.nik : "-"}
          />
          <ProfileRows
            icon={"home"}
            title={"Alamat"}
            value={me.user ? me.user.address : "-"}
          />
          <ProfileRows
            icon={"plus-square"}
            title={"Nama Posyandu"}
            value={me.posyandu ? me.posyandu.name : "-"}
          />
          <ProfileRows
            icon={"map-marked-alt"}
            title={"Alamat Posyandu"}
            value={me.posyandu ? me.posyandu.address : "-"}
          />
          <ProfileRows
            icon={"check-square"}
            title={"Status Kader"}
            value={me.user ? me.user.status : "-"}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            marginVertical: 10,
            marginHorizontal: 20,
          }}
        >
          <TouchableOpacity
            style={styles.buttonLogout}
            onPress={() => setModalVisible(true)}
          >
            <FontAwesome5 name="sign-out-alt" size={24} color="#888889" />
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 16,
                color: "#888889",
                marginLeft: 7,
              }}
            >
              Keluar Akun
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonEdit}
            onPress={() =>
              navigation.navigate("ProfileEditScreen", { data: me })
            }
          >
            <FontAwesome5 name="edit" size={24} color="#FFFFFF" />
            <Text
              style={{
                fontFamily: "Medium",
                fontSize: 16,
                color: "#FFFFFF",
                marginLeft: 7,
              }}
            >
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

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
              Anda yakin akan keluar akun?
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
                  logout();
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
