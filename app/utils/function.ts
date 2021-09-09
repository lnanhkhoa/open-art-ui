import _ from "lodash";
import { ViewStyle, TextStyle, ImageStyle } from "react-native";

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export function createStyles<T extends NamedStyles<T> | NamedStyles<any>>(
  lightStyles: T,
  darkStyles: any,
  isDarkMode: boolean,
) {
  if (!isDarkMode) return lightStyles;
  return _.mapValues(lightStyles, (i, key) => (darkStyles[key] ? { ...i, ...darkStyles[key] } : i));
}
