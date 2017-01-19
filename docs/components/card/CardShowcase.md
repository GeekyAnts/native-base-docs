#### Card Showcase

Card Showcase is further customization of Card Image. It uses several different items.
* Begins with the Card List component, which is similar to out List Avatar.
* <code>cardBody</code> prop for images and text.

<br />
    <table>
      <thead>
        <tr style="border-style: hidden;">
          <td style="border-style: hidden;padding-left: 50px"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
          <td style="padding-left: 50px"><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/card-showcase.png" alt="" /></div></th>
          <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/card-showcase.png" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base/ui';
​
export default class CardShowcaseExample extends Component {
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
                                    &lt;Text note>April 15, 2016&lt;/Text>
                                &lt;/Body>
                            &lt;/Left>
                        &lt;/CardItem>

                        &lt;CardItem>
                            &lt;Body>
                                &lt;Image style=&#123;{ resizeMode: 'cover' }} source={require('./img/card-showcase.png')} />
                                &lt;Text>
                                    //Your text here
                                &lt;/Text>
                                &lt;Button transparent textStyle=&#123;{color: '#87838B'}}>
                                    &lt;Icon name="logo-github" />
                                    &lt;Text>1,926 stars&lt;/Text>
                                &lt;/Button>
                            &lt;/Body>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
