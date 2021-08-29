import * as React from "react";
import { Text as ReactNativeText, useColorScheme } from "react-native";
import { presets } from "./text.presets";
import { TextProps } from "./text.props";
import { translate } from "../../i18n";
import { colors } from "../../theme";

/**
 * For your text displaying needs.
 *
 * This component is a HOC over the built-in React Native one.
 */
export function Text(props: TextProps) {
  // grab the props
  const { preset = "default", tx, txOptions, text, children, style: styleOverride, ...rest } = props;

  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const color = props.color || (isDarkMode ? colors.offWhite : colors.text);

  // figure out which content to use
  const i18nText = tx && translate(tx, txOptions);
  const content = i18nText || text || children;
  if (!content) return null;

  const style = presets[preset] || presets.default;
  const colorText = { color };
  const styles = [style, colorText, styleOverride];

  return (
    <ReactNativeText {...rest} style={styles}>
      {content}
    </ReactNativeText>
  );
}
