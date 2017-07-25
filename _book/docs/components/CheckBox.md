## checkbox-headref
## Check Box

Check Box allows the user to select a number of items from a set of choices.<br />
Replacing Component: React Native [TouchableOpacity](https://facebook.github.io/react-native/docs/touchableopacity.html)

![Preview ios checkbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/checkbox.png)
![Preview android checkbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/checkbox.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
export default class CheckBoxExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;ListItem>
            &lt;CheckBox checked={true} />
            &lt;Body>
              &lt;Text>Daily Stand Up&lt;/Text>
            &lt;/Body>
          &lt;/ListItem>
          &lt;ListItem>
            &lt;CheckBox checked={false} />
            &lt;Body>
              &lt;Text>Discussion with Client&lt;/Text>
            &lt;/Body>
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
                <td>checked</td>
                <td>false</td>
                <td>boolean</td>
                <td>Represents the state value of an item from set of choices.</td>
            </tr>
            <tr>
                <td>color</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Background color of checkbox</td>
            </tr>
            <tr>
                <td>onPress</td>
                <td> - </td>
                <td> - </td>
                <td>Handler to be called when the user selects / unselects the checkbox</td>
            </tr>
        </tbody>
    </table><br/>
