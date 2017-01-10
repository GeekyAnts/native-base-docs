# Radio Button

Radio buttons let the user select any one from a set of options.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;TouchableOpacity></code>](http://facebook.github.io/react-native/docs/touchableopacity.html)*

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden">IOS</th>
      <th>Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><img height="470" width="270" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/radio.png" alt="" /></th>
      <th><img height="470" width="270" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/radio.png" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Radio } from 'native-base';
​
export default class RadioButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem>
                            &lt;Radio selected={false} />
                            &lt;Text>Daily Stand Up&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Radio selected={true} />
                            &lt;Text>Discussion with Client&lt;/Text>
                        &lt;/ListItem>
                    &lt;/List>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>


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
                <td>
                    true<br />
                    false
                </td>
                <td>
                    Represents the state value of an item from set of choices.
                </td>
            </tr>
        </tbody>
    </table>
