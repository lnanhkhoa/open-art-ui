import React from "react";
import { ViewStyle, StyleSheet, Image, useColorScheme } from "react-native";
import { Icon } from "../icon/icon";
import { IconTypes } from "../icon/icons";
import { TouchableOpacity, View } from "../view";
//
import { colors, spacing } from "../../theme";
import assets from "../../config/assets";
import { SCREEN_WIDTH, HEADER_HEIGHT } from "../../config/constants";
import { createStyles } from "../../utils/function";

export interface HeaderProps {
  onLogoPress?: () => void;
  leftIcon?: IconTypes;
  onLeftPress?: () => void;
  rightIcon?: IconTypes;
  onRightPress?: () => void;
  containerStyle?: ViewStyle | ViewStyle[];
  onPressMenu?: () => void;
}

export const HeaderLogoSpecs = {
  height: HEADER_HEIGHT,
  position: {
    menu: 16,
    right: 16 + 24 + 10,
    left: 16 + 24 + 10 * 3 + 24,
  },
};

export function HeaderLogo(props: HeaderProps) {
  const {
    onLogoPress,
    leftIcon,
    onLeftPress,
    onRightPress,
    rightIcon,
    onPressMenu = () => null,
    containerStyle: containerStyleOverride,
  } = props;
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const logoSrc = isDarkMode ? assets.logoDark : assets.logo;

  const styles = createStyles(lightStyles, darkStyles, isDarkMode);

  return (
    <View style={[styles.container, containerStyleOverride]}>
      <TouchableOpacity onPress={onLogoPress}>
        <Image source={logoSrc} style={styles.logo} resizeMode="contain" />
      </TouchableOpacity>
      <View row>
        {leftIcon ? (
          <Icon icon={leftIcon} size={24} onPress={onLeftPress} style={{ margin: 10 }} />
        ) : (
          <View style={styles.rightEmpty} />
        )}
        {rightIcon ? (
          <Icon icon={rightIcon} size={24} onPress={onRightPress} style={{ margin: 10 }} />
        ) : (
          <View style={styles.rightEmpty} />
        )}
        <Icon icon={"menu"} size={24} onPress={onPressMenu} style={{ margin: 10, marginRight: 0 }} />
      </View>
    </View>
  );
}

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.titleActive,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    paddingVertical: spacing[2],
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.background,
    height: HEADER_HEIGHT,
    paddingHorizontal: 16,
  },
  logo: {
    maxWidth: SCREEN_WIDTH * 0.34,
  },
  rightEmpty: { width: 32 },
});
