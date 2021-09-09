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

// const BASE_TEXT: TextStyle = presets.largeBold;

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets = {
  primary: BASE_VIEW,
  secondary: {
    ...BASE_VIEW,
    borderColor: colors.primary,
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

export const colorTextPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: { color: colors.offWhite, paddingVertical: spacing[1] } as TextStyle,
  secondary: { paddingVertical: spacing[1] } as TextStyle,
  subtle: { color: colors.text, paddingVertical: spacing[1] } as TextStyle,
  text: { color: colors.offWhite, paddingVertical: spacing[1] } as TextStyle,
};

export type ButtonPresetNames = keyof typeof viewPresets;
