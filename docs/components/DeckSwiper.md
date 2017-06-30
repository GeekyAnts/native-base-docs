##deckswiper-headref
## Deck Swiper

Looking at data one piece at a time is more efficient when you consider people you might want to date, restaurants, streaming music, or local events you might want to check out. <br />
[NativeBase](https://nativebase.io/) Deck Swiper helps you evaluate one option at a time, instead of selecting from a set of options.<br />
Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html)

![Preview ios deckswiper-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/deckswiper.gif)
![Preview android deckswiper-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/deck-swiper.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
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
                  &lt;Image style=&#123;{ height: 300, flex: 1 }} source={item.image} />
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
                <td>dataSource</td>
                <td> - </td>
                <td> User defined object </td>
                <td>Chunk of data(object)</td>
            </tr>
            <tr>
                <td>renderEmpty</td>
                <td>Function</td>
                <td> - </td>
                <td>Callback that is called when all the cards are swiped and dataSource is empty and returns a component.</td>
            </tr>
            <tr>
                <td>renderItem</td>
                <td>Function</td>
                <td> - </td>
                <td>Callback which takes a chunk of data and returns a component.</td>
            </tr>
            <tr>
                <td>renderTop</td>
                <td>Function</td>
                <td> - </td>
                <td>Callback which takes a chunk of data and returns top layer component.</td>
            </tr>
            <tr>
                <td>renderBottom</td>
                <td>Function</td>
                <td> - </td>
                <td>Callback which takes a chunk of data and returns bottom layer component.</td>
            </tr>
            <tr>
                <td>looping</td>
                <td>true</td>
                <td> boolean </td>
                <td>Loop through the data</td>
            </tr>
            <tr>
                <td>onSwipeRight</td>
                <td>Function</td>
                <td> - </td>
                <td>Callback that is called when the Card is swiped Right</td>
            </tr>
            <tr>
                <td>onSwipeLeft</td>
                <td>Function</td>
                <td> - </td>
                <td>Callback that is called when the Card is swiped Left</td>
            </tr>
        </tbody>
    </table><br />

## adv-deckswiper-def-headref
#### Advanced Deck Swiper

Swipe Deck with callback function.

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
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
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              &lt;View style=&#123;{ alignSelf: "center" }}>
                &lt;Text>Over&lt;/Text>
              &lt;/View>
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
                  &lt;Image style=&#123;{ height: 300, flex: 1 }} source={item.image} />
                &lt;/CardItem>
                &lt;CardItem>
                  &lt;Icon name="heart" style=&#123;{ color: '#ED4A6A' }} />
                  &lt;Text>{item.name}&lt;/Text>
                &lt;/CardItem>
              &lt;/Card>
            }
          />
        &lt;/View>
        &lt;View style=&#123;{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>
          &lt;Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            &lt;Icon name="arrow-back" />
            &lt;Text>Swipe Left&lt;/Text>
          &lt;/Button>
          &lt;Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            &lt;Icon name="arrow-forward" />
            &lt;Text>Swipe Right&lt;/Text>
          &lt;/Button>
        &lt;/View>
      &lt;/Container>
    );
  }
}</code></pre><br />