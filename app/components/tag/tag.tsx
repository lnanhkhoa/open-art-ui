import _ from "lodash";
import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { View } from "../view";
import { Text } from "../text/text";
import { constants } from "../../config";
import { colors } from "../../theme";
const { STATUS, STATUS_COLORS } = constants;
interface TagProps {
  status: constants.STATUS_TYPE;
  style?: ViewStyle;
  containerStyle?: ViewStyle | ViewStyle[];
}

export function Tag({ status, style, containerStyle }: TagProps) {
  const statusText = _.upperFirst(status);
  const colorStyle = { backgroundColor: STATUS_COLORS[status] };

  return (
    <View style={containerStyle}>
      <View style={[styles.container, colorStyle, style]}>
        <Text preset="mediumBold" text={statusText} color={colors.white} />
      </View>
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
