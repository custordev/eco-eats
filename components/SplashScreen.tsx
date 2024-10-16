import React from "react";

import { View, Text, StyleSheet, Image } from "react-native";
export default function index() {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image
          style={styles.icon}
          source={require("../assets/images/hero.png")}
          resizeMode="cover"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    minHeight: "auto",
    alignItems: "center",
    backgroundColor: "#019934",
  },
  icon: {
    width: 150,
    height: 150,
    borderRadius: 1000,
  },
  logoText: { fontSize: 16, fontWeight: "bold" },
});
