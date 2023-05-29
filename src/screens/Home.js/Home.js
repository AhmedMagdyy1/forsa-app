import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <View style={styles.ellipseContainer}>
            <View style={styles.ellipse} />
          </View>
        </View>
        <View style={styles.navbarContainer}>
          <TouchableOpacity style={styles.iconContainer}>
            <Icon name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <View style={styles.imageContainer}>
            <Image
              source={require("../../../assets/Path-1096.png")}
              style={styles.logo}
            />
          </View>
          <View style={styles.iconContainer}>
            <Icon name="favorite" size={24} color="#fff" />
            <Icon name="notifications" size={24} color="#fff" />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
  ellipseContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  ellipse: {
    width: 500,
    // right: 40,
    height: 520,
    top: "-34.07%",
    borderRadius: 400,
    backgroundColor: "#072040",
  },
  navbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    zIndex: 1,
  },
  iconContainer: {
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 50,
  },
  logo: {
    width: 80,
    height: 40,
    resizeMode: "contain",
  },
});
