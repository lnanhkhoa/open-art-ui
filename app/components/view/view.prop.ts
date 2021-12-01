import { ReactNode } from "react";
import {
  ViewProps as RNViewProps,
  ViewStyle,
  TouchableHighlightProps as RNTouchableHighlightProps,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from "react-native";
import { BlurTint } from "expo-blur";

const CLASS_NAMES = [
  "flexible" as const,
  "alignCenter" as const,
  "justifySpaceBetween" as const,
  "justifyCenter" as const,
  "row" as const,
  "" as const, // for calc
];

export interface ViewProps extends RNViewProps {
  backgroundColor?: string;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  classNames?: typeof CLASS_NAMES;
  // blur props
  tint?: BlurTint;
  intensity?: number;
}
export interface TouchableHighlightProps extends RNTouchableHighlightProps {
  backgroundColor?: string | undefined;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
}
export interface TouchableOpacityProps extends RNTouchableOpacityProps {
  backgroundColor?: string | undefined;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[] | undefined;
}
