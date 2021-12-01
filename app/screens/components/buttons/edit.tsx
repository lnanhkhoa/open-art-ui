import React from "react";
import { StyleSheet, ViewStyle, useColorScheme } from "react-native";
import { TouchableOpacity, Icon } from "../../../components";
import { colors, spacing, shadow } from "../../../theme";

export function EditButton({ onPress, style }: { text?: string; onPress: () => void; style?: ViewStyle }) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  return (
    <TouchableOpacity style={[styles.container, isDarkMode && styles.containerDark, style]} onPress={onPress}>
      <Icon icon="edit" size={24} />
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
    maxWidth: 80,
    ...shadow.lightButton,
  },
  containerDark: {
    backgroundColor: colors.body,
  },
});
