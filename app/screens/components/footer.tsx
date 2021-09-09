import React from "react";
import { StyleSheet, Image, useColorScheme } from "react-native";
import { Text, View, Button } from "../../components";
import { assets } from "../../config";
import { spacing, typography, colors } from "../../theme";

export function Footer() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const colorText = isDarkMode ? colors.offWhite : colors.titleActive;
  const logoSrc = isDarkMode ? assets.logo2Dark : assets.logo2;
  return (
    <View flexible>
      <View alignCenter>
        <Image source={logoSrc} />
        <Text style={{ paddingVertical: spacing[2] }}>
          <Text preset="headerSmall" color={colorText} text="The " style={{ fontFamily: typography.EpilogueLight }} />
          <Text preset="headerSmall" color={colorText} text="New " />
          <Text
            preset="headerSmall"
            color={colorText}
            text="Creative "
            style={{ fontFamily: typography.EpilogueMedium }}
          />
          <Text preset="headerSmallBold" color={colorText} text="Economy" />
        </Text>
      </View>
      <Button
        preset="primary"
        text="Earn now"
        textStyle={{ paddingVertical: spacing[2] }}
        style={{ paddingVertical: spacing[3] }}
        containerStyle={{ marginHorizontal: spacing[4], marginTop: spacing[4] }}
      />
      <Button
        preset="secondary"
        text="Discover more"
        textStyle={{ paddingVertical: spacing[3] }}
        containerStyle={{ marginHorizontal: spacing[4], marginTop: spacing[4] }}
      />
    </View>
  );
}
