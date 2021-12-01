
import { constants } from "../../config";
import { colors} from "../../theme";


export const AVT_SIZES = {
  small: constants.AVT_SIZE.SMALL,
  normal: constants.AVT_SIZE.NORMAL,
  large: constants.AVT_SIZE.LARGE,
  medium: constants.AVT_SIZE.MEDIUM,
};
export const DOT_SIZE = 14;
export const LINEAR_GRADIENT_COLORS = {
  secondary: [colors.gradient.secondary.from, colors.gradient.secondary.to],
  primary: [colors.gradient.primary.from, colors.gradient.primary.to],
  accent: [colors.gradient.accent.from, colors.gradient.accent.to],
};