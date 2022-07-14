import React from "react";
import { StyleSheet } from "react-native";

import { View, Screen, Text, Button, SearchBar, Icon } from "../../components";
import { colors, spacing } from "../../theme";

export const ButtonScreen = function ButtonScreen() {
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
          <View classNames={["row"]}>
            <Button preset="primary" text="Button" containerStyle={styles.button} />
            <Button preset="primary" isLoading text="Button" containerStyle={styles.button} />
          </View>
          <Button preset="primary" text="Button" disabled containerStyle={styles.button} />
          <View classNames={["row"]}>
            <Button preset="secondary" text="Button" containerStyle={styles.button} />
            <Button preset="secondary" isLoading text="Button" containerStyle={styles.button} />
          </View>
          <Button preset="secondary" text="Button" disabled containerStyle={styles.button} />
          <View classNames={["row"]}>
            <Button preset="subtle" text="Button" containerStyle={styles.button} />
            <Button preset="subtle" isLoading text="Button" containerStyle={styles.button} />
          </View>
          <Button preset="subtle" text="Button" disabled containerStyle={styles.button} />
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
