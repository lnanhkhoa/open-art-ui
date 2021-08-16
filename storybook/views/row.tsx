import * as React from "react"
import { View, StyleSheet } from "react-native"

export interface UseCaseProps {
  children: React.ReactNode
}

export function Row(props: UseCaseProps) {
  return <View style={styles.container}>{props.children}</View>
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 4,
  },
})
