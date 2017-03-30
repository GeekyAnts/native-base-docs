# Radio Button

Radio buttons let the user select any one from a set of options.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;TouchableOpacity></code>](http://facebook.github.io/react-native/docs/touchableopacity.html)*


![Preview ios Radio_Button](../docs/assets/ios/components/radio.png)
![Preview android Radio_Button](../docs/assets/android/components/radio.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Radio } from 'native-base/ui';
export default class RadioButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                        &lt;ListItem>
                            &lt;Radio selected={false} />
                            &lt;Text>Daily Stand Up&lt;/Text>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;Radio selected={true} />
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
    </table><br />
