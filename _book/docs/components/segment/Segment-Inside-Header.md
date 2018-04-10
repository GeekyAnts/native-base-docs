## segment-inside-header-headref
## Segment

Segments are best used as an alternative for tabs. Mainly used in iOS.

![Preview ios segment-inside-header-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.4.7/screenshots/ios/segment-inside-header.gif)
![Preview android segment-inside-header-headref](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.4.7/screenshots/android/segment-inside-header.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Segment, Content, Text } from 'native-base';
​export default class SegmentExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Segment>
              &lt;Button first>&lt;Text>Puppies&lt;/Text>&lt;/Button>
              &lt;Button last active>&lt;Text>Cubs&lt;/Text>&lt;/Button>
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

Segment takes Button as children. The active Button shoud be given an active prop (implementation is totally up to you).
Also the **first** and **last** buttons should be given props **first** and **last** respectively.<br />
**Pro tip:** It is advisable to use <code>hasSegment</code> prop with Header if you're using Segment below the header.