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

export const JoinCommunityScreen = observer(function JoinCommunityScreen(props) {
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
      <HeaderLogo rightIcon="search" onRightPress={onPressSearch} onPressMenu={onPressMenu} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingTop: spacing[4], paddingBottom: spacing[7] }}
      >
        <View alignCenter style={{ paddingHorizontal: spacing[4] }}>
          <Text
            preset="largeBold"
            style={{ textAlign: "center" }}
            text="Join the Community Upvote to access creator tools."
          />
          <Text
            preset="medium"
            text="With the Community Upvote, artists are encouraged to support other artists and to set the stage for a model of community-led curation that puts power in the hands of creators."
            style={{ textAlign: "center", paddingVertical: spacing[4], lineHeight: 22 }}
          />
        </View>
        <Button preset="primary" text="Join Community Upvote" containerStyle={{ paddingHorizontal: spacing[4] }} />
        <View alignCenter style={{ paddingHorizontal: spacing[6] }}>
          <Image source={assets.globe} style={styles.img} />
          <Text
            preset="medium"
            style={{ textAlign: "center" }}
            text="Current number of profiles on the Community Upvote:"
          />
          <Text preset="largeBold" text="52.000" style={{ paddingVertical: spacing[3] }} />
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
  bottom: {
    paddingVertical: spacing[7],
  },
});
