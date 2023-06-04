import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";

let bgImage = require("../assets/cloudy.jpg");

const LocationListItem = ({ containerStyle, location }) => {
  return (
    <View style={[styles.container, containerStyle]}>

      {/* {
        if (location.description === "Sunny") {
          bgImage = require("../assets/sunny.jpg");
        } else if (location.description === "Rainy") {
          bgImage = require("../assets/rainy.jpg");
        } else if (location.description === "Night") {
          bgImage = require("../assets/night2.jpg");
        } else if (location.description === "Cloudy") {
          bgImage = require("../assets/cloudy.jpg");
        }} */}
      <ImageBackground
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          opacity: 0.9,
        }}
        source={require("../assets/cloudy.jpg")}
      ></ImageBackground>

      <View style={styles.leftView}>
        <Text style={styles.name}>
          {location.city + ", " + location.country}
        </Text>
        <Text>{"Degree: " + location.degree}</Text>
        <Text>{"Humidity: " + location.humidity}</Text>
        <Text>{location.description}</Text>
        <ImageBackground
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            overflow: "hidden",
          }}
          source={require("../assets/night2.jpg")}
        ></ImageBackground>
      </View>
    </View>
  );
};

export default LocationListItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  leftView: {
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
