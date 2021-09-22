import React, { useState } from "react";
import { StyleSheet, useColorScheme, Image } from "react-native";
import {
  View,
  Text,
  Icon,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Avatar,
  Switch,
  HeaderLogoSpecs,
} from "../../../components";
import { IconTypes } from "../../../components/icon/icons";

import { colors, spacing } from "../../../theme";
import { createStyles } from "../../../utils/function";
import { constants, assets } from "../../../config";
const { AVT_SIZE } = constants;
const CIRCLE_SIZE = 42;

const LIST_ACTIONS = [
  {
    id: "1",
    icon: "people" as IconTypes,
    text: "My account",
  },
  {
    id: "2",
    icon: "image" as IconTypes,
    text: "My items",
  },
  {
    id: "3",
    icon: "scroll" as IconTypes,
    text: "My invoice",
  },
  {
    id: "4",
    icon: "back-arrow" as IconTypes,
    text: "Sign out",
  },
];

interface AccountDetailProps {
  onCloseModal: () => void;
  iconIndex: number;
  iconName: IconTypes;
}
export function AccountDetail({ onCloseModal, iconIndex = 0, iconName = "people" }: AccountDetailProps) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [darkMode, setDarkMode] = useState(false);
  const onPressCopy = () => null;
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
        <View row alignCenter style={styles.avtImageWrapper}>
          <TouchableOpacity onPress={() => null}>
            <Avatar hasSource size="large" source={assets.avatar9} containerStyle={styles.avtImage} />
          </TouchableOpacity>
          <View>
            <Text preset="mediumBold" text="Gift Habeshaw" color={colorStyles.black} />
            <TouchableOpacity onPress={onPressCopy}>
              <View row alignCenter>
                <Text preset="medium" text="52fs5ge5g45sov45a" />
                <Icon icon="copy" color={colorStyles.placeholder} size={14} style={{ paddingHorizontal: spacing[3] }} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <View row style={styles.balanceWrapper}>
            <Icon icon="wallet" color={colorStyles.placeholder} containerStyle={styles.walletIcon} />
            <View>
              <Text text="Balance" color={colorStyles.label} />
              <View row>
                <Text preset="headerSmallBold" text="5.000 ETH" color={colorStyles.bold} />
                <Icon
                  icon="hide"
                  size={20}
                  color={colorStyles.placeholder}
                  containerStyle={{ paddingHorizontal: spacing[3] }}
                />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.body}>
          {LIST_ACTIONS.map((item) => {
            return (
              <TouchableOpacity key={item.id} style={{ paddingVertical: spacing[1] }} onPress={() => null}>
                <View row alignCenter style={{ marginVertical: spacing[2] }}>
                  <Icon
                    icon={item.icon}
                    color={colorStyles.label}
                    size={24}
                    containerStyle={{ marginHorizontal: spacing[4] }}
                  />
                  <Text text={item.text} color={colorStyles.label} style={{ paddingTop: spacing[1] }} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View style={styles.divider} />
        <View row alignCenter justifySpaceBetween style={{ paddingTop: spacing[4], paddingHorizontal: spacing[4] }}>
          <Text preset="mediumBold" text="Dark mode" />
          <Switch value={darkMode} onToggle={setDarkMode} />
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
    marginHorizontal: spacing[4],
    padding: spacing[4],
    backgroundColor: colors.white,
    borderRadius: 24,
  },
  avtImageWrapper: {
    paddingHorizontal: spacing[2],
    marginVertical: spacing[2],
  },
  avtImage: {
    marginRight: spacing[3],
  },
  avatar: {
    width: AVT_SIZE.SMALL,
    height: AVT_SIZE.SMALL,
    borderRadius: 99,
  },
  balanceWrapper: {
    backgroundColor: colors.bgInput,
    borderRadius: 32,
  },
  walletIcon: {
    height: 40,
    width: 40,
    borderRadius: 99,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
    margin: spacing[4],
  },
  body: {
    paddingVertical: spacing[4],
  },
  divider: {
    backgroundColor: colors.line,
    height: 1,
  },
});
