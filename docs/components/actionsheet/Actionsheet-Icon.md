## actionsheet-icon-headref
#### Icon ActionSheet (Android only)

![Preview ios actionsheet-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/actionsheet.gif)

![Preview android actionsheet-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/actionsheet-icon.gif)

*Syntax for Icon ActionSheet*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Title,
  Icon,
  Right,
  Content,
  ActionSheet,
  Text
} from "native-base";
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
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              &lt;Icon name="ios-menu" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>ActionSheet&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content padder>
          &lt;Button
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
            &lt;Text>Actionsheet&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}
</code></pre><br />

*iconColor* is optional. Icons default to black.

Note: The use cases similar to RN's ActionSheetIOS.

