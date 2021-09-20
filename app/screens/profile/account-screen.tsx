import React, { useRef, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, Image, useColorScheme, Modal, ViewStyle, FlatList, ScrollView } from "react-native";
import {
  Text,
  TextPresets,
  TextField,
  HeaderLogo,
  SearchBar,
  View,
  Icon,
  ListItem,
  Button,
  SafeAreaView,
  TouchableOpacity,
  SmallListItem,
  DotIcon,
} from "../../components";
import { Footer, TitleButton, FollowButton, TagNameButton, EditButton, AccountDetail } from "../components";
// import { useNavigation } from "@react-navigation/native";
import { colors, shadow, spacing } from "../../theme";
import { assets, constants } from "../../config";
import { createStyles } from "../../utils/function";
import { LIST_AVATARS, LIST_CARDS } from "./schema";
import { IconTypes } from "../../components/icon/icons";

const { VIEWABILITY_CONFIG: viewabilityConfig, SCREEN_WIDTH, AVT_SIZE } = constants;

const MODE = {
  EMPTY: "EMPTY",
  EDIT: "EDIT",
};

const SOCIAL_MEDIA_LINKS = [
  {
    id: "1",
    icon: "link-primary" as IconTypes,
    text: "Website",
  },
  {
    id: "2",
    icon: "discord-primary" as IconTypes,
    text: "Discord",
  },
  {
    id: "3",
    icon: "instagram-primary" as IconTypes,
    text: "Instagram",
  },
  {
    id: "4",
    icon: "youtube-fill-primary" as IconTypes,
    text: "Youtube channel",
  },
  {
    id: "5",
    icon: "tiktok-primary" as IconTypes,
    text: "Tiktok",
  },
];

export const AccountScreen = observer(function AccountScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  // const navigation = useNavigation();
  const [mode, setMode] = useState(MODE.EDIT);
  const [selectedIndex, setSelectedIndex] = useState(0);
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
      <HeaderLogo leftIcon={"search"} onLeftPress={onPressSearch} rightIcon="menu" onRightPress={onPressMenu} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingTop: spacing[4], paddingBottom: spacing[7] }}
      >
        <View style={{ width: "100%", minHeight: 160 }}>
          <Image source={assets.header} style={{ width: SCREEN_WIDTH, minHeight: 160 }} />
        </View>
        <View alignCenter style={styles.avtImageWrapper}>
          <Image source={assets.avatar9} style={styles.avtImage} />
          <Text preset="mediumBold" text="Gift Habeshaw" color={colorStyles.black} style={{ padding: spacing[1] }} />
          <TouchableOpacity onPress={onPressCopy}>
            <View row alignCenter>
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
          <View row alignCenter justifySpaceBetween>
            <View row alignCenter>
              <Icon icon="mail" size={20} containerStyle={{ padding: spacing[2] }} />
              <Text preset="small" text="Contact@OpenArt.design" />
            </View>
          </View>
          <View row alignCenter>
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
          <View row alignCenter>
            <Icon icon="call" color={colorStyles.label} size={20} containerStyle={{ padding: spacing[2] }} />
            <Text preset="small" color={colorStyles.label} text="(+60) 264 859 62" />
          </View>
          <View row alignCenter>
            <Icon icon="link" color={colorStyles.label} size={20} containerStyle={{ padding: spacing[2] }} />
            <Text preset="small" color={colorStyles.label} text="OpenArt.design" />
          </View>
          <View row style={{ paddingTop: spacing[6], paddingBottom: spacing[3], justifyContent: "center" }}>
            <TouchableOpacity onPress={() => null}>
              <View row style={styles.btnFollow}>
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
        <AccountDetail onCloseModal={onCloseModal} />
      </Modal>
    </SafeAreaView>
  );
});

const createColorStyles = (isDarkMode) => ({
  black: isDarkMode ? colors.offWhite : colors.black,
  bold: isDarkMode ? colors.offWhite : colors.titleActive,
  body: isDarkMode ? colors.offWhite : colors.body,
  label: isDarkMode ? colors.offWhite : colors.label,
  input: isDarkMode ? colors.offWhite : colors.bgInput,
  placeholder: isDarkMode ? colors.offWhite : colors.placeholder,
});

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
