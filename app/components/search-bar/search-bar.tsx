import React, { useState } from "react";
import {
  StyleSheet,
  ViewStyle,
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  useColorScheme,
} from "react-native";
import { View } from "../view";
import { Text } from "../text/text";
import { presets } from "../text/text.presets";
import { Icon } from "../icon/icon";
import { colors, spacing } from "../../theme";
import { createStyles } from "../../utils/function";

export interface SearchBarProps extends TextInputProps {
  containerStyle?: ViewStyle;
  inputStyle?: ViewStyle;
  value?: string;
  placeholderTextColor?: string;
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
  placeholderTextColor,
  onFocus,
  onBlur,
  ...rest
}: SearchBarProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const [isFocus, setIsFocus] = useState(false);
  const showCancelButton = isFocus || !!value;

  // styles

  const styles = createStyles(lightStyles, darkStyles, isDarkMode);

  const inputStyles = [styles.input, inputStyle];
  const placeholderTextColors = placeholderTextColor || (isDarkMode ? colors.offWhite : colors.placeholder);

  return (
    <View row alignCenter style={styles.wrapper}>
      <View alignCenter style={styles.container}>
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
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={placeholderTextColors}
          onChangeText={onChangeText}
          // value={value}
          defaultValue={value}
          multiline={false}
          numberOfLines={1}
          {...rest}
        />
        {!showCancelButton && rightIcon && rightIcon()}
      </View>
      {showCancelButton && <Text text="Cancel" preset="smallBold" style={{ marginLeft: spacing[3] }} />}
    </View>
  );
}

const lightStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: colors.bgInput,
    borderRadius: 8,
  },
  searchIcon: {
    paddingHorizontal: spacing[2],
  },
  input: {
    ...presets.small,
    color: colors.text,
    flex: 1,
    textAlign: "left",
    paddingVertical: spacing[3],
    paddingRight: spacing[3],
  },
});

const darkStyles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.titleActive,
  },
  container: {
    backgroundColor: colors.body,
  },
  input: {
    color: colors.offWhite,
  },
});
