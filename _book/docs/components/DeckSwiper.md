## deckswiper-def-headref
## Deck Swiper

Looking at data one piece at a time is more efficient when you consider people you might want to date, restaurants, streaming music, or local events you might want to check out. <br />
[NativeBase](https://nativebase.io/) Deck Swiper helps you evaluate one option at a time, instead of selecting from a set of options.<br />
Replacing Component: React Native [View](https://facebook.github.io/react-native/docs/view.html)

![Preview ios deckswiper-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/deckswiper.gif)
![Preview android deckswiper-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/deckswiper.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
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
      <Container>
        <Header />
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              {% raw %}<Card style={{ elevation: 3 }}>{% endraw %}
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  {% raw %}<Image style={{ height: 300, flex: 1 }} source={item.image} />{% endraw %}
                </CardItem>
                <CardItem>
                  {% raw %}<Icon name="heart" style={{ color: '#ED4A6A' }} />{% endraw %}
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <view :style="{flex: 1, padding: 12}">
      <nb-deck-swiper
          :dataSource="cardItemsArr"
          :looping="isLoopingRequired"
          :renderItem="handleCardRendering"
      />
    </view>
  </nb-container>
</template>
<script>
import React from "react";
import { View, Text } from "react-native";
import cardOne from "swiper-1.png";
import CardComponent from "../common/card";
export default {
  data: function() {
    return {
      cardItemsArr: [
        {
          text: "Card One",
          name: "One",
          image: cardOne
        },
        . . .
      ],
      isLoopingRequired: false
    };
  },
  methods: {
    handleCardRendering: function(item) {
      return <CardComponent item={item} />;
    }
  }
};
</script>

// Card Component
<template>
  <nb-card :style="{ elevation: 3 }">
    <nb-cardItem>
      <nb-left>
        <nb-thumbnail :source="item.image" />
        <nb-body>
          <nb-text>{{item.text}}</nb-text>
          <nb-text note>NativeBase</nb-text>
        </nb-body>
      </nb-left>
    </nb-cardItem>
    <nb-cardItem cardBody>
      <image
        :style="{
          resizeMode: 'cover',
          width: null,
          flex: 1,
          height: 300
        }"
        :source="item.image"
      />
    </nb-cardItem>
    <nb-cardItem>
      <nb-icon-nb name="ios-heart" :style="{ color: '#ED4A6A' }" />
      <nb-text>{{item.name}}</nb-text>
    </nb-cardItem>
  </nb-card>
</template>
<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>
{%- endcodetabs %}
<br />

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

## deckswiper-adv-headref
#### Advanced Deck Swiper

Swipe Deck with callback function.

![Preview ios deckswiper-adv-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/deckswiper-advanced.gif)
![Preview android deckswiper-adv-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/deckswiper-advanced.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';
const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: require('./img/swiper-1.png'),
  },
  .  .  .
];
export default class DeckSwiperAdvancedExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <View>
          <DeckSwiper
            ref={(c) => this._deckSwiper = c}
            dataSource={cards}
            renderEmpty={() =>
              {% raw %}<View style={{ alignSelf: "center" }}>{% endraw %}
                <Text>Over</Text>
              </View>
            }
            renderItem={item =>
              {% raw %}<Card style={{ elevation: 3 }}>{% endraw %}
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  {% raw %}<Image style={{ height: 300, flex: 1 }} source={item.image} />{% endraw %}
                </CardItem>
                <CardItem>
                  {% raw %}<Icon name="heart" style={{ color: '#ED4A6A' }} />{% endraw %}
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
        {% raw %}<View style={{ flexDirection: "row", flex: 1, position: "absolute", bottom: 50, left: 0, right: 0, justifyContent: 'space-between', padding: 15 }}>{% endraw %}
          <Button iconLeft onPress={() => this._deckSwiper._root.swipeLeft()}>
            <Icon name="arrow-back" />
            <Text>Swipe Left</Text>
          </Button>
          <Button iconRight onPress={() => this._deckSwiper._root.swipeRight()}>
            <Icon name="arrow-forward" />
            <Text>Swipe Right</Text>
          </Button>
        </View>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <view :style="{flex: 1, padding: 12}">
      <nb-deck-swiper
          ref="_deckSwiper"
          :dataSource="cardItemsArr"
          :looping="isLoopingRequired"
          :renderEmpty="handleCardEmpty"
          :renderItem="handleCardRendering"
      />
    </view>
    <view :style="stylesObj.bottomBtnContainer">
      <nb-button iconLeft :onPress="handleDeckSwiperBackBtn">
        <nb-icon name="arrow-back" />
        <nb-text>Swipe Left</nb-text>
      </nb-button>
      <nb-button iconRight :onPress="handleDeckSwiperForwardBtn">
        <nb-text>Swipe Right</nb-text>
        <nb-icon name="arrow-forward" />
      </nb-button>
    </View>
  </nb-container>
</template>
<script>
import React from "react";
import { View, Text } from "react-native";
import cardOne from "../../../../assets/swiper-1.png";
import CardComponent from "../common/card";
export default {
  data: function() {
    return {
      cardItemsArr: [
        {
          text: "Card One",
          name: "One",
          image: cardOne
        },
        . . .
      ],
      isLoopingRequired: false,
      stylesObj: {
        bottomBtnContainer: {
          flexDirection: "row",
          flex: 1,
          position: "absolute",
          bottom: 50,
          left: 0,
          right: 0,
          justifyContent: "space-between",
          padding: 15
        }
      }
    };
  },
  methods: {
    handleCardEmpty: function() {
      return (
        <View>
          <Text>Over </Text>
        </View>
      );
    },
    handleCardRendering: function(item) {
      return <CardComponent item={item} />;
    },
    handleDeckSwiperBackBtn: function() {
      this.$refs._deckSwiper._root.swipeLeft();
    },
    handleDeckSwiperForwardBtn: function() {
      this.$refs._deckSwiper._root.swipeRight();
    }
  }
};
</script>

// Card Component
<template>
  <nb-card :style="{ elevation: 3 }">
    <nb-cardItem>
      <nb-left>
        <nb-thumbnail :source="item.image" />
        <nb-body>
          <nb-text>{{item.text}}</nb-text>
          <nb-text note>NativeBase</nb-text>
        </nb-body>
      </nb-left>
    </nb-cardItem>
    <nb-cardItem cardBody>
      <image
        :style="{
          resizeMode: 'cover',
          width: null,
          flex: 1,
          height: 300
        }"
        :source="item.image"
      />
    </nb-cardItem>
    <nb-cardItem>
      <nb-icon-nb name="ios-heart" :style="{ color: '#ED4A6A' }" />
      <nb-text>{{item.name}}</nb-text>
    </nb-cardItem>
  </nb-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object
    }
  }
};
</script>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/deckswiper.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />



