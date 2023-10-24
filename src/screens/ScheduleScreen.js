import React, { useState, useEffect, useCallback } from "react";
import {
  SafeAreaView,
  View,
  TouchableOpacity,
  Text,
  ScrollView,
  RefreshControl,
  Modal,
  StatusBar,
} from "react-native";
import { Calendar } from "react-native-calendars";
import ScheduleRows from "../components/ScheduleRows";
import FloatButtons from "../components/FloatButtons";
import DateTimePicker from "@react-native-community/datetimepicker";
import styles from "../styles/style";
import { getSchedule } from "../apis/Schedule";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function ScheduleScreen({ navigation }) {
  const [schedule, setSchedule] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const getSchedules = async () => {
    await AsyncStorage.getItem("Token").then(async (token) => {
      await getSchedule(token).then((res) => {
        if (res.data.data) {
          setSchedule(res.data.data);
          console.log(res.data.data);
        }
      });
    });
  };

  const addSchedule = () => {
    // const date = schedule.schedule.substring(0, 10);
    let firstDate = new Date(
      schedule.schedule ? schedule.schedule.substring(0, 10) : null
    );
    // console.log("perbandingan", firstDate);
    // console.log(new Date());
    if (firstDate > new Date()) {
      null;
    } else {
      return (
        <FloatButtons action={() => navigation.navigate("ScheduleAddScreen")} />
      );
    }
  };

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await getSchedules();
    setRefreshing(false);
  }, []);

  useEffect(() => {
    getSchedules();
  }, []);

  const markedDate = schedule.schedule
    ? schedule.schedule.substring(0, 10)
    : null;
  const mark = markedDate;
  console.log(markedDate);

  const day = (value) => {
    const dates = new Date(value);
    // console.log("dates", dates);
    const dayName = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jum'at",
      "Sabtu",
    ];
    const dayNow = dayName[dates.getDay()];
    console.log(dayNow);
    return dayNow;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ paddingHorizontal: 25, paddingBottom: 90 }}>
          <Calendar
            theme={styles.calendarTheme}
            markingType={"custom"}
            markedDates={{
              [mark]: {
                customStyles: {
                  container: {
                    borderWidth: 1,
                    borderColor: "#0F78CB",
                  },
                },
              },
            }}
          />
          {schedule.schedule ? (
            <ScheduleRows
              hari={day(schedule.schedule.substring(0, 10))}
              tanggal={
                schedule.schedule ? schedule.schedule.substring(8, 10) : "-"
              }
              kegiatan={"Jadwal Selanjutnya"}
              posyandu={schedule.posyandu ? schedule.posyandu : "-"}
              waktu={
                schedule.schedule
                  ? schedule.schedule.substring(11, 16) + " Wib"
                  : "-"
              }
              action={() => setModalVisible(true)}
            />
          ) : null}
        </View>
      </ScrollView>
      {/* {schedule.schedule ? null : (
        <FloatButtons action={() => navigation.navigate("ScheduleAddScreen")} />
      )} */}
      {addSchedule()}
      {/* <FloatButtons action={() => navigation.navigate("ScheduleAddScreen")} /> */}
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
              Anda yakin mengubah Jadwal Posyandu?
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
                onPress={() =>
                  navigation.navigate(
                    "ScheduleEditScreen",
                    { data: schedule },
                    setModalVisible(false)
                  )
                }
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
