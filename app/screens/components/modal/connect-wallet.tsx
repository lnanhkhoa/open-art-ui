import React from "react";
import { StyleSheet, useColorScheme, Image } from "react-native";
import { View, Text, Icon, Button } from "../../../components";

import { colors, spacing } from "../../../theme";
import { assets } from "../../../config";
import { createStyles } from "../../../utils/function";

interface ConnectWalletProps {
  onCloseModal: () => void;
  onPressConfirm: () => void;
}

export function ConnectWallet({ onCloseModal, onPressConfirm }: ConnectWalletProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  //
  const colorStyles = createColorStyles(isDarkMode);
  return (
    <View classNames={["flexible"]}>
      <View style={styles.overlay} />
      <View classNames={["flexible", "justifyCenter"]}>
        <View style={styles.modal}>
          <View classNames={["row", "justifySpaceBetween"]} style={{ paddingVertical: spacing[2] }}>
            <Text preset="headerSmallBold" color={colorStyles.body} text="Connect Wallet" />
            <Icon
              icon="close"
              style={{ padding: 10, paddingRight: 0 }}
              color={colorStyles.label}
              onPress={onCloseModal}
            />
          </View>
          <View style={{ paddingRight: spacing[2] }}>
            <View classNames={['alignCenter']} style={{ paddingHorizontal: spacing[2] }}>
              <Image source={assets["connect-wallet"]} />
              <Text preset="medium" color={colorStyles.body} style={{ textAlign: "center", lineHeight: 22 }}>
                By connecting your wallet, you agree to our <Text preset="mediumBold" text="Terms of Service" /> and our{" "}
                <Text preset="mediumBold" text="Privacy Policy" />
              </Text>
            </View>
            <View style={{ paddingTop: spacing[6], paddingHorizontal: spacing[4] }}>
              <Button
                preset="primary"
                text="Connect wallet"
                presetText="largeBold"
                style={{ paddingVertical: spacing[3] }}
                onPress={onPressConfirm}
              />
              <View classNames={["alignCenter"]}>
                <Text preset="medium" text="Learn more about wallets" style={{ paddingVertical: spacing[3] }} />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const createColorStyles = (isDarkMode) => ({
  bold: isDarkMode ? colors.offWhite : colors.titleActive,
  body: isDarkMode ? colors.offWhite : colors.body,
  label: isDarkMode ? colors.offWhite : colors.label,
  placeholder: isDarkMode ? colors.offWhite : colors.placeholder,
});

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
