import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../theme";
import { MaterialIndicator } from "react-native-indicators";
import { constants } from "../../config";
const { SCREEN_HEIGHT, SCREEN_WIDTH } = constants;

interface Props {
  visible: boolean;
}

export function IndicatorView({ visible = false }: Props) {
  return visible ? (
    <View style={styles.container}>
      <MaterialIndicator animating size={40} color="white" />
    </View>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgDim,
    flex: 1,
    height: SCREEN_HEIGHT,
    opacity: 0.4,
    position: "absolute",
    width: SCREEN_WIDTH,
    alignItems: "center",
    justifyContent: "center",
    top: 0,
  },
});
