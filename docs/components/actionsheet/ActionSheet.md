## actionsheet-def-headref
## ActionSheet

NativeBase ActionSheet is a wrapper around the React Native [ActionSheetIOS](http://facebook.github.io/react-native/releases/0.44/docs/actionsheetios.html) component.

For `ActionSheet` to work, you need to wrap your topmost component inside `<Root>` from native-base.

```
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
```


![Preview ios actionsheet-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/actionsheet.gif)
![Preview android actionsheet-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/actionsheet.gif)

*General Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
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
      &lt;Container>
        &lt;Header />
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
