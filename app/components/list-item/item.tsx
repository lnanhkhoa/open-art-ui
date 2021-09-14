import React, { useState } from "react";
import { StyleSheet, ViewStyle, Image, ImageRequireSource, ImageURISource, useColorScheme } from "react-native";
import { View } from "../view";
import { Text } from "../text/text";
import { Avatar } from "../avatar/avatar";
import { Icon } from "../icon/icon";
import { colors, spacing, shadow } from "../../theme";
import { createStyles } from "../../utils/function";

export interface ListItemProps {
  source: ImageRequireSource | ImageURISource;
  avtSource: ImageRequireSource | ImageURISource;
  title?: string;
  subtitle?: string;
  status?: string;
  isActive?: boolean;
  containerStyle?: ViewStyle;
}

export function ListItem({ source, avtSource, title, subtitle, status, isActive, containerStyle = {} }) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [reacted, setReacted] = useState(false);
  const onPressHeart = () => setReacted(!reacted);

  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const containerStyles = [styles.container, containerStyle];
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <View style={containerStyles}>
      <View alignCenter style={{ marginVertical: spacing[3] }}>
        <Image source={source} style={styles.image} resizeMode="contain" />
      </View>
      <Text text={title} preset="headerSmallBold" style={{ paddingHorizontal: spacing[4], paddingTop: spacing[2] }} />
      <View row style={styles.bottom}>
        <Avatar
          preset="row"
          active={isActive}
          hasSource
          size="normal"
          source={avtSource}
          title={subtitle}
          statusText={status}
        />
        <Icon
          icon="heart"
          color={reacted ? colorStyles.reacted : colorStyles.rightIcon}
          onPress={onPressHeart}
        />
      </View>
    </View>
  );
}

const createColorStyles = (isDarkMode) => ({
  rightIcon: isDarkMode ? colors.offWhite : colors.placeholder,
  reacted: colors.error,
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.body,
  },
  image: {},
  bottom: {},
});

const lightStyles = StyleSheet.create({
  container: {
    borderRadius: 32,
    backgroundColor: colors.offWhite,
    ...shadow.cardItem,
  },
  image: {
    borderRadius: 24,
    width: 320,
    height: 400,
  },
  bottom: {
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[2],
  },
});
