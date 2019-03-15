## actionsheet-def-headref
## ActionSheet

NativeBase ActionSheet is a wrapper around the React Native [ActionSheetIOS](https://facebook.github.io/react-native/docs/actionsheetios) component.

For `ActionSheet` to work, you need to wrap your topmost component inside `<Root>` from native-base.

{% codetabs name="React Native", type="js" -%}
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";
const AppNavigator = StackNavigator(
  {
    Page: { screen: Page },
  }
);
export default () =>
  <Root>
    <AppNavigator />
  </Root>;
{%- language name="Vue Native", type="vue" -%}
<template>
  <root>
    <app-navigation></app-navigation>
  </root>
</template>
<script>
import { Root } from "native-base";
import { StackNavigator } from "vue-native-router";
const AppNavigation = StackNavigator(
  {
    Page: { screen: Page },
  }
);
export default {
  components: { Root, AppNavigation }
};
</script>
{%- endcodetabs %}


![Preview ios actionsheet-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/actionsheet.gif)
![Preview android actionsheet-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/actionsheet.gif)


**Configuration**<br />
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
          <tr>
              <td>options</td>
              <td> - </td>
              <td>Array of strings</td>
              <td>List of button titles</td>
          </tr>
          <tr>
              <td>cancelButtonIndex</td>
              <td>-</td>
              <td>int</td>
              <td>index of cancel button in 'options'</td>
          </tr>
          <tr>
              <td>destructiveButtonIndex</td>
              <td>-</td>
              <td>int</td>
              <td>index of destructive button in 'options'</td>
          </tr>
          <tr>
              <td>title</td>
              <td>-</td>
              <td>string</td>
              <td>a title to show above the ActionSheet</td>
          </tr>
          <tr>
              <td>show()</td>
              <td>-</td>
              <td>method</td>
              <td>show ActionSheet</td>
          </tr>
          <tr>
              <td>hide()</td>
              <td>-</td>
              <td>method</td>
              <td>hide ActionSheet</td>
          </tr>
        </tbody>
    </table>
<br />

*General Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Button, Content, ActionSheet, Text } from "native-base";
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class ActionSheetExample extends Component {
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
      btnOptions: ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"],
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
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/actionsheet.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
