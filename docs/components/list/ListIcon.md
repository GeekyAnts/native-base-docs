## list-icon-headref
#### List Icon

Lists can have icons assigned either to the left and/or right side of each list item.
Along with icons, list item can also have badges assigned.
To have note kind of text for list item, include <code>note</code> prop with <code>Text</code> component of <code>ListItem</code>.

![Preview ios list-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/list-icon.png)
![Preview android list-icon-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/list-icon.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Icon, Left, Body, Right, Switch } from 'native-base';
export default class ListIconExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;List>
            &lt;ListItem icon>
              &lt;Left>
                &lt;Icon name="plane" />
              &lt;/Left>
              &lt;Body>
                &lt;Text>Airplane Mode&lt;/Text>
              &lt;/Body>
              &lt;Right>
                &lt;Switch value={false} />
              &lt;/Right>
            &lt;/ListItem>
            &lt;ListItem icon>
              &lt;Left>
                &lt;Icon name="wifi" />
              &lt;/Left>
              &lt;Body>
                &lt;Text>Wi-Fi&lt;/Text>
              &lt;/Body>
              &lt;Right>
                &lt;Text>GeekyAnts&lt;/Text>
                &lt;Icon name="arrow-forward" />
              &lt;/Right>
            &lt;/ListItem>
            &lt;ListItem icon>
              &lt;Left>
                &lt;Icon name="bluetooth" />
              &lt;/Left>
              &lt;Body>
                &lt;Text>Bluetooth&lt;/Text>
              &lt;/Body>
              &lt;Right>
                &lt;Text>On&lt;/Text>
                &lt;Icon name="arrow-forward" />
              &lt;/Right>
            &lt;/ListItem>
          &lt;/List>
        &lt;/Content>
      &lt;/Container>
    );
  }
}
</code></pre><br />
