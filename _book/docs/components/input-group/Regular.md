## regular-textbox-headref
#### Regular Textbox

To use the regular textbox which is rectangular in shape, include the <code>regular</code> prop with <code>Item</code>.

![Preview ios regular-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-regular.png)
![Preview android regular-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-regular.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Input, Item } from 'native-base';
export default class RegularTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item regular>
            <Input placeholder='Regular Textbox' />
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
        <nb-item regular>
          <nb-input placeholder="Regular Textbox" />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-regular.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
