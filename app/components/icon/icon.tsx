import * as React from "react"
import { View, ImageStyle, StyleSheet, StyleProp, ViewStyle } from "react-native"
import { AutoImage as Image } from "../auto-image/auto-image"
import { icons, IconTypes } from "./icons"

const DEFAULT_SIZE = 24
export interface IconProps {
  style?: StyleProp<ImageStyle>
  containerStyle?: StyleProp<ViewStyle>
  size?: number
  icon?: IconTypes
}

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, size = DEFAULT_SIZE, containerStyle } = props
  const sizeStyles = {
    width: size,
    height: size,
  } as ImageStyle

  return (
    <View style={[styles.container, containerStyle]}>
      <Image
        style={[styles.image, sizeStyles, styleOverride]}
        source={icons[icon]}
        resizeMode="contain"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  image: {},
})
