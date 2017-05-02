##list-seperator-headref
#### List Separator

Seperator component is a separator usually used in list, which can be used for grouping list items. To create a seperator between list of items. Though it is used with List, You can use it anywhere in your app.

![Preview ios list-seperator-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/separatorList.png)
![Preview android list-seperator-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/separatorList.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, ListItem, Text, Separator } from 'native-base';
export default class SeperatorExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Separator bordered>
                        &lt;Text>FORWARD&lt;/Text>
                    &lt;/Separator>
                    &lt;ListItem >
                        &lt;Text>Aaron Bennet&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem>
                        &lt;Text>Claire Barclay&lt;/Text>
                    &lt;/ListItem>
                    &lt;ListItem last>
                        &lt;Text>Kelso Brittany&lt;/Text>
                    &lt;/ListItem>
                    &lt;Separator bordered>
                        &lt;Text>MIDFIELD&lt;/Text>
                    &lt;/Separator>
                    &lt;ListItem>
                        &lt;Text>Caroline Aaron&lt;/Text>
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
                <th width="50%">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>bordered</td>
                <td> - </td>
                <td> - </td>
                <td> adds border to the bottom and top of the separator </td>
            </tr>
            </tbody>
            </table><br />
