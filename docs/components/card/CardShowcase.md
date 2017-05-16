##card-showcase-headref
#### Card Showcase

Card Showcase is further customization of Card Image. It uses several different items.
* Begins with the Card List component, which is similar to out List Avatar.
* Make use of Left, Body and Right components to align the content of your Card header.
* To mixup Image with other NativeBase components in a single CardItem, include the content within Body component.

![Preview ios card-showcase-headref](https://docs.nativebase.io/docs/assets/ios/components/cardShowcase.png)
![Preview android card-showcase-headref](https://docs.nativebase.io/docs/assets/android/components/cardShowcase.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
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
