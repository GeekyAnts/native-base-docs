## icon-textbox-headref
#### Icon Textbox

Icons can be easily added to the NativeBase Textbox. To do so, include an icon within the <code>&lt;Item></code>. <br />
The icons render in the order of its definition within <code>Item</code>.<br />


![Preview ios icon-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-icon.png)
![Preview android icon-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-icon.png)

*Syntax*        
{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';
export default class IconTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          // Text input box with icon aligned to the left
          <Item>
            <Icon active name='home' />
            <Input placeholder='Icon Textbox'/>
          </Item>
          // Text input box with icon aligned to the right
          <Item>
            <Input placeholder='Icon Alignment in Textbox'/>
            <Icon active name='swap' />
          </Item>
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
      <nb-form>
        <nb-item>
          <nb-icon active name="home" />
          <nb-input placeholder="Icon Textbox" />
        </nb-item>
        <nb-item>
          <nb-input placeholder="Icon Alignment in Textbox" />
          <nb-icon active name="swap" />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-icon.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
