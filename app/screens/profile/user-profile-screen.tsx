import React, { useRef, useState, useCallback } from "react";

import { StyleSheet, Image, useColorScheme, FlatList, ScrollView } from "react-native";
import { Text, HeaderLogo, View, Icon, ListItem, Button, SafeAreaView, TouchableOpacity } from "../../components";
import { Footer, FollowButton, TagNameButton } from "../components";
// import { useNavigation } from "@react-navigation/native";
import { colors, spacing, createColorStyles } from "../../theme";
import { createStyles } from "../../utils/function";
import { assets, constants } from "../../config";
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

export const UserProfileScreen = function UserProfileScreen(props) {
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
      <HeaderLogo rightIcon="search" onRightPress={onPressSearch} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingTop: spacing[4], paddingBottom: spacing[7] }}
      >
        <View style={{ width: "100%", minHeight: 160 }}>
          <Image source={assets.header5} style={{ width: SCREEN_WIDTH, minHeight: 160 }} />
          <View style={{ position: "absolute", flex: 1, right: spacing[4], top: 8 }}>
            <View classNames={["row"]}>
              <Icon icon="more" color={colorStyles.body} containerStyle={styles.btnAction} size={20} />
              <Icon icon="export" color={colorStyles.body} containerStyle={styles.btnAction} size={20} />
            </View>
          </View>
        </View>
        <View
          classNames={["alignCenter"]}
          style={{
            paddingHorizontal: spacing[2],
            marginTop: -AVT_SIZE.LARGER * 0.5,
            marginBottom: spacing[2],
          }}
        >
          <Image source={assets.avatar8} style={styles.avtImage} />
          <Text preset="mediumBold" text="Gift Habeshaw" color={colorStyles.black} style={{ padding: spacing[1] }} />
          <TouchableOpacity onPress={onPressCopy}>
            <View classNames={["row", "alignCenter"]}>
              <Text preset="medium" text="52fs5ge5g45sov45a" />
              <Icon icon="copy" color={colorStyles.placeholder} size={14} style={{ paddingHorizontal: spacing[3] }} />
            </View>
          </TouchableOpacity>
        </View>
        <View classNames={["row"]} style={{ paddingHorizontal: spacing[4] }}>
          <View classNames={["flexible"]}>
            <Text preset="headerMediumBold" text="150" color={colorStyles.black} />
            <Text preset="mediumBold" color={colorStyles.label} text="Following" />
          </View>
          <View classNames={["flexible"]}>
            <Text preset="headerMediumBold" text="2024" color={colorStyles.black} />
            <Text preset="mediumBold" color={colorStyles.label} text="Followers" />
          </View>
          <View classNames={["flexible"]}>
            <FollowButton onPress={() => null} />
          </View>
        </View>
        <View style={{ paddingVertical: spacing[4], paddingHorizontal: spacing[4] }}>
          <Text preset="large" text="Followed by" />
          <View classNames={["row"]} style={{ paddingVertical: spacing[3] }}>
            {LIST_AVATARS.map((avtSrc, index) => (
              <View
                key={String(index)}
                style={{
                  borderWidth: 2,
                  borderColor: colors.white,
                  borderRadius: 99,
                  marginLeft: index === 0 ? 0 : -12,
                }}
              >
                <Image source={avtSrc} style={styles.avatar} />
              </View>
            ))}
          </View>
          <Text
            preset="small"
            color={colorStyles.label}
            text="Trevor Jackson is a multi-disciplinary artist exploring analog + digital realms since 1988. Collaborators inc Apple, BMW, Comme Des Garçons, ICA, NTS, Sonos,  Stone Island, Tate Modern + Warp."
            style={{ lineHeight: 20, paddingVertical: spacing[4] }}
          />
          <Text preset="medium" color={colorStyles.bold} text="Member since  2021" />
        </View>
        <View classNames={["row"]} style={{ paddingHorizontal: spacing[4], flexWrap: "wrap" }}>
          <TagNameButton
            isIcon
            iconName="twitter"
            text="@openart"
            onPress={onPressTagName}
            containerStyle={{ marginHorizontal: spacing[2] }}
          />
          <TagNameButton
            isIcon
            iconName="instagram"
            text="@openart.design"
            onPress={onPressTagName}
            containerStyle={{ marginHorizontal: spacing[2] }}
          />
          <TagNameButton
            isIcon
            iconName="link"
            text="Openart.design"
            onPress={onPressTagName}
            containerStyle={{ marginHorizontal: spacing[2] }}
          />
        </View>

        <FlatList
          data={LIST_CARDS}
          style={{ paddingTop: spacing[2] }}
          contentContainerStyle={{ paddingHorizontal: spacing[4] }}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ListCard item={item} />}
          ListHeaderComponent={() => (
            <View classNames={["row"]}>
              <TouchableOpacity style={styles.tabTitle} onPress={() => onPressTabTitle(0)}>
                <Text
                  preset="headerSmallBold"
                  text="Created"
                  color={selectedIndex === 0 ? colorStyles.bold : colorStyles.placeholder}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.tabTitle} onPress={() => onPressTabTitle(1)}>
                <Text
                  preset="headerSmallBold"
                  text="Collected"
                  color={selectedIndex === 1 ? colorStyles.bold : colorStyles.placeholder}
                />
              </TouchableOpacity>
            </View>
          )}
          ListFooterComponentStyle={{ paddingHorizontal: spacing[5] }}
          ListFooterComponent={() => <Button leftIcon="plus" preset="secondary" text="Load more" />}
        />

        <View style={styles.bottom}>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


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
