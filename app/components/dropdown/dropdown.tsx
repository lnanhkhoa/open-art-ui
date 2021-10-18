import React from "react";
import { StyleSheet, Text, View } from "react-native";
import RNDropDownPicker, { ItemType } from "react-native-dropdown-picker";

export function DropdownPicker({ items = [] }: DropdownPickerProps) {
  return (
    <RNDropDownPicker
      items={CREATORS}
      value={dropdownValue}
      setValue={setDropdownValue}
      open={isOpenDropdown}
      setOpen={setIsOpenDropdown}
      ArrowUpIconComponent={() => <Icon icon="up" color={colorStyles.label} />}
      ArrowDownIconComponent={() => <Icon icon="down" color={colorStyles.label} />}
      textStyle={{ ...TextPresets.medium, color: colorStyles.label }}
      dropDownContainerStyle={{ borderColor: colors.transparent, backgroundColor: colors.bgInput }}
      style={{
        backgroundColor: colorStyles.input,
        borderColor: colors.transparent,
      }}
    />
  );
}

const styles = StyleSheet.create({});
