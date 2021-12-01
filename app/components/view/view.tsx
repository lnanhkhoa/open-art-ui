import React from "react";
import { BlurView } from "expo-blur";
import { View as RNView, ViewStyle } from "react-native";
import { ViewProps } from "./view.prop";
import { colors } from "../../theme";

export function View({
  backgroundColor: bgColor,
  children,
  style: styleOverride,
  classNames=[],
  intensity,
  tint,
  ...rest
}: ViewProps) {
  const backgroundColor = bgColor || colors.transparent;
  const styles = [
    { backgroundColor, flex: classNames.includes("flexible") ? 1 : undefined },
    classNames.includes("alignCenter") && ({ alignItems: "center" } as ViewStyle),
    classNames.includes("justifySpaceBetween") && ({ justifyContent: "space-between" } as ViewStyle),
    classNames.includes("justifyCenter") && ({ justifyContent: "center" } as ViewStyle),
    classNames.includes("row") && ({ flexDirection: "row", alignItems: "center" } as ViewStyle),
    styleOverride,
  ];

  return intensity ? (
    <BlurView intensity={intensity} tint={tint} style={styles}>
      {children}
    </BlurView>
  ) : (
    <RNView {...rest} style={styles}>
      {children}
    </RNView>
  );
}
