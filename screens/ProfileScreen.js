import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons";
import { DrawerActions } from "@react-navigation/native";

const ProfileScreen = ({ navigation }) => {
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleMenuIconPress = () => {
    navigation.dispatch(DrawerActions.openDrawer());
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
        title={"Profile"}
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
      />
      <Image
        style={styles.image}
        source={require("../assets/user.jpg")}
      ></Image>
      <Text
        style={{
          color: "#fff",
          fontSize: 32,
          fontWeight: "bold",
          marginTop: 16,
          marginHorizontal: 16,
        }}
      >
        Jane Doe
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          borderRadius: 999,
          padding: 8,
          marginTop: 16,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          Alert.alert("Upgrade to Premium", "Coming soon!");
        }}
      >
        <Text
          style={{
            color: "#007aff",
            fontSize: 16,
            marginHorizontal: 16,
          }}
        >
          Upgrade to Premium
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#94b1c9",
    alignItems: "center",
  },
  outerIcon: {
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 9999,
    padding: 6,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 150,
    borderRadius: 999,
  },
});
