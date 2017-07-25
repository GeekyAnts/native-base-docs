##list-seperator-headref
#### List Separator

Separator component is a separator usually used in list, which can be used for grouping list items. Though it is used with List, you can use it anywhere in your app.<br />

Replacing Component: React Native [View](http://facebook.github.io/react-native/docs/view.html)

![Preview ios list-seperator-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/list-separator.png)
![Preview android list-seperator-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/list-separator.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Separator } from 'native-base';
export default class ListSeparatorExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
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
                <td> adds border to top and bottom of the separator </td>
            </tr>
            </tbody>
            </table><br />
