import React, { useState, useRef } from "react";
import {
  StyleSheet,
  ViewStyle,
  TextInput,
  TextInputProps,
  NativeSyntheticEvent,
  TextInputFocusEventData,
  useColorScheme,
} from "react-native";
import { View, TouchableOpacity } from "../view";
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
  isShowClose?: boolean;
  rightIcon?: () => React.ReactNode;
  onChangeText?: (text: string) => void;
  onPressButtonCancel?: () => void;
  onPressCloseIcon?: () => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

export function SearchBar({
  value = "",
  rightIcon,
  onPressCloseIcon,
  onChangeText,
  onFocus,
  onBlur,
  onPressButtonCancel,
  placeholderTextColor,
  containerStyle,
  inputStyle,
  ...rest
}: SearchBarProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const inputRef = useRef(null);
  const [showCancelButton, setShowCancelButton] = useState(false);

  // const [isFocus, setIsFocus] = useState(false);
  // const showCancelButton = isFocus || !!value;

  const onPressCancel = () => {
    onPressButtonCancel && onPressButtonCancel();
    setShowCancelButton(false);
    inputRef.current?.clear();
    inputRef.current?.blur();
  };

  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <View classNames={['row', 'alignCenter']} style={[styles.wrapper, containerStyle]}>
      <View classNames={['alignCenter']} style={styles.container}>
        <Icon icon="search" size={16} containerStyle={styles.searchIcon} color={colorStyles.inkBase} />
        <TextInput
          ref={inputRef}
          onFocus={(e) => {
            onFocus && onFocus(e);
            setShowCancelButton(true);
          }}
          onBlur={(e) => {
            onBlur && onBlur(e);
          }}
          style={[styles.input, inputStyle]}
          placeholder="Search"
          placeholderTextColor={placeholderTextColor || colorStyles.placeholder}
          onChangeText={onChangeText}
          // value={value}
          defaultValue={value}
          multiline={false}
          numberOfLines={1}
          {...rest}
        />
        {!showCancelButton && rightIcon && rightIcon()}
        {showCancelButton && (
          <Icon
            icon="close"
            size={16}
            color={colorStyles.inkBase}
            onPress={() => {
              if (onPressCloseIcon) {
                onPressCloseIcon();
              } else {
                inputRef.current?.clear();
                inputRef.current?.blur();
              }
              onPressCancel && onPressCancel();
            }}
            containerStyle={{ marginHorizontal: spacing[2] }}
          />
        )}
      </View>
      {showCancelButton && (
        <TouchableOpacity onPress={onPressCancel}>
          <Text text="Cancel" preset="smallBold" style={{ marginRight: spacing[0], margin: spacing[3] }} />
        </TouchableOpacity>
      )}
    </View>
  );
}

const createColorStyles = (isDarkMode) => ({
  black: isDarkMode ? colors.offWhite : colors.black,
  bold: isDarkMode ? colors.offWhite : colors.titleActive,
  body: isDarkMode ? colors.offWhite : colors.body,
  label: isDarkMode ? colors.offWhite : colors.label,
  inkBase: isDarkMode ? colors.offWhite : colors.inkBase,
  input: isDarkMode ? colors.offWhite : colors.bgInput,
  placeholder: isDarkMode ? colors.offWhite : colors.placeholder,
});

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
