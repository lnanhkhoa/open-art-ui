import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { Avatar, View, Text, TouchableOpacity } from "../../components";
import { spacing, shadow, colors } from "../../theme";

interface TagNameButtonProps {
  onPress: () => void;
  text: string;
  title: string;
}

export function TagNameButton({ onPress, text, title }: TagNameButtonProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  //
  const containerStyle = [styles.container, isDarkMode && darkStyles.container];
  return (
    <TouchableOpacity onPress={onPress}>
      <View row style={containerStyle}>
        <Avatar
          text={title}
          presetText="headerSmallBold"
          hasSource={false}
          size="small"
          containerStyle={{ marginVertical: spacing[1] }}
        />
        <Text preset="mediumBold" text={text} style={{ padding: spacing[2] }} />
      </View>
    </TouchableOpacity>
  );
}

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.body,
  },
});

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    paddingHorizontal: spacing[2],
    backgroundColor: colors.offWhite,
    ...shadow.lightButton,
  },
});