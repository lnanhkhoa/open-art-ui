import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react-lite";
import { View, Screen, Text, Tag, Avatar, Checkbox, Button, TextField } from "../../components";
// import { useNavigation } from "@react-navigation/native";
import { colors, spacing } from "../../theme";
import { assets, constants } from "../../config";

export const ShowCaseScreen = observer(function ShowCaseScreen() {
  return (
    <View testID="ShowCaseScreen" style={styles.full}>
      {/* <GradientBackground colors={["#422443", "#281b34"]} /> */}
      <Screen style={styles.container} preset="scroll" backgroundColor={colors.transparent}>
        {/* <Header headerText="Showcase" leftIcon="back" style={styles.header} titleStyle={styles.headerTitle} /> */}
        <Text preset="largeBold" text="Avatar" />
        <View classNames={["row"]} style={styles.box}>
          <Avatar size="normal" text="H" containerStyle={styles.avatar} />
          <Avatar size="normal" text="H" containerStyle={styles.avatar} active />
          <Avatar hasSource source={assets.avatar} size="normal" containerStyle={styles.avatar} />
          <Avatar hasSource source={assets.avatar} size="normal" containerStyle={styles.avatar} active />
        </View>
        <View style={styles.box}>
          <View classNames={["row", "justifySpaceBetween"]}>
            <Avatar
              hasSource
              source={assets.avatar}
              size="normal"
              containerStyle={styles.avatar}
              active
              title="First Name"
            />
            <Avatar
              hasSource
              source={assets.avatar}
              size="normal"
              containerStyle={styles.avatar}
              active
              preset="row"
              title={`First & Last Name`}
            />
          </View>
          <Avatar
            hasSource
            source={assets.avatar}
            size="normal"
            containerStyle={styles.avatar}
            active
            preset="row"
            title="First Name"
            statusText="Status"
          />
        </View>
        <Text preset="largeBold" text="Tag" />
        <View classNames={["row"]} style={styles.box}>
          <Tag status="success" containerStyle={styles.tag} />
          <Tag status="alert" containerStyle={styles.tag} />
          <Tag status="warning" containerStyle={styles.tag} />
          <Tag status="info" containerStyle={styles.tag} />
        </View>
        <Text preset="largeBold" text="CheckBox" />
        <View style={styles.box}>
          <View classNames={["row"]}>
            <Checkbox value={false} style={styles.checkbox} />
            <Checkbox value={true} style={styles.checkbox} />
          </View>
          <View classNames={["row"]}>
            <Checkbox value={false} style={styles.checkbox} onToggle={() => null} />
            <Checkbox value={true} style={styles.checkbox} onToggle={() => null} />
          </View>
          <View classNames={["row"]}>
            <Checkbox isActive value={false} style={styles.checkbox} onToggle={() => null} />
            <Checkbox isActive value={true} style={styles.checkbox} onToggle={() => null} />
          </View>
        </View>
        <Text preset="largeBold" text="TextField" />
        <View style={styles.box}>
          <TextField
            label=""
            // notice="Enter your name"
            disabled
            placeholder="abc"
            showCloseIcon
          />
        </View>
      </Screen>
    </View>
  );
});

const styles = StyleSheet.create({
  full: { flex: 1 },
  container: {
    flex: 1,
    backgroundColor: colors.transparent,
    paddingHorizontal: spacing[4],
  },
  header: {
    paddingTop: spacing[3],
    paddingBottom: spacing[5] - 1,
    paddingHorizontal: 0,
  },
  headerTitle: {
    fontSize: 24,
    textAlign: "center",
    letterSpacing: 1.5,
    color: colors.text,
  },
  box: {
    borderRadius: 6,
    borderWidth: 1,
    padding: 8,
    marginVertical: 4,
    borderColor: colors.line,
    alignItems: "flex-start",
    // backgroundColor: colors.black,
  },
  avatar: { margin: 4 },
  tag: { margin: 4 },
  checkbox: { margin: 4 },
  button: { margin: 4 },
});
