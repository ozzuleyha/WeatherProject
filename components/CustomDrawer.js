import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#94b1c9" }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "#94b1c9" }}
      >
        <Image
          source={require("../assets/user.jpg")}
          style={{
            width: 80,
            height: 80,
            borderRadius: 40,
            marginBottom: 8,
            paddingHorizontal: 8,
            marginHorizontal: 16,
            borderWidth: 0,
            borderRadius: 40,
            flex: 1,
          }}
        />
        <Text
          style={{
            color: "#fff",
            fontSize: 18,
            marginBottom: 5,
            marginHorizontal: 16,
          }}
        >
          Jane Doe
        </Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("Profile")}
          style={{ paddingVertical: 16 }}
        >
          <View style={{ flexDirection: "row" }}>
            <SimpleLineIcons name="logout" size={22} color="#fff" />
            <Text style={{ color: "#fff", fontSize: 18, marginLeft: 12 }}>
              Logout
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
