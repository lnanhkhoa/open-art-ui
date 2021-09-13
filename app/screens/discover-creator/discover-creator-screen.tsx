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
import { LIST_CREATORS } from "./shema";

const { VIEWABILITY_CONFIG: viewabilityConfig } = constants;
function HeaderTitle({ selectedIndex, onSelectIndex = (e: number) => null }) {
  return (
    <View row alignCenter style={{ paddingHorizontal: spacing[4], justifyContent: "center" }}>
      <TitleButton title="Feature Creator" isActive={selectedIndex === 0} onPress={() => onSelectIndex(0)} />
      <TitleButton title="All Creator" isActive={selectedIndex === 1} onPress={() => onSelectIndex(1)} />
    </View>
  );
}

export const DiscoverCreatorScreen = observer(function DiscoverCreatorScreen(props) {
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
        <View alignCenter style={{ paddingHorizontal: spacing[8] }}>
          <Text preset="largeBold" text="Discover creator" />
          <Text
            preset="medium"
            text="Follow at least five creators to build your feed…"
            style={{ textAlign: "center", paddingVertical: spacing[4] }}
          />
        </View>
        <HeaderTitle selectedIndex={selectedIndex} onSelectIndex={setSelectedIndex} />
        {/*  */}
        <FlatList
          data={LIST_CREATORS}
          keyExtractor={(item) => item.id}
          contentContainerStyle={{ paddingHorizontal: spacing[4] }}
          renderItem={({ item }) => (
            <CreatorItem
              name={item.name}
              headerImg={item.headerImg}
              avtImg={item.avtImg}
              description={item.description}
              followNumber={item.followNumber}
              onPressFollow={onPressFollow}
            />
          )}
          ListFooterComponentStyle={{ padding: spacing[5] }}
          ListFooterComponent={() => <Button leftIcon="plus" preset="secondary" text="Load more" />}
        />
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
  bottom: {
    paddingVertical: spacing[7],
  },
});
