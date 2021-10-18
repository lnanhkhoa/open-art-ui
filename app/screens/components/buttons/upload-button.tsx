import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Icon, Text, View, TouchableOpacity } from "../../../components";
import { colors, spacing } from "../../../theme";
import { createStyles } from "../../../utils/function";

interface UploadButtonProps {
  onPress: () => void;
  title: string;
  description: string;
}

export function UploadButton({
  title = "Drag and drop or browce a file",
  description = "Recommended size: JPG, PNG, GIF (1500x1500px, Max 10mb)",
  onPress,
}: UploadButtonProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);

  return (
    <TouchableOpacity style={styles.btnUpload} onPress={onPress}>
      <Icon icon="image" size={24} containerStyle={{ paddingTop: spacing[6] }} />
      <View flexible style={{ paddingVertical: spacing[2] }}>
        <Text preset="largeBold" text={title} />
        <Text preset="medium" style={{ textAlign: "center", paddingVertical: spacing[2] }} text={description} />
      </View>
    </TouchableOpacity>
  );
}

const darkStyles = StyleSheet.create({
  btnUpload: {
    backgroundColor: colors.body,
  },
});
const lightStyles = StyleSheet.create({
  btnUpload: {
    alignItems: "center",
    minHeight: 170,
    backgroundColor: colors.bgInput,
    borderRadius: 32,
    marginTop: spacing[6],
  },
});
