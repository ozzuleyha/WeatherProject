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

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <CustomDrawer {...props}/>}
          initialRouteName="Login"
          screenOptions={{
            headerShown: false,
            drawerActiveBackgroundColor: '#183b58', 
            drawerActiveTintColor: '#fff',
            drawerLabelStyle: {
              marginHorizontal: -25,
              fontSize: 15,
          }}
        }
        >
          <Drawer.Screen
            name="Profile"
            component={LoginScreen}
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
          <Drawer.Screen name="My Locations" component={SavedLocationScreen} 
          options={{
            drawerIcon: ({ color }) => (
              <Ionicons name="ios-location-outline" size={22} color={color} />
            ),
          }}/>
          <Drawer.Screen
            name="Get Notifications"
            component={NotificationsScreen}
            options={{
              drawerIcon: ({ color }) => (
                <Ionicons name="notifications-outline" size={22} color={color} />
              ),
            }}
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
