import React from "react";
import { StyleSheet, useColorScheme, ViewStyle } from "react-native";
import { Avatar, View, Text, TouchableOpacity, Icon } from "../../components";
import { IconTypes } from "../../components/icon/icons";
import { spacing, shadow, colors } from "../../theme";

interface TagNameButtonProps {
  onPress: () => void;
  text: string;
  title?: string;
  isIcon?: boolean;
  iconName?: IconTypes;
  containerStyle?: ViewStyle;
}

export function TagNameButton({ onPress, text, title, isIcon = false, iconName, containerStyle }: TagNameButtonProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  //
  const containerStyles = [styles.container, isDarkMode && darkStyles.container, containerStyle];
  return (
    <TouchableOpacity onPress={onPress}>
      <View row style={containerStyles}>
        {!isIcon ? (
          <Avatar
            text={title}
            presetText="headerSmallBold"
            hasSource={false}
            size="small"
            containerStyle={{ marginVertical: spacing[1] }}
          />
        ) : (
          <Icon icon={iconName} size={20} />
        )}
        <Text preset="mediumBold" text={text} style={{ paddingHorizontal: spacing[3], paddingVertical: spacing[2] }} />
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
    paddingVertical: spacing[1],
    marginVertical: spacing[1],
    paddingLeft: spacing[3],
    backgroundColor: colors.offWhite,
    alignItems: "center",
    ...shadow.lightButton,
  },
});
