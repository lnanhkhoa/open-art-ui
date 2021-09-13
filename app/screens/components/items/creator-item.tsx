import React from "react";
import { StyleSheet, Image, ImageRequireSource, ImageURISource } from "react-native";
import { Text, View, Button, TouchableOpacity } from "../../../components";
import { FollowButton } from "../../components";
import { assets } from "../../../config";
import { spacing, colors, shadow } from "../../../theme";

interface CreatorItemProps {
  name: string;
  description: string;
  avtImg: ImageRequireSource | ImageURISource;
  headerImg: ImageRequireSource | ImageURISource;
  followNumber: number;
  onPressFollow: () => void;
}

export function CreatorItem({
  name,
  description,
  avtImg,
  headerImg,
  followNumber = 0,
  onPressFollow,
}: CreatorItemProps) {
  return (
    <View style={styles.container}>
      <Image source={headerImg} style={styles.header} />
      <View alignCenter style={styles.body}>
        <Image source={avtImg} style={styles.avtImage} />
        <Text preset="headerSmallBold" text={name} style={{ paddingVertical: spacing[2] }} />
        <Text
          preset="medium"
          text={description}
          style={{ textAlign: "center", paddingHorizontal: spacing[3], lineHeight: 22 }}
        />
      </View>
      <View style={styles.bottom}>
        <View row alignCenter style={{ justifyContent: "space-between" }}>
          <Text>
            <Text preset="headerMediumBold" text={String(followNumber)} color={colors.titleActive} />
            <Text text=" " />
            <Text text="Followers" />
          </Text>
          <FollowButton onPress={onPressFollow}/>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.offWhite,
    borderRadius: 24,
    marginVertical: spacing[4],
    ...shadow.cardItem,
  },
  header: {
    width: "100%",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  body: {
    padding: spacing[4],
  },
  avtImage: {
    marginTop: -(spacing[4] + 94 * 0.5),
    width: 94,
    height: 94,
    borderWidth: 3,
    borderColor: colors.white,
    borderRadius: 999,
  },
  bottom: {
    paddingHorizontal: spacing[5],
    paddingBottom: spacing[3],
  },
});
