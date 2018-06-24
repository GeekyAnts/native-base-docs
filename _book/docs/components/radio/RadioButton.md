## radio-button-headref
## Radio Button

Radio buttons let the user select any one from a set of options.<br />
Replacing Component: React Native [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html)


![Preview ios radio-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/radio.png)
![Preview android radio-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/radio.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Radio, Right } from 'native-base';
export default class RadioButtonExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;ListItem>
            &lt;Text>Daily Stand Up&lt;/Text>
            &lt;Right>
              &lt;Radio selected={false} />
            &lt;/Right>
          &lt;/ListItem>
          &lt;ListItem>
            &lt;Text>Discussion with Client&lt;/Text>
            &lt;Right>
              &lt;Radio selected={true} />
            &lt;/Right>
          &lt;/ListItem>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />


**Configuration**

<table class = "table table-bordered">
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
                <td>selected</td>
                <td>false</td>
                <td>boolean</td>
                <td>Represents the state value of an item from set of choices.</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>color</td>
                <td>-</td>
                <td>user-defined color</td>
                <td>Inactive radio color</td>
            </tr>
        </tbody>
        <tbody>
            <tr>
                <td>selectedColor</td>
                <td>-</td>
                <td>user-defined color</td>
                <td>Active radio color</td>
            </tr>
        </tbody>
    </table><br />
