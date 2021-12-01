import React from "react";
import { StyleSheet, ViewStyle, Image, useColorScheme } from "react-native";
//
import { LinearGradient } from "expo-linear-gradient";
import { View } from "../view";
import { Text } from "../text/text";
import { colors, spacing } from "../../theme";
//
import { AvatarProps } from "./avatar.props";
import { AVT_SIZES, DOT_SIZE, LINEAR_GRADIENT_COLORS } from "./avatar.constant";

export function Avatar({
  active = false,
  hasSource = false,
  text = "",
  presetText = "headerMediumBold",
  source,
  size = "small",
  containerStyle,
  preset = "col",
  title = "",
  statusText = "",
  presetLinearColors = "secondary",
}: AvatarProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const isPresetRow = preset === "row";
  const imgStyle = {
    width: AVT_SIZES[size],
    height: AVT_SIZES[size],
    borderRadius: AVT_SIZES[size] / 2,
  };
  const textboxStyle = { marginLeft: 8 } as ViewStyle;
  const dotStyle = [styles.dot, isDarkMode && darkStyles.dot, dotStyles[size]];
  const statusTextColor = isDarkMode ? colors.offWhite : colors.placeholder;
  const linearGradientColors = LINEAR_GRADIENT_COLORS[presetLinearColors];

  return (
    <View style={[styles.container, containerStyle]}>
      <View classNames={[isPresetRow && "row", "alignCenter"]}>
        <View style={styles.wrapper}>
          <View style={styles.imageBox}>
            {hasSource && <Image source={source} style={[styles.image, imgStyle]} />}
            {!hasSource && (
              <LinearGradient
                colors={linearGradientColors}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.9 }}
                style={[styles.linearBox, imgStyle]}
              >
                <Text preset={presetText} text={text} color={colors.background} style={{ paddingTop: 6 }} />
              </LinearGradient>
            )}
            {active && <View style={dotStyle} />}
          </View>
        </View>
        <View style={[styles.textbox, isPresetRow && textboxStyle]}>
          <Text preset="mediumBold" text={title} />
          {isPresetRow && (
            <Text preset="small" text={statusText} color={statusTextColor} style={{ paddingVertical: spacing[1] }} />
          )}
        </View>
      </View>
    </View>
  );
}

const dotStyles = StyleSheet.create({
  small: {
    top: 1,
    right: -1,
  },
  normal: {
    top: 3,
    right: 0,
  },
  medium: {
    top: 3,
    right: 0,
  },
  large: {
    top: 4,
    right: 0,
    width: 18,
    height: 18,
  },
});

const darkStyles = StyleSheet.create({
  dot: {
    borderColor: colors.transparent,
  },
});

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
  },
  wrapper: {
    alignItems: "flex-start",
  },
  imageBox: {
    alignItems: "flex-start",
    padding: 2,
  },
  dot: {
    position: "absolute",
    top: 3,
    right: 0,
    height: DOT_SIZE,
    width: DOT_SIZE,
    borderRadius: 50,
    borderColor: colors.white,
    borderWidth: 2,
    backgroundColor: colors.success,
  },
  image: {},
  linearBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  textbox: {
    paddingVertical: 2,
    justifyContent: "center",
  },
});
