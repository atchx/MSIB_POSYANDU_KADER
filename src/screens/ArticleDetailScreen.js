import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  StatusBar,
} from "react-native";
import { height, width } from "../components/Dimension";
import styles from "../styles/style";

export default function ArticleDetailScreen({ route }) {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
        <View style={{ padding: 25, alignItems: "center" }}>
          <Image
            source={{ uri: item.img }}
            style={{
              // flex: 1,
              width: "100%",
              height: height / 5,
              borderRadius: 10,
              // resizeMode: "cover",
            }}
          />
          <Text
            style={{
              fontFamily: "Medium",
              textAlign: "center",
              // fontSize: 14,
              marginTop: 17,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 11,
              color: "#0F78CB",
              marginTop: 17,
            }}
          >
            {/* Ditinjau secara medis oleh dr. Damar Upahita - 3 weeks ago */}
            {item.author}
          </Text>
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 11,
              color: "#0F78CB",
            }}
          >
            {/* Sumber : hellosehat.com */}
            {item.source}
          </Text>
          <Text
            style={{
              fontFamily: "Regular",
              fontSize: 12,
              textAlign: "justify",
              marginTop: 17,
            }}
          >
            {item.full}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
