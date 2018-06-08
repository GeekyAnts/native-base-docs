## listitem-noIndent-headref
#### ListItem NoIndent

![Preview ios listitem-noIndent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/list-noIndent.png)
![Preview android listitem-noIndent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/list-noIndent.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
export default class ListItemNoIndentExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;List>
            &lt;ListItem noIndent style=&#123;{ backgroundColor: "#cde1f9" }}>
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
            &lt;ListItem>
          &lt;/List>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
