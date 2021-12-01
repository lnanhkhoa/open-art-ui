import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Icon, TouchableOpacity, IconTypes } from "../../../components";
import { createStyles, createColorStyles } from "../../../utils/function";
import { colors } from "../../../theme";

interface ImageViewProps {
  onPress: () => void;
  defaultIcon: IconTypes;
}

export function ImageViewButton({ onPress }: ImageViewProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <TouchableOpacity onPress={() => null} style={styles.btnViewImage}>
      <Icon icon="export" size={24} color={colorStyles.label} />
    </TouchableOpacity>
  );
}

const darkStyles = StyleSheet.create({
  btnViewImage: {},
});

const lightStyles = StyleSheet.create({
  btnViewImage: {
    borderRadius: 16,
    borderColor: colors.placeholder,
    borderWidth: 1,
    width: 77,
    height: 77,
    alignItems: "center",
    justifyContent: "center",
    margin: 4,
  },
});
