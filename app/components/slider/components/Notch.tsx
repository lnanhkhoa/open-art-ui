import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import { colors } from "../../../theme";

const Notch = (props) => {
  return <View style={styles.root} {...props} />;
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    width: 8,
    height: 8,
    borderLeftColor: colors.transparent,
    borderRightColor: colors.transparent,
    // borderTopColor: "#4499ff",
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});
