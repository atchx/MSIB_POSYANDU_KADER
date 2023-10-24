import React from "react";
import { SafeAreaView, ScrollView, StatusBar } from "react-native";
import NotificaitonRows from "../components/NotificationRows";
import styles from "../styles/style";

export default function HomeNotificationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <ScrollView style={{ paddingHorizontal: 25 }}>
        <NotificaitonRows
          place={"Posyandu Mawar"}
          schedule={"22 Agustus 2022 | 08.00-12.00"}
        />
        <NotificaitonRows
          place={"Posyandu Mawar"}
          schedule={"22 Juli 2022 I 08.00-12.00"}
        />
        <NotificaitonRows
          place={"Posyandu Mawar"}
          schedule={"22 Juni 2022 I 08.00-12.00"}
        />
        <NotificaitonRows
          place={"Posyandu Mawar"}
          schedule={"22 Mei 2022 I 08.00-12.00"}
        />
        <NotificaitonRows
          place={"Posyandu Mawar"}
          schedule={"22 Juni 2022 I 08.00-12.00"}
        />
        <NotificaitonRows
          place={"Posyandu Mawar"}
          schedule={"22 Mei 2022 I 08.00-12.00"}
        />
        <NotificaitonRows
          place={"Posyandu Mawar"}
          schedule={"22 April 2022 I 08.00-12.00"}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
