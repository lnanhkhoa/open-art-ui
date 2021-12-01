import React from "react";
import { StyleSheet, useColorScheme, ViewStyle, TouchableOpacityProps } from "react-native";
import { TouchableOpacity, Text, View, Button } from "../../../components";
import { colors, spacing } from "../../../theme";

interface TitleButtonProps {
  isActive?: boolean;
  title: string;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
}

export function TitleButton({ isActive = false, title, onPress = () => null, style: _styleOverride }: TitleButtonProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const inputColor = isDarkMode ? colors.body : colors.bgInput;
  const styleOverride = StyleSheet.flatten(_styleOverride);

  return isActive ? (
    <Button
      preset="primary"
      presetText="medium"
      text={title}
      style={[styles.btnActive, styleOverride]}
      onPress={onPress}
    />
  ) : (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={[styles.btnInactive, { backgroundColor: inputColor }, styleOverride]}
    >
      <Text preset="medium" text={title} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnInactive: {
    height: 45,
    minWidth: 80,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing[4],
    borderRadius: spacing[5],
    marginHorizontal: spacing[2],
    marginVertical: spacing[1],
  },
  btnActive: {
    minWidth: 80,
    height: 45,
    borderRadius: spacing[5],
    paddingHorizontal: spacing[4],
    marginHorizontal: spacing[2],
  },
});
