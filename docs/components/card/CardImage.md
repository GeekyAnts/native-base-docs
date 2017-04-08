#### Card Image

Want to have something more with Card Lists? <br />
Include image with <code>CardItem</code> within <code>Card</code> along with some text before and after image to create a card with lists. <br />
Here is your Card Image ready !

![Preview ios Card_Image](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/cardImage.png)
![Preview android Card_Image](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/cardImage.png)


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
                    &lt;Card >
                        &lt;CardItem>
                            &lt;Left>
                                &lt;Thumbnail source={logo} />
                                &lt;Body>
                                    &lt;Text>NativeBase&lt;/Text>
                                    &lt;Text note>GeekyAnts&lt;/Text>
                                &lt;/Body>
                            &lt;/Left>
                          &lt;/CardItem>
                          &lt;CardItem cardBody>
                              &lt;Image/>
                          &lt;/CardItem>
                          &lt;CardItem content>
                              &lt;Text>Wait a minute. Wait a minute, Doc. Uhhh...
                              Are you telling me that you built a time machine... out of a DeLorean?!
                              Whoa. This is heavy.&lt;/Text>
                          &lt;/CardItem>
                              &lt;Button transparent>
                                  &lt;Icon active name="thumbs-up" />
                                  &lt;Text>12 Likes&lt;/Text>
                              &lt;/Button>
                              &lt;Button transparent>
                                  &lt;Icon active name="chatbubbles" />
                                  &lt;Text>4 Comments&lt;/Text>
                              &lt;/Button>
                              &lt;Text>11h ago&lt;/Text>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
