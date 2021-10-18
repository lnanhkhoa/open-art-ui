import React, { useRef, useState, useCallback } from "react";
import { observer } from "mobx-react-lite";
import {
  StyleSheet,
  Image,
  useColorScheme,
  RefreshControl,
  Modal,
  ViewStyle,
  FlatList,
  ScrollView,
} from "react-native";
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
  HeaderLogoSpecs,
  Slider,
  Avatar,
} from "../../components";
import {
  Footer,
  TitleButton,
  FollowButton,
  TagNameButton,
  EditButton,
  AccountDetail,
  Notification,
} from "../components";
import RNDropDownPicker, { ItemType } from "react-native-dropdown-picker";
// import { useNavigation } from "@react-navigation/native";
import { colors, shadow, spacing } from "../../theme";
import { assets, constants } from "../../config";
import { createStyles, wait } from "../../utils/function";
import { IconTypes } from "../../components/icon/icons";

const { VIEWABILITY_CONFIG: viewabilityConfig, SCREEN_WIDTH, AVT_SIZE } = constants;

const CREATORS: ItemType[] = [
  {
    label: "Initial",
    value: "initial",
  },
  {
    label: "Verified Only",
    value: "verify",
  },
  {
    label: "Rejected",
    value: "rejected",
  },
];

const DATA_ITEMS = [
  {
    id: "1",
    imgSource: assets.card,
    title: "Silent Color",
    subtitle: "Pawel Czerwinski",
    avtSource: assets.avatar,
    status: "Creator",
    price: "2.00 ETH",
  },
  {
    id: "2",
    imgSource: assets.card10,
    title: "Silent Color",
    subtitle: "Pawel Czerwinski",
    avtSource: assets.avatar2,
    status: "Creator",
    price: "2.00 ETH",
  },
];

export const SearchResultScreen = observer(function SearchResultScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  // const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [selectTypeIndex, setSelectTypeIndex] = useState(0);
  const [selectChainIndex, setSelectChainIndex] = useState(0);
  const [selectSaleIndex, setSelectSaleIndex] = useState(0);
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(CREATORS[0].value);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  //
  const onPressMenu = () => null;
  const onPressSearch = () => null;
  const onPressCopy = () => null;
  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <SafeAreaView>
      <HeaderLogo />
      <SearchBar
        isShowClose
        containerStyle={{
          paddingHorizontal: spacing[4],
          paddingVertical: spacing[2],
        }}
      />
      <ScrollView
        style={styles.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={{
          paddingTop: spacing[2],
          paddingBottom: spacing[4],
          paddingHorizontal: spacing[4],
        }}
      >
        <Text preset="large" text="Type" style={{ paddingVertical: spacing[2] }} />
        <View row style={{ flexWrap: "wrap", marginBottom: spacing[5] }}>
          <TitleButton title="All items" isActive={selectTypeIndex === 0} onPress={() => setSelectTypeIndex(0)} />
          <TitleButton title="Game" isActive={selectTypeIndex === 1} onPress={() => setSelectTypeIndex(1)} />
          <TitleButton title="Video" isActive={selectTypeIndex === 2} onPress={() => setSelectTypeIndex(2)} />
          <TitleButton title="Animation" isActive={selectTypeIndex === 3} onPress={() => setSelectTypeIndex(3)} />
          <TitleButton title="Photography" isActive={selectTypeIndex === 4} onPress={() => setSelectTypeIndex(4)} />
        </View>
        <Text preset="large" text="Price range" />
        <View></View>
        <Text preset="large" text="Chains" />
        <View row style={{ flexWrap: "wrap", marginBottom: spacing[5] }}>
          <TitleButton title="Ethereum" isActive={selectChainIndex === 0} onPress={() => setSelectChainIndex(0)} />
          <TitleButton title="Matic" isActive={selectChainIndex === 1} onPress={() => setSelectChainIndex(1)} />
          <TitleButton title="Klaytn" isActive={selectChainIndex === 2} onPress={() => setSelectChainIndex(2)} />
        </View>
        <Text preset="large" text="Onsale in" />
        <View row style={{ flexWrap: "wrap", marginBottom: spacing[5] }}>
          <TitleButton title="ETH" isActive={selectSaleIndex === 0} onPress={() => setSelectSaleIndex(0)} />
          <TitleButton title="WETH" isActive={selectSaleIndex === 1} onPress={() => setSelectSaleIndex(1)} />
          <TitleButton title="0xBTC" isActive={selectSaleIndex === 2} onPress={() => setSelectSaleIndex(2)} />
          <TitleButton title="1337" isActive={selectSaleIndex === 3} onPress={() => setSelectSaleIndex(3)} />
          <TitleButton title="1MT" isActive={selectSaleIndex === 4} onPress={() => setSelectSaleIndex(4)} />
        </View>
        <Text preset="large" text="Creator" />
        <RNDropDownPicker
          items={CREATORS}
          value={dropdownValue}
          setValue={setDropdownValue}
          open={isOpenDropdown}
          setOpen={setIsOpenDropdown}
          ArrowUpIconComponent={() => <Icon icon="up" color={colorStyles.label} />}
          ArrowDownIconComponent={() => <Icon icon="down" color={colorStyles.label} />}
          textStyle={{ ...TextPresets.medium, color: colorStyles.label }}
          dropDownContainerStyle={styles.dropdownContainer}
          showTickIcon
          style={styles.slider}
          containerStyle={{
            marginTop: spacing[2],
            marginBottom: spacing[6],
          }}
        />
        <View style={styles.divider} />
        <View style={{ paddingVertical: spacing[6], alignItems: "flex-start" }}>
          <Button
            preset="subtle"
            text="Reset all filter"
            presetText="medium"
            textStyle={{ color: colorStyles.placeholder }}
            leftIcon="close"
            leftIconProps={{ size: 24, color: colorStyles.placeholder }}
          />
        </View>
        <View>
          <FlatList
            data={DATA_ITEMS}
            contentContainerStyle={{ paddingVertical: spacing[4] }}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={{ paddingBottom: spacing[4] }}>
                <ListItem
                  avtSource={item.avtSource}
                  title={item.title}
                  subtitle={item.subtitle}
                  source={item.imgSource}
                  status={item.status}
                  isActive
                />
                <TouchableOpacity style={styles.buttonSold} onPress={() => null}>
                  <Text color={colorStyles.label} style={{ marginVertical: spacing[4] }}>
                    <Text preset={"large"} text="Sold For" />
                    <Text text=" " />
                    <Text preset="headerSmallBold" text="2.00 ETH" />
                  </Text>
                </TouchableOpacity>
              </View>
            )}
            ListFooterComponent={() => (
              <Button leftIcon="plus" leftIconProps={{ color: colorStyles.bold }} preset="secondary" text="Load more" />
            )}
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
  divider: {
    backgroundColor: colors.offWhite,
  },
  buttonSold: {
    backgroundColor: colors.body,
    borderColor: colors.transparent,
  },
  slider: {
    backgroundColor: colors.body,
  },
  dropdownContainer: {
    backgroundColor: colors.body,
    borderColor: colors.offWhite,
  },
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 16,
  },
  slider: {
    backgroundColor: colors.bgInput,
    borderColor: colors.transparent,
  },
  dropdownContainer: { borderColor: colors.transparent, backgroundColor: colors.bgInput },
  item: {
    height: 56,
    width: 56,
    borderRadius: 16,
  },
  divider: {
    backgroundColor: colors.line,
    height: 1,
  },
  buttonSold: {
    backgroundColor: colors.offWhite,
    borderColor: colors.background,
    borderWidth: 2,
    borderRadius: 50,
    marginVertical: spacing[3],
    alignItems: "center",
  },
  bottom: {
    paddingVertical: spacing[7],
    marginHorizontal: -spacing[4],
  },
});
