import React from "react";
import { StyleSheet, ViewStyle, useColorScheme } from "react-native";
import { Text, TouchableOpacity } from "../../../components";
import { colors, spacing, shadow } from "../../../theme";

export function FollowButton({
  text = "Follow",
  onPress,
  style,
}: {
  text?: string;
  onPress: () => void;
  style?: ViewStyle;
}) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <TouchableOpacity style={[styles.container, isDarkMode && styles.containerDark, style]} onPress={onPress}>
      <Text preset="mediumBold" text={text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offWhite,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[5],
    alignItems: "center",
    borderRadius: 8,
    maxWidth: 120,
    ...shadow.lightButton,
  },
  containerDark: {
    backgroundColor: colors.body,
  },
});
