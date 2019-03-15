
## card-transparent-headref
#### Transparent Card

A transparent card can be created using `transparent` props with &lt;CardItem>.

![Preview ios card-transparent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-transparent.png)
![Preview android card-transparent-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/card-transparent.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
export default class CardTransparentExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Card transparent>
            <CardItem>
              <Body>
                <Text>
                  This is just a transparent card with some text to boot.
                </Text>
              </Body>
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
    <nb-content padder>
      <nb-card transparent>
        <nb-card-item>
          <nb-body>
            <nb-text>This is just a transparent card with some text to boot.</nb-text>
          </nb-body>            
        </nb-card-item>
      </nb-card>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/card-transparent.png" alt="" style="display:block !important" />
    </div>
</p>
<br/>
