import React, { useRef, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, Image, useColorScheme, Modal, ViewStyle } from "react-native";
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
  DotIcon,
} from "../../components";
import { Footer, TitleButton, CreatorItem } from "../components";
// import { useNavigation } from "@react-navigation/native";
import { colors, shadow, spacing } from "../../theme";
import { assets, constants } from "../../config";
import { createStyles } from "../../utils/function";
// import { LIST_CREATORS } from "./shema";

const { VIEWABILITY_CONFIG: viewabilityConfig } = constants;
const IMAGE_SIZE = {
  LARGE: 193,
  MEDIUM: 114,
  NORMAL: 94,
};

export const AboutScreen = observer(function AboutScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  // const navigation = useNavigation();
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    if (changed && changed.length > 0) {
      setVisibleItemIndex(changed[0].index);
    }
  }, []);
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);
  //
  const onPressMenu = () => null;
  const onPressSearch = () => null;
  const onPressFollow = () => null;
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
        <View alignCenter style={{ paddingHorizontal: spacing[4] }}>
          <Text preset="largeBold" style={{ textAlign: "center" }} text="About OpenArt" />
          <Image
            source={assets.processor}
            style={{ height: IMAGE_SIZE.LARGE, width: IMAGE_SIZE.LARGE, margin: spacing[3] }}
          />
          <Text
            preset="medium"
            text="OpenArt help anyone create a beautiful website, landing page, app to collect NFTs digital art"
            style={{ textAlign: "center", padding: spacing[4], lineHeight: 22 }}
          />
        </View>
        <View alignCenter style={{ paddingHorizontal: spacing[6], paddingVertical: spacing[4] }}>
          <Text preset="largeBold" style={{ textAlign: "center" }} text="Crypto for Creative Communities" />
          <Text
            preset="medium"
            style={{ textAlign: "center", paddingVertical: spacing[3] }}
            text="NFTs—non-fungible tokens—are empowering artists, musicians, and all kinds of genre-defying digital creators to invent a new cultural paradigm. How this emerging culture of digital art ownership looks is up to all of us."
          />
        </View>
        <View style={{ paddingHorizontal: spacing[4] }}>
          <Text text="How it work" preset="largeBold" />
          <View row alignCenter justifySpaceBetween style={{ paddingVertical: spacing[4] }}>
            <View style={styles.card}>
              <Image source={assets.globe} style={{ width: IMAGE_SIZE.MEDIUM, height: IMAGE_SIZE.MEDIUM }} />
              <Text preset="mediumBold" text="Build together" style={{ paddingVertical: spacing[4] }} />
            </View>
            <View style={styles.card}>
              <Image source={assets.trust} style={{ width: IMAGE_SIZE.MEDIUM, height: IMAGE_SIZE.MEDIUM }} />
              <Text preset="mediumBold" text="Trust" style={{ paddingVertical: spacing[4] }} />
            </View>
          </View>
          <View style={{ paddingVertical: spacing[4] }}>
            <Text preset="mediumBold" text="For Creators" lineHeight={24} />
            <Text
              preset="medium"
              lineHeight={22}
              text="Creators are invited to join Foundation by members of the community. Once you’ve received an invite, you’ll need to set up a MetaMask wallet with ETH before you can create an artist profile and mint an NFT—which means uploading your JPG, PNG, or video file to IPFS, a decentralized peer-to-peer storage network. It will then be an NFT you can price in ETH and put up for auction on Foundation. "
            />
          </View>
          <View style={{ paddingVertical: spacing[4] }}>
            <Text preset="mediumBold" text="For Collectors" lineHeight={24} />
            <Text
              preset="medium"
              lineHeight={22}
              text="On Foundation, anyone can create a profile to start collecting NFTs. All you’ll need is a MetaMask wallet and ETH, the cryptocurrency used to pay for all transactions on Ethereum. Artists list NFTs for auction at a reserve price, and once the first bid is placed, a 24-hour auction countdown begins. If a bid is placed within the last 15 minutes, the auction extends for another 15 minutes. "
            />
          </View>
        </View>
        {/*  */}
        <View style={styles.bottom}>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
});

const createColorStyles = (isDarkMode) => ({
  bold: isDarkMode ? colors.offWhite : colors.titleActive,
  label: isDarkMode ? colors.offWhite : colors.label,
  input: isDarkMode ? colors.offWhite : colors.bgInput,
  placeholder: isDarkMode ? colors.offWhite : colors.placeholder,
});

const darkStyles = StyleSheet.create({
  container: {
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
  img: {
    width: 165,
    height: 165,
  },
  card: {
    flex: 1,
    padding: spacing[2],
    alignItems: "center",
    backgroundColor: colors.white,
    margin: spacing[2],
    borderRadius: 24,
    ...shadow.button,
  },
  bottom: {
    paddingVertical: spacing[7],
  },
});
