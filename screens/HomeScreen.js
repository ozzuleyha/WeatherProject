import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import DatePicker from "../components/DatePicker";
import { DrawerActions } from "@react-navigation/native";
import Locations from "../assets/Locations";
import dayjs from "dayjs";

const image = {
  uri: "https://c0.wallpaperflare.com/preview/327/357/108/blue-skys-tropical-palm-tree-summer.jpg",
};
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const [isDatePickerShown, setIsDatePickerShown] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleDatePickerIconPress = () => {
    setIsDatePickerShown(true);
  };

  const handleMenuIconPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleDateSelected = (date) => {
    setSelectedDate(date);
    setIsDatePickerShown(false);
  };

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

  useEffect(() => {
    console.log("Date", selectedDate);
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
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
        <ScrollView
          style={{ width: windowWidth, height: windowHeight }}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
        >
          {Locations.filter(
            (locations) =>
              locations.date === dayjs(selectedDate).format("YYYY-MM-DD")
          ).map((location, index) => {
            let bgImage = require("../assets/night2.jpg");
            if (location.description === "Sunny") {
              bgImage = require("../assets/sunny.jpg");
            } else if (location.description === "Rainy") {
              bgImage = require("../assets/rainy.jpg");
            } else if (location.description === "Night") {
              bgImage = require("../assets/night2.jpg");
            } else if (location.description === "Cloudy") {
              bgImage = require("../assets/cloudy.jpg");
            }

            return (
              <View
                style={{ width: windowWidth, height: windowHeight }}
                key={index}
              >
                <ImageBackground
                  source={bgImage}
                  style={styles.image}
                ></ImageBackground>
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: 20,
                  }}
                >
                  <Text style={styles.text}>{location.city}</Text>
                  <Text style={styles.text}>{location.degree}</Text>
                  <Text style={styles.text}>{location.description}</Text>
                  <Text style={styles.text}>{location.date}</Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <DatePicker
          containerStyle={styles.datePickerField}
          buttonStyle={styles.datePickerButton}
          shown={isDatePickerShown}
          selectedDate={selectedDate}
          onDateSelected={handleDateSelected}
          onDialogCancelPress={() => setIsDatePickerShown(false)}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    opacity: 0.9,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
