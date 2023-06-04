import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  useWindowDimensions,
  StatusBar,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import DatePicker from "../components/DatePicker";
import { DrawerActions } from "@react-navigation/native";
import Locations from "../assets/Locations";
import Next5Days from "../assets/Next5Days";
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

  const getIconFromDescription = (description) => {
    if (description === "Sunny") {
      return require("../assets/sun.png");
    } else if (description === "Rainy") {
      return require("../assets/rain.png");
    } else if (description === "Night") {
      return require("../assets/moon.png");
    } else if (description === "Cloudy") {
      return require("../assets/cloud.png");
    } else if (description === "Windy") {
      return require("../assets/wind.png");
    }
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
            } else if (location.description === "Windy") {
              bgImage = require("../assets/windy.jpg");
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
                <ScrollView
                  style={{ marginTop: 120, marginHorizontal: 16 }}
                  showsVerticalScrollIndicator={false}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                      {location.city}
                    </Text>
                    <Text
                      style={{
                        fontSize: 30,
                        fontWeight: "bold",
                      }}
                    >
                      {location.description}
                    </Text>
                  </View>
                  <Text style={{ fontSize: 100 }}>{location.degree}°</Text>

                  <View
                    style={{
                      marginTop: 75,
                      flexDirection: "row",
                      justifyContent: "space-between",
                      backgroundColor: "#00000030",
                      padding: 16,
                      borderRadius: 12,
                    }}
                  >
                    <View
                      style={{
                        alignItems: "center",
                        justifyContent: "center",
                        borderendcolor: "#fff",
                      }}
                    >
                      <Text style={{ fontSize: 20 }}>{location.uvIndex}</Text>
                      <Text style={{ fontSize: 20 }}>UV Index</Text>
                    </View>

                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={{ fontSize: 20 }}>
                        {location.windSpeed} km/h
                      </Text>
                      <Text style={{ fontSize: 20 }}>Wind Speed</Text>
                    </View>
                    <View
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Text style={{ fontSize: 20 }}>
                        {location.rainChance}%
                      </Text>
                      <Text style={{ fontSize: 20 }}>Rain</Text>
                    </View>
                  </View>

                  <ScrollView
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 16 }}
                  >
                    {location.hourly.map((hour, index) => {
                      return (
                        <View
                          style={{
                            backgroundColor: "#00000030",
                            paddingHorizontal: 24,
                            padding: 12,
                            borderRadius: 12,
                            marginRight: 16,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                          key={index}
                        >
                          <Text style={{ fontSize: 20 }}>{hour.time}</Text>
                          <Image
                            source={getIconFromDescription(hour.description)}
                            style={{ width: 50, height: 50 }}
                          />
                          <Text style={{ fontSize: 20 }}>{hour.degree}°</Text>
                        </View>
                      );
                    })}
                  </ScrollView>

                  <View
                    style={{
                      marginTop: 16,
                      backgroundColor: "#00000030",
                      padding: 16,
                      borderRadius: 12,
                    }}
                  >
                    {Next5Days.map((day, index) => {
                      return (
                        <View
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            marginBottom: 16,
                          }}
                          key={index}
                        >
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                            }}
                          >
                            <Image
                              source={getIconFromDescription(day.description)}
                              style={{ width: 30, height: 30 }}
                            />
                            <Text style={{ fontSize: 20, marginStart: 8 }}>
                              {day.date}
                            </Text>
                          </View>

                          <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontSize: 20 }}>
                              {day.minDegree}° /{" "}
                            </Text>

                            <Text style={{ fontSize: 20 }}>
                              {day.maxDegree}°
                            </Text>
                          </View>
                        </View>
                      );
                    })}
                  </View>
                </ScrollView>
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
          minimumDate={dayjs("2023-05-31").toDate()}
          maximumDate={dayjs("2023-06-10").toDate()}
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
    opacity: 0.7,
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
