import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, Image, useColorScheme, ImageRequireSource, ImageURISource, Modal } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Text, HeaderLogo, View, Icon, Button, SafeAreaView, TouchableOpacity, Avatar } from "../../components";
import { IconTypes } from "../../components/icon/icons";
import { Footer, TagNameButton, PlaceABid, ConnectWallet } from "../components";
// import { useNavigation } from "@react-navigation/native";
import { colors, shadow, spacing } from "../../theme";
import { assets, constants } from "../../config";
import { createStyles } from "../../utils/function";

const { SCREEN_WIDTH } = constants;
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

const MODAL_CONTENT = {
  PLACE_A_BID: "PLACE_A_BID",
  CONNET_WALLET: "CONNET_WALLET",
};

export const ItemsDetailScreen = observer(function ItemsDetailScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  //
  // const navigation = useNavigation();
  const [mode, setMode] = useState(MODE.AUCTION);
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalContent, setmodalContent] = useState(MODAL_CONTENT.PLACE_A_BID);

  const onPressMenu = () => null;
  const onPressTagName = () => null;
  const onPressIcon = () => null;
  // const onPressButton = () => null;
  const onOpenModal = () => setVisibleModal(true);
  const onCloseModal = () => setVisibleModal(false);
  //

  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);
  return (
    <SafeAreaView>
      <HeaderLogo />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingVertical: spacing[7] }}>
        <View style={styles.imageBox}>
          <Image source={assets.card7} style={styles.image} />
        </View>
        <View row alignCenter justifySpaceBetween style={{ paddingHorizontal: spacing[6], paddingTop: spacing[4] }}>
          <Text preset="headerSmallBold" color={colorStyles.bold} text="Silent Color" />
          <View row>
            <Icon
              icon="heart"
              size={20}
              color={colorStyles.bold}
              containerStyle={styles.roundIcon}
              onPress={onPressIcon}
            />
            <Icon
              icon="export"
              size={20}
              color={colorStyles.bold}
              containerStyle={styles.roundIcon}
              onPress={onPressIcon}
            />
          </View>
        </View>
        <View style={{ alignItems: "flex-start", paddingHorizontal: spacing[6] }}>
          <TagNameButton title="H" text="@openart" onPress={onPressTagName} />
          <Text
            preset="small"
            text="Together with my design team, we designed this futuristic Cyberyacht concept artwork. We wanted to create something that has not been created yet, so we started to collect ideas of how we imagine the Cyberyacht could look like in the future."
            style={{ lineHeight: 20, paddingVertical: spacing[2] }}
            color={colorStyles.label}
          />
          <View row>
            {HASHTAG_NAMES.map((name) => {
              return (
                <TouchableOpacity key={name} disabled>
                  <View style={styles.hashtag}>
                    <Text text={`#${name}`} color={colorStyles.placeholder} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
        {/*  */}
        <View style={{ paddingHorizontal: spacing[4], paddingTop: spacing[4] }}>
          {TOUCH_ACTIONS.map((item) => {
            return (
              <TouchableOpacity key={item.text} onPress={() => null}>
                <View row alignCenter justifySpaceBetween style={styles.btnAction}>
                  <View alignCenter style={{ minWidth: 60 }}>
                    {item.isImage ? (
                      <Image source={item.image} style={{ width: 28, height: 28 }} />
                    ) : (
                      <Icon icon={item.icon} size={24} color={colorStyles.bold} />
                    )}
                  </View>
                  <View flexible>
                    <Text preset="mediumBold" text={item.text} color={colorStyles.bold} />
                  </View>
                  <Icon icon="external" color={colorStyles.placeholder} />
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
                <Text preset="largeBold" text="1.50 ETH" color={colorStyles.bold} />
                <Text text="  " />
                <Text preset="mediumBold" text="$2,683.73" color={colorStyles.placeholder} />
              </Text>
              <View row style={{ paddingVertical: spacing[3] }}>
                <Text preset="large" text="Owner by" />
                <TagNameButton title="D" text="@david" onPress={onPressTagName} />
              </View>
            </View>
          </View>
        )}
        {mode === MODE.AUCTION && (
          <View style={styles.auctionInfo}>
            <Text preset="large" text="Reserve Price" />
            <Text style={{ paddingVertical: spacing[2] }}>
              <Text preset="headerSmallBold" text="1.50 ETH" color={colorStyles.bold} />
              <Text text="  " />
              <Text preset="mediumBold" text="$2,683.73" color={colorStyles.placeholder} />
            </Text>
            <Text
              preset="medium"
              color={colorStyles.label}
              text="Once a bid has been placed and the reserve price has been met, a 24 hour auction for this artwork will begin."
              style={{ lineHeight: 20 }}
            />
            <Button
              presetText="mediumBold"
              preset="primary"
              text="Place a bid"
              style={{ marginVertical: spacing[2] }}
              containerStyle={{ marginTop: spacing[4] }}
              onPress={onOpenModal}
            />
          </View>
        )}
        {mode === MODE.CURRENT_BID && (
          <View style={styles.auctionInfo}>
            <Text preset="large" text="Current Bid" />
            <Text style={{ paddingTop: spacing[2], paddingBottom: spacing[5] }}>
              <Text preset="headerSmallBold" text="0.50 ETH" color={colorStyles.bold} />
              <Text text="  " />
              <Text preset="mediumBold" text="$2,683.73" color={colorStyles.placeholder} />
            </Text>
            <Text preset="large" color={colorStyles.bold} text="Auction ending in" style={{ lineHeight: 20 }} />
            <View row style={{ paddingTop: spacing[4], paddingBottom: spacing[5] }}>
              <View style={{ paddingRight: spacing[4] }}>
                <Text text="12" preset="headerSmallBold" />
                <Text text="hours" preset="small" />
              </View>
              <View style={{ paddingRight: spacing[4] }}>
                <Text text="30" preset="headerSmallBold" />
                <Text text="minutes" preset="small" />
              </View>
              <View style={{ paddingRight: spacing[4] }}>
                <Text text="25" preset="headerSmallBold" />
                <Text text="seconds" preset="small" />
              </View>
            </View>
            <Button
              presetText="mediumBold"
              preset="primary"
              text="Place a bid"
              style={{ marginVertical: spacing[2] }}
              containerStyle={{ marginTop: spacing[4] }}
              onPress={onOpenModal}
            />
          </View>
        )}
        {/*  */}
        <View style={styles.activityBox}>
          <Text text="Activity" preset="large" style={{ marginVertical: spacing[2] }} />
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
      <Modal animationType="fade" transparent={true} visible={visibleModal}>
        {modalContent === MODAL_CONTENT.PLACE_A_BID ? (
          <PlaceABid onCloseModal={onCloseModal} onPressConfirm={() => setmodalContent(MODAL_CONTENT.CONNET_WALLET)} />
        ) : (
          <ConnectWallet
            onCloseModal={() => {
              onCloseModal();
              setmodalContent(MODAL_CONTENT.PLACE_A_BID);
            }}
            onPressConfirm={() => {
              onCloseModal();
              setmodalContent(MODAL_CONTENT.PLACE_A_BID);
            }}
          />
        )}
      </Modal>
    </SafeAreaView>
  );
});

const createColorStyles = (isDarkMode) => ({
  bold: isDarkMode ? colors.offWhite : colors.titleActive,
  body: isDarkMode ? colors.offWhite : colors.body,
  label: isDarkMode ? colors.offWhite : colors.label,
  placeholder: isDarkMode ? colors.offWhite : colors.placeholder,
});

const lightStyles = StyleSheet.create({
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
  auctionInfo: {
    backgroundColor: colors.offWhite,
    margin: spacing[4],
    padding: spacing[5],
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

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.titleActive,
  },
  roundIcon: {
    backgroundColor: colors.body,
    shadowColor: colors.offWhite,
  },
  hashtag: {
    borderColor: colors.background,
  },
  btnAction: {
    backgroundColor: colors.body,
  },
  auctionInfo: {
    backgroundColor: colors.body,
  },
  activityBtn: {
    backgroundColor: colors.body,
  },
});
