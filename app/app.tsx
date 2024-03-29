/**
 * Welcome to the main entry point of the app. In this file, we'll
 * be kicking off our app.
 *
 * Most of this file is boilerplate and you shouldn't need to modify
 * it very often. But take some time to look through and understand
 * what is going on here.
 *
 * The app navigation resides in ./app/navigators, so head over there
 * if you're interested in adding screens and navigators.
 */
import "./i18n";
import "./utils/ignore-warnings";
import "react-native-gesture-handler";
import React from "react";
import { useFonts } from "expo-font";
import { SafeAreaProvider, initialWindowMetrics } from "react-native-safe-area-context";
import { initFonts } from "./theme/fonts"; // expo
import { useBackButtonHandler, AppNavigator, canExit } from "./navigators";

// This puts screens in a native ViewController or Activity. If you want fully native
// stack navigation, use `createNativeStackNavigator` in place of `createStackNavigator`:
// https://github.com/kmagiera/react-native-screens#using-native-stack-navigator
import { enableScreens } from "react-native-screens";
enableScreens();

export const NAVIGATION_PERSISTENCE_KEY = "NAVIGATION_STATE";

/**
 * This is the root component of our app.
 */
function App() {
  useBackButtonHandler(canExit);
  const [loaded] = useFonts(initFonts());

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <AppNavigator />
    </SafeAreaProvider>
  );
}

export default App;
