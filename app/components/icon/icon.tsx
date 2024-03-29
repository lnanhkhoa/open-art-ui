import * as React from "react";
import { TouchableOpacity, ImageStyle, StyleSheet, StyleProp, ViewStyle, Image, useColorScheme } from "react-native";
import { icons, IconTypes } from "./icons";
import { colors } from "../../theme";

export interface IconProps {
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  size?: number;
  icon?: IconTypes;
  color?: string;
  isKeepColor?: boolean;
  onPress?: () => void;
}
export { IconTypes };

const DEFAULT_SIZE = 24;
export function Icon(props: IconProps) {
  const {
    style: styleOverride,
    icon,
    size = DEFAULT_SIZE,
    containerStyle,
    onPress,
    isKeepColor = true,
    color: colorProp,
  } = props;
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const color = colorProp || (!isKeepColor && (isDarkMode ? colors.offWhite : colors.text));

  //
  const sizeStyles = { width: size, height: size } as ImageStyle;
  const colorStyles = color ? ({ tintColor: color } as ImageStyle) : undefined;
  //
  return (
    <TouchableOpacity disabled={!onPress} onPress={onPress} style={[styles.container, containerStyle]}>
      <Image style={[styles.image, sizeStyles, colorStyles, styleOverride]} source={icons[icon]} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  image: {},
});
