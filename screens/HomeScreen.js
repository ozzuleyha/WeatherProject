import {StyleSheet, Text, View, ImageBackground, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import DatePicker from "../components/DatePicker";

const image = {
  uri: "https://c0.wallpaperflare.com/preview/327/357/108/blue-skys-tropical-palm-tree-summer.jpg",
};
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = () => {
  const [isDatePickerShown, setIsDatePickerShown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleDatePickerIconPress = () => {
    setIsDatePickerShown(true);
  };

  const handleMenuIconPress = () => {
    setIsMenuShown(!isMenuShown);
  };

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
    setIsDatePickerShown(false);
  };

  return (
    <View style={styles.container}>
      <Header
        containerStyle={{
          zIndex: 1,
        }}
        title={"Home"}
        leftIcon={
          <View style={styles.outerIcon}>
            <Ionicons
              name="ios-menu-outline"
              size={36}
              color={"#fff"}
              onPress={handleMenuIconPress}
            />
          </View>
        }
        rightIcon={
          <View style={styles.outerIcon}>
            <AntDesign
              name="calendar"
              size={32}
              color={"#fff"}
              onPress={handleDatePickerIconPress}
            />
          </View>
        }
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image} />
      <DatePicker
        containerStyle={styles.datePickerField}
        buttonStyle={styles.datePickerButton}
        shown={isDatePickerShown}
        selectedDate={selectedDate}
        onDateSelected={handleSelectedDate}
        onDialogCancelPress={() => setIsDatePickerShown(false)}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    position: "relative",
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  outerIcon: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 9999,
    padding: 6,
  },
});
