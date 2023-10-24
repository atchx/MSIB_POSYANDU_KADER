import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import styles from "../styles/style";
import { width } from "../components/Dimension";

export default function ParticipantCheckUpAddScreen({ route, navigation }) {
  const { data } = route.params;

  const [weight, setWeight] = useState(0);
  const [tall, setTall] = useState(0);
  const [head, setHead] = useState(0);
  const [arm, setArm] = useState(0);
  // const [note, setNote] = useState("");

  const submit = () => {
    let dataa = {
      dataChild: JSON.parse(data),
      // date: data.birthDate,
      weight: weight,
      tall: tall,
      headCircumference: head,
      armCircumference: arm,
      // note: note,
    };
    console.log("checkup", dataa);
    navigation.navigate("ParticipantImunizationAddScreen", {
      data: JSON.stringify(dataa),
    });
  };

  // console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <ScrollView>
        <View
          style={{ paddingHorizontal: 25, width: "100%", paddingBottom: 90 }}
        >
          <Text>{data.name}</Text>
          <Text style={styles.labelForm}>Berat Badan</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Kg"
            style={styles.inputForm}
            onChangeText={(text) => setWeight(text)}
          />
          <Text style={styles.labelForm}>Panjang/Tinggi Badan</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Cm"
            style={styles.inputForm}
            onChangeText={(text) => setTall(text)}
          />
          <Text style={styles.labelForm}>Lingkar Kepala</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Cm"
            style={styles.inputForm}
            onChangeText={(text) => setHead(text)}
          />
          <Text style={styles.labelForm}>Lingkar Lengan</Text>
          <TextInput
            keyboardType="numeric"
            placeholder="Cm"
            style={styles.inputForm}
            onChangeText={(text) => setArm(text)}
          />
          {/* <Text style={styles.labelForm}>Catatan Kader</Text>
          <TextInput
            multiline={true}
            placeholder="Tambahkan catatan tentang pertumbuhan anak"
            style={[styles.inputForm, { height: 100 }]}
            onChangeText={(text) => setNote(text)}
          /> */}
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
          onPress={() => submit()}
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
              Selanjutnya
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
