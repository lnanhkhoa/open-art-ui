import React from "react";
import { StyleSheet, ViewStyle, Image, ImageRequireSource, ImageURISource } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "../view";
import { Text } from "../text/text";
import { constants } from "../../config";
import { colors } from "../../theme";

const { AVT_SIZE } = constants;

export interface AvatarProps {
  hasSource?: boolean;
  active?: boolean;
  source?: ImageRequireSource | ImageURISource;
  size?: "small" | "normal" | "large";
  containerStyle?: ViewStyle;
  text?: string;
  preset?: "col" | "row";
  title?: string;
  statusText?: string;
}

const AVT_SIZES = {
  small: AVT_SIZE.SMALL,
  normal: AVT_SIZE.NORMAL,
  large: AVT_SIZE.LARGE,
};

export function Avatar({
  active = false,
  hasSource = false,
  text = "",
  source,
  size = "small",
  containerStyle,
  preset = "col",
  title = "",
  statusText = "",
}: AvatarProps) {
  const imgStyle = {
    width: AVT_SIZES[size],
    height: AVT_SIZES[size],
    borderRadius: AVT_SIZES[size] / 2,
  };

  const textboxStyle = { marginLeft: 8 } as ViewStyle;

  return (
    <View style={[styles.container, containerStyle]}>
      <View row={preset === "row"} style={{ alignItems: "center" }}>
        <View style={styles.wrapper}>
          <View style={styles.imageBox}>
            {hasSource && <Image source={source} style={[styles.image, imgStyle]} />}
            {!hasSource && (
              <LinearGradient
                colors={[colors.gradient.secondary.from, colors.gradient.secondary.to]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0.9 }}
                style={[styles.linearBox, imgStyle]}
              >
                <Text preset="headerMediumBold" text={text} color={colors.background} style={{ paddingTop: 6 }} />
              </LinearGradient>
            )}
            {active && <View style={styles.dot} />}
          </View>
        </View>
        <View style={[styles.textbox, preset === "row" && textboxStyle]}>
          <Text preset="smallBold" text={title} color={colors.titleActive} />
          {preset === "row" && <Text preset="small" text={statusText} color={colors.placeholder} />}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "flex-start" },
  wrapper: { alignItems: "flex-start" },
  imageBox: {
    alignItems: "flex-start",
    padding: 2,
  },
  dot: {
    position: "absolute",
    top: 3,
    right: 0,
    height: 14,
    width: 14,
    borderRadius: 6,
    borderColor: colors.white,
    borderWidth: 2,

    backgroundColor: colors.success,
  },
  image: {},
  linearBox: {
    alignItems: "center",
    justifyContent: "center",
  },
  textbox: { paddingVertical: 2, justifyContent: "center" },
});
