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
// import { useNavigation } from "@react-navigation/native";
import { colors, shadow, spacing } from "../../theme";
import { assets, constants } from "../../config";
import { createStyles, wait } from "../../utils/function";
import { IconTypes } from "../../components/icon/icons";

const { VIEWABILITY_CONFIG: viewabilityConfig, SCREEN_WIDTH, AVT_SIZE } = constants;

export const SearchScreen = observer(function SearchScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  // const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [visibleItemIndex, setVisibleItemIndex] = useState(0);
  const [visibleModal, setVisibleModal] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const onViewableItemsChanged = useCallback(({ viewableItems, changed }) => {
    if (changed && changed.length > 0) {
      setVisibleItemIndex(changed[0].index);
    }
  }, []);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
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
      <SearchBar isShowClose containerStyle={{ paddingHorizontal: spacing[4], paddingVertical: spacing[2] }} />
      <ScrollView
        style={styles.container}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        contentContainerStyle={{
          paddingVertical: spacing[2],
          paddingHorizontal: spacing[4],
        }}
      >
        <Text preset="large" text="People" color={colorStyles.placeholder} style={{ paddingVertical: spacing[2] }} />
        <Avatar
          size="medium"
          text="M"
          preset="row"
          title="Microart"
          statusText="@art"
          containerStyle={{ paddingVertical: spacing[1] }}
        />
        <Avatar
          size="medium"
          text="F"
          preset="row"
          presetLinearColors="primary"
          title="Marbella the Frenchie"
          statusText="@frenchies"
          containerStyle={{ paddingVertical: spacing[1] }}
        />
        <Avatar
          size="medium"
          text="F"
          preset="row"
          presetLinearColors="accent"
          title="Oliver"
          statusText="@oliver"
          containerStyle={{ paddingVertical: spacing[1] }}
        />
        <Text preset="large" text="Items" color={colorStyles.placeholder} style={{ paddingVertical: spacing[2] }} />
        <View row>
          <View style={{ padding: 12 }}>
            <Image source={assets.scard5} style={styles.item} />
          </View>
          <View>
            <Text preset="mediumBold" text="Epic: Fight (1/4) (2009)" style={{ lineHeight: 22 }} />
            <Text text="@lovetherobot" style={{ lineHeight: 22 }} />
          </View>
        </View>
        <View row>
          <View style={{ padding: 12 }}>
            <Image source={assets.scard6} style={styles.item} />
          </View>
          <View>
            <Text preset="mediumBold" text="Chamomile LTR (2021)" style={{ lineHeight: 22 }} />
            <Text text="@lovetherobot" style={{ lineHeight: 22 }} />
          </View>
        </View>
        <View row>
          <View style={{ padding: 12 }}>
            <Image source={assets.scard7} style={styles.item} />
          </View>
          <View>
            <Text preset="mediumBold" text="Bliss (2021)" style={{ lineHeight: 22 }} />
            <Text text="@lovetherobot" style={{ lineHeight: 22 }} />
          </View>
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
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 16,
  },
  item: {
    height: 56,
    width: 56,
    borderRadius: 16,
  },
});
