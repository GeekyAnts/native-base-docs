## list-header-headref
#### List Header

The List Header component creates a list header, which can be used for grouping list items. To create a header for any child element of the list, include itemHeader prop with ListItem component. The List Header of NativeBase comes with default style which is easily customisable.

![Preview ios list-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/list-header.png)
![Preview android list-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/list-header.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text } from 'native-base';
export default class ListHeaderExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;List>
            &lt;ListItem itemHeader first>
              &lt;Text>COMEDY&lt;/Text>
            &lt;/ListItem>
            &lt;ListItem >
              &lt;Text>Hangover&lt;/Text>
            &lt;/ListItem>
            &lt;ListItem>
              &lt;Text>Horrible Bosses&lt;/Text>
            &lt;/ListItem>
            &lt;ListItem last>
              &lt;Text>Conjuring&lt;/Text>
            &lt;/ListItem>
            &lt;ListItem itemHeader>
              &lt;Text>ACTION&lt;/Text>
            &lt;/ListItem>
            &lt;ListItem>
              &lt;Text>Terminator Genesis&lt;/Text>
            &lt;/ListItem>
          &lt;/List>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
