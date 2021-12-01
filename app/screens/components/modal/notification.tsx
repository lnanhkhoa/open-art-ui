import React, { useState } from "react";
import { StyleSheet, useColorScheme, Image, FlatList } from "react-native";
import {
  View,
  Text,
  Icon,
  Button,
  SafeAreaView,
  TouchableOpacity,
  HeaderLogoSpecs,
  Avatar,
  Switch,
  IconTypes,
} from "../../../components";

import { colors, spacing } from "../../../theme";
import { createStyles } from "../../../utils/function";
import { assets, constants } from "../../../config";
const { SCREEN_HEIGHT } = constants;
const CIRCLE_SIZE = 42;
const LIST_ACTIONS = [
  {
    id: "1",
    image: assets.scard1,
    title: "ETH received",
    desc: "1.05 ETH recived",
    time: "1 day ago",
  },
  {
    id: "2",
    image: assets.scard2,
    title: "Upload success",
    desc: "ready to sell",
    time: "1 days ago",
  },
  {
    id: "3",
    image: assets.scard3,
    title: "Eric follow your collection",
    desc: "Supper wave collection",
    time: "2 days ago",
  },
  {
    id: "4",
    image: assets.scard4,
    title: "Upload success",
    desc: "1.05 ETH recived",
    time: "1 days ago",
  },
];

interface NotificationProps {
  onCloseModal: () => void;
  iconIndex: number;
  iconName: IconTypes;
}
export function Notification({ onCloseModal, iconName = "people", iconIndex = 0 }: NotificationProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";

  //
  const colorStyles = createColorStyles(isDarkMode);
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  //
  return (
    <SafeAreaView backgroundColor="transparent">
      <TouchableOpacity style={styles.overlay} onPress={onCloseModal} />
      <View pointerEvents="box-none" style={{ height: HeaderLogoSpecs.height }}>
        <TouchableOpacity
          onPress={onCloseModal}
          style={[
            styles.circle,
            { marginRight: iconIndex === 0 ? HeaderLogoSpecs.position.right : HeaderLogoSpecs.position.left },
          ]}
        >
          <Icon icon={iconName} size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.modal}>
        <View style={{ paddingVertical: spacing[2] }}>
          <Text preset="headerSmallBold" color={colorStyles.body} text="Notification" />
          <FlatList
            data={LIST_ACTIONS}
            style={{ paddingVertical: spacing[2] }}
            contentContainerStyle={{ paddingVertical: spacing[3] }}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={[styles.divider, { marginVertical: spacing[2] }]} />}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity onPress={onCloseModal}>
                  <View classNames={["row",]} style={{ minHeight: 70 }}>
                    <View style={{ paddingRight: spacing[4] }}>
                      <Image source={item.image} style={styles.image} />
                    </View>
                    <View>
                      <Text preset="mediumBold" text={item.title} />
                      <Text preset="medium" text={item.desc} color={colorStyles.label} />
                      <Text
                        preset="small"
                        text={item.time}
                        color={colorStyles.placeholder}
                        style={{ paddingVertical: spacing[1] }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
          <Button
            preset="primary"
            presetText="mediumBold"
            text="View all"
            containerStyle={{ marginVertical: spacing[2] }}
            onPress={onCloseModal}
          />
          <Button
            preset="secondary"
            presetText="mediumBold"
            text="Mark as all read"
            containerStyle={{ marginVertical: spacing[2] }}
            onPress={onCloseModal}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const createColorStyles = (isDarkMode) => ({
  black: isDarkMode ? colors.offWhite : colors.black,
  bold: isDarkMode ? colors.offWhite : colors.titleActive,
  body: isDarkMode ? colors.offWhite : colors.body,
  label: isDarkMode ? colors.offWhite : colors.label,
  placeholder: isDarkMode ? colors.offWhite : colors.placeholder,
});

const darkStyles = StyleSheet.create({});

const lightStyles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.woodsmoke,
    opacity: 0.7,
  },
  circle: {
    backgroundColor: colors.white,
    borderRadius: 99,
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    alignSelf: "flex-end",
    marginRight: HeaderLogoSpecs.position.right,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 4,
  },
  modal: {
    minHeight: 400,
    maxHeight: SCREEN_HEIGHT * 0.75,
    marginHorizontal: spacing[4],
    padding: spacing[4],
    backgroundColor: colors.white,
    borderRadius: 24,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 16,
  },
  body: {
    paddingVertical: spacing[4],
  },
  divider: {
    backgroundColor: colors.line,
    height: 1,
  },
});
