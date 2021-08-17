import React from "react";
import { TouchableHighlight as RNTouchableHighlight, TouchableOpacity as RNTouchableOpacity } from "react-native";
import { TouchableHighlightProps, TouchableOpacityProps } from "./view.prop";
import { colors } from "../../theme";

export function TouchableHighlight({
  children,
  backgroundColor,
  style: styleOverride,
  ...rest
}: TouchableHighlightProps) {
  const bgColor = backgroundColor || colors.transparent;
  return (
    <RNTouchableHighlight {...rest} style={[{ backgroundColor: bgColor }, styleOverride]}>
      {children}
    </RNTouchableHighlight>
  );
}

export function TouchableOpacity({ children, backgroundColor, style: styleOverride, ...rest }: TouchableOpacityProps) {
  const bgColor = backgroundColor || colors.transparent;
  return (
    <RNTouchableOpacity {...rest} style={[{ backgroundColor: bgColor }, styleOverride]}>
      {children}
    </RNTouchableOpacity>
  );
}
