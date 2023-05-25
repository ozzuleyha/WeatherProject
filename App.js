import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import SavedLocationScreen from "./screens/SavedLocationsScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Locations" component={SavedLocationScreen} />
          <Drawer.Screen
            name="Get Notifications"
            component={NotificationsScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
