import React from "react";
import { Text, StyleSheet, View, TouchableOpacity} from "react-native";
import PropTypes from "prop-types";

const Header = ({
  containerStyle,
  leftIcon,
  rightIcon,
  leftIconTitle,
  title,
  onLeftIconPress,
  onRightIconPress,
  onLayout,
}) => {
  return (
    <View style={[styles.container, containerStyle]} onLayout={onLayout}>
      <TouchableOpacity style={styles.leftButton} onPress={onLeftIconPress}>
        {leftIcon}
        {leftIcon && leftIconTitle && (
          <Text style={styles.leftIconTitle}>{leftIconTitle}</Text>
        )}
      </TouchableOpacity>

      {title && <Text style={styles.title}>{title}</Text>}

      <TouchableOpacity style={styles.rightButton} onPress={onRightIconPress}>
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 65,
    paddingHorizontal: 16,
    marginTop: 50,
    position: "absolute",
    opacity: 1,
  },
  leftButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  leftIconTitle: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 12,
  },
  title: {
    textAlign: "center",
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    left: 0,
    right: 0,
  },
});

Header.propTypes = {
  containerStyle: PropTypes.object,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  leftIconTitle: PropTypes.string,
  title: PropTypes.string,
  onLeftIconPress: PropTypes.func,
  onRightIconPress: PropTypes.func,
};

export default Header;
