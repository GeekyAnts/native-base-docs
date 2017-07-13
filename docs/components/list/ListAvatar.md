## list-avatar-headref
#### List Avatar

List Avatars are medium to showcase an image with your list item whose dimension lays between icon and thumbnail. To create a avatar list, nest <code>&lt;Thumbnail></code> component within <code>&lt;ListItem></code> component.

![Preview ios list-avatar-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/list-avatar.png)
![Preview android list-avatar-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/list-avatar.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
export default class ListAvatarExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;List>
            &lt;ListItem avatar>
              &lt;Left>
                &lt;Thumbnail source={&#123; uri: 'Image URL' }} />
              &lt;/Left>
              &lt;Body>
                &lt;Text>Kumar Pratik&lt;/Text>
                &lt;Text note>Doing what you like will always keep you happy . .&lt;/Text>
              &lt;/Body>
              &lt;Right>
                &lt;Text note>3:43 pm&lt;/Text>
              &lt;/Right>
            &lt;/ListItem>
          &lt;/List>
        &lt;/Content>
      &lt;/Container>
    );
  }
}
</code></pre><br />
