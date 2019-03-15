## stacked-label-headref
#### Stacked Label

The <code>stackedLabel</code> property creates an Input component that places the label on top of input element which appears like a stack. This can also be used along with placeholder.

![Preview ios stacked-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-stacked.png)
![Preview android stacked-label-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-stacked.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
export default class StackedLabelExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item stackedLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item stackedLabel last>
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
        <nb-item stackedLabel>
          <nb-label>Username</nb-label>
          <nb-input />
        </nb-item>
        <nb-item stackedLabel last>
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
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-stacked.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
