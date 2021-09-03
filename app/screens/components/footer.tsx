import React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View, Button } from "../../components";
import { assets } from "../../config";
import { spacing, colors } from "../../theme";

export function Footer() {
  return (
    <View flexible>
      <View alignCenter>
        <Image source={assets.logo} />
        <Text style={{ paddingVertical: spacing[2] }}>
          <Text preset="headerSmall" text="The New " />
          <Text preset="headerSmallBold" text="Creative Economy" />
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
