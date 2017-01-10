#### Card Image

Want to have something more with Card Lists? <br />
Include image with <code>CardItem</code> within <code>Card</code> along with some text before and after image to create a card with lists. <br />
Here is your Card Image ready !

<br />
    <table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/card-image.png" alt="" /></th>
          <th><img height="470" width="270" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/card-image.png" alt="" /></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
​
export default class CardImageExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card style=&#123;{ flex: 0 }}>
                        &lt;CardItem>
                            &lt;Thumbnail source={require('./img/NB-logo.png')} />
                            &lt;Text>NativeBase&lt;/Text>
                            &lt;Text note>GeekyAnts&lt;/Text>
                        &lt;/CardItem>

                        &lt;CardItem>
                            &lt;Image style=&#123;{ resizeMode: 'cover', width: null }} source={require('./img/card-image.png')} />
                        &lt;/CardItem>

                        &lt;CardItem>
                            &lt;Button transparent>
                                &lt;Icon name="logo-github" />
                                1,926
                            &lt;/Button>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
