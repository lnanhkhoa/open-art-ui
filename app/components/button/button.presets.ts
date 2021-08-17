import { ViewStyle, TextStyle } from "react-native";
import { colors, spacing } from "../../theme";

/**
 * All text will start off looking like this.
 */
const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[2],
  paddingHorizontal: spacing[2],
  borderRadius: 4,
  justifyContent: "center",
  alignItems: "center",
};

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
};

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<string, ViewStyle> = {
  primary: {
    ...BASE_VIEW,
    backgroundColor: colors.primary,
  } as ViewStyle,
  secondary: {
    ...BASE_VIEW,
    backgroundColor: colors.primary,
  } as ViewStyle,
  subtle: {
    ...BASE_VIEW,
    backgroundColor: colors.primary,
  } as ViewStyle,
  text: {
    ...BASE_VIEW,
    backgroundColor: colors.primary,
  } as ViewStyle,
};

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, fontSize: 9, color: colors.text } as TextStyle,
  secondary: { ...BASE_TEXT, fontSize: 9, color: colors.text } as TextStyle,
  subtle: { ...BASE_TEXT, fontSize: 9, color: colors.text } as TextStyle,
  text: { ...BASE_TEXT, fontSize: 9, color: colors.text } as TextStyle,
};

export type ButtonPresetNames = keyof typeof viewPresets;
