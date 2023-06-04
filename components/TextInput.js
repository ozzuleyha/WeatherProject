import { StyleSheet } from "react-native";
import React from "react";
import { Input } from "@rneui/base";

const TextInput = ({
  inputContainerStyle,
  inputStyle,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  autoCapitalize,
  autoCorrect,
}) => {
  return (
    <Input
      inputContainerStyle={[{ borderBottomWidth: 0 }, inputContainerStyle]}
      style={styles.inputStyle}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
    />
  );
};

export default TextInput;

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 8,
    backgroundColor: "#fff",
    flex: 1,
  },
});
