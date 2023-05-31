import { StyleSheet, Text, View, ScrollView, StatusBar } from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";
import LocationListItem from "../components/LocationListItem";
import { NativeModules } from "react-native";
import AddLocationModal from "../components/AddLocationModal";
import Locations from "../assets/Locations";

const { StatusBarManager } = NativeModules;

const SavedLocationsScreen = ({ navigation }) => {
  const [statusBarHeight, setStatusBarHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [addLocationModalShown, setAddLocationModalShown] = useState(false);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    StatusBarManager.getHeight((statusBarInfo) => {
      setStatusBarHeight(statusBarInfo.height);
    });
  }, []);

  const handleMenuIconPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const handleAddIconPress = () => {
    setAddLocationModalShown(true);
  };

  const handleSubmitButton = (cityName, countryName) => {
    const newLocation = {
      id: location.length + 1,
      city: {
        name: cityName,
        country: countryName,
        degree: "20",
        humidity: "50",
        description: "Sunny",
      },
    };
    console.log(newLocation);
    setAddLocationModalShown(false);
  };


  return (
    <View style={styles.container}>
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
      <AddLocationModal
        shown={addLocationModalShown}
        onDialogCancelPress={() => setAddLocationModalShown(false)}
        onSubmit={handleSubmitButton}
      />
      <ScrollView
        style={[
          styles.scrollContainer,
          {
            marginTop: statusBarHeight + headerHeight,
          },
        ]}
      >
        {Locations.map((location) => (
          <LocationListItem
            key={location.id.toString()}
            location={location}
            containerStyle={styles.listItem}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SavedLocationsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94b1c9",
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
});
