import { TouchableOpacityProps, ViewStyle, TextStyle, GestureResponderEvent } from "react-native";
import { TextPresets } from "../text/text.presets";
import { ButtonPresetNames } from "./button.presets";
import { TxKeyPath } from "../../i18n";
import { IconTypes } from "../icon/icon";

export interface ButtonProps extends TouchableOpacityProps {
  disabled?: boolean;
  isLoading?: boolean;
  tx?: TxKeyPath;
  text?: string;
  leftIcon?: IconTypes;
  leftIconProps?: any;
  style?: ViewStyle | ViewStyle[];
  containerStyle?: ViewStyle| ViewStyle[];
  textStyle?: TextStyle | TextStyle[];
  presetText?: TextPresets;
  preset?: ButtonPresetNames;
  children?: React.ReactNode;
}


export interface MaskedButtonProps extends TouchableOpacityProps {
  children: React.ReactElement;
  onPress?: (event: GestureResponderEvent) => void;
}
