# Deck Swiper

Looking at data one piece at a time is more efficient when you consider people you might want to date, restaurants, streaming music, or local events you might want to check out. <br />
[NativeBase](http://nativebase.io/) Deck Swiper helps you evaluate one option at a time, instead of selecting from a set of options.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

<table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden; padding-right: 34px;">IOS</th>
          <th style="padding-right: 140px;">Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/components/deck-swiper.gif')}}" alt="" /></div></th>
          <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="{{('../assets/android/components/deck-swiper.gif')}}" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base/ui';

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
                                    &lt;Icon name="ios-heart" style=&#123;{ color: '#ED4A6A' }} />
                                    &lt;Text>{item.name}&lt;/Text>
                                &lt;/CardItem>
                            &lt;/Card>
                        }
                    />
                &lt;/View>
            &lt;/Container>
        );
    }
}</code></pre>
