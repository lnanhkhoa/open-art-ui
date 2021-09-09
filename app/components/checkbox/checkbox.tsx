import * as React from "react";
import { TouchableOpacity, StyleSheet, View, ViewStyle, StyleProp } from "react-native";
import { Icon } from "../icon/icon";
import { colors, spacing } from "../../theme";
import { TxKeyPath } from "../../i18n";

export interface CheckboxProps {
  style?: StyleProp<ViewStyle>;
  outlineStyle?: StyleProp<ViewStyle>;
  fillStyle?: StyleProp<ViewStyle>;
  value?: boolean;
  text?: string;
  tx?: TxKeyPath;
  onToggle?: (newValue: boolean) => void;
  isActive?: boolean;
}

export function Checkbox({
  style,
  outlineStyle: outlineOvrStyle,
  fillStyle: fillOvdStyle,
  onToggle,
  isActive = false,
  value,
}: CheckboxProps) {
  const disabled = !onToggle;
  const onPress = onToggle ? () => onToggle(!value) : null;

  const rootStyle = [styles.root, style];
  const outlineStyle = [
    styles.outline,
    isActive && { borderColor: colors.primaryDark },
    disabled && { borderColor: colors.line },
    outlineOvrStyle,
  ];
  const fillStyle = [
    styles.fill,
    isActive && { backgroundColor: colors.primaryDark },
    disabled && { backgroundColor: colors.line },
    fillOvdStyle,
  ] as ViewStyle;

  return (
    <TouchableOpacity activeOpacity={0.9} disabled={disabled} onPress={onPress} style={rootStyle}>
      <View style={outlineStyle}>
        {value && <View style={fillStyle} />}
        {value && (
          <View style={styles.check}>
            <Icon icon="check" size={22} style={{ tintColor: colors.white }} />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

const DIMENSIONS = { width: 24, height: 24 };
const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingVertical: spacing[1],
    alignSelf: "flex-start",
  },
  outline: {
    ...DIMENSIONS,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: colors.placeholder,
    borderRadius: 4,
  },
  check: {
    position: "absolute",
    flex: 1,
  },
  fill: {
    width: DIMENSIONS.width,
    height: DIMENSIONS.height,
    backgroundColor: colors.primaryDarkMode,
    borderRadius: 4,
  },
});
