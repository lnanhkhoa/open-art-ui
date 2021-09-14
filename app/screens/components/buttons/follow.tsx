import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
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
  return (
    <TouchableOpacity style={[styles.btnFollow, style]} onPress={onPress}>
      <Text preset="mediumBold" text={text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnFollow: {
    backgroundColor: colors.offWhite,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[5],
    alignItems: "center",
    borderRadius: 8,
    maxWidth: 120,
    ...shadow.lightButton,
  },
});
