## listitem-selected-headref
#### ListItem Selected

The ListItem's Selected component highlights the current listitem which is selected. Include <code>selected</code> prop with <code>ListItem</code> component. This prop comes with default style which is easily customisable.

![Preview ios listitem-selected-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/list-selected.png)
![Preview android listitem-selected-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/list-selected.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
export default class ListItemSelectedExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;List>
            &lt;ListItem selected>
              &lt;Left>
                &lt;Text>Simon Mignolet&lt;/Text>
              &lt;/Left>
              &lt;Right>
                &lt;Icon name="arrow-forward" />
              &lt;/Right>
            &lt;/ListItem>
            &lt;ListItem >
             &lt;Left>
                &lt;Text>Nathaniel Clyne&lt;/Text>
              &lt;/Left>
              &lt;Right>
                &lt;Icon name="arrow-forward" />
              &lt;/Right>
            &lt;/ListItem>
            &lt;ListItem>
              &lt;Left>
                &lt;Text>Dejan Lovren&lt;/Text>
              &lt;/Left>
              &lt;Right>
                &lt;Icon name="arrow-forward" />
              &lt;/Right>
            &lt;/ListItem>
          &lt;/List>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
