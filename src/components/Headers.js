import React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function Headers() {
  return (
    <LinearGradient
      colors={["#0F78CB", "#0F78CB", "#168BE7", "#5CB0F3"]}
      style={{
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
      }}
    />
  );
}
