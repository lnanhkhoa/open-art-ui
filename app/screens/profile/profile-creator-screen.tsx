import React from "react";
import { observer } from "mobx-react-lite";
import { StyleSheet, Image, useColorScheme } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Text, HeaderLogo, View, Icon, ListItem, Button, SafeAreaView, TouchableOpacity } from "../../components";
import { Footer } from "../components";
import { useNavigation } from "@react-navigation/native";
import { colors, spacing } from "../../theme";
import { assets, constants } from "../../config";
import { createStyles, createColorStyles } from "../../utils/function";

const { SCREEN_WIDTH, AVT_SIZE } = constants;

export const ProfileCreatorScreen = observer(function ProfileCreatorScreen(props) {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark";
  const navigation = useNavigation();

  //
  const onPressCopy = () => null;
  //
  const styles = createStyles(lightStyles, darkStyles, isDarkMode);
  const colorStyles = createColorStyles(isDarkMode);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderLogo rightIcon="search" />
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: spacing[7] }}>
        <View style={{ width: "100%", minHeight: 160 }}>
          <Image source={assets.header} style={{ width: SCREEN_WIDTH, minHeight: 160 }} />
        </View>
        <View
          classNames={["alignCenter"]}
          style={{
            paddingHorizontal: spacing[2],
            marginTop: -AVT_SIZE.LARGER * 0.5,
            marginBottom: spacing[2],
          }}
        >
          <Image source={assets.avatar9} style={styles.avtImage} />
          <Text preset="mediumBold" text="Gift Habeshaw" color={colorStyles.black} style={{ padding: spacing[1] }} />
          <TouchableOpacity onPress={onPressCopy}>
            <View classNames={["row", "alignCenter"]}>
              <Text preset="medium" text="52fs5ge5g45sov45a" />
              <Icon icon="copy" color={colorStyles.placeholder} size={14} style={{ paddingHorizontal: spacing[3] }} />
            </View>
          </TouchableOpacity>
        </View>
        {/* basic info */}
        <View style={styles.basicInfo}>
          <View style={{ position: "absolute", right: 12, top: 12 }}>
            <Icon
              icon="edit"
              size={24}
              color={colorStyles.label}
              containerStyle={styles.btnEdit}
              onPress={() => null}
            />
          </View>
          <View classNames={["row", "alignCenter", "justifySpaceBetween"]}>
            <View classNames={["row", "alignCenter"]}>
              <Icon icon="mail" size={20} containerStyle={{ padding: spacing[2] }} />
              <Text preset="small" text="Contact@OpenArt.design" />
            </View>
          </View>
          <View classNames={["row", "alignCenter"]}>
            <Icon icon="card" color={colorStyles.label} size={20} containerStyle={{ padding: spacing[2] }} />
            <TouchableOpacity onPress={() => null}>
              <Text
                preset="small"
                color={colorStyles.label}
                text="Linked"
                style={{ textDecorationLine: "underline" }}
              />
            </TouchableOpacity>
          </View>
          <View classNames={["row", "alignCenter"]}>
            <Icon icon="call" color={colorStyles.label} size={20} containerStyle={{ padding: spacing[2] }} />
            <Text preset="small" color={colorStyles.label} text="(+60) 264 859 62" />
          </View>
          <View classNames={["row", "alignCenter"]}>
            <Icon icon="link" color={colorStyles.label} size={20} containerStyle={{ padding: spacing[2] }} />
            <Text preset="small" color={colorStyles.label} text="OpenArt.design" />
          </View>
          <View
            classNames={["row", "justifyCenter"]}
            style={{ paddingTop: spacing[6], paddingBottom: spacing[3], justifyContent: "center" }}
          >
            <TouchableOpacity onPress={() => null}>
              <View classNames={["row"]} style={styles.btnFollow}>
                <Icon icon="heart" size={24} color={colorStyles.label} />
                <Text preset="mediumBold" text="Follow" style={{ paddingHorizontal: spacing[2] }} />
              </View>
            </TouchableOpacity>
            <Icon
              icon="export"
              color={colorStyles.body}
              containerStyle={styles.btnAction}
              size={20}
              onPress={() => null}
            />
            <Icon
              icon="more"
              color={colorStyles.body}
              containerStyle={styles.btnAction}
              size={20}
              onPress={() => null}
            />
          </View>
          <Text preset="small" text="Member since  2021" color={colorStyles.label} style={{ alignSelf: "center" }} />
        </View>

        <View style={styles.body}>
          {/* List Item */}
          <Text preset="headerSmallBold" text="My Items" style={{ paddingHorizontal: spacing[4] }} />
          <View style={styles.listitems}>
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
                <Text color={colorStyles.label} style={{ marginVertical: spacing[4] }}>
                  <Text preset={"large"} text="Sold For" />
                  <Text text=" " />
                  <Text preset="headerSmallBold" text="2.00 ETH" />
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Button
            preset="secondary"
            text="Load more"
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
  btnAction: {
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
  headerTitle: {
    alignItems: "center",
    paddingVertical: spacing[4],
  },
  avtImage: {
    height: AVT_SIZE.LARGER,
    width: AVT_SIZE.LARGER,
    borderRadius: 99,
    marginBottom: spacing[2],
  },
  avatar: {
    width: AVT_SIZE.SMALL,
    height: AVT_SIZE.SMALL,
    borderRadius: 99,
  },

  basicInfo: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing[4],
    paddingVertical: spacing[4],
    margin: spacing[4],
    borderRadius: 32,
  },

  body: {
    paddingTop: spacing[6],
  },
  listitems: {
    paddingHorizontal: spacing[4],
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
  btnAction: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: colors.placeholder,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    margin: 6,
  },
  btnEdit: {
    width: 48,
    height: 48,
    borderRadius: 99,
    backgroundColor: colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  btnFollow: {
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    borderColor: colors.placeholder,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    marginHorizontal: spacing[2],
  },
});
