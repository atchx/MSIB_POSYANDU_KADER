import MyStack from "./src/routes/route";
import {
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from "@expo-google-fonts/poppins";
import { useFonts } from "expo-font";

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Thin: Poppins_100Thin,
    ExtraLight: Poppins_200ExtraLight,
    Light: Poppins_300Light,
    Regular: Poppins_400Regular,
    Medium: Poppins_500Medium,
    SemiBold: Poppins_600SemiBold,
    Bold: Poppins_700Bold,
    ExtraBold: Poppins_800ExtraBold,
    Black: Poppins_900Black,
  });
  if (!fontsLoaded) {
    return null;
  }
  return <MyStack />;
}
