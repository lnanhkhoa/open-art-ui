import { palette } from "./palette";

/**
 * Roles for colors.  Prefer using these over the palette.  It makes it easier
 * to change things.
 *
 * The only roles we need to place in here are the ones that span through the app.
 *
 * If you have a specific use-case, like a spinner colors.  It makes more sense to
 * put that in the <Spinner /> component.
 */
export const colors = {
  transparent: "rgba(0, 0, 0, 0)",
  offWhite: palette.grayscale[100],
  white: palette.white,
  woodsmoke: palette.woodsmoke,
  black: palette.black,
  body: palette.grayscale[700],
  primary: palette.blue.default,
  primaryDark: palette.blue.dark,
  primaryDarkMode: palette.blue.darkMode,
  secondary: palette.yellow.default,
  secondaryDark: palette.yellow.dark,
  error: palette.red.default,
  errorDark: palette.red.dark,
  success: palette.green.default,
  successDark: palette.green.dark,
  warning: palette.orange.default,
  warningDark: palette.orange.dark,

  titleActive: palette.grayscale[800],
  text: palette.grayscale[700],
  label: palette.grayscale[600],
  placeholder: palette.grayscale[500],
  line: palette.grayscale[400],
  bgInput: palette.grayscale[300],
  background: palette.grayscale[200],
  bgDim: palette.grayscale[300],
  inkBase: palette.grayscale[900],

  /**
   * Storybook text color for stories that display Text components against the
   * white background
   */
  storybookDarkBg: palette.black,
  storybookTextColor: palette.black,

  /**
   * gradient
   */

  gradient: {
    primary: {
      from: "#0000C5",
      to: "#0046FF",
    },
    secondary: {
      from: "#FF9C00",
      to: "#FFDB03",
    },
    accent: {
      from: "#0000F6",
      to: "#9041FF",
    },
  },
};
