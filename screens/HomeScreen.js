import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import Header from "../components/Header";
import AntDesign from '@expo/vector-icons/AntDesign'
import Ionicons from '@expo/vector-icons/Ionicons'


const image = {
  uri: "https://c0.wallpaperflare.com/preview/327/357/108/blue-skys-tropical-palm-tree-summer.jpg",
};
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header
        containerStyle={{
          zIndex: 1,
        }}
        title={"Home"}
        leftIcon={<View style={styles.outerIcon}><Ionicons name="ios-menu-outline" size={36} /></View>}
        rightIcon={<View style={styles.outerIcon}><AntDesign name="calendar" size={36} /></View>}
      />
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      </ImageBackground>
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
