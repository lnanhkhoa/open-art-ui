import React from "react";
import { StyleSheet } from "react-native";

import { View, Screen, Text, TextField, HeaderLogo } from "../../components";
// import { useNavigation } from "@react-navigation/native";
import { colors, spacing } from "../../theme";
// import { assets, constants } from "../../config";

export const TextFieldScreen = function TextFieldScreen() {
  const onPressMenu = () => null;
  return (
    <View testID="TextFieldScreen" style={styles.full}>
      <Screen style={styles.container} preset="scroll" backgroundColor={colors.transparent}>
        <Text preset="largeBold" text="Header" />
        <View style={styles.box}>
          <HeaderLogo />
          <TextField placeholder="Name" />
        </View>
      </Screen>
    </View>
  );
};

const styles = StyleSheet.create({
  full: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: colors.transparent,
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
  },
  header: {
    paddingTop: spacing[3],
    paddingBottom: spacing[5] - 1,
    paddingHorizontal: 0,
  },
  headerTitle: {
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 1.5,
    color: colors.text,
  },
  box: {
    padding: 8,
    marginVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.line,
  },
  avatar: { margin: 4 },
  tag: { margin: 4 },
  checkbox: { margin: 4 },
  button: { margin: 4 },
});
