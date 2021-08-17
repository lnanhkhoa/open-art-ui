import { Dimensions, Platform } from "react-native";
export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("screen");

export const IS_IOS = Platform.OS === "ios";
export const PRIMARY_HEADER_HEIGHT = 44;
export const HOME_HEADER_HEIGHT = 44;
export const TIME_TO_SPEAK_A_WORD = 400;

export const BUTTON_SIZE = {
  SMALL: 35,
  NORMAL: 40,
  LARGE: 80,
};

export const AVT_SIZE = {
  SMALL: 35,
  NORMAL: 48,
  LARGE: 80,
};

export const RATING_ICON_SIZE = {
  SMALL: 28,
};

export const IS_SMALL_DEVICE = SCREEN_WIDTH < 375;

export const STATUS = {
  SUCCESS: "success",
  ALERT: "alert",
  WARNING: "warning",
  INFO: "info",
};