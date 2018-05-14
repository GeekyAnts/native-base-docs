## card-image-headref
#### Card Image

Want to have something more with Card Lists? <br />
Include image with <code>CardItem</code> within <code>Card</code> along with some text before and after image to create a card with lists. <br />
Here is your Card Image ready !

![Preview ios card-image-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/ios/card-image.png)
![Preview android card-image-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.8/screenshots/android/card-image.png)


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
export default class CardImageExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Card>
            &lt;CardItem>
              &lt;Left>
                &lt;Thumbnail source=&#123;{uri: 'Image URL'}} />
                &lt;Body>
                  &lt;Text>NativeBase&lt;/Text>
                  &lt;Text note>GeekyAnts&lt;/Text>
                &lt;/Body>
              &lt;/Left>
            &lt;/CardItem>
            &lt;CardItem cardBody>
              &lt;Image source=&#123;{uri: 'Image URL'}} style=&#123;{height: 200, width: null, flex: 1}}/>
            &lt;/CardItem>
            &lt;CardItem>
              &lt;Left>
                &lt;Button transparent>
                  &lt;Icon active name="thumbs-up" />
                  &lt;Text>12 Likes&lt;/Text>
                &lt;/Button>
              &lt;/Left>
              &lt;Body>
                &lt;Button transparent>
                  &lt;Icon active name="chatbubbles" />
                  &lt;Text>4 Comments&lt;/Text>
                &lt;/Button>
              &lt;/Body>
              &lt;Right>
                &lt;Text>11h ago&lt;/Text>
              &lt;/Right>
            &lt;/CardItem>
          &lt;/Card>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
