import _ from "lodash";
import React from "react";
import RangeSlider from "rn-range-slider";
import { StyleSheet, ViewStyle } from "react-native";
import { View } from "../view";
import { Text } from "../text/text";
import { constants, assets } from "../../config";
import { colors } from "../../theme";
const { STATUS, STATUS_COLORS } = constants;
interface SliderProps {
  style?: ViewStyle;
  containerStyle?: ViewStyle | ViewStyle[];
}

export function Slider({ style, containerStyle }: SliderProps) {
  return (
    <View style={containerStyle}>
      <RangeSlider min={0} max={100} step={1} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
});
