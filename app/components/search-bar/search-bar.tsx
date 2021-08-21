import React, { useState } from "react";
import {
  StyleSheet,
  ViewStyle,
  Image,
  ImageRequireSource,
  TextInput,
  TextInputProps,
  ImageURISource,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { View } from "../view";
import { Text } from "../text/text";
import { presets } from "../text/text.presets";
import { Icon } from "../icon/icon";
import { constants } from "../../config";
import { colors, spacing, timing } from "../../theme";

const { AVT_SIZE } = constants;

export interface SearchBarProps extends TextInputProps {
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  value: string;
  rightIcon?: () => React.ReactNode;
  onChangeText?: (text: string) => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

export function SearchBar({
  containerStyle,
  rightIcon,
  inputStyle,
  value = "",
  onChangeText,
  onFocus,
  onBlur,
  ...rest
}: SearchBarProps) {
  const [isFocus, setIsFocus] = useState(false);
  const showCancelButton = isFocus || !!value;

  return (
    <View row style={{ alignItems: "center" }}>
      <View style={[styles.container, containerStyle]}>
        <Icon icon="search" size={16} containerStyle={styles.searchIcon} />
        <TextInput
          onFocus={(e) => {
            onFocus && onFocus(e);
            setIsFocus(true);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
            setIsFocus(false);
          }}
          style={[styles.input, inputStyle]}
          placeholder="Search"
          placeholderTextColor={colors.placeholder}
          onChangeText={onChangeText}
          value={value}
          {...rest}
        />
        {!showCancelButton && rightIcon && rightIcon()}
      </View>
      {showCancelButton && <Text text="Cancel" preset="mediumBold" style={{ marginLeft: spacing[3] }} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bgInput,
    borderRadius: 8,
  },
  searchIcon: {
    paddingHorizontal: spacing[2],
  },
  input: {
    ...presets.medium,
    flex: 1,
    textAlign: "left",
    paddingVertical: spacing[3],
  },
});
