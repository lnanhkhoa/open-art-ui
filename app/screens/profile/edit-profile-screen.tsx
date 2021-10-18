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
import { Footer, TitleButton, FollowButton, TagNameButton, EditButton } from "../components";
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

export const EditProfileScreen = observer(function EditProfileScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  // const navigation = useNavigation();
  const [mode, setMode] = useState(MODE.EDIT);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);

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
  const onPressTagName = () => null;
  const onPressEdit = () => setMode(MODE.EDIT);
  const onPressTabTitle = setSelectedIndex;
  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <SafeAreaView>
      <HeaderLogo rightIcon={"search"} onRightPress={onPressSearch} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingTop: spacing[4], paddingBottom: spacing[7] }}
      >
        <View style={{ width: "100%", minHeight: 160 }}>
          <Image source={assets.header5} style={{ width: SCREEN_WIDTH, minHeight: 160 }} />
          <View style={{ position: "absolute", flex: 1, right: spacing[4], top: 8 }}>
            <View row>
              <Icon icon="more" color={colorStyles.body} containerStyle={styles.btnAction} size={20} />
              <Icon icon="export" color={colorStyles.body} containerStyle={styles.btnAction} size={20} />
            </View>
          </View>
        </View>
        <View alignCenter style={styles.avtImageWrapper}>
          <Image source={assets.avatar8} style={styles.avtImage} />
          <Text preset="mediumBold" text="Gift Habeshaw" color={colorStyles.black} style={{ padding: spacing[1] }} />
          <TouchableOpacity onPress={onPressCopy}>
            <View row alignCenter>
              <Text preset="medium" text="52fs5ge5g45sov45a" />
              <Icon icon="copy" color={colorStyles.placeholder} size={14} style={{ paddingHorizontal: spacing[3] }} />
            </View>
          </TouchableOpacity>
        </View>
        {mode === MODE.EMPTY && (
          <>
            <View row style={{ paddingHorizontal: spacing[4], paddingVertical: spacing[3] }}>
              <View flexible style={{ paddingLeft: spacing[2] }}>
                <Text preset="headerMediumBold" text="150" color={colorStyles.black} />
                <Text preset="mediumBold" color={colorStyles.label} text="Following" />
              </View>
              <View flexible>
                <Text preset="headerMediumBold" text="2024" color={colorStyles.black} />
                <Text preset="mediumBold" color={colorStyles.label} text="Followers" />
              </View>
              <View flexible alignCenter>
                <EditButton onPress={onPressEdit} />
              </View>
            </View>
            <Text
              text="Member since  2021"
              color={colorStyles.bold}
              style={{ alignSelf: "center", paddingVertical: spacing[3] }}
            />
            {/* collection is empty */}
            <View alignCenter style={{ padding: spacing[4] }}>
              <Text preset="largeBold" text="Your collection is empty." />
              <Text
                preset="medium"
                text="Start building your collection by placing bids on artwork."
                style={{ textAlign: "center", paddingHorizontal: spacing[4] }}
              />
            </View>
            <Button preset="secondary" text="Explore OpenArt" containerStyle={{ paddingHorizontal: spacing[6] }} />
          </>
        )}

        {mode === MODE.EDIT && (
          <View style={{ paddingTop: spacing[5], paddingHorizontal: spacing[4] }}>
            <Text preset="large" text="Enter your details" />
            <View style={{ paddingTop: spacing[3], paddingBottom: spacing[5] }}>
              <TextField placeholder="Name" placeholderTextColor={colorStyles.label} />
              <TextField placeholder="User Name" placeholderTextColor={colorStyles.label} />
            </View>
            <Text preset="large" text="Enter your email" />
            <View style={{ paddingTop: spacing[3], paddingBottom: spacing[5] }}>
              <TextField
                placeholder="Email"
                placeholderTextColor={colorStyles.label}
                notice={
                  "Add your email address to receive notifications about your activity on Foundation. This will not be shown on your profile."
                }
              />
            </View>
            <Text preset="large" text="Enter your bio" />
            <View style={{ paddingTop: spacing[3], paddingBottom: spacing[5] }}>
              <TextField
                multiline
                inputStyle={{ height: 130, marginVertical: spacing[2] }}
                placeholder="Enter your bio here"
                placeholderTextColor={colorStyles.label}
              />
            </View>
            <Text preset="large" text="Upload a profile image." />
            <TouchableOpacity style={styles.btnUpload} onPress={() => null}>
              <Icon icon="image" size={24} containerStyle={{ paddingTop: spacing[6] }} />
              <View flexible style={{ paddingVertical: spacing[2] }}>
                <Text preset="largeBold" text="Drag and drop or browce a file" />
                <Text
                  preset="medium"
                  style={{ textAlign: "center", paddingVertical: spacing[2] }}
                  text="Recommended size: JPG, PNG, GIF  (1500x1500px, Max 10mb)"
                />
              </View>
            </TouchableOpacity>
            <View style={{ paddingTop: spacing[6], paddingBottom: spacing[3] }}>
              <Text preset="large" text="Verify your profile" />
              <Text
                preset="medium"
                text="Show the Foundation community that your profile is authentic."
                style={{ paddingVertical: spacing[2] }}
              />
            </View>
            <Button
              preset="secondary"
              leftIcon="twitter-primary"
              text="Verify via Twitter"
              containerStyle={{ marginVertical: spacing[2] }}
            />
            <Button
              preset="secondary"
              leftIcon="instagram-primary"
              text="Verify via Instagram"
              containerStyle={{ marginVertical: spacing[2] }}
            />
            <Text
              preset="large"
              text="Add links to your social media profiles."
              style={{ width: "70%", paddingVertical: spacing[4] }}
            />
            {SOCIAL_MEDIA_LINKS.map((item) => (
              <TouchableOpacity key={item.id} onPress={() => null}>
                <View row alignCenter style={styles.btnLinking}>
                  <Icon icon={item.icon} isKeepColor={false} />
                  <Text text={item.text} style={{ paddingHorizontal: spacing[2] }} />
                </View>
              </TouchableOpacity>
            ))}
            <Button
              text="Save"
              preset="primary"
              containerStyle={{ marginVertical: spacing[5] }}
              onPress={() => setMode(MODE.EMPTY)}
            />
            <View style={styles.divider} />
          </View>
        )}

        <View style={styles.bottom}>
          <Footer />
        </View>
      </ScrollView>
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
    paddingHorizontal: spacing[4],
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
  tabTitle: {
    paddingRight: spacing[4],
    paddingVertical: spacing[4],
  },
  box: {
    paddingVertical: spacing[4],
  },
  buttonSold: {
    backgroundColor: colors.offWhite,
    borderColor: colors.background,
    borderWidth: 2,
    borderRadius: 50,
    marginVertical: spacing[3],
    alignItems: "center",
  },
  btnAction: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
  },
  btnUpload: {
    alignItems: "center",
    minHeight: 170,
    backgroundColor: colors.bgInput,
    borderRadius: 32,
    marginTop: spacing[6],
  },
  btnLinking: {
    backgroundColor: colors.bgInput,
    padding: spacing[4],
    borderRadius: 8,
    marginVertical: spacing[2],
  },
  divider: {
    backgroundColor: colors.line,
    height: 1,
  },
  bottom: {
    paddingTop: spacing[8],
  },
});
