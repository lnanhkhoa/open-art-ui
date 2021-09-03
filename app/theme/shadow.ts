import { ViewStyle } from "react-native";
import { colors } from "./color";

export const shadow = {
  cardItem: {
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowRadius: 8,
    elevation: 5,
  } as ViewStyle,
  button: {
    shadowColor: colors.black,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 8,
    elevation: 5,
  } as ViewStyle,
  lightButton: {
    shadowColor: colors.black,
    shadowOpacity: 0.04,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    shadowRadius: 2,
    elevation: 3,
  } as ViewStyle,
  icon: {
    shadowColor: colors.black,
    shadowOpacity: 0.06,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 5,
  } as ViewStyle,
};
