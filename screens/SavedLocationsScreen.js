import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  StatusBar,
  ImageBackground,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import LocationListItem from "../components/LocationListItem";
import { NativeModules } from "react-native";
import AddLocationModal from "../components/AddLocationModal";
import Locations from "../assets/Locations";
import dayjs from "dayjs";

const { StatusBarManager } = NativeModules;

const SavedLocationsScreen = ({ navigation }) => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [addLocationModalShown, setAddLocationModalShown] = useState(false);
  const [date, setDate] = useState(dayjs(new Date()).format("YYYY-MM-DD"));
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    StatusBarManager.getHeight((statusBarInfo) => {
      setStatusBarHeight(statusBarInfo.height);
    });

    setLocations(Locations);
  }, []);

  const handleMenuIconPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleAddIconPress = () => {
    setAddLocationModalShown(true);
  };

  const handleSubmitButtonPress = (cityName, countryName) => {
    setAddLocationModalShown(false);
    const newLocation = {
      id: locations.length + 1,
      city: cityName,
      country: countryName,
      date: dayjs(new Date()).format("YYYY-MM-DD"),
      degree: 20,
      description: "Cloudy",
      humidity: 0.8,
    };

    setLocations([...locations, newLocation]);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/cloudy.jpg")}
      ></ImageBackground>
      <Header
        containerStyle={{
          zIndex: 1,
        }}
        onLayout={(e) => {
          setHeaderHeight(e.nativeEvent.layout.height);
        }}
        title={"Locations"}
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
            <Ionicons
              name="ios-add-outline"
              size={36}
              color={"#fff"}
              onPress={handleAddIconPress}
            />
          </View>
        }
      />

      <ScrollView
        style={[
          styles.scrollContainer,
          {
            marginTop: statusBarHeight + headerHeight,
          },
        ]}
      >
        {locations
          .filter((location, index) => location.date === date)
          .map((location) => (
            <LocationListItem
              key={location.id.toString()}
              location={location}
              containerStyle={styles.listItem}
            />
          ))}

        <AddLocationModal
          shown={addLocationModalShown}
          title={"Add Location"}
          onDialogCancelPress={() => setAddLocationModalShown(false)}
          onSubmitButtonPress={handleSubmitButtonPress}
        />
      </ScrollView>
    </View>
  );
};

export default SavedLocationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {},
  outerIcon: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 9999,
    padding: 6,
  },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  listItem: {
    marginHorizontal: 16,
    marginTop: 16,
  },
  image: {
    flex: 1,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.7,
  },
});
