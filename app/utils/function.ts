import _ from "lodash";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { colors } from "../theme";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function createStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  lightStyles: T,
  darkStyles: any,
  isDarkMode: boolean,
) {
  if (!isDarkMode) return lightStyles;
  return _.mapValues(lightStyles, (i, key) => (darkStyles[key] ? { ...i, ...darkStyles[key] } : i));
}

export const wait = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

export const createColorStyles = (isDarkMode) => ({
  black: isDarkMode ? colors.offWhite : colors.black,
  bold: isDarkMode ? colors.offWhite : colors.titleActive,
  body: isDarkMode ? colors.offWhite : colors.body,
  label: isDarkMode ? colors.offWhite : colors.label,
  input: isDarkMode ? colors.offWhite : colors.bgInput,
  placeholder: isDarkMode ? colors.offWhite : colors.placeholder,
});
