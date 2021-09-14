import React from "react";
import { StyleSheet, ViewStyle, Image, ImageRequireSource, ImageURISource } from "react-native";
import { View } from "../view";
import { Text } from "../text/text";
import { colors, spacing } from "../../theme";
import { constants } from "../../config";

const { AVT_SIZE } = constants;

export interface SmallListItemProps {
  source: ImageRequireSource | ImageURISource;
  avtSources?: ImageRequireSource[] | ImageURISource[];
  title?: string;
  price?: string;
  highestBid?: string;
  subtitle?: string;
  status?: string;
  containerStyle?: ViewStyle | ViewStyle[];
}

export function SmallListItem({
  source,
  avtSources = [],
  title,
  price,
  highestBid,
  containerStyle = {},
}: SmallListItemProps) {
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])}>
      <View alignCenter style={{ marginVertical: spacing[3] }}>
        <Image source={source} style={styles.image} resizeMode="contain" />
        <View style={styles.avatarBox}>
          {avtSources.map((avtSrc, index) => {
            const imgStyles = [styles.avatar, { left: index * 20 }];
            return <Image key={String(index)} source={avtSrc} style={imgStyles} />;
          })}
        </View>
      </View>
      <View style={styles.bottom}>
        <View row style={{ justifyContent: "center" }}>
          <Text text={title} preset="mediumBold" />
          <View style={styles.price}>
            <Text text={price} preset="mediumBold" />
          </View>
        </View>
        <Text preset="small">
          {"Highest bid "}
          <Text preset="smallBold" text={highestBid} />
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: spacing[1],
  },
  image: {
    borderRadius: 28,
    width: 254,
    height: 300,
  },
  price: {
    marginHorizontal: spacing[1],
    borderRadius: 34,
    borderWidth: 1,
    borderColor: colors.line,
    paddingHorizontal: spacing[2],
    paddingVertical: spacing[2],
  },
  bottom: {
    paddingHorizontal: spacing[2],
  },
  avatarBox: {
    position: "absolute",
    bottom: 10,
    left: 10,
    flexDirection: "row",
  },
  avatar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    height: AVT_SIZE.SMALL,
    width: AVT_SIZE.SMALL,
    borderRadius: 99,
    borderColor: colors.offWhite,
    borderWidth: 1,
  },
});
