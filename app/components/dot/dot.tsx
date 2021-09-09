import React from "react";
import { StyleSheet, Text, View, ViewStyle } from "react-native";
import { constants } from "../../config";

const { STATUS, STATUS_COLORS } = constants;

interface DotIconProps {
  status: constants.STATUS_TYPE;
}

export function DotIcon(props: DotIconProps) {
  const status = props.status || STATUS.SUCCESS;
  const backgroundStyle = { backgroundColor: STATUS_COLORS[status] } as ViewStyle;
  return <View style={[styles.container, backgroundStyle]} />;
}

const styles = StyleSheet.create({
  container: {
    width: 6,
    height: 6,
    borderRadius: 99,
    margin: 4,
  },
});
