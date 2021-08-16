import React, { FC } from "react";
import { View } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { observer } from "mobx-react-lite";
// import { colors, spacing, typography } from "../../theme"
import { NavigatorParamList } from "../../navigators";

export const WelcomeScreen: FC<StackScreenProps<NavigatorParamList, "welcome">> = observer(({ navigation }) => {
  // const nextScreen = () => navigation.navigate("demo")
  return <View testID="WelcomeScreen" style={{ flex: 1 }} />;
});
