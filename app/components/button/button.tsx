import * as React from "react";
import { StyleProp, TouchableOpacity, StyleSheet, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import {LinearGradient} from 'expo-linear-gradient'
import { Text } from "../text/text";
import { viewPresets, textPresets, ButtonPresetNames } from "./button.presets";
import { TxKeyPath } from "../../i18n";



export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * One of the different types of text presets.
   */
  preset?: ButtonPresetNames;

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode;
}

export function Button(props: ButtonProps) {
  // grab the props
  const { preset = "primary", tx, text, style: styleOverride, textStyle: textStyleOverride, children, ...rest } = props;

  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const viewStyles = [viewStyle, styleOverride];
  const textStyle = textPresets[preset] || textPresets.primary;
  const textStyles = [textStyle, textStyleOverride];

  const content = children || <Text tx={tx} text={text} style={textStyles} />;

  return (
    <TouchableOpacity style={viewStyles} {...rest}>
      {content}
    </TouchableOpacity>
  );
}

// const styles = StyleSheet.create({
//   container: {}
// });
