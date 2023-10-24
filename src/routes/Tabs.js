import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";
// import Headers from "../components/Headers";

import HomeScreen from "../screens/HomeScreen";
import HomeHelpCenterScreen from "../screens/HomeHelpCenterScreen";
import HomeNotificationScreen from "../screens/HomeNotificationScreen";

import ScheduleScreen from "../screens/ScheduleScreen";
import ScheduleDetailScreen from "../screens/ScheduleDetailScreen";
// import ScheduleAddScreen from "../screens/ScheduleAddScreen";
// import ScheduleAddLocationScreen from "../screens/ScheduleAddLocationScreen";

import ParticipantScreen from "../screens/ParticipantScreen";
import ParticipantMotherScreen from "../screens/ParticipantMotherScreen";
// import ParticipantMotherAddScreen from "../screens/ParticipantMotherAddScreen";
import ParticipantChildScreen from "../screens/ParticipantChildScreen";
// import ParticipantChildAddScreen from "../screens/ParticipantChildAddScreen";
// import ParticipantCheckUpAddScreen from "../screens/ParticipantCheckUpAddScreen";
// import ParticipantImunizationAddScreen from "../screens/ParticipantImunizationAddScreen";

import ArticleScreen from "../screens/ArticleScreen";
import ArticleDetailScreen from "../screens/ArticleDetailScreen";

import ReportScreen from "../screens/ReportScreen";
// import ReportAddScreen from "../screens/ReportAddScreen";
import ReportDetailScreen from "../screens/ReportDetailScreen";

import ChatScreen from "../screens/ChatScreen";
import ChatDetailScreen from "../screens/ChatDetailScreen";
import ProfileScreen from "../screens/ProfileScreen";
// import ProfileEditScreen from "../screens/ProfileEditScreen";

const HomeStack = createNativeStackNavigator();
function HomeStackScreen() {
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="HomeHelpCenterScreen"
        component={HomeHelpCenterScreen}
        options={{
          title: "Pusat Bantuan",
        }}
      />
      <HomeStack.Screen
        name="HomeNotificationScreen"
        component={HomeNotificationScreen}
        options={{
          title: "Notifikasi",
        }}
      />
      <HomeStack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{
          title: "Jadwal Posyandu",
        }}
      />
      {/* <HomeStack.Screen
        name="ScheduleAddScreen"
        component={ScheduleAddScreen}
        options={{
          title: "Tambahkan Jadwal",
        }}
      /> */}
      {/* <HomeStack.Screen
        name="ScheduleAddLocationScreen"
        component={ScheduleAddLocationScreen}
        options={{
          title: "Tambahkan Lokasi",
        }}
      /> */}
      <HomeStack.Screen
        name="ScheduleDetailScreen"
        component={ScheduleDetailScreen}
        options={{
          title: "Jadwal Posyandu",
        }}
      />
      <HomeStack.Screen
        name="ParticipantScreen"
        component={ParticipantScreen}
        options={{
          title: "Data Peserta Pemeriksaan",
        }}
      />
      <HomeStack.Screen
        name="ParticipantMotherScreen"
        component={ParticipantMotherScreen}
        options={{
          title: "Profile Ibu",
          headerShadowVisible: false,
        }}
      />
      {/* <HomeStack.Screen
        name="ParticipantMotherAddScreen"
        component={ParticipantMotherAddScreen}
        options={{
          title: "Tambah Peserta",
        }}
      /> */}
      <HomeStack.Screen
        name="ParticipantChildScreen"
        component={ParticipantChildScreen}
        options={{
          title: "Profile Anak",
        }}
      />
      {/* <HomeStack.Screen
        name="ParticipantChildAddScreen"
        component={ParticipantChildAddScreen}
        options={{
          title: "Formulir Anak",
        }}
      /> */}
      {/* <HomeStack.Screen
        name="ParticipantCheckUpAddScreen"
        component={ParticipantCheckUpAddScreen}
        options={{
          title: "Formulir Pemeriksaan",
        }}
      /> */}
      {/* <HomeStack.Screen
        name="ParticipantImunizationAddScreen"
        component={ParticipantImunizationAddScreen}
        options={{
          title: "Formulir Imunisasi",
        }}
      /> */}
      <HomeStack.Screen
        name="ArticleScreen"
        component={ArticleScreen}
        options={{
          title: "Artikel",
        }}
      />
      <HomeStack.Screen
        name="ArticleDetailScreen"
        component={ArticleDetailScreen}
        options={{
          title: "Artikel",
        }}
      />
      <HomeStack.Screen
        name="ReportScreen"
        component={ReportScreen}
        options={{
          title: "Laporan Posyandu",
        }}
      />
      {/* <HomeStack.Screen
        name="ReportAddScreen"
        component={ReportAddScreen}
        options={{
          title: "Laporan Posyandu",
        }}
      /> */}
      <HomeStack.Screen
        name="ReportDetailScreen"
        component={ReportDetailScreen}
        options={{
          title: "Laporan Posyandu",
        }}
      />
    </HomeStack.Navigator>
  );
}

const ChatStack = createNativeStackNavigator();
function ChatStackScreen() {
  return (
    <ChatStack.Navigator
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
      <ChatStack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{ title: "Chat", headerShadowVisible: false }}
      />
      <ChatStack.Screen name="ChatDetailScreen" component={ChatDetailScreen} />
    </ChatStack.Navigator>
  );
}

const ProfileStack = createNativeStackNavigator();
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator
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
      <ProfileStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Profile", headerShadowVisible: false }}
      />
      {/* <ProfileStack.Screen
        name="ProfileEditScreen"
        component={ProfileEditScreen}
        options={{
          title: "Edit Profile",
        }}
      /> */}
    </ProfileStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused ? "home" : "home";
            } else if (route.name === "Chat") {
              iconName = focused ? "chat" : "chat";
            } else if (route.name === "Profile") {
              iconName = focused ? "person" : "person";
            }
            return <MaterialIcons name={iconName} color={color} size={32} />;
          },
          tabBarActiveTintColor: "#0F78CB",
          tabBarInactiveTintColor: "#C2BABA",
          headerShown: false,
          tabBarLabelStyle: { fontFamily: "Medium", fontSize: 10 },
          tabBarStyle: { height: 82 },
          tabBarItemStyle: { padding: 14 },
        };
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      {/* <Tab.Screen name="Chat" component={ChatStackScreen} /> */}
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}
