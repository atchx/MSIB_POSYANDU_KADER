import React from "react";
import { Text, Image, View, TouchableOpacity } from "react-native";

export default function ArticleCards({ img, title, awal, navigation, action }) {
  return (
    <View
      style={{
        paddingRight: 25,
        paddingLeft: 25,
        paddingTop: 7,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          padding: 11,
          borderRadius: 12,
          elevation: 8,
          flexDirection: "row",
          flex:1,
          alignItems: "center",
          justifyContent: "space-between",
        }}
        onPress={action}
      >
        <Image
          source={{ uri: img }}
          style={{
            height: "100%",
            width: "40%",
            resizeMode: "cover",
            borderRadius: 10,
          }}
        />
        <View
          style={{
            height: 98,
            width: "60%",
            height:"100%",
            paddingLeft: 8,
            // paddingRight: 11,
            // justifyContent: "space-evenly",
            // backgroundColor: "red"
            //   flexDirection: "column",
            //   paddingRight: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Medium",
              fontSize: 13,
            }}
          >
            {title}
          </Text>
          <Text
            style={{
              fontSize: 10,
              fontFamily: "Regular",
              color: "#888889",
            }}
          >
            {awal}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
