import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React, { useEffect, useState } from "react";

const initialBgImage = require("../assets/cloudy.jpg");
const initialIcon = require("../assets/cloud.png");

const LocationListItem = ({ containerStyle, location }) => {
  const [bgImage, setBgImage] = useState(initialBgImage);
  const [icon, setIcon] = useState(initialIcon);

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
        image: require("../assets/windy.jpg"),
      },
    ];

    const iconLinks = [
      {
        description: "Sunny",
        icon: require("../assets/sun.png"),
      },
      {
        description: "Rainy",
        icon: require("../assets/rain.png"),
      },
      {
        description: "Night",
        icon: require("../assets/moon.png"),
      },
      {
        description: "Cloudy",
        icon: require("../assets/cloud.png"),
      },
      {
        description: "Windy",
        icon: require("../assets/wind.png"),
      },
    ];

    const imageOfLocation = imageLinks.find(
      (imageLink) => imageLink.description === location.description
    ).image;
    const iconOfLocation = iconLinks.find(
      (iconLink) => iconLink.description === location.description
    ).icon;

    if (imageOfLocation) {
      setBgImage(imageOfLocation);
    }

    if (iconOfLocation) {
      setIcon(iconOfLocation);
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
          borderRadius: 16,
        }}
        source={bgImage}
      ></ImageBackground>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          borderRadius: 16,
        }}
      >
        <View style={styles.leftView}>
          <Text style={styles.name}>
            {location.city + ", " + location.country}
          </Text>
          <Text>{"Degree: " + location.degree}</Text>
          <Text>{"Humidity: " + location.humidity}</Text>
          <Text>{location.description}</Text>
        </View>
        <ImageBackground
          style={{
            padding: 10,
            width: 50,
            height: 50,
            overflow: "hidden",
          }}
          source={icon}
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
    borderRadius: 16,
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
