## segment-icon-headref
## Segment Icon

![Preview ios segment-icon-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.0/screenshots/ios/segment-icon.png)
![Preview android segment-icon-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.5.0/screenshots/android/segment-icon.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
​export default class SegmentIconExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header hasSegment>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Segment>
              &lt;Button first>&lt;Icon name="arrow-back" />&lt;/Button>
              &lt;Button last active>&lt;Icon name="arrow-forward" />&lt;/Button>
            &lt;/Segment>
          &lt;/Body>
          &lt;Right>
            &lt;Button transparent>
              &lt;Icon name="search" />
            &lt;/Button>
          &lt;/Right>
        &lt;/Header>
        &lt;Content padder>
          &lt;Text>Awesome segment&lt;/Text>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />