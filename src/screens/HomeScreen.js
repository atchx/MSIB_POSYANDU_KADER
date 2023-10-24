import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Menus from "../components/Menus";
import Carousel from "react-native-snap-carousel-v4";
import BannerSliders from "../components/BannerSliders";
import styles from "../styles/style";
import { height, width } from "../components/Dimension";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUser } from "../apis/User";
import axios from "../apis/Axios";

export default function HomeScreen({ navigation }) {
  const [kader, setKader] = useState({
    name: "",
    posyandu: "",
    photos: "",
  });
  const getToken = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getUser(token).then((res) => {
        // console.log(res.data);
        setKader({
          name: res.data.data.user.name,
          posyandu: res.data.data.posyandu.name,
          photos: res.data.data.user.photos,
        });
      });
    });
  };

  const getUserImage = (value) => {
    console.log(value);
    if (value) {
      let uris = axios.defaults.baseURL + "images/users/" + value;
      let uriss = uris.replace("api/", "");
      return (
        <Image
          style={{ height: 30, width: 30, borderRadius: 50 }}
          source={{ uri: uriss }}
        />
      );
    } else {
      return (
        <Image
          style={{ height: 30, width: 30, borderRadius: 50 }}
          source={require("../../assets/images/profile-img.png")}
        />
      );
    }
  };

  // const getPhoto = () => {
  //   if (kader) {
  //     let uris = axios.defaults.baseURL + "images/users/" + kader.photos;
  //     let uriss = uris.replace("api/", "");
  //     if (kader.photos === null) {
  //       return (
  //         <Image
  //           style={{ height: 30, width: 30, borderRadius: 50 }}
  //           source={require("../../assets/images/home-img.png")}
  //         />
  //       );
  //     } else {
  //       <Image
  //         style={{ height: 30, width: 30, borderRadius: 50 }}
  //         source={{ uri: uriss }}
  //       />;
  //     }
  //   }
  // };
  useEffect(() => {
    getToken();
  }, []);

  const banner = [
    {
      image: require("../../assets/images/banner/b1.png"),
    },
    {
      image: require("../../assets/images/banner/b2.png"),
    },
    {
      image: require("../../assets/images/banner/b3.png"),
    },
    {
      image: require("../../assets/images/banner/b4.png"),
    },
  ];

  const renderBanner = ({ item, index }) => {
    return <BannerSliders data={item} />;
  };

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <LinearGradient
        colors={["#0F78CB", "#0F78CB", "#168BE7", "#2E98EB", "#5CB0F3"]}
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <View style={styles.containerHeaderHome}>
          <View style={{ width: "10%" }}>{getUserImage(kader.photos)}</View>
          <View style={{ width: "70%", paddingLeft: 15 }}>
            <Text style={styles.textNameHome}>{kader.name}</Text>
            <Text style={styles.textPosyanduHome}>{kader.posyandu}</Text>
          </View>
          <View style={styles.containerIconHome}>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeHelpCenterScreen")}
            >
              <FontAwesome name="question-circle" size={28} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("HomeNotificationScreen")}
            >
              <Ionicons name="notifications" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ marginTop: 10 }}>
          <Carousel
            ref={(c) => {
              c;
            }}
            data={banner}
            renderItem={renderBanner}
            sliderWidth={width}
            itemWidth={width / 1.2}
            // loop={true}
          />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              paddingHorizontal: 15,
              flexDirection: "row",
              flexWrap: "wrap",
              // marginTop: 28,
            }}
          >
            <Menus
              label={"Jadwal Posyandu"}
              icon={"medical-services"}
              action={() => navigation.navigate("ScheduleScreen")}
            />
            <Menus
              label={"Data Peserta Pemeriksaan"}
              icon={"groups"}
              action={() => navigation.navigate("ParticipantScreen")}
            />
            <Menus
              label={"Artikel Kesehatan"}
              icon={"article"}
              action={() => navigation.navigate("ArticleScreen")}
            />
            <Menus
              label={"Laporan Posyandu"}
              icon={"stacked-bar-chart"}
              action={() => navigation.navigate("ReportScreen")}
            />
          </View>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
  );
}
