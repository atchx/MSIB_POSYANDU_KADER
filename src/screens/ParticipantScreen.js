import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  StatusBar,
} from "react-native";
import ChildRows from "../components/ChildRows";
import styles from "../styles/style";
import { MaterialIcons } from "@expo/vector-icons";
import MotherRows from "../components/MotherRows";
import FloatButtons from "../components/FloatButtons";
import { getMaster } from "../apis/Master";
import { getChildren } from "../apis/Children";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "../apis/Axios";

export default function ParticipantScreen({ navigation }) {
  const [master, setMaster] = useState([]);
  const [data, setData] = useState([]);
  const [dataChildren, setDataChildren] = useState([]);
  const [children, setChildren] = useState([]);

  const getMasters = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getMaster(token).then((res) => {
        setData(res.data.data);
        setMaster(res.data.data);
        // console.log("ibu", master);
      });
    });
  };
  const getChildrens = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getChildren(token).then((res) => {
        setDataChildren(res.data.data);
        setChildren(res.data.data);
        // console.log("anak", children);
      });
    });
  };

  const getPhotoMother = (value) => {
    if (value) {
      let uris = axios.defaults.baseURL + "images/users/" + value;
      let uriss = uris.replace("api/", "");
      return (
        <Image
          style={{ width: 80, height: 80, borderRadius: 50 }}
          source={{ uri: uriss }}
        />
      );
    } else {
      return (
        <Image
          style={{ width: 80, height: 80, borderRadius: 50 }}
          source={require("../../assets/images/mother-img.png")}
        />
      );
    }
  };

  const setFlatView = (key) => {
    if (key === "All") {
      setMaster(data);
      setChildren(dataChildren);
      setCategoryActive(key);
    } else {
      let tempData = [];
      let tempDataChildren = [];
      data.filter((val) => {
        val.children.forEach((element) => {
          if (element.status === key) {
            if (tempData[tempData.length - 1] === val) {
              // console.log("data sama");
            } else {
              tempData.push(val);
            }
          }
        });
      });
      dataChildren.filter((val) => {
        if (val.status === key) {
          tempDataChildren.push(val);
        }
      });
      setChildren(tempDataChildren);
      setMaster(tempData);
      setCategoryActive(key);
    }
  };

  const setFlatSearch = (key) => {
    setCategoryActive("All");
    if (key === "") {
      setMaster(data);
      setChildren(dataChildren);
    } else {
      let tempData = [];
      let tempDataChildren = [];
      data.filter((val) => {
        let name = val.name;
        if (name.toLowerCase().includes(key.toLowerCase())) {
          tempData.push(val);
        }
      });
      dataChildren.filter((val) => {
        let nameChildren = val.name;
        if (nameChildren.toLowerCase().includes(key.toLowerCase())) {
          tempDataChildren.push(val);
        }
      });
      setChildren(tempDataChildren);
      setMaster(tempData);
    }
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getMasters();
    await getChildrens();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getMasters();
    getChildrens();
  }, []);

  const [dataChild, setDataChild] = useState(false);
  const [categoryActive, setCategoryActive] = useState("All");

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <View style={{ paddingHorizontal: 25 }}>
        {!dataChild ? (
          <View style={{ flexDirection: "row" }}>
            <View style={styles.containerParticipantActive}>
              <Text style={styles.textParticipantActive}>Data Ibu</Text>
            </View>
            <TouchableOpacity
              style={styles.containerParticipantInactive}
              onPress={() => setDataChild(!dataChild)}
            >
              <Text style={styles.textParticipantInactive}>Data Anak</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={styles.containerParticipantInactive}
              onPress={() => setDataChild(!dataChild)}
            >
              <Text style={styles.textParticipantInactive}>Data Ibu</Text>
            </TouchableOpacity>
            <View style={styles.containerParticipantActive}>
              <Text style={styles.textParticipantActive}>Data Anak</Text>
            </View>
          </View>
        )}
        <View style={styles.containerCategory}>
          <TouchableOpacity
            style={[
              styles.containerCategoryInactive,
              {
                backgroundColor: categoryActive === "All" ? "#2E98EB" : null,
                justifyContent: "center",
              },
            ]}
            onPress={() => setFlatView("All")}
          >
            <Text
              style={[
                styles.textCategoryInactive,
                { color: categoryActive === "All" ? "#fff" : null },
              ]}
            >
              Semua
            </Text>
            {/* <View style={styles.containerTotalInactive}>
              <Text style={styles.textTotalInactive}>50</Text>
            </View> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.containerCategoryInactive,
              {
                backgroundColor: categoryActive === "normal" ? "#84D07E" : null,
                justifyContent: "center",
              },
            ]}
            onPress={() => setFlatView("normal")}
          >
            <Text
              style={[
                styles.textCategoryInactive,
                { color: categoryActive === "normal" ? "#fff" : null },
              ]}
            >
              Normal
            </Text>
            {/* <View style={styles.containerTotalInactive}>
              <Text style={styles.textTotalInactive}>37</Text>
            </View> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.containerCategoryInactive,
              {
                backgroundColor: categoryActive === "gejala" ? "#FDD152" : null,
                justifyContent: "center",
              },
            ]}
            onPress={() => setFlatView("gejala")}
          >
            <Text
              style={[
                styles.textCategoryInactive,
                { color: categoryActive === "gejala" ? "#fff" : null },
              ]}
            >
              Beresiko
            </Text>
            {/* <View style={styles.containerTotalInactive}>
              <Text style={styles.textTotalInactive}>8</Text>
            </View> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.containerCategoryInactive,
              {
                backgroundColor:
                  categoryActive === "stunting" ? "#F56565" : null,
                justifyContent: "center",
              },
            ]}
            onPress={() => setFlatView("stunting")}
          >
            <Text
              style={[
                styles.textCategoryInactive,
                {
                  color: categoryActive === "stunting" ? "#fff" : null,
                },
              ]}
            >
              Stunting
            </Text>
            {/* <View style={styles.containerTotalInactive}>
              <Text style={styles.textTotalInactive}>5</Text>
            </View> */}
          </TouchableOpacity>
        </View>
        <View style={styles.containerSearch}>
          <View style={styles.containerSearchIcon}>
            <MaterialIcons name="search" size={24} color="#00000080" />
          </View>
          <TextInput
            placeholder="Cari"
            style={styles.textInputSearch}
            onChangeText={(text) => setFlatSearch(text)}
          />
        </View>
      </View>
      {!dataChild ? (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={master}
          renderItem={(item) => {
            return (
              <View style={{ paddingHorizontal: 25, paddingBottom: 10 }}>
                <TouchableOpacity
                  style={{
                    marginTop: 10,
                    width: "100%",
                    backgroundColor: "#FFFFFF",
                    borderRadius: 10,
                    elevation: 8,
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  onPress={
                    () =>
                      navigation.navigate("ParticipantMotherScreen", {
                        data: item.item,
                      })
                    // console.log(item.item)
                  }
                >
                  <View
                    style={{
                      width: "13%",
                      height: "50%",
                      position: "absolute",
                      borderTopLeftRadius: 10,
                      left: 0,
                      top: 0,
                      backgroundColor: "#92CAF7",
                    }}
                  />
                  <View
                    style={{
                      width: "30%",
                      alignItems: "center",
                    }}
                  >
                    {getPhotoMother(item.item.photos)}
                  </View>
                  <View
                    style={{
                      width: "70%",
                      paddingRight: 10,
                      paddingVertical: 10,
                    }}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: "35%" }}>
                        <Text style={styles.textMotherRow}>Id Peserta</Text>
                      </View>
                      <View style={{ width: "5%" }}>
                        <Text style={styles.textMotherRow}>:</Text>
                      </View>
                      <View style={{ width: "60%" }}>
                        <Text style={styles.textMotherRow}>{item.item.id}</Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: "35%" }}>
                        <Text style={styles.textMotherRow}>Nama Ibu</Text>
                      </View>
                      <View style={{ width: "5%" }}>
                        <Text style={styles.textMotherRow}>:</Text>
                      </View>
                      <View style={{ width: "60%" }}>
                        <Text style={styles.textMotherRow}>
                          {item.item.name}
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: "35%" }}>
                        <Text style={styles.textMotherRow}>NIK</Text>
                      </View>
                      <View style={{ width: "5%" }}>
                        <Text style={styles.textMotherRow}>:</Text>
                      </View>
                      <View style={{ width: "60%" }}>
                        <Text style={styles.textMotherRow}>
                          {item.item.nik}
                        </Text>
                      </View>
                    </View>
                    <View style={{ flexDirection: "row" }}>
                      <View style={{ width: "35%" }}>
                        <Text style={styles.textMotherRow}>Nama Anak</Text>
                      </View>
                      <View style={{ width: "5%" }}>
                        <Text style={styles.textMotherRow}>:</Text>
                      </View>
                      <View style={{ width: "60%" }}>
                        {item.item.children.map((value) => {
                          return (
                            <View key={value.id}>
                              <Text
                                style={[
                                  styles.textMotherRow,
                                  {
                                    color:
                                      value.status === "normal"
                                        ? "#2FCD3F"
                                        : value.status === "gejala"
                                        ? "#F8B905"
                                        : "#F33D3D",
                                  },
                                ]}
                              >
                                {value.name}
                              </Text>
                            </View>
                          );
                        })}
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      ) : (
        <FlatList
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          data={children}
          renderItem={(item) => {
            return (
              <View style={{ paddingHorizontal: 25, paddingBottom: 10 }}>
                <TouchableOpacity
                  style={{
                    width: "100%",
                    flexDirection: "row",
                    borderBottomWidth: 1,
                    borderBottomColor: "#C2BABA",
                    alignItems: "center",
                  }}
                  onPress={() =>
                    navigation.navigate("ParticipantChildScreen", {
                      id: item.item.id,
                    })
                  }
                >
                  <View
                    style={{
                      paddingVertical: 10,
                      width: "20%",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      style={{ width: 50, height: 50, borderRadius: 50 }}
                      source={require("../../assets/images/profile-child-img.png")}
                    />
                  </View>
                  <View style={{ width: "75%", paddingHorizontal: 10 }}>
                    <Text
                      style={{
                        fontFamily: "Medium",
                        fontSize: 13,
                        color:
                          item.item.status === "normal"
                            ? "#2FCD3F"
                            : item.item.status === "gejala"
                            ? "#F8B905"
                            : "#F33D3D",
                      }}
                    >
                      {item.item.name}
                    </Text>
                    <Text style={{ fontFamily: "Regular", fontSize: 12 }}>
                      {item.item.sex}
                    </Text>
                  </View>
                  <View style={{ width: "5%" }}>
                    <MaterialIcons
                      name="chevron-right"
                      size={24}
                      color="#292A2E"
                    />
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
          keyExtractor={(item, index) => item.id}
        />
      )}
      {!dataChild ? (
        <FloatButtons
          action={() => navigation.navigate("ParticipantMotherAddScreen")}
        />
      ) : null}
    </SafeAreaView>
  );
}
