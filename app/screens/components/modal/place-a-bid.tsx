import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { View, Text, Icon, Button } from "../../../components";
import { colors, spacing, createColorStyles } from "../../../theme";
import { createStyles } from "../../../utils/function";

interface PlaceABidProps {
  onCloseModal: () => void;
  onPressConfirm: () => void;
}

export function PlaceABid({ onCloseModal, onPressConfirm }: PlaceABidProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  const colorStyles = createColorStyles(isDarkMode);

  return (
    <View classNames={["flexible"]}>
      <View style={styles.overlay} />
      <View classNames={["flexible"]} style={{ justifyContent: "center" }}>
        <View style={styles.modal}>
          <View classNames={["row", "justifySpaceBetween"]} style={{ paddingVertical: spacing[2] }}>
            <Text preset="headerSmallBold" color={colorStyles.body} text="Place a bid" />
            <Icon
              icon="close"
              style={{ padding: 10, paddingRight: 0 }}
              color={colorStyles.label}
              onPress={onCloseModal}
            />
          </View>
          <View style={{ paddingRight: spacing[2] }}>
            <Text preset="medium" color={colorStyles.body} text="You must bid at least 0.825 ETH" />
            <View style={{ paddingTop: spacing[6] }}>
              <Text
                preset="mediumBold"
                color={colorStyles.body}
                text="Your bid"
                style={{ paddingVertical: spacing[1] }}
              />
              <View classNames={["row", "justifySpaceBetween"]} style={styles.line}>
                <Text preset="medium" color={colorStyles.body} text="Enter bid" />
                <Text preset="mediumBold" color={colorStyles.body} text="ETH" />
              </View>
              <View classNames={["row", "justifySpaceBetween"]} style={styles.line}>
                <Text preset="medium" color={colorStyles.body} text="Your balance" />
                <Text preset="mediumBold" color={colorStyles.body} text="4.568 ETH" />
              </View>
              <View classNames={["row", "justifySpaceBetween"]} style={styles.line}>
                <Text preset="medium" color={colorStyles.body} text="Service fee" />
                <Text preset="mediumBold" color={colorStyles.body} text="0.001 ETH" />
              </View>
              <View classNames={["row", "justifySpaceBetween"]} style={styles.line}>
                <Text preset="medium" color={colorStyles.body} text="Total" />
                <Text preset="mediumBold" color={colorStyles.body} text="0.001 ETH" />
              </View>
            </View>
            <View style={{ paddingVertical: spacing[3] }}>
              <Button
                preset="primary"
                text="Place a bid"
                presetText="largeBold"
                style={{ paddingVertical: spacing[3] }}
                containerStyle={{ paddingVertical: spacing[3] }}
                onPress={onPressConfirm}
              />
              <Button
                preset="secondary"
                text="Cancel"
                presetText="largeBold"
                style={{ paddingVertical: spacing[3] }}
                onPress={onCloseModal}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.woodsmoke,
    opacity: 0.8,
  },
  modal: {
    minHeight: 200,
    marginHorizontal: spacing[4],
    padding: spacing[4],
    backgroundColor: colors.white,
    borderRadius: 24,
  },
  line: {
    paddingVertical: spacing[1],
  },
});
