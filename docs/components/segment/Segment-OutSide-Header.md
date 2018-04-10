## segment-outside-header-headref

![Preview ios segment-outside-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/ios/segment-outside-header.gif)
![Preview android segment-outside-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/android/segment-outside-header.gif)

*Syntax (Outside Header)*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content, Text } from 'native-base';
​export default class SegmentOutsideHeaderExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header hasTabs>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Hello&lt;/Title>
          &lt;/Body>
          &lt;Right>
            &lt;Button transparent>
              &lt;Icon name="search" />
            &lt;/Button>
          &lt;/Right>
        &lt;/Header>
        &lt;Segment>
          &lt;Button first>
            &lt;Text>Puppies&lt;/Text>
          &lt;/Button>
          &lt;Button>
            &lt;Text>Kittens&lt;/Text>
          &lt;/Button>
          &lt;Button last active>
            &lt;Text>Cubs&lt;/Text>
          &lt;/Button>
        &lt;/Segment>
        &lt;Content padder>
          &lt;Text>Awesome segment&lt;/Text>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
