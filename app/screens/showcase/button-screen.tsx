import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { View, Screen, Text, Button } from "../../components";
import { colors, spacing } from "../../theme";
import { assets, constants } from "../../config";

export const ButtonScreen = observer(function ButtonScreen() {
  return (
    <View testID="ButtonScreen" style={styles.full}>
      <Screen style={styles.container} preset="scroll" backgroundColor={colors.transparent}>
        <Text preset="largeBold" text="Buttons" />
        <View style={styles.box}>
          <View row>
            <View style={styles.button}>
              <Button preset="primary" text="Button" />
            </View>
            <View style={styles.button}>
              <Button preset="primary" isLoading text="Button" />
            </View>
            <View style={styles.button}>
              <Button preset="primary" text="Button" disabled />
            </View>
          </View>
          <View row>
            <View style={styles.button}>
              <Button preset="secondary" text="Button" />
            </View>
            <View style={styles.button}>
              <Button preset="secondary" isLoading text="Button" />
            </View>
            <View style={styles.button}>
              <Button preset="secondary" text="Button" disabled />
            </View>
          </View>
          <View row>
            <View style={styles.button}>
              <Button preset="subtle" text="Button" />
            </View>
            <View style={styles.button}>
              <Button preset="subtle" isLoading text="Button" />
            </View>
            <View style={styles.button}>
              <Button preset="subtle" text="Button" disabled />
            </View>
          </View>
        </View>
      </Screen>
    </View>
  );
});

const styles = StyleSheet.create({
  full: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: colors.transparent,
    paddingHorizontal: spacing[4],
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
    borderRadius: 6,
    borderWidth: 1,
    padding: 8,
    marginVertical: 4,
    borderColor: colors.line,
    alignItems: "flex-start",
    // backgroundColor: colors.black,
  },
  button: { margin: 4 },
});
