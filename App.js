import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import SavedLocationScreen from "./screens/SavedLocationsScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "./components/CustomDrawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAweasome from "react-native-vector-icons/FontAwesome";
import ProfileScreen from "./screens/ProfileScreen";
import { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";

export default function App() {
  const Drawer = createDrawerNavigator();
  const Stack = createStackNavigator();

  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <View style={styles.container}>
      <NavigationContainer>
        {!isSignedIn ? (
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              options={{
                headerShown: false,
              }}
            >
              {(props) => (
                <LoginScreen
                  {...props}
                  onSubmitButtonPress={() => setIsSignedIn(true)}
                />
              )}
            </Stack.Screen>
          </Stack.Navigator>
        ) : (
          <Drawer.Navigator
            drawerContent={(props) => (
              <CustomDrawer
                {...props}
                onLogoutButtonPress={() => setIsSignedIn(false)}
              />
            )}
            initialRouteName="Home"
            screenOptions={{
              headerShown: false,
              drawerActiveBackgroundColor: "#183b58",
              drawerActiveTintColor: "#fff",
              drawerLabelStyle: {
                marginHorizontal: -25,
                fontSize: 15,
              },
            }}
          >
            <Drawer.Screen
              name="Profile"
              component={ProfileScreen}
              options={{
                drawerIcon: ({ color }) => (
                  <FontAweasome name="user-o" size={22} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="Home"
              component={HomeScreen}
              options={{
                drawerIcon: ({ color }) => (
                  <Ionicons name="home-outline" size={22} color={color} />
                ),
              }}
            />
            <Drawer.Screen
              name="My Locations"
              component={SavedLocationScreen}
              options={{
                drawerIcon: ({ color }) => (
                  <Ionicons
                    name="ios-location-outline"
                    size={22}
                    color={color}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Get Notifications"
              component={NotificationsScreen}
              options={{
                drawerIcon: ({ color }) => (
                  <Ionicons
                    name="notifications-outline"
                    size={22}
                    color={color}
                  />
                ),
              }}
            />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
