import * as React from "react";
import { TouchableOpacity, ImageStyle, StyleSheet, StyleProp, ViewStyle, Image } from "react-native";
import { icons, IconTypes } from "./icons";
import { colors } from "../../theme";

const DEFAULT_SIZE = 24;
export interface IconProps {
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  size?: number;
  icon?: IconTypes;
  color?: string;
  onPress?: () => void;
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, color = colors.text, size = DEFAULT_SIZE, containerStyle, onPress } = props;
  const sizeStyles = {
    width: size,
    height: size,
  } as ImageStyle;
  const colorStyle = { color };

  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress} style={[styles.container, containerStyle]}>
      <Image style={[styles.image, sizeStyles, colorStyle, styleOverride]} source={icons[icon]} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {},
});
