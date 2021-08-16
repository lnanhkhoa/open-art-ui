import * as React from "react";
import { storiesOf } from "@storybook/react-native";
import { View, StyleSheet } from "react-native";
import { StoryScreen, Story, UseCase } from "../../../storybook/views";
import { Text } from "../text/text";
import { Icon } from "./icon";
import { icons } from "./icons/index";

declare let module;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  wrap: {
    padding: 10,
    alignItems: "center",
  },
});

storiesOf("Icon", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Names", () => (
    <Story>
      <UseCase text="Icons">
        <View style={styles.row}>
          {Object.keys(icons).map((name) => {
            return (
              <View key={name} style={styles.row}>
                <View style={styles.wrap}>
                  <Icon icon={name} />
                  <Text text={name} color="black" />
                </View>
              </View>
            );
          })}
        </View>
      </UseCase>
    </Story>
  ));
