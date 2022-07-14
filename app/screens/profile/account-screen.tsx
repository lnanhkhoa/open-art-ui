import React, { useRef, useState, useCallback } from "react";

import { StyleSheet, Image, useColorScheme, Modal, ScrollView } from "react-native";
import { Text, HeaderLogo, View, Icon, SafeAreaView, TouchableOpacity } from "../../components";
import { AccountDetail } from "../components";
// import { useNavigation } from "@react-navigation/native";
import { colors, spacing } from "../../theme";
import { assets, constants } from "../../config";
import { createStyles, createColorStyles } from "../../utils/function";

const { VIEWABILITY_CONFIG: viewabilityConfig, SCREEN_WIDTH, AVT_SIZE } = constants;

const MODE = {
  EMPTY: "EMPTY",
  EDIT: "EDIT",
};

export const AccountScreen = function AccountScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  // const navigation = useNavigation();
  const [mode, setMode] = useState(MODE.EDIT);
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);
  const [visibleModal, setVisibleModal] = useState(true);

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    if (changed && changed.length > 0) {
      setVisibleItemIndex(changed[0].index);
    }
  }, []);

  //
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);
  const onPressMenu = () => null;
  const onPressSearch = () => null;
  const onPressCopy = () => null;
  const onOpenModal = () => setVisibleModal(true);
  const onCloseModal = () => setVisibleModal(false);
  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <SafeAreaView>
      <HeaderLogo rightIcon="search" onRightPress={onOpenModal} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingTop: spacing[4], paddingBottom: spacing[7] }}
      >
        <View style={{ width: "100%", minHeight: 160 }}>
          <Image source={assets.header} style={{ width: SCREEN_WIDTH, minHeight: 160 }} />
        </View>
        <View classNames={["alignCenter"]} style={styles.avtImageWrapper}>
          <Image source={assets.avatar9} style={styles.avtImage} />
          <Text preset="mediumBold" text="Gift Habeshaw" color={colorStyles.black} style={{ padding: spacing[1] }} />
          <TouchableOpacity onPress={onPressCopy}>
            <View classNames={["alignCenter", "row"]}>
              <Text preset="medium" text="52fs5ge5g45sov45a" />
              <Icon icon="copy" color={colorStyles.placeholder} size={14} style={{ paddingHorizontal: spacing[3] }} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <View style={{ position: "absolute", right: 12, top: 12 }}>
            <Icon
              icon="edit"
              size={24}
              color={colorStyles.label}
              containerStyle={styles.btnEdit}
              onPress={() => null}
            />
          </View>
          <View classNames={["row", "alignCenter", "justifySpaceBetween"]}>
            <View classNames={["row", "alignCenter"]}>
              <Icon icon="mail" size={20} containerStyle={{ padding: spacing[2] }} />
              <Text preset="small" text="Contact@OpenArt.design" />
            </View>
          </View>
          <View classNames={["row", "alignCenter"]}>
            <Icon icon="card" color={colorStyles.label} size={20} containerStyle={{ padding: spacing[2] }} />
            <TouchableOpacity onPress={() => null}>
              <Text
                preset="small"
                color={colorStyles.label}
                text="Linked"
                style={{ textDecorationLine: "underline" }}
              />
            </TouchableOpacity>
          </View>
          <View classNames={["row", "alignCenter"]}>
            <Icon icon="call" color={colorStyles.label} size={20} containerStyle={{ padding: spacing[2] }} />
            <Text preset="small" color={colorStyles.label} text="(+60) 264 859 62" />
          </View>
          <View classNames={["row", "alignCenter"]}>
            <Icon icon="link" color={colorStyles.label} size={20} containerStyle={{ padding: spacing[2] }} />
            <Text preset="small" color={colorStyles.label} text="OpenArt.design" />
          </View>
          <View classNames={["row", "justifyCenter"]} style={{ paddingTop: spacing[6], paddingBottom: spacing[3] }}>
            <TouchableOpacity onPress={() => null}>
              <View classNames={['row']} style={styles.btnFollow}>
                <Icon icon="heart" size={24} color={colorStyles.label} />
                <Text preset="mediumBold" text="Follow" style={{ paddingHorizontal: spacing[2] }} />
              </View>
            </TouchableOpacity>
            <Icon
              icon="export"
              color={colorStyles.body}
              containerStyle={styles.btnAction}
              size={20}
              onPress={() => null}
            />
            <Icon
              icon="more"
              color={colorStyles.body}
              containerStyle={styles.btnAction}
              size={20}
              onPress={() => null}
            />
          </View>
          <Text preset="small" text="Member since  2021" color={colorStyles.label} style={{ alignSelf: "center" }} />
        </View>
      </ScrollView>
      <Modal animationType="fade" transparent={true} visible={visibleModal}>
        <AccountDetail onCloseModal={onCloseModal} iconName="people" iconIndex={0} />
      </Modal>
    </SafeAreaView>
  );
} ;

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.titleActive,
  },
  buttonSold: {
    backgroundColor: colors.body,
    borderColor: colors.transparent,
  },
  btnAction: {
    backgroundColor: colors.titleActive,
  },
  btnUpload: {
    backgroundColor: colors.body,
  },
  btnLinking: {
    backgroundColor: colors.body,
  },
  divider: {
    backgroundColor: colors.offWhite,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 16,
  },
  avtImageWrapper: {
    paddingHorizontal: spacing[2],
    marginTop: -AVT_SIZE.LARGER * 0.5,
    marginBottom: spacing[2],
  },
  avtImage: {
    height: AVT_SIZE.LARGER,
    width: AVT_SIZE.LARGER,
    borderRadius: 99,
    marginBottom: spacing[2],
  },
  avatar: {
    width: AVT_SIZE.SMALL,
    height: AVT_SIZE.SMALL,
    borderRadius: 99,
  },
  btnAction: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.placeholder,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
  },
  body: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
    margin: spacing[4],
    borderRadius: 32,
  },
  btnEdit: {
    width: 48,
    height: 48,
    borderRadius: 99,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  btnFollow: {
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.placeholder,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    marginHorizontal: spacing[2],
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: colors.woodsmoke,
    opacity: 0.08,
  },
});
