import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";

let initialBgImage = require("../assets/cloudy.jpg");

const LocationListItem = ({ containerStyle, location }) => {
  const [bgImage, setBgImage] = useState(initialBgImage);

  useEffect(() => {
    const imageLinks = [
      {
        description: "Sunny",
        image: require("../assets/sunny.jpg"),
      },
      {
        description: "Rainy",
        image: require("../assets/rainy.jpg"),
      },
      {
        description: "Night",
        image: require("../assets/night2.jpg"),
      },
      {
        description: "Cloudy",
        image: require("../assets/cloudy.jpg"),
      },
      {
        description: "Windy",
        image: require("../assets/windy.jpeg"),
      },
    ];

    const imageOfLocation = imageLinks.find(
      (imageLink) => imageLink.description === location.description
    ).image;
    if (imageOfLocation) {
      setBgImage(imageOfLocation);
    }
  }, [location]);

  return (
    <View style={[styles.container, containerStyle]}>
      <ImageBackground
        style={{
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          position: "absolute",
          opacity: 0.9,
        }}
        source={bgImage}
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
  leftView: {},
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
});
