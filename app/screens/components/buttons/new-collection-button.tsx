import React from "react";
import { StyleSheet, useColorScheme, ViewStyle } from "react-native";
import { Icon, Text, View, TouchableOpacity } from "../../../components";
import { createStyles, createColorStyles } from "../../../utils/function";
import { colors, spacing } from "../../../theme";

interface ImageViewProps {
  onPress: () => void;
  containerStyle?: ViewStyle;
}

export function NewCollectionButton({ onPress, containerStyle }: ImageViewProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <TouchableOpacity onPress={() => null}>
      <View style={[styles.container, containerStyle]}>
        <Icon icon="plus" size={24} color={colorStyles.label} containerStyle={styles.icon} />
        <Text preset="small" text="Create new collection" style={{ paddingTop: spacing[4] }} color={colorStyles.body} />
      </View>
    </TouchableOpacity>
  );
}

const darkStyles = StyleSheet.create({
  container: {},
});

const lightStyles = StyleSheet.create({
  container: {
    borderRadius: 16,
    borderColor: colors.bgInput,
    borderWidth: 1,
    padding: 16,
  },
  icon: {
    backgroundColor: colors.line,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 99,
    width: 35,
    height: 35,
  },
});
