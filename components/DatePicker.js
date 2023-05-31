import { StyleSheet, Text, View, Modal } from "react-native";
import React, { useState } from "react";
import { Button } from "@rneui/themed";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const DatePicker = ({
  containerStyle,
  titleStyle,
  buttonStyle,
  selectedDate,
  onDateSelected,
  onPress,
  onDialogCancelPress,
  shown,
  buttonComponent,
}) => {
  return (
    <View style={containerStyle}>
      {buttonComponent && buttonComponent}
      <Modal
        animationType="slide"
        onDismiss={() => console.log("dismiss")}
        transparent={true}
        visible={shown}
        onRequestClose={() => console.log("cancel")}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RNDateTimePicker
              display="inline"
              value={selectedDate}
              onChange={(e, date) => onDateSelected && onDateSelected(date)}
            />
          </View>
          <Button
            style={styles.cancelButton}
            title={"Cancel"}
            onPress={onDialogCancelPress}
            radius={8}
          />
        </View>
      </Modal>
    </View>
  );
};

export default DatePicker;

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
  cancelButton: {
    marginHorizontal: 20,
  },
});
