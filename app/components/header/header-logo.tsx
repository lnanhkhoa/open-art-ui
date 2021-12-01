import React from "react";
import { ViewStyle, StyleSheet, Image, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { Icon, IconTypes } from "../icon/icon";
import { TouchableOpacity, View } from "../view";
//
import { colors, spacing } from "../../theme";
import assets from "../../config/assets";
import { SCREEN_WIDTH, HEADER_HEIGHT } from "../../config/constants";
import { createStyles } from "../../utils/function";

export interface HeaderLogoProps {
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

export function HeaderLogo(props: HeaderLogoProps) {
  const {
    onLogoPress,
    leftIcon,
    onLeftPress,
    onRightPress,
    rightIcon,
    onPressMenu,
    containerStyle: containerStyleOverride,
  } = props;
  const navigation = useNavigation();
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  //
  const logoSrc = isDarkMode ? assets.logoDark : assets.logo;
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorIcon = isDarkMode ? colors.offWhite : colors.titleActive;

  const onHandlePressMenu = () => {
    if (onPressMenu) {
      onPressMenu();
    } else {
      // @ts-ignore
      navigation?.openDrawer();
    }
  };

  return (
    <View classNames={["alignCenter", "justifySpaceBetween"]} style={[styles.container, containerStyleOverride]}>
      <TouchableOpacity onPress={onLogoPress}>
        <Image source={logoSrc} style={styles.logo} resizeMode="contain" />
      </TouchableOpacity>
      <View classNames={["row"]}>
        {leftIcon ? (
          <Icon icon={leftIcon} size={24} color={colorIcon} onPress={onLeftPress} style={{ margin: 10 }} />
        ) : (
          <View style={styles.rightEmpty} />
        )}
        {rightIcon ? (
          <Icon icon={rightIcon} size={24} color={colorIcon} onPress={onRightPress} style={{ margin: 10 }} />
        ) : (
          <View style={styles.rightEmpty} />
        )}
        <Icon
          icon={"menu"}
          size={24}
          color={colorIcon}
          onPress={onHandlePressMenu}
          style={{ margin: 10, marginRight: 0 }}
        />
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
    flexDirection: "row",
    backgroundColor: colors.background,
    height: HEADER_HEIGHT,
    paddingHorizontal: 16,
  },
  logo: {
    maxWidth: SCREEN_WIDTH * 0.34,
  },
  rightEmpty: { width: 32 },
});
