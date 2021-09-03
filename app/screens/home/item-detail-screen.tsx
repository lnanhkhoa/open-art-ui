import React, { useRef, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, Image, useColorScheme, ImageRequireSource, ImageURISource } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
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
  Avatar,
} from "../../components";
import { IconTypes } from "../../components/icon/icons";
import { Footer, TagNameButton } from "../components";
// import { useNavigation } from "@react-navigation/native";
import { colors, shadow, spacing } from "../../theme";
import { assets, constants } from "../../config";

const { SCREEN_WIDTH } = constants;

const viewabilityConfig = {
  itemVisiblePercentThreshold: 70,
  waitForInteraction: true,
};
const HASHTAG_NAMES = ["color", "circle", "black", "art"];
interface ActionProps {
  icon?: IconTypes;
  isImage?: boolean;
  image?: ImageRequireSource | ImageURISource;
  text: string;
  link?: string;
}
const TOUCH_ACTIONS: ActionProps[] = [
  {
    isImage: true,
    image: assets.etherscan,
    text: "View on Etherscan",
    link: "",
  },
  {
    icon: "star",
    text: "View on IPFS",
    link: "",
  },
  {
    icon: "chart-pie",
    text: "View IPFS MetaData",
    link: "",
  },
];

interface ActivityProps {
  isAvtImage: boolean;
  onPress: () => void;
  imageSrc?: ImageRequireSource | ImageURISource;
  id: string;
  title: string;
  name: string;
  datetime: string;
  priceText: string;
  subPriceText: string;
}

const ACTIVITY_ACTIONS: ActivityProps[] = [
  {
    id: "1",
    isAvtImage: false,
    name: "David",
    title: "Auction won by",
    datetime: "June 04, 2021 at 12:00am",
    priceText: "Sold for 1.50 ETH",
    subPriceText: "$2,683.73",
    onPress: () => null,
  },
  {
    id: "2",
    isAvtImage: true,
    imageSrc: assets.avatar,
    name: "@pawel09",
    title: "Bid place by",
    datetime: "June 06, 2021 at 12:00am",
    priceText: "Sold for 1.50 ETH",
    subPriceText: "$2,683.73",
    onPress: () => null,
  },
  {
    id: "3",
    isAvtImage: true,
    imageSrc: assets.avatar,
    name: "@han152",
    title: "Listing by",
    datetime: "June 04, 2021 at 12:00am",
    priceText: "Sold for 1.00 ETH",
    subPriceText: "$2,683.73",
    onPress: () => null,
  },
];

const MODE = {
  SOLD: "SOLD",
  AUCTION: "AUCTION",
  CURRENT_BID: "CURRENT_BID",
};

export const ItemDetailScreen = observer(function ItemDetailScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  //
  // const navigation = useNavigation();
  const [mode, setMode] = useState(MODE.SOLD);

  const onPressMenu = () => null;
  const onPressTagName = () => null;
  //
  const constainerStyles = [styles.container, isDarkMode && darkStyles.container];
  const boldColors = isDarkMode ? colors.offWhite : colors.titleActive;
  const placeholderColors = isDarkMode ? colors.offWhite : colors.placeholder;

  return (
    <SafeAreaView>
      <HeaderLogo rightIcon="menu" onRightPress={onPressMenu} containerStyle={styles.header} />
      <ScrollView
        style={constainerStyles}
        contentContainerStyle={{
          paddingBottom: spacing[7],
          paddingTop: spacing[7],
        }}
      >
        <View style={styles.imageBox}>
          <Image source={assets.card7} style={styles.image} />
        </View>
        <View
          row
          alignCenter
          justifySpaceBetween
          style={{
            paddingHorizontal: spacing[6],
            paddingTop: spacing[4],
          }}
        >
          <Text
            preset="headerSmallBold"
            color={isDarkMode ? colors.offWhite : colors.titleActive}
            text="Silent Color"
          />
          <View row>
            <Icon icon="heart" size={20} color={boldColors} containerStyle={styles.roundIcon} onPress={() => null} />
            <Icon icon="export" size={20} color={boldColors} containerStyle={styles.roundIcon} onPress={() => null} />
          </View>
        </View>
        <View style={{ alignItems: "flex-start", paddingHorizontal: spacing[6] }}>
          <TagNameButton title="H" text="@openart" onPress={onPressTagName} />
          <Text
            preset="small"
            text="Together with my design team, we designed this futuristic Cyberyacht concept artwork. We wanted to create something that has not been created yet, so we started to collect ideas of how we imagine the Cyberyacht could look like in the future."
            style={{ lineHeight: 20, paddingVertical: spacing[2] }}
            color={colors.label}
          />
          <View row>
            {HASHTAG_NAMES.map((name) => {
              return (
                <TouchableOpacity key={name} disabled>
                  <View style={styles.hashtag}>
                    <Text text={`#${name}`} color={colors.placeholder} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/*  */}
        <View style={{ paddingHorizontal: spacing[4], marginTop: spacing[4] }}>
          {TOUCH_ACTIONS.map((item) => {
            return (
              <TouchableOpacity key={item.text} onPress={() => null}>
                <View row alignCenter justifySpaceBetween style={styles.btnAction}>
                  <View alignCenter style={{ minWidth: 60 }}>
                    {item.isImage ? (
                      <Image source={item.image} style={{ width: 28, height: 28 }} />
                    ) : (
                      <Icon icon={item.icon} size={24} color={boldColors} />
                    )}
                  </View>
                  <View flexible>
                    <Text preset="mediumBold" text={item.text} color={boldColors} />
                  </View>
                  <Icon icon="external" color={placeholderColors} />
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        {/*  */}
        {mode === MODE.SOLD && (
          <View style={styles.soldInfo}>
            <View style={{ position: "absolute", right: 15, top: 10 }}>
              <Image source={assets.star} style={{ width: 27, height: 27 }} />
            </View>
            <View>
              <Text style={{ paddingRight: spacing[4], paddingVertical: spacing[3] }}>
                <Text preset="large" text="Sold for" />
                <Text text=" " />
                <Text preset="largeBold" text="1.50 ETH" color={boldColors} />
                <Text text="  " />
                <Text preset="mediumBold" text="$2,683.73" color={placeholderColors} />
              </Text>
              <View row style={{ paddingVertical: spacing[3] }}>
                <Text preset="large" text="Owner by" />
                <TagNameButton title="D" text="@david" onPress={onPressTagName} />
              </View>
            </View>
          </View>
        )}
        {/*  */}
        <View style={styles.activityBox}>
          <Text text="Activity" preset="large" />
          <FlatList
            nestedScrollEnabled
            data={ACTIVITY_ACTIONS}
            keyExtractor={(item: ActivityProps) => item.id}
            renderItem={({ item }: { item: ActivityProps }) => {
              return (
                <TouchableOpacity onPress={item.onPress}>
                  <View style={styles.activityBtn}>
                    <View row justifySpaceBetween alignCenter>
                      <Avatar
                        title={`${item.title} ${item.name}`}
                        hasSource={item.isAvtImage}
                        source={item.imageSrc}
                        text="D"
                        preset="row"
                        size="medium"
                        statusText={item.datetime}
                      />
                      <Icon icon="external" size={24} color={colors.placeholder} />
                    </View>
                    <Text style={{ paddingLeft: 66, paddingVertical: spacing[1] }}>
                      <Text preset="largeBold" text={item.priceText} />
                      <Text preset="largeBold" text={" "} />
                      <Text preset="small" text={item.subPriceText} color={colors.placeholder} />
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        {/*  */}
        <View style={styles.footer}>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.titleActive,
  },
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing[4],
  },
  imageBox: {
    paddingHorizontal: spacing[4],
  },
  image: {
    width: SCREEN_WIDTH - 2 * spacing[4],
    borderRadius: 24,
  },
  roundIcon: {
    backgroundColor: colors.offWhite,
    borderRadius: 99,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: spacing[3],
    ...shadow.icon,
  },
  hashtag: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: colors.line,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    margin: 1,
  },
  btnAction: {
    marginVertical: spacing[2],
    padding: spacing[4],
    borderRadius: 16,
    minHeight: 58,
    backgroundColor: colors.offWhite,
    ...shadow.lightButton,
  },
  soldInfo: {
    backgroundColor: colors.offWhite,
    margin: spacing[4],
    padding: spacing[4],
    borderRadius: 24,
    ...shadow.lightButton,
  },
  activityBox: {
    paddingHorizontal: spacing[4],
    paddingTop: spacing[4],
  },
  activityBtn: {
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[3],
    backgroundColor: colors.offWhite,
    marginVertical: spacing[2],
    borderRadius: 24,
    ...shadow.lightButton,
  },
  footer: {
    paddingVertical: spacing[7],
  },
});
