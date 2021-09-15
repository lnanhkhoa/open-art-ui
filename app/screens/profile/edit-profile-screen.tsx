import React, { useRef, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, Image, useColorScheme, Modal, ViewStyle, FlatList, ScrollView } from "react-native";
import {
  Text,
  TextPresets,
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

const { VIEWABILITY_CONFIG: viewabilityConfig, SCREEN_WIDTH, AVT_SIZE } = constants;

function ListCard({ item }) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <View style={styles.box}>
      <ListItem
        source={item.image}
        avtSource={assets.avatar2}
        isActive
        title={item.title}
        subtitle={item.name}
        status={item.statusText}
      />
      <TouchableOpacity style={styles.buttonSold} onPress={() => null}>
        <Text color={colorStyles.label} style={{ marginVertical: spacing[4] }}>
          <Text preset={"large"} text="Sold For" />
          <Text text=" " />
          <Text preset="headerSmallBold" text="2.00 ETH" />
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export const EditProfileScreen = observer(function EditProfileScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  // const navigation = useNavigation();
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
  const onPressTabTitle = setSelectedIndex;
  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <SafeAreaView>
      <HeaderLogo
        leftIcon={"search"}
        onLeftPress={onPressSearch}
        rightIcon="menu"
        onRightPress={onPressMenu}
        containerStyle={styles.header}
      />
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
          <Text preset="mediumBold" text="Gift Habeshaw" style={{ padding: spacing[1] }} />
          <TouchableOpacity onPress={onPressCopy}>
            <View row alignCenter>
              <Text preset="medium" text="52fs5ge5g45sov45a" />
              <Icon icon="copy" color={colorStyles.placeholder} size={14} style={{ paddingHorizontal: spacing[3] }} />
            </View>
          </TouchableOpacity>
        </View>
        <View
          row
          style={{
            paddingHorizontal: spacing[4],
            paddingVertical: spacing[3],
          }}
        >
          <View flexible style={{ paddingLeft: spacing[2] }}>
            <Text preset="headerMediumBold" text="150" color={colorStyles.black} />
            <Text preset="mediumBold" color={colorStyles.label} text="Following" />
          </View>
          <View flexible>
            <Text preset="headerMediumBold" text="2024" color={colorStyles.black} />
            <Text preset="mediumBold" color={colorStyles.label} text="Followers" />
          </View>
          <View flexible alignCenter>
            <EditButton onPress={() => null} />
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
  bottom: {
    paddingVertical: spacing[7],
  },
});
