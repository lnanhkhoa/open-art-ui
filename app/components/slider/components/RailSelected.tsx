import React, { memo } from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../theme";

const RailSelected = () => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={[colors.gradient.accent.from, colors.gradient.accent.to]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.9 }}
        style={{ flex: 1 }}
      ></LinearGradient>
    </View>
  );
};

export default memo(RailSelected);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    height: 12,
    overflow: "hidden",
    borderRadius: 40,
  },
});
