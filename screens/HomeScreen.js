import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import Header from "../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import DatePicker from "../components/DatePicker";
import { DrawerActions } from "@react-navigation/native";
import Locations from "../assets/Locations";

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

  const handleSelectedDate = (date) => {
    setSelectedDate(date);
    setIsDatePickerShown(false);
  };

  const { width: windowWidth, height: windowHeight } = useWindowDimensions();

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
            {Locations.map((location, index) => {
              let bgImage = require("../assets/night2.jpg");
              if (location.description === "Sunny") {
                bgImage = require("../assets/sunny.jpg");
              } else if (location.description === "Rainy") {
                bgImage = require("../assets/rainy.jpg");
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
                </View>
              );
            })}
        </ScrollView>

        <DatePicker
          containerStyle={styles.datePickerField}
          buttonStyle={styles.datePickerButton}
          shown={isDatePickerShown}
          selectedDate={selectedDate}
          onDateSelected={handleSelectedDate}
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
