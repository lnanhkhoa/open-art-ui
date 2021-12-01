import { ViewStyle, ImageRequireSource, ImageURISource } from "react-native";

export interface AvatarProps {
  hasSource?: boolean;
  active?: boolean;
  presetLinearColors?: "primary" | "secondary" | "accent";
  source?: ImageRequireSource | ImageURISource;
  size?: "small" | "normal" | "medium" | "large";
  containerStyle?: ViewStyle;
  text?: string;
  presetText?: TextPresets;
  preset?: "col" | "row";
  title?: string;
  statusText?: string;
}
