## custom-radio-headref
## Custom Radio Button


![Preview ios custom-radio-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/radio-custom.png)
![Preview android custom-radio-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/radio-custom.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
export default class CustomRadioButtonExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <ListItem selected={false} >
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
            </Right>
          </ListItem>
          <ListItem selected={true}>
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              />
            </Right>
          </ListItem>
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
      <nb-list-item :selected="false">
        <nb-left>
          <nb-text>Lunch Break</nb-text>
        </nb-left>
        <nb-right>
          <nb-radio
            color='#f0ad4e'
            selectedColor='#5cb85c'
            :selected="false"
          />
        </nb-right>
      </nb-list-item>
      <nb-list-item :selected="true">
        <nb-left>
          <nb-text>Discussion with Client</nb-text>
        </nb-left>
        <nb-right>
          <nb-radio
            color='#f0ad4e'
            selectedColor='#5cb85c'
            :selected="true"
          />
        </nb-right>
      </nb-list-item>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/radio-custom.png" alt="" style="display:block !important" />
    </div>
</p>
<br />

