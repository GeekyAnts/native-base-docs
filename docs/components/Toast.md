## Toast

NativeBase Toast can be used to display quick warning or error messages. <br />

For `Toast` to work, you need to wrap your topmost component inside `<Root>` from native-base.

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

![Preview ios Toast](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/toast.gif)
![Preview android Toast](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/toast.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, &lcub; Component } from 'react';
import { Container, Header, Content, Toast, Button, Text, Icon } from 'native-base';
export default class ToastExample extends Component &lcub;
  constructor(props) {
    super(props);
  }
  render() &lcub;
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content padder>
          &lt;Button onPress={()=> Toast.show({
              text: 'Wrong password!',
              position: 'bottom',
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
                <td>The text content to be shown in the toast.</td>
            </tr>
            <tr>
                <td>buttonText</td>
                <td> - </td>
                <td> string </td>
                <td>The text to be displayed inside the button.</td>
            </tr>
            <tr>
                <td>position</td>
                <td> bottom </td>
                <td> top, bottom </td>
                <td>Sets position for the toast.</td>
            </tr>
            <tr>
                <td>type</td>
                <td> - </td>
                <td> danger,success,warning </td>
                <td>Sets context to the Toast.</td>
            </tr>
            <tr>
                <td>duration</td>
                <td> - </td>
                <td> integer </td>
                <td>Milliseconds after which Toast disappers</td>
            </tr>
            </tbody>
        </table><br />

