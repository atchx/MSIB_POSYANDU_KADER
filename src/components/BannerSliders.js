import React from "react";
import { View, Image } from "react-native";
import { height, width } from "./Dimension";

export default function BannerSliders({ data }) {
  return (
    <View style={{height: height/3.5}}>
      <Image
        source={data.image}
        style={{
          resizeMode: "stretch",
          width: "100%",
          height: "95%",
          borderRadius: 10,
        }}
      />
    </View>
  );
}
