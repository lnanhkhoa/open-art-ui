import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../../theme";

const Rail = () => {
  return <View style={styles.root} />;
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 12,
    borderRadius: 40,
    backgroundColor: colors.placeholder,
    overflow: "hidden",
  },
});
