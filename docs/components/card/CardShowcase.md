##card-showcase-headref
#### Card Showcase

Card Showcase is further customization of Card Image. It uses several different items.
* Begins with the Card List component, which is similar to our List Avatar.
* Make use of Left, Body and Right components to align the content of your Card header.
* To mixup Image with other NativeBase components in a single CardItem, include the content within Body component.

![Preview ios card-showcase-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/card-showcase.png)
![Preview android card-showcase-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/card-showcase.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Card style=&#123;{flex: 0}}>
            &lt;CardItem>
              &lt;Left>
                &lt;Thumbnail source=&#123;{uri: 'Image URL'}} />
                &lt;Body>
                  &lt;Text>NativeBase&lt;/Text>
                  &lt;Text note>April 15, 2016&lt;/Text>
                &lt;/Body>
              &lt;/Left>
            &lt;/CardItem>
            &lt;CardItem>
              &lt;Body>
                &lt;Image source=&#123;{uri: 'Image URL'}} style=&#123;{height: 200, width: 200, flex: 1}}/>
                &lt;Text>
                  //Your text here
                &lt;/Text>
              &lt;/Body>
            &lt;/CardItem>
            &lt;CardItem>
              &lt;Left>
                &lt;Button transparent textStyle=&#123;{color: '#87838B'}}>
                  &lt;Icon name="logo-github" />
                  &lt;Text>1,926 stars&lt;/Text>
                &lt;/Button>
              &lt;/Left>
            &lt;/CardItem>
          &lt;/Card>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
