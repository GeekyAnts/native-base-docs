## carditem-button-headref
#### CardItem Button

Include <code>button</code> prop with &lt;CardItem> to achieve onClick function with card items.

![Preview ios carditem-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-button.gif)
![Preview android carditem-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/card-button.gif)


*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class CardItemButton extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card>
            <CardItem header button onPress={() => alert("This is Card Header")}>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem button onPress={() => alert("This is Card Body")}>
              <Body>
                <Text>
                  Click on any carditem
                </Text>
              </Body>
            </CardItem>
            <CardItem footer button onPress={() => alert("This is Card Footer")}>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-card>
        <nb-card-item header button :onPress="handleHeaderClick">
          <nb-text>NativeBase</nb-text>
        </nb-card-item>
        <nb-card-item button :onPress="handleBodyClick">
          <nb-body>
            <nb-text>Click on any carditem.</nb-text>
          </nb-body>            
        </nb-card-item>
        <nb-card-item footer button :onPress="handleFooterClick">
          <nb-text>GeekyAnts</nb-text>
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>
<script>
export default {
  methods: {
    handleHeaderClick: function() {
      alert("This is Card Header");
    },
    handleBodyClick: function() {
      alert("This is Card Body");
    },
    handleFooterClick: function() {
      alert("This is Card Footer");
    }
  }
};
</script>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-button.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
