import React from "react";
import { StyleSheet } from "react-native";
import { Text, TouchableOpacity } from "../../../components";
import { colors, spacing, shadow } from "../../../theme";

export function FollowButton({ text = "Follow", onPress }: { text?: string; onPress: () => void }) {
  return (
    <TouchableOpacity style={styles.btnFollow} onPress={onPress}>
      <Text preset="mediumBold" text={text} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnFollow: {
    backgroundColor: colors.offWhite,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[6],
    borderRadius: 8,
    ...shadow.lightButton,
  },
});
