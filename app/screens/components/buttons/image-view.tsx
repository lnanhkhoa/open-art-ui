import React from 'react'
import { StyleSheet } from 'react-native'
import { Icon, Text, View, TouchableOpacity,  } from "../../../components";
import { colors, spacing } from "../../../theme";
import { createStyles } from "../../../utils/function";


interface ImageViewProps {
  onPress: () => void;
}



export function ImageView({onPress}:ImageViewProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon icon="export" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({})
