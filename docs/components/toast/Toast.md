## toast-def-headref
## Toast

NativeBase Toast can be used to display quick warning or error messages.
For `Toast` to work, you need to wrap your topmost component inside `<Root>` from native-base.

Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html).

![Preview ios toast-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/ios/toast-basic.gif)
![Preview android toast-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/android/toast-basic.gif)

  **Contents:**
* [Toast with duration](Components.md#toast-with-duration-headref)
* [Toast position](Components.md#toast-position-headref)
* [Toast type](Components.md#toast-type-headref)
* [Toast text style](Components.md#toast-text-style-headref)
* [Toast button style](Components.md#toast-button-style-headref)

*Syntax*

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

<pre class="line-numbers"><code class="language-jsx">import React, &lcub; Component } from 'react';
import { Container, Header, Content, Toast, Button, Text } from 'native-base';
export default class ToastExample extends Component &lcub;
  constructor(props) {
    super(props);
    this.state = &lcub;
      showToast: false
    }
  }
  render() &lcub;
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content padder>
          &lt;Button onPress={()=> Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay'
            })}>
            &lt;Text>Toast&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />

**Configuration**
<table class="table table-bordered">
    <thead>
        <tr>
            <th>Key</th>
            <th>Value</th>
            <th>Option</th>
            <th width="50%">Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>text</td>
            <td> - </td>
            <td> string </td>
            <td>Text content to be shown in the toast</td>
        </tr>
        <tr>
            <td>textStyle</td>
            <td> - </td>
            <td> - </td>
            <td>Style text content for toast</td>
        </tr>
        <tr>
            <td>buttonText</td>
            <td> - </td>
            <td> string, blank </td>
            <td>Text to be displayed inside the button</td>
        </tr>
        <tr>
            <td>buttonTextStyle</td>
            <td> - </td>
            <td> - </td>
            <td>Style button text for toast</td>
        </tr>
        <tr>
            <td>buttonStyle</td>
            <td> - </td>
            <td> - </td>
            <td>Style button for toast</td>
        </tr>
        <tr>
            <td>position</td>
            <td> bottom </td>
            <td> top, bottom </td>
            <td>Sets position for the toast</td>
        </tr>
        <tr>
            <td>type</td>
            <td> - </td>
            <td>danger, success, warning</td>
            <td>Sets context to the Toast</td>
        </tr>
        <tr>
            <td>duration</td>
            <td> 1500 </td>
            <td>user defined (integer)</td>
            <td>Milliseconds after which Toast disappers</td>
        </tr>
        <tr>
            <td>onClose</td>
            <td> - </td>
            <td> function </td>
            <td>Called just before the toast hides</td>
        </tr>
    </tbody>
</table><br />

