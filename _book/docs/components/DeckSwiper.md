# Deck Swiper

Looking at data one piece at a time is more efficient when you consider people you might want to date, restaurants, streaming music, or local events you might want to check out. <br />
[NativeBase](https://nativebase.io/) Deck Swiper helps you evaluate one option at a time, instead of selecting from a set of options.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

![Preview ios Deck_Swiper](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/deckswiper.gif)
![Preview android Deck_Swiper](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/deck-swiper.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
const cards = [
    {
        text: 'Card One',
        name: 'One',
        image: require('./img/swiper-1.png'),
    },
    .  .  .
];
export default class DeckSwiperExample extends Component {
  render() {
        return (
            &lt;Container>
                &lt;View>
                    &lt;DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            &lt;Card style=&#123;{ elevation: 3 }}>
                                &lt;CardItem>
                                    &lt;Left>
                                        &lt;Thumbnail source={item.image} />
                                        &lt;Body>
                                            &lt;Text>{item.text}&lt;/Text>
                                            &lt;Text note>NativeBase&lt;/Text>
                                        &lt;/Body>
                                    &lt;/Left>
                                &lt;/CardItem>
                                &lt;CardItem cardBody>
                                    &lt;Image style=&#123;{ resizeMode: 'cover', width: null }} source={item.image} />
                                &lt;/CardItem>
                                &lt;CardItem>
                                    &lt;Icon name="heart" style=&#123;{ color: '#ED4A6A' }} />
                                    &lt;Text>{item.name}&lt;/Text>
                                &lt;/CardItem>
                            &lt;/Card>
                        }
                    />
                &lt;/View>
            &lt;/Container>
        );
    }
}</code></pre><br />

**Configuration**<br />
    <table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>onSwipeRight</td>
                <td>Function</td>
                <td>-</td>
                <td>Callback that is called when the Card is Swipe Right</td>
            </tr>
            <tr>
                <td>onSwipeLeft</td>
                <td>Function</td>
                <td>-</td>
                <td>Callback that is called when the Card is Swipe Left</td>
            </tr>
        </tbody>
    </table><br />
