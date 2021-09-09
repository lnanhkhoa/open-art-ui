import React from "react";
import { View, ViewStyle, StyleSheet, Image, useColorScheme } from "react-native";
import { Icon } from "../icon/icon";
import { IconTypes } from "../icon/icons";
//
import { colors, spacing } from "../../theme";
import assets from "../../config/assets";
import { SCREEN_WIDTH } from "../../config/constants";
import { TouchableOpacity } from "../view";
export interface HeaderProps {
  onLogoPress?(): void;
  rightIcon?: IconTypes;
  onRightPress?(): void;
  containerStyle?: ViewStyle | ViewStyle[];
}

export function HeaderLogo(props: HeaderProps) {
  const { onLogoPress, onRightPress, rightIcon, containerStyle } = props;
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const logoSrc = isDarkMode ? assets.logoDark : assets.logo;

  const containerStyles = [styles.container, isDarkMode && darkStyles.container, containerStyle];

  return (
    <View style={containerStyles}>
      <TouchableOpacity onPress={onLogoPress}>
        <Image source={logoSrc} style={styles.logo} resizeMode="contain" />
      </TouchableOpacity>
      {rightIcon ? <Icon icon={rightIcon} size={24} onPress={onRightPress} /> : <View style={styles.rightEmpty} />}
    </View>
  );
}

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.titleActive,
  },
});

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing[2],
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.background,
  },
  logo: {
    maxWidth: SCREEN_WIDTH * 0.34,
  },
  rightEmpty: { width: 32 },
});
