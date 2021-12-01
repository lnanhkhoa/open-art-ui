import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text, HeaderLogo, View, SafeAreaView, Checkbox, TextField } from "../../components";
import { Footer, UploadButton, ImageViewButton, CheckBoxText, NewCollectionButton } from "../components";
import { useNavigation } from "@react-navigation/native";
import { colors, spacing, createColorStyles } from "../../theme";
import { createStyles } from "../../utils/function";

export const UploadArtworkScreen = observer(function UploadArtworkScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const navigation = useNavigation();
  const [isMultifile, setIsMultifile] = useState(false);
  const [isSaleItem, setIsSaleItem] = useState(false);
  const [isInstantSalePrice, setIsInstantSalePrice] = useState(false);
  const [isUnlock, setIsUnlock] = useState(false);
  const [isAddCollection, setIsAddCollection] = useState(false);

  //
  const onPressCopy = () => null;
  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderLogo rightIcon="search" onRightPress={onPressCopy} />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: spacing[7] }}>
        <View style={{ paddingTop: spacing[6], paddingHorizontal: spacing[4] }}>
          <Text preset="headerSmallBold" color={colorStyles.bold} text="Upload Artwork" />
        </View>
        <View style={{ paddingHorizontal: spacing[4] }}>
          <UploadButton
            title="Drag and drop or browce a file"
            description="PNG, GIF, WEBP, MP4 or MP3. (Max 1Gb)"
            onPress={() => null}
          />
          <View classNames={["row", "alignCenter"]} style={{ paddingTop: spacing[3] }}>
            <Checkbox value={isMultifile} onToggle={(value) => setIsMultifile(value)} />
            <Text
              preset="mediumBold"
              color={colorStyles.placeholder}
              text="Multi-file"
              style={{ paddingLeft: spacing[2] }}
            />
          </View>
          <View classNames={["row", "alignCenter"]} style={{ marginTop: spacing[5], paddingHorizontal: spacing[4] }}>
            <ImageViewButton onPress={() => null} defaultIcon="export" />
            <ImageViewButton onPress={() => null} defaultIcon="export" />
          </View>
          <Text preset="mediumBold" text="Information" style={{ marginTop: spacing[4] }} />
          <TextField placeholder="Awesome wave" label="Item name" />
          <TextField placeholder="Tag" />
          <TextField
            multiline
            placeholder="Description"
            inputStyle={{
              height: 130,
            }}
          />
          {/*  */}
          <CheckBoxText
            title="Sale this item"
            description="You'll receive bids on this item"
            containerStyle={{ paddingTop: spacing[4] }}
            setValue={setIsSaleItem}
            value={isSaleItem}
          />
          <CheckBoxText
            title="Instant sale price"
            description="Enter the price for which the item will be instantly sold"
            containerStyle={{ paddingTop: spacing[4] }}
            setValue={setIsInstantSalePrice}
            value={isInstantSalePrice}
          />
          <CheckBoxText
            title="Unlock once purchased"
            description="Content will be unlocked after successful transaction"
            containerStyle={{ paddingTop: spacing[4] }}
            setValue={setIsUnlock}
            value={isUnlock}
          />
          {/*  */}
          <CheckBoxText
            title="Add to collection"
            description="Choose an exiting collection or create a new one"
            containerStyle={{ paddingTop: spacing[7] }}
            setValue={setIsAddCollection}
            value={isAddCollection}
          />
        </View>
        {/*  */}
        <View classNames={["row"]} style={{ paddingTop: spacing[6] }}>
          <NewCollectionButton onPress={() => null} />
        </View>
        <View style={styles.bottom}>
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
  btnViewImage: {},
});

const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  bottom: {
    paddingVertical: spacing[7],
  },
  header: {},
  btnViewImage: {
    borderRadius: 16,
    borderColor: colors.placeholder,
    borderWidth: 1,
    width: 77,
    height: 77,
    alignItems: "center",
    justifyContent: "center",
  },
});
