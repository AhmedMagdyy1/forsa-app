import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import DropDownPicker from "react-native-dropdown-picker";

export default function Profile() {
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language is 'en' (English)
  const handleLanguageChange = (value) => {
    setSelectedLanguage(value);
    // Implement logic to change the language in your app based on the selected value
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.backgroundContainer}>
          <View style={styles.ellipseContainer}>
            <View style={styles.ellipse} />
          </View>
        </View>
        <View style={styles.navbarContainer}>
          <TouchableOpacity style={styles.iconContainer}></TouchableOpacity>
          <View style={styles.imageContainer}>
            <Text style={styles.text}>Profile</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon name="favorite" size={24} color="#fff" />
            <Icon name="notifications" size={24} color="#fff" />
          </View>
        </View>
        <Image source={require("../../../assets/Rectangle-5957.png")} />
        <Text style={styles.text}>Mohamed Adel</Text>
        <Text style={styles.text}>Share the app</Text>
        <Text style={styles.text}>
          {selectedLanguage === "en" ? "Hello" : "مرحبا"}
        </Text>
        <DropDownPicker
          items={[
            { label: "English", value: "en" },
            { label: "Arabic", value: "ar" },
            // Add more languages as needed
          ]}
          defaultValue={selectedLanguage}
          containerStyle={styles.dropdownContainer}
          style={styles.dropdown}
          itemStyle={styles.dropdownItem}
          dropDownStyle={styles.dropdownMenu}
          onChangeItem={(item) => handleLanguageChange(item.value)}
        />
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
  text: {
    color: "#fff",
  },
  dropdownContainer: {
    width: 200,
    height: 40,
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: "#fafafa",
  },
  dropdownItem: {
    justifyContent: "flex-start",
  },
  dropdownMenu: {
    backgroundColor: "#fafafa",
  },
});
