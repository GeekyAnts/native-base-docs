## list-divider-headref
#### List Divider

The List Divider component creates a list separator, which can be used for grouping list items. To create a divider for any child element of the list, include <code>itemDivider</code> prop with <code>ListItem</code> component.<br />
The List Divider of NativeBase comes with default style which is easily customisable.

![Preview ios list-divider-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/ios/list-divider.png)
![Preview android list-divider-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/android/list-divider.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text } from 'native-base';
export default class ListDividerExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;List>
            &lt;ListItem itemDivider>
              &lt;Text>A&lt;/Text>
            &lt;/ListItem>                    
            &lt;ListItem >
              &lt;Text>Aaron Bennet&lt;/Text>
            &lt;/ListItem>
            &lt;ListItem>
              &lt;Text>Ali Connors&lt;/Text>
            &lt;/ListItem>
            &lt;ListItem itemDivider>
              &lt;Text>B&lt;/Text>
            &lt;/ListItem>  
            &lt;ListItem>
              &lt;Text>Bradley Horowitz&lt;/Text>
            &lt;/ListItem>
          &lt;/List>
        &lt;/Content>
      &lt;/Container>
    );
  }
}
</code></pre><br />
