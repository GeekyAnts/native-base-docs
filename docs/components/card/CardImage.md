#### Card Image

Want to have something more with Card Lists? <br />
Include image with <code>CardItem</code> within <code>Card</code> along with some text before and after image to create a card with lists. <br />
Here is your Card Image ready !

<br />
    <table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden; padding-right: 34px;">IOS</th>
          <th style="padding-right: 140px;">Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/card-image.png" alt="" /></div></th>
          <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/card-image.png" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
​
export default class CardImageExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card style=&#123;{ flex: 0 }}>
                        &lt;CardItem>
                            &lt;Left>
                                &lt;Thumbnail source={require('./img/NB-logo.png')} />
                                  &lt;Body>
                                    &lt;Text>NativeBase&lt;/Text>
                                    &lt;Text note>GeekyAnts&lt;/Text>
                                  &lt;/Body>
                            &lt;/Left>
                        &lt;/CardItem>

                        &lt;CardItem cardBody>
                            &lt;Image style=&#123;{ resizeMode: 'cover', width: null,height: 220 }} source={require('./img/card-image.png')} />
                        &lt;/CardItem>

                        &lt;CardItem>
                            &lt;Button transparent>
                                &lt;Icon name="logo-github" />
                                &lt;Text> 1,926 &lt;/Text>
                            &lt;/Button>
                            &lt;Button transparent>
                                &lt;Icon name="ios-git-network" />
                                &lt;Text> 132 &lt;/Text>
                            &lt;/Button>
                            &lt;Button transparent>
                                &lt;Icon name="logo-twitter" />
                                &lt;Text> 197 &lt;/Text>
                            &lt;/Button>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
