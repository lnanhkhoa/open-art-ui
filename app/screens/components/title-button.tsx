import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { TouchableOpacity, Text, View, Button } from "../../components";
import { colors, spacing } from "../../theme";

interface TitleButtonProps {
  isActive: boolean;
  title: string;
  onPress: () => void;
}

export function TitleButton({ isActive = false, title, onPress = () => null }: TitleButtonProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const inputColor = isDarkMode ? colors.offWhite : colors.bgInput;

  return isActive ? (
    <Button preset="primary" presetText="medium" text={title} style={styles.btnActive} onPress={onPress} />
  ) : (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.btnInactive, { backgroundColor: inputColor }]}
    >
      <Text preset="medium" text={title} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnInactive: {
    height: 45,
    minWidth: 123,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing[4],
    borderRadius: spacing[5],
    marginHorizontal: spacing[2],
  },
  btnActive: {
    borderRadius: spacing[5],
    paddingHorizontal: spacing[4],
    marginHorizontal: spacing[2],
  },
});
