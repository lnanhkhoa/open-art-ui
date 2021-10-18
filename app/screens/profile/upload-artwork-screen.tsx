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
  Checkbox,
  TextField,
} from "../../components";
import { Footer, FollowButton, UploadButton } from "../components";
import { useNavigation } from "@react-navigation/native";
import { colors, shadow, spacing } from "../../theme";
import { assets, constants } from "../../config";
import { createStyles, createColorStyles } from "../../utils/function";

const { SCREEN_WIDTH, AVT_SIZE } = constants;

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
          <View row alignCenter style={{ paddingTop: spacing[3] }}>
            <Checkbox value={isMultifile} onToggle={(value) => setIsMultifile(value)} />
            <Text
              preset="mediumBold"
              color={colorStyles.placeholder}
              text="Multi-file"
              style={{ paddingLeft: spacing[2] }}
            />
          </View>
          <View row alignCenter justifySpaceBetween style={{ marginTop: spacing[5], paddingHorizontal: spacing[4] }}>
            <TouchableOpacity onPress={() => null} style={styles.btnViewImage}>
              <Icon icon="export" size={24} color={colorStyles.label} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => null} style={styles.btnViewImage} />
            <TouchableOpacity onPress={() => null} style={styles.btnViewImage} />
            <TouchableOpacity onPress={() => null} style={styles.btnViewImage} />
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
          <View row style={{ paddingTop: spacing[4] }}>
            <Checkbox
              value={isSaleItem}
              onToggle={(value) => setIsSaleItem(value)}
              style={{ paddingRight: spacing[3] }}
            />
            <View flexible style={{ paddingTop: spacing[1] }}>
              <TouchableOpacity onPress={() => setIsSaleItem(!isSaleItem)}>
                <Text preset="mediumBold" color={colorStyles.bold} text="Sale this item" />
                <Text preset="small" color={colorStyles.placeholder} text="You'll receive bids on this item" />
              </TouchableOpacity>
            </View>
          </View>
          <View row style={{ paddingTop: spacing[4] }}>
            <Checkbox
              value={isInstantSalePrice}
              onToggle={(value) => setIsInstantSalePrice(value)}
              style={{ paddingRight: spacing[3] }}
            />
            <View flexible style={{ paddingTop: spacing[1] }}>
              <TouchableOpacity onPress={() => setIsInstantSalePrice(!isInstantSalePrice)}>
                <Text preset="mediumBold" color={colorStyles.bold} text="Instant sale price" />
                <Text
                  preset="small"
                  color={colorStyles.placeholder}
                  text="Enter the price for which the item will be instantly sold"
                />
              </TouchableOpacity>
            </View>
          </View>
          <View row style={{ paddingTop: spacing[4] }}>
            <Checkbox value={isUnlock} onToggle={(value) => setIsUnlock(value)} style={{ paddingRight: spacing[3] }} />
            <View flexible style={{ paddingTop: spacing[1] }}>
              <TouchableOpacity onPress={() => setIsUnlock(!isUnlock)}>
                <Text preset="mediumBold" color={colorStyles.bold} text="Unlock once purchased" />
                <Text
                  preset="small"
                  color={colorStyles.placeholder}
                  text="Content will be unlocked after successful transaction"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/*  */}
          <View row style={{ paddingTop: spacing[7] }}>
            <Checkbox
              value={isAddCollection}
              onToggle={(value) => setIsAddCollection(value)}
              style={{ paddingRight: spacing[3] }}
            />
            <View flexible style={{ paddingTop: spacing[1] }}>
              <TouchableOpacity onPress={() => setIsAddCollection(!isAddCollection)}>
                <Text preset="mediumBold" color={colorStyles.bold} text="Add to collection" />
                <Text
                  preset="small"
                  color={colorStyles.placeholder}
                  text="Choose an exiting collection or create a new one"
                />
              </TouchableOpacity>
            </View>
          </View>
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
