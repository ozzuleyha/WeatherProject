import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput";
import { Button } from "@rneui/themed";

const AddLocationModal = ({
  title,
  titleStyle,
  buttonStyle,
  onDialogCancelPress,
  shown,
  onSubmitButtonPress,
}) => {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");

  const handleSubmitButtonPress = () => {
    onSubmitButtonPress(cityName, countryName);

    setCityName("");
    setCountryName("");
  };

  return (
    <Modal
      hasBackdrop={true}
      backdropColor="black"
      backdropOpacity={0.5}
      animationType="slide"
      visible={shown}
      transparent={true}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={[styles.title, titleStyle]}>{title}</Text>
          <TextInput
            inputStyle={styles.inputStyle}
            label="City"
            placeholder="Enter city name"
            value={cityName}
            onChangeText={(text) => setCityName(text)}
          />
          <TextInput
            inputStyle={styles.inputStyle}
            label="Country"
            placeholder="Enter country name"
            value={countryName}
            onChangeText={(text) => setCountryName(text)}
          />
          <Button
            type="solid"
            radius={999}
            buttonStyle={styles.submitButton}
            onPress={handleSubmitButtonPress}
          >
            Submit
          </Button>
        </View>

        <Button
          style={[styles.button, buttonStyle]}
          title={"Cancel"}
          radius={8}
          onPress={onDialogCancelPress}
        />
      </View>
    </Modal>
  );
};

export default AddLocationModal;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  button: {
    borderColor: "grey",
    borderWidth: 1.15,
    borderRadius: 8,
    flex: 1,
    justifyContent: "flex-start",
  },
  buttonTitle: {
    color: "black",
  },
  submitButton: {
    marginTop: 8,
    paddingHorizontal: 16,
    marginHorizontal: 32,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "stretch",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  inputStyle: {
    marginTop: 8,
    paddingHorizontal: 16,
    marginHorizontal: 0,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    backgroundColor: "#fff",
    flex: 1,
  },
  cancelButton: {
    marginHorizontal: 20,
  },
});
