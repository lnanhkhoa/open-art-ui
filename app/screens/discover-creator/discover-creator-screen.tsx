import React, { useState } from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { Text, HeaderLogo, View, Button, SafeAreaView } from "../../components";
import { Footer, TitleButton, CreatorItem } from "../components";
import { colors, spacing } from "../../theme";
import { createStyles } from "../../utils/function";
import { LIST_CREATORS } from "./shema";

function HeaderTitle({ selectedIndex, onSelectIndex = (e: number) => null }) {
  return (
    <View classNames={["row", "alignCenter", "justifyCenter"]} style={{ paddingHorizontal: spacing[4] }}>
      <TitleButton
        title="Feature Creator"
        isActive={selectedIndex === 0}
        onPress={() => onSelectIndex(0)}
        style={{ minWidth: 123 }}
      />
      <TitleButton
        title="All Creator"
        isActive={selectedIndex === 1}
        onPress={() => onSelectIndex(1)}
        style={{ minWidth: 123 }}
      />
    </View>
  );
}

export function DiscoverCreatorScreen() {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onPressMenu = () => null;
  const onPressSearch = () => null;
  const onPressFollow = () => null;
  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <SafeAreaView>
      <HeaderLogo rightIcon={"search"} onRightPress={onPressSearch} containerStyle={styles.header} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={{ paddingTop: spacing[4], paddingBottom: spacing[7] }}
      >
        <View classNames={["alignCenter"]} style={{ paddingHorizontal: spacing[8] }}>
          <Text preset="largeBold" text="Discover creator" />
          <Text
            preset="medium"
            text="Follow at least five creators to build your feed…"
            style={{ textAlign: "center", paddingVertical: spacing[4] }}
          />
        </View>
        <HeaderTitle selectedIndex={selectedIndex} onSelectIndex={setSelectedIndex} />
        {/*  */}
        <View>
          <FlatList
            nestedScrollEnabled
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
        </View>
        <View style={styles.bottom}>
          <Footer />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

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
