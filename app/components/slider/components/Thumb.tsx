import React, { memo } from "react";
import { View, StyleSheet, Image } from "react-native";
import { assets } from "../../../config";

const THUMB_RADIUS = 12;

const Thumb = () => {
  return <Image source={assets["thumb-slider"]} />;
};

const styles = StyleSheet.create({
  root: {
    width: THUMB_RADIUS * 2,
    height: THUMB_RADIUS * 2,
    borderRadius: THUMB_RADIUS,
    borderWidth: 2,
    borderColor: "#7f7f7f",
    backgroundColor: "#ffffff",
  },
});

export default memo(Thumb);
