import { TextStyle } from "react-native";
import { typography } from "../../theme";

/**
 * All text will start off looking like this.
 */
const medium: TextStyle = {
  fontFamily: typography.EpilogueRegular,
  fontSize: 16,
  letterSpacing: 0.5,
  lineHeight: 16 * 1.25,
};

const TEXT_STYLES = {
  xsmall: {
    fontFamily: typography.EpilogueMedium,
    fontSize: 13,
    lineHeight: 13 * 1.25,
  } as TextStyle,
  small: {
    fontFamily: typography.EpilogueMedium,
    fontSize: 14,
    lineHeight: 14 * 1.25,
  } as TextStyle,
  medium,
  large: {
    fontFamily: typography.EpilogueRegular,
    fontSize: 20,
    lineHeight: 20 * 1.25,
  } as TextStyle,
};

const DISPLAY_STYLES = {
  small: {
    fontFamily: typography.EpilogueRegular,
    fontSize: 24,
    letterSpacing: 0.5,
    lineHeight: 24 * 1.25,
  } as TextStyle,
  medium: {
    fontFamily: typography.EpilogueRegular,
    fontSize: 32,
    lineHeight: 32 * 1.25,
    letterSpacing: 0.5,
  } as TextStyle,
  large: {
    fontFamily: typography.EpilogueRegular,
    fontSize: 40,
    lineHeight: 40 * 1.25,
    letterSpacing: 0.5,
  } as TextStyle,
};
/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  default: medium,
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
