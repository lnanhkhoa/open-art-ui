import React from "react";
import { ViewStyle, useColorScheme } from "react-native";
import { SafeAreaView as RNSafeAreaView, NativeSafeAreaViewProps } from "react-native-safe-area-context";
import { colors } from "../../theme";
export { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends NativeSafeAreaViewProps {
  backgroundColor?: string;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export function SafeAreaView({ backgroundColor: bgColor, children, style: styleOverride = {}, ...rest }: Props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const backgroundColor = bgColor || (isDarkMode ? colors.titleActive : colors.background);

  return (
    <RNSafeAreaView {...rest} style={[{ backgroundColor, flex: 1 }, styleOverride]} edges={["top", "left", "right"]}>
      {children}
    </RNSafeAreaView>
  );
}
