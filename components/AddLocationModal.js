import { Modal, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import TextInput from "../components/TextInput";
import { Button } from "@rneui/themed";

const AddLocationModal = ({
  containerStyle,
  titleStyle,
  buttonStyle,
  onPress,
  onDialogCancelPress,
  shown,
  buttonComponent,
  onSubmit,
  changedCity,
  changedCountry,
}) => {
  const [cityName, setCityName] = useState("");
  const [countryName, setCountryName] = useState("");

  const HandleSubmitButton = () => {
    console.log(`City: ${cityName}\nCountry: ${countryName}`);
    onSubmit(cityName, countryName);

    
  };

  return (
    <Modal
      hasBackdrop={true}
      backdropColor="black"
      backdropOpacity={0.5}
      animationType="slide"
      visible={shown}
      transparent={true}
      onDismiss={() => console.log("dismiss")}
      onRequestClose={() => console.log("cancel")}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
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
            onSubmit={onSubmit}
          >
            Submit
          </Button>
        </View>

        <Button
          style={styles.cancelButton}
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
    marginHorizontal: 32,
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
