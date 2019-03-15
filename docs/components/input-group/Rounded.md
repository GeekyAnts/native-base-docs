## rounded-textbox-headref
#### Rounded Textbox

To have a textbox with round type border, include the <code>rounded</code> prop with <code>Item</code>.

![Preview ios rounded-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-rounded.png)
![Preview android rounded-textbox-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-rounded.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Item, Input } from 'native-base';
export default class RoundedTextboxExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Item rounded>
            <Input placeholder='Rounded Textbox'/>
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
        <nb-item rounded>
          <nb-input placeholder="Rounded Textbox" />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-success.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
