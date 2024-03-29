/**
 * The app navigator (formerly "AppNavigator" and "MainNavigator") is used for the primary
 * navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow which the user will use once logged in.
 */
import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { navigationRef } from "./navigation-utilities";
import {
  HomeScreen,
  ItemsDetailScreen,
  DiscoverCreatorScreen,
  TextFieldScreen,
  UserProfileScreen,
  AccountScreen,
  EditProfileScreen,
  AboutScreen,
  UploadArtworkScreen,
  SearchScreen,
  SearchResultScreen,
  ProfileCreatorScreen,
} from "../screens";

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * If no params are allowed, pass through `undefined`. Generally speaking, we
 * recommend using your MobX-State-Tree store(s) to keep application state
 * rather than passing state through navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type NavigatorParamList = {
  welcome: undefined;
};

const Drawer = createDrawerNavigator();

const DrawerStack = () => {
  return (
    <Drawer.Navigator
      defaultStatus="closed"
      screenOptions={{
        header: () => null,
        drawerPosition: "right",
        swipeEnabled: true,
      }}
    >
      <Drawer.Screen name="HomeScreen" component={HomeScreen} />
      <Drawer.Screen name="UploadArtworkScreen" component={UploadArtworkScreen} />
      <Drawer.Screen name="AboutScreen" component={AboutScreen} />
      <Drawer.Screen name="ItemsDetailScreen" component={ItemsDetailScreen} />
      <Drawer.Screen name="DiscoverCreatorScreen" component={DiscoverCreatorScreen} />
      <Drawer.Screen name="TextFieldScreen" component={TextFieldScreen} />
      <Drawer.Screen name="UserProfileScreen" component={UserProfileScreen} />
      <Drawer.Screen name="AccountScreen" component={AccountScreen} />
      <Drawer.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Drawer.Screen name="SearchScreen" component={SearchScreen} />
      <Drawer.Screen name="SearchResultScreen" component={SearchResultScreen} />
      <Drawer.Screen name="ProfileCreatorScreen" component={ProfileCreatorScreen} />
    </Drawer.Navigator>
  );
};

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}
export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer ref={navigationRef} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme} {...props}>
      <DrawerStack />
    </NavigationContainer>
  );
};

AppNavigator.displayName = "AppNavigator";

/**
 * A list of routes from which we're allowed to leave the app when
 * the user presses the back button on Android.
 *
 * Anything not on this list will be a standard `back` action in
 * react-navigation.
 *
 * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
 */
const exitRoutes = ["HomeScreen"];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
