import { TextStyle } from "react-native";
import { colors, typography } from "../../theme";

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.EpilogueRegular,
  color: colors.text,
  fontSize: 16,
  lineHeight: 22,
};

const TEXT_STYLES = {
  xsmall: {
    fontFamily: typography.EpilogueMedium,
    color: colors.text,
    fontSize: 13,
    lineHeight: 20,
  } as TextStyle,
  small: {
    fontFamily: typography.EpilogueRegular,
    color: colors.text,
    fontSize: 14,
    lineHeight: 20,
  } as TextStyle,
  medium: BASE,
  large: {
    fontFamily: typography.EpilogueRegular,
    color: colors.text,
    fontSize: 20,
    lineHeight: 28,
  } as TextStyle,
};
const DISPLAY_STYLES = {
  small: {
    fontFamily: typography.EpilogueRegular,
    color: colors.text,
    fontSize: 24,
    lineHeight: 32,
  } as TextStyle,
  medium: {
    fontFamily: typography.EpilogueRegular,
    color: colors.text,
    fontSize: 32,
    lineHeight: 36,
  } as TextStyle,
  large: {
    fontFamily: typography.EpilogueRegular,
    color: colors.text,
    fontSize: 40,
    lineHeight: 48,
  } as TextStyle,
};
/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  default: BASE,
  xsmall: TEXT_STYLES.xsmall,
  small: TEXT_STYLES.small,
  medium: TEXT_STYLES.medium,
  large: TEXT_STYLES.large,
  xsmallBold: { ...TEXT_STYLES.xsmall, fontFamily: typography.EpilogueBold } as TextStyle,
  smallBold: { ...TEXT_STYLES.small, fontFamily: typography.EpilogueBold } as TextStyle,
  mediumBold: { ...TEXT_STYLES.medium, fontFamily: typography.EpilogueBold } as TextStyle,
  largeBold: { ...TEXT_STYLES.large, fontFamily: typography.EpilogueBold } as TextStyle,
  headerSmall: DISPLAY_STYLES.small,
  headerMedium: DISPLAY_STYLES.medium,
  headerLarge: DISPLAY_STYLES.large,
  headerSmallBold: { ...DISPLAY_STYLES.small, fontFamily: typography.EpilogueBold } as TextStyle,
  headerMediumBold: { ...DISPLAY_STYLES.medium, fontFamily: typography.EpilogueBold } as TextStyle,
  headerLargeBold: { ...DISPLAY_STYLES.large, fontFamily: typography.EpilogueBold } as TextStyle,
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;