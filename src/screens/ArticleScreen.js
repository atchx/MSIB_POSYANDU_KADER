import React from "react";
import { SafeAreaView, View, ScrollView, StatusBar } from "react-native";
import ArticleCards from "../components/ArticleCards";
import { ArticleData } from "../components/data/ArticleData";
import styles from "../styles/style";

export default function ArticleScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#0F78CB" barStyle="light-content" />
      <ScrollView>
        {ArticleData.map((item, index) => {
          return (
            <View key={index}>
              <ArticleCards
                img={item.img}
                title={item.title}
                awal={item.awal}
                action={() =>
                  navigation.navigate("ArticleDetailScreen", { item: item })
                }
              />
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
