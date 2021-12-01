import React from "react";
import { StyleSheet, useColorScheme, ViewStyle } from "react-native";
import { Icon, Text, View, TouchableOpacity, Checkbox } from "../../../components";
import { createStyles, createColorStyles } from "../../../utils/function";
import { colors, spacing } from "../../../theme";

interface CheckBoxProps {
  value: boolean;
  setValue: (value: boolean) => void;
  containerStyle: ViewStyle;
  title: string;
  description?: string;
}

export function CheckBoxText({ value, setValue, title, description, containerStyle }: CheckBoxProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <View classNames={["row"]} style={[styles.container, containerStyle]}>
      <Checkbox value={value} onToggle={(value) => setValue(value)} style={{ paddingRight: spacing[3] }} />
      <View classNames={["flexible"]} style={{ paddingTop: spacing[1] }}>
        <TouchableOpacity onPress={() => setValue(!value)}>
          <Text preset="mediumBold" color={colorStyles.bold} text={title} />
          <Text preset="small" color={colorStyles.placeholder} text={description} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const darkStyles = StyleSheet.create({
  container: {},
});

const lightStyles = StyleSheet.create({
  container: {},
});
