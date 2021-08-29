import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { View, Screen, Text, Button, SearchBar, Icon } from "../../components";
import { colors, spacing } from "../../theme";
import { assets, constants } from "../../config";

export const ButtonScreen = observer(function ButtonScreen() {
  return (
    <View testID="ButtonScreen" style={styles.full}>
      <Screen style={styles.container} preset="scroll" backgroundColor={colors.transparent}>
        <Text preset="largeBold" text="Text Input" />

        <View style={[styles.box, { alignItems: "stretch" }]}>
          <SearchBar
            value=""
            onChangeText={() => null}
            rightIcon={() => (
              <Icon icon={"microphone"} size={16} onPress={() => null} containerStyle={{ padding: spacing[2] }} />
            )}
          />
        </View>
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

          <View>
            <Button preset="text" text="Sold" />
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
