import * as Font from "expo-font";

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    EpilogueLight: require("../../../assets/fonts/Epilogue-Light.ttf"),
    EpilogueRegular: require("../../../assets/fonts/Epilogue-Regular.ttf"),
    EpilogueItalic: require("../../../assets/fonts/Epilogue-Italic.ttf"),
    EpilogueMedium: require("../../../assets/fonts/Epilogue-Medium.ttf"),
    // EpilogueSemiBold: require("../../../assets/fonts/Epilogue-SemiBold.ttf"),
    EpilogueBold: require("../../../assets/fonts/Epilogue-Bold.ttf"),
    // EpilogueBlack: require("../../../assets/fonts/Epilogue-Black.ttf"),
  });
};
