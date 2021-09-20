import React, { useRef, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, Image, useColorScheme, Modal } from "react-native";
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
import { Footer } from "../components";
// import { useNavigation } from "@react-navigation/native";
import { colors, shadow, spacing } from "../../theme";
import { assets, constants } from "../../config";
import { createStyles } from "../../utils/function";

const { VIEWABILITY_CONFIG: viewabilityConfig } = constants;
const HOT_BID_LIST = [
  {
    id: "1",
    source: assets.card5,
    avtSources: [assets.avatar, assets.avatar2],
    title: "Inside Kings Cross",
    highestBid: "1.00 ETH",
    price: "2.3 ETH",
  },
  {
    id: "2",
    source: assets.card6,
    avtSources: [assets.avatar2, assets.avatar, assets.avatar2],
    title: "Inside Kings Cross",
    highestBid: "1.00 ETH",
    price: "2.3 ETH",
  },
];

export const HomeScreen = observer(function HomeScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  // const navigation = useNavigation();
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    if (changed && changed.length > 0) {
      setVisibleItemIndex(changed[0].index);
    }
  }, []);
  const viewabilityConfigCallbackPairs = useRef([{ viewabilityConfig, onViewableItemsChanged }]);

  const hotbidRef = useRef(null);
  const onPressMenu = () => null;
  const onPressLeft = () => {
    const nextItemIndex = Math.max(visibleItemIndex - 1, 0);
    hotbidRef.current.scrollToIndex({
      animated: true,
      index: nextItemIndex,
    });
  };
  const onPressRight = () => {
    const nextItemIndex = Math.min(visibleItemIndex + 1, HOT_BID_LIST.length - 1);
    hotbidRef.current.scrollToIndex({
      animated: true,
      index: nextItemIndex,
    });
  };

  //

  const colorText = isDarkMode ? colors.offWhite : colors.label;
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderLogo rightIcon="menu" onRightPress={onPressMenu} />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: spacing[7] }}>
        <View style={styles.header}>
          <View style={styles.headerTitle}>
            <Text preset="mediumBold" text="Discover, collect, and sell" />
            <Text preset="headerMediumBold" text="Your Digital Art" style={{ paddingVertical: spacing[2] }} />
          </View>
          <SearchBar
            placeholder="Search items, collections, and accounts"
            containerStyle={{ marginVertical: spacing[2] }}
            rightIcon={() => (
              <Icon
                icon="microphone"
                size={16}
                onPress={() => null}
                containerStyle={{ padding: spacing[2], paddingLeft: 0 }}
              />
            )}
          />
        </View>
        <View style={styles.body}>
          {/* List Item */}
          <View style={styles.listitems}>
            <View style={styles.box}>
              <ListItem
                source={assets.card}
                avtSource={assets.avatar2}
                isActive
                title="Silent Wave"
                subtitle="Pawel Czerwinski"
                status="Creator"
              />
              <Text
                preset="medium"
                color={isDarkMode ? colors.offWhite : colors.titleActive}
                style={{ paddingVertical: spacing[3] }}
              >
                <Text text="Reserve Price" />
                <Text text=" " />
                <Text preset="headerSmallBold" text="1.50 ETH" />
                <Text text=" " />
                <Text preset="mediumBold" color={colorStyles.placeholder} text="$2,683.73" />
              </Text>
              <Button
                preset="primary"
                text="Place a bid"
                style={{ marginVertical: spacing[2] }}
                textStyle={{
                  ...TextPresets.largeBold,
                  paddingVertical: spacing[2],
                }}
              />
              <Button
                containerStyle={{ marginVertical: spacing[2] }}
                preset="secondary"
                text="View artwork"
                textStyle={{
                  ...TextPresets.largeBold,
                  paddingVertical: spacing[2],
                }}
              />
            </View>
            <View style={styles.box}>
              <ListItem
                source={assets.card2}
                avtSource={assets.avatar2}
                isActive
                title="Silent Color"
                subtitle="Pawel Czerwinski"
                status="Creator"
              />
              <TouchableOpacity style={styles.buttonSold} onPress={() => null}>
                <Text color={colorText} style={{ marginVertical: spacing[4] }}>
                  <Text preset={"large"} text="Sold For" />
                  <Text text=" " />
                  <Text preset="headerSmallBold" text="2.00 ETH" />
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <ListItem
                source={assets.card3}
                avtSource={assets.avatar2}
                isActive
                title="Mirror"
                subtitle="Pawel Czerwinski"
                status="Creator"
              />
              <View row style={styles.viewBid}>
                <View flexible alignCenter style={{ marginVertical: spacing[4] }}>
                  <View row alignCenter>
                    <DotIcon status="success" />
                    <Text preset={"medium"} color={colorText} text="Current bid" />
                  </View>
                  <Text
                    preset="largeBold"
                    color={isDarkMode ? colors.offWhite : colors.titleActive}
                    text="2.00 ETH"
                    style={{ paddingVertical: spacing[1] }}
                  />
                </View>
                <View flexible alignCenter style={{ marginVertical: spacing[4] }}>
                  <Text preset={"medium"} color={colorText} text="Ending in" />
                  <Text
                    preset="largeBold"
                    color={isDarkMode ? colors.offWhite : colors.titleActive}
                    text="27m30s"
                    style={{ paddingVertical: spacing[1] }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.box}>
              <ListItem
                source={assets.card4}
                avtSource={assets.avatar2}
                isActive
                title="Mirror"
                subtitle="Pawel Czerwinski"
                status="Creator"
              />
              <View row style={styles.viewBid}>
                <View flexible alignCenter style={{ marginVertical: spacing[4] }}>
                  <Text preset={"medium"} color={colorText} text="Current bid" />
                  <Text
                    preset="largeBold"
                    color={isDarkMode ? colors.offWhite : colors.titleActive}
                    text="2.00 ETH"
                    style={{ paddingVertical: spacing[1] }}
                  />
                </View>
                <View flexible alignCenter style={{ marginVertical: spacing[4] }}>
                  <Text preset={"medium"} color={colorText} text="Ending in" />
                  <Text
                    preset="largeBold"
                    color={isDarkMode ? colors.offWhite : colors.titleActive}
                    text="27m30s"
                    style={{ paddingVertical: spacing[1] }}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* Hot bid */}
          <View style={styles.hotBid}>
            <View row alignCenter justifySpaceBetween>
              <View row alignCenter style={{ paddingLeft: spacing[3] }}>
                <Image source={assets.fire} style={{ width: 24, height: 24, marginRight: spacing[2] }} />
                <Text text="Hot bid" preset="headerSmallBold" />
              </View>
              <View row>
                <Icon icon="back-arrow" size={24} onPress={onPressLeft} containerStyle={{ padding: spacing[3] }} />
                <Icon icon="forward-arrow" size={24} onPress={onPressRight} containerStyle={{ padding: spacing[3] }} />
              </View>
            </View>
            <FlatList
              horizontal={true}
              ref={hotbidRef}
              data={HOT_BID_LIST}
              contentContainerStyle={{ paddingRight: 30 }}
              viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => <SmallListItem {...item} />}
            />
          </View>
          <Button
            preset="secondary"
            text="View more collection"
            textStyle={{ paddingVertical: spacing[2] }}
            containerStyle={{ marginHorizontal: spacing[4], marginTop: spacing[5] }}
          />
        </View>
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
  placeholder: isDarkMode ? colors.offWhite : colors.placeholder,
});

const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.titleActive,
  },
  viewBid: {
    backgroundColor: colors.body,
    borderColor: colors.transparent,
  },
  buttonSold: {
    backgroundColor: colors.body,
    borderColor: colors.transparent,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing[4],
  },
  headerTitle: {
    alignItems: "center",
    paddingVertical: spacing[4],
  },
  body: {},
  listitems: {
    paddingHorizontal: spacing[4],
  },
  hotBid: {
    // paddingHorizontal: spacing[3],
  },
  box: {
    paddingVertical: spacing[4],
  },
  bottom: {
    paddingVertical: spacing[7],
  },
  buttonSold: {
    backgroundColor: colors.offWhite,
    borderColor: colors.background,
    borderWidth: 2,
    borderRadius: 50,
    marginVertical: spacing[3],
    alignItems: "center",
  },
  viewBid: {
    marginVertical: spacing[3],
    backgroundColor: colors.offWhite,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.text,
    alignItems: "center",
    justifyContent: "space-between",
  },
});
