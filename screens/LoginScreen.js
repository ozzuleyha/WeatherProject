import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import TextInput from "../components/TextInput";
import { TouchableOpacity } from "react-native";
import { Button } from "@rneui/themed";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 as Logo } from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [shown, setShown] = useState(true);

  const togglePasswordVisiblity = () => {
    setShown(!shown);
  };

  const HandleSubmitButton = () => {
    console.log(`Username: ${username}\nPassword: ${password}`);
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Logo style={styles.LogoStyle} name={"cloud-sun-rain"} />
      <TextInput
        inputStyle={styles.inputStyle}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
        autoCorrect={false}
      />
        <TextInput
          inputStyle={styles.inputStyle}
          value={password}
          placeholder={"Password"}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={shown}
          autoCapitalize={"none"}
          autoCorrect={false}
        ></TextInput>
{/* 
        <TouchableOpacity onPress={togglePasswordVisiblity}>
          <MaterialCommunityIcons
            name={shown ? "eye-off" : "eye"}
            size={22}
            color="#232323"
          />
        </TouchableOpacity> */}

      <Button
        type="solid"
        radius={999}
        buttonStyle={styles.submitButton}
        onPress={HandleSubmitButton}
      >
        Submit
      </Button>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#94b1c9",
  },
  inputStyle: {
    marginTop: 8,
    paddingHorizontal: 16,
    marginHorizontal: 32,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    backgroundColor: "#fff",
    flex: 1,
  },
  submitButton: {
    marginTop: 16,
    marginHorizontal: 16,
    width: "90%",
    backgroundColor: "#183b58",
  },
  LogoStyle: {
    fontSize: 100,
    color: "#183b58",
    marginBottom: 64,
  },
  outerPasswordTextInput: {
    alignItems: "stretch",
    justifyContent: "center",
    
  },
  iconContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
