import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  TextStyle,
  TouchableOpacityProps,
  ViewStyle,
  GestureResponderEvent,
  useColorScheme,
  StyleSheet,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIndicator } from "react-native-indicators";
// import MaskedView from "@react-native-community/masked-view";
import { View } from "../view";
import { Text } from "../text/text";
import { TextPresets, presets } from "../text/text.presets";
import { viewPresets, colorTextPresets, ButtonPresetNames } from "./button.presets";
import { TxKeyPath } from "../../i18n";
import { colors, spacing } from "../../theme";
export interface ButtonProps extends TouchableOpacityProps {
  disabled?: boolean;
  isLoading?: boolean;
  tx?: TxKeyPath;
  text?: string;
  style?: ViewStyle;
  containerStyle?: ViewStyle;
  textStyle?: TextStyle;
  presetText?: TextPresets;
  preset?: ButtonPresetNames;
  children?: React.ReactNode;
}

const LINEAR_COLORS = [colors.gradient.accent.from, colors.gradient.accent.to];

export function Button({
  preset = "primary",
  presetText = "largeBold",
  tx,
  text,
  style: styleOverride,
  textStyle: textStyleOverride,
  containerStyle,
  children,
  onPressIn,
  onPressOut,
  isLoading = false,
  disabled = false,
  ...rest
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [touching, setTouching] = useState(false);

  //
  const disabledViewStyle = { opacity: 0.4 } as ViewStyle;
  const viewStyle: ViewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles: ViewStyle[] = [viewStyle, disabled && disabledViewStyle, styleOverride];
  const textStyle = presets[presetText];
  const textStyles = [textStyle, colorTextPresets[preset], textStyleOverride];

  const content =
    children ||
    (isLoading ? (
      <View row>
        <MaterialIndicator color="white" size={18} style={{ paddingHorizontal: spacing[3] }} />
        <Text style={textStyles} text=" " />
        <Text tx={tx} style={textStyles} text={text} />
      </View>
    ) : (
      <Text tx={tx} text={text} style={textStyles} />
    ));
  if (preset === "secondary" || preset === "subtle") {
    const subtleTouchStyle = { borderColor: colors.placeholder, borderWidth: 1 } as ViewStyle;
    const touchingStyle = { backgroundColor: colors.bgInput } as ViewStyle;
    return (
      <TouchableOpacity
        disabled={isLoading || disabled}
        activeOpacity={0.9}
        onPressIn={(e) => {
          onPressIn && onPressIn(e);
          setTouching(true);
        }}
        onPressOut={(e) => {
          onPressOut && onPressOut(e);
          setTouching(false);
        }}
        style={[
          { borderRadius: 8 },
          (isLoading || disabled || touching) && touchingStyle,
          isDarkMode && { borderColor: colors.primaryDark },
          disabled && disabledViewStyle,
          preset === "subtle" && subtleTouchStyle,
          containerStyle,
        ]}
      >
        <View style={viewStyles}>{content}</View>
      </TouchableOpacity>
    );
  }

  if (preset === "text") {
    <TouchableOpacity
      disabled={isLoading || disabled}
      activeOpacity={0.9}
      onPressIn={(e) => {
        onPressIn && onPressIn(e);
        setTouching(true);
      }}
      onPressOut={(e) => {
        onPressOut && onPressOut(e);
        setTouching(false);
      }}
      style={[{ borderRadius: 8 }, disabled && disabledViewStyle]}
    >
      {content}
    </TouchableOpacity>;
  }

  return (
    <TouchableOpacity
      disabled={isLoading || disabled}
      onPressIn={(e) => {
        onPressIn && onPressIn(e);
        setTouching(true);
      }}
      onPressOut={(e) => {
        onPressOut && onPressOut(e);
        setTouching(false);
      }}
      activeOpacity={0.9}
      style={containerStyle}
      {...rest}
    >
      <LinearGradient
        style={[viewStyles, (isLoading || touching) && { borderColor: colors.line }]}
        colors={LINEAR_COLORS}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.85, y: 1.25 }}
      >
        {content}
      </LinearGradient>
    </TouchableOpacity>
  );
}

interface MaskedButtonProps extends TouchableOpacityProps {
  children: React.ReactElement;
  onPress?: (event: GestureResponderEvent) => void;
}

// function MaskedButton({ children }: MaskedButtonProps) {
//   const [layout, setlayout] = useState({ width: 0, height: 0 });
//   const [isReady, setIsReady] = useState(false);
//   useEffect(() => setIsReady(false), [children]);

//   if (!isReady) {
//     return (
//       <View
//         onLayout={({
//           nativeEvent: {
//             layout: { height, width },
//           },
//         }) => {
//           setlayout({ width: width, height: height });
//           setIsReady(true);
//         }}
//       >
//         {children}
//       </View>
//     );
//   }

//   return (
//     <MaskedView style={{ height: layout.height, width: layout.width }} maskElement={children}>
//       <LinearGradient style={{ flex: 1 }} colors={LINEAR_COLORS} start={{ x: 0, y: 0 }} end={{ x: 0.85, y: 1.25 }} />
//     </MaskedView>
//   );
// }
