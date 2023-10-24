import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../screens/SplashScreen";
import IntroScreen from "../screens/IntroScreen";
import LoginScreen from "../screens/LoginScreen";
import VerificationScreen from "../screens/VerificationScreen";
import TabNavigator from "./Tabs";
import ProfileEditScreen from "../screens/ProfileEditScreen";
import ScheduleAddScreen from "../screens/ScheduleAddScreen";
import ScheduleEditScreen from "../screens/ScheduleEditScreen";
import ScheduleAddLocationScreen from "../screens/ScheduleAddLocationScreen";
import ParticipantMotherAddScreen from "../screens/ParticipantMotherAddScreen";
import ParticipantChildAddScreen from "../screens/ParticipantChildAddScreen";
import ParticipantCheckUpAddScreen from "../screens/ParticipantCheckUpAddScreen";
import ParticipantImunizationAddScreen from "../screens/ParticipantImunizationAddScreen";
import ReportAddScreen from "../screens/ReportAddScreen";
import ReportEditScreen from "../screens/ReportEditScreen";

const Stack = createNativeStackNavigator();
const MyStack = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator
        initialRouteName="IntroScreen"
        // screenOptions={{ headerShown: false }}
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0F78CB",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "SemiBold",
            fontSize: 18,
          },
          headerTitleAlign: "center",
        }}
      >
        {/* <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VerificationScreen"
          component={VerificationScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProfileEditScreen"
          component={ProfileEditScreen}
          options={{
            title: "Edit Profile",
          }}
        />
        <Stack.Screen
          name="ScheduleAddScreen"
          component={ScheduleAddScreen}
          options={{
            title: "Tambahkan Jadwal",
          }}
        />
        <Stack.Screen
          name="ScheduleEditScreen"
          component={ScheduleEditScreen}
          options={{
            title: "Ubah Jadwal",
          }}
        />
        <Stack.Screen
          name="ParticipantMotherAddScreen"
          component={ParticipantMotherAddScreen}
          options={{
            title: "Tambah Peserta",
          }}
        />
        <Stack.Screen
          name="ParticipantChildAddScreen"
          component={ParticipantChildAddScreen}
          options={{
            title: "Formulir Anak",
          }}
        />
        <Stack.Screen
          name="ParticipantCheckUpAddScreen"
          component={ParticipantCheckUpAddScreen}
          options={{
            title: "Formulir Pemeriksaan",
          }}
        />
        <Stack.Screen
          name="ParticipantImunizationAddScreen"
          component={ParticipantImunizationAddScreen}
          options={{
            title: "Formulir Imunisasi",
          }}
        />
        <Stack.Screen
          name="ReportAddScreen"
          component={ReportAddScreen}
          options={{
            title: "Laporan Posyandu",
          }}
        />
        <Stack.Screen
          name="ReportEditScreen"
          component={ReportEditScreen}
          options={{
            title: "Laporan Posyandu",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
