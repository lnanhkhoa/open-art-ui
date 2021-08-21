import React, { useState } from "react";
import {
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  ViewStyle,
  StyleSheet,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";
import { Text } from "../text/text";
import { View } from "../view/view";
import { presets as TextPresets } from "../text/text.presets";
import { Icon } from "../icon/icon";
import { IconTypes } from "../icon/icons";
//
import { translate, TxKeyPath } from "../../i18n";
import { colors, spacing, typography } from "../../theme";
export interface TextFieldProps extends TextInputProps {
  placeholderTx?: TxKeyPath;
  placeholder?: string;
  labelTx?: TxKeyPath;
  label?: string;
  noticeTx?: TxKeyPath;
  notice?: string;
  noticeType?: "default" | "error" | "success";
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  preset?: keyof typeof PRESETS;
  leftIcon?: IconTypes;
  forwardedRef?: any;
  showCloseIcon?: boolean;
  disabled?: boolean;
  onPressCancel?: () => void;
  onFocus?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
}

const NOTICE_COLORS = {
  default: colors.placeholder,
  error: colors.error,
  success: colors.success,
};

export function TextField({
  placeholderTx,
  placeholder,
  labelTx,
  label,
  noticeTx,
  notice,
  noticeType = "default",
  preset = "default",
  style: styleOverride,
  inputStyle: inputStyleOverride,
  forwardedRef,
  leftIcon,
  showCloseIcon,
  disabled,
  onPressCancel,
  onFocus,
  onBlur,
  ...rest
}: TextFieldProps) {
  const [isFocus, setIsFocus] = useState(false);

  const isShowNotice = !!notice && !isFocus;
  const containerStyles = StyleSheet.flatten([
    styles.container,
    PRESETS[preset],
    disabled && { opacity: 0.5 },
    styleOverride,
  ]);
  const inputStyles = [styles.input, inputStyleOverride];
  const actualPlaceholder = placeholderTx ? translate(placeholderTx) : placeholder;
  const wrapperInput = [
    styles.wrapperInput,
    isFocus && {
      borderColor: colors.label,
      backgroundColor: colors.offWhite,
    },
    isShowNotice && {
      borderColor: NOTICE_COLORS[noticeType],
    },
  ];

  const labelColor = isShowNotice ? NOTICE_COLORS[noticeType] : NOTICE_COLORS.default;
  const noticeColor = isShowNotice ? NOTICE_COLORS[noticeType] : NOTICE_COLORS.default;

  return (
    <View style={containerStyles}>
      <View style={wrapperInput}>
        {leftIcon && <Icon icon={leftIcon} size={18} containerStyle={{ marginRight: spacing[3] }} />}
        <View style={{ flex: 1, paddingTop: spacing[2] }}>
          <Text preset={"xsmall"} tx={labelTx} text={label} color={labelColor} style={{ paddingBottom: spacing[1] }} />
          <TextInput
            ref={forwardedRef}
            onFocus={(e) => {
              onFocus && onFocus(e);
              setIsFocus(true);
            }}
            onBlur={(e) => {
              onBlur && onBlur(e);
              setIsFocus(false);
            }}
            placeholder={actualPlaceholder}
            placeholderTextColor={colors.placeholder}
            underlineColorAndroid={colors.transparent}
            style={inputStyles}
            {...rest}
          />
        </View>
        {showCloseIcon && isFocus && (
          <Icon
            icon="close"
            size={24}
            onPress={onPressCancel}
            color={colors.titleActive}
            containerStyle={{ padding: spacing[3] }}
          />
        )}
      </View>
      <Text
        preset={"xsmall"}
        tx={noticeTx}
        text={notice || " "}
        color={noticeColor}
        style={{ paddingLeft: spacing[4], paddingVertical: spacing[1] }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: spacing[3],
    paddingHorizontal: spacing[3],
  },
  wrapperInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.bgInput,
    paddingLeft: spacing[4],
    borderRadius: 8,
    minHeight: 50,
    borderWidth: 1,
    borderColor: colors.transparent,
  },
  input: {
    paddingTop: spacing[1],
    paddingBottom: spacing[2],
    ...TextPresets.medium,
  },
});

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS: { [name: string]: ViewStyle } = {
  default: {},
};
