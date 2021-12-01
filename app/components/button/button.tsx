import React, { useState } from "react";
import { TouchableOpacity, ViewStyle, useColorScheme, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIndicator } from "react-native-indicators";
import { View } from "../view";
import { Text } from "../text/text";
//
import { ButtonProps } from "./button.props";
import { presets } from "../text/text.presets";
import { viewPresets, colorTextPresets } from "./button.presets";
//
import { colors, spacing } from "../../theme";
import { Icon } from "../icon/icon";
const LINEAR_COLORS = [colors.gradient.accent.from, colors.gradient.accent.to];

export function Button({
  preset = "primary",
  presetText = "largeBold",
  tx,
  text,
  style: _styleOverride,
  textStyle: _textStyleOverride,
  containerStyle,
  children,
  onPressIn,
  onPressOut,
  isLoading = false,
  leftIcon,
  leftIconProps,
  disabled = false,
  ...rest
}: ButtonProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [touching, setTouching] = useState(false);

  //
  const styleOverride = StyleSheet.flatten(_styleOverride);
  const textStyleOverride = StyleSheet.flatten(_textStyleOverride);
  const disabledViewStyle = { opacity: 0.4 } as ViewStyle;
  const viewStyle: ViewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles: ViewStyle[] = [viewStyle, disabled && disabledViewStyle, styleOverride];
  const textStyle = presets[presetText];
  const textStyles = [textStyle, colorTextPresets[preset], textStyleOverride];

  const content =
    children ||
    (isLoading || leftIcon ? (
      <View classNames={["row"]}>
        {leftIcon ? (
          <Icon icon={leftIcon} size={24} {...leftIconProps} />
        ) : (
          <MaterialIndicator color="white" size={18} style={{ paddingHorizontal: spacing[3] }} />
        )}
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
        {...rest}
      >
        <View style={viewStyles}>{content}</View>
      </TouchableOpacity>
    );
  }

  if (preset === "text") {
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
        style={[{ borderRadius: 8 }, disabled && disabledViewStyle]}
      >
        {content}
      </TouchableOpacity>
    );
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
