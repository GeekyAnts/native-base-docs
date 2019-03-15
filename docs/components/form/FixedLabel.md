## fixed-label-headref
#### Fixed Label

The <code>fixedLabel</code> property creates an Input component, whose Label is fixed at the left of  Input and does not hide when text is entered. The input aligns on the same position, regardless of the length of the label. It can be used with placeholder as well.

![Preview ios fixed-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-fixed.png)
![Preview android fixed-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-fixed.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class FixedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item fixedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item fixedLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
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
        <nb-item fixedLabel>
          <nb-label>Username</nb-label>
          <nb-input />
        </nb-item>
        <nb-item fixedLabel last>
          <nb-label>Password</nb-label>
          <nb-input />
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-fixed.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
