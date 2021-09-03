import { ReactNode } from "react";
import {
  ViewProps as RNViewProps,
  ViewStyle,
  TouchableHighlightProps as RNTouchableHighlightProps,
  TouchableOpacityProps as RNTouchableOpacityProps,
} from "react-native";
import { BlurTint } from "expo-blur";

export interface ViewProps extends RNViewProps {
  backgroundColor?: string;
  children?: ReactNode;
  style?: ViewStyle | ViewStyle[];
  flexible?: boolean;
  row?: boolean;
  alignCenter?: boolean;
  justifySpaceBetween?: boolean;

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
