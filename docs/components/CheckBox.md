##checkbox-headref
# Check Box

Check Box allows the user to select a number of items from a set of choices.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;TouchableOpacity></code>](https://facebook.github.io/react-native/docs/touchableopacity.html)*

![Preview ios checkbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/checkbox.png)
![Preview android checkbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/checkbox.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text, CheckBox } from 'native-base';
export default class CheckBoxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;ListItem>
                        &lt;CheckBox checked={true} />
                        &lt;Text>Daily Stand Up&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem>
                        &lt;CheckBox checked={false} />
                        &lt;Text>Discussion with Client&lt;/Text>
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
                <td>
                    true<br />
                    false
                </td>
                <td>
                    Represents the state value of an item from set of choices.
                </td>
            </tr>
            <tr>
                <td>onPress</td>
                <td>Function</td>
                <td></td>
                <td>
                  Callback for the onPress event.
                </td>
            </tr>
        </tbody>
    </table><br/>
