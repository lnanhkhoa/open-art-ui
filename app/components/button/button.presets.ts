import { ViewStyle, TextStyle } from "react-native";
import { presets } from "../text/text.presets";
import { colors, spacing } from "../../theme";

/**
 * All text will start off looking like this.
 */

const PADDING_VERTICAL = spacing[2];
const PADDING_HORIZONTAL = spacing[5];

const BASE_VIEW: ViewStyle = {
  paddingVertical: PADDING_VERTICAL,
  paddingHorizontal: PADDING_HORIZONTAL,
  borderRadius: 8,
  justifyContent: "center",
  alignItems: "center",
  borderWidth: 1,
  borderColor: colors.transparent,
};

const BASE_TEXT: TextStyle = presets.mediumBold;

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  primary: BASE_VIEW,
  secondary: {
    ...BASE_VIEW,
    borderColor: colors.line,
    backgroundColor: colors.transparent,
  } as ViewStyle,
  subtle: {
    ...BASE_VIEW,
    borderColor: colors.transparent,
    backgroundColor: colors.transparent,
    paddingVertical: PADDING_VERTICAL - 1,
    paddingHorizontal: PADDING_HORIZONTAL - 1,
  } as ViewStyle,
  text: {
    ...BASE_VIEW,
    backgroundColor: colors.primary,
  } as ViewStyle,
};

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { ...BASE_TEXT, color: colors.offWhite } as TextStyle,
  secondary: { ...BASE_TEXT, color: colors.text } as TextStyle,
  subtle: { ...BASE_TEXT, color: colors.text } as TextStyle,
  text: { ...BASE_TEXT, color: colors.offWhite } as TextStyle,
};

export type ButtonPresetNames = keyof typeof viewPresets;
