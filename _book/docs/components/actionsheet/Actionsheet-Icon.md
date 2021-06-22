## actionsheet-icon-headref
#### Icon ActionSheet (Android only)

![Preview ios actionsheet-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/actionsheet.gif)

![Preview android actionsheet-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/actionsheet-icon.gif)

*Syntax for Icon ActionSheet*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Button, Content, ActionSheet, Text } from "native-base";
var BUTTONS = [
  { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
  { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
  { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
  { text: "Delete", icon: "trash", iconColor: "#fa213b" },
  { text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class ActionSheetIconExample extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Testing ActionSheet"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header/>
    <nb-content padder>
      <nb-button :onPress="handleBtnPress">
        <nb-text>Actionsheet</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
<script>
import { ActionSheet } from "native-base";
export default {
  data: function() {
    return {
      btnOptions: [
        { text: "Option 0", icon: "american-football", iconColor: "#2c8ef4" },
        { text: "Option 1", icon: "analytics", iconColor: "#f42ced" },
        { text: "Option 2", icon: "aperture", iconColor: "#ea943b" },
        { text: "Delete", icon: "trash", iconColor: "#fa213b" },
        { text: "Cancel", icon: "close", iconColor: "#25de5b" }
      ],
      optionCancelIndex: 4,
      optionDestructiveIndex: 3,
      clicked: 0
    };
  },
  methods: {
    handleBtnPress: function() {
      ActionSheet.show(
        {
          options: this.btnOptions,
          cancelButtonIndex: this.optionCancelIndex,
          destructiveButtonIndex: this.optionDestructiveIndex,
          title: "Select An Option"
        },
        buttonIndex => {
          this.clicked = this.btnOptions[buttonIndex];
        }
      );
    }
  }
};
</script>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/actionsheet.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />

*iconColor* is optional. Icons default to black.

**Note:** The use cases similar to RN's ActionSheetIOS.

