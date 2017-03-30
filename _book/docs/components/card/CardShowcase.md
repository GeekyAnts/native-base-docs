#### Card Showcase

Card Showcase is further customization of Card Image. It uses several different items.
* Begins with the Card List component, which is similar to out List Avatar.
* <code>cardBody</code> prop for images and text.

![Preview ios Card_Showcase](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/card-showcase.png)
![Preview android Card_Showcase](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/card-showcase.png)

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
}</code></pre><br />
