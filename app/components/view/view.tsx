import React from "react";
import { BlurView } from "expo-blur";
import { View as RNView, ViewStyle } from "react-native";
import { ViewProps } from "./view.prop";
import { colors } from "../../theme";

export function View({
  backgroundColor: bgColor,
  children,
  style: styleOverride,
  flexible,
  alignCenter,
  justifySpaceBetween,
  row,
  intensity,
  tint,
  ...rest
}: ViewProps) {
  const backgroundColor = bgColor || colors.transparent;
  const rowStyles = { flexDirection: "row", alignItems: "center" } as ViewStyle;

  const styles = [
    {
      backgroundColor,
      flex: flexible ? 1 : undefined,
    },
    alignCenter && ({ alignItems: "center" } as ViewStyle),
    justifySpaceBetween && ({ justifyContent: "space-between" } as ViewStyle),
    row && rowStyles,
    styleOverride,
  ];

  if (intensity) {
    return (
      <BlurView intensity={intensity} tint={tint} style={styles}>
        {children}
      </BlurView>
    );
  }

  return (
    <RNView {...rest} style={styles}>
      {children}
    </RNView>
  );
}
