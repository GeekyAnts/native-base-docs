## button-disabled-headref
#### Disabled Button

A disabled button is unusable and un-clickable.<br />
The <code>disabled</code> prop of NativeBase Button is of type boolean. When present, it specifies that the button should be disabled. The disabled prop can be set to keep a user from clicking on the button until some other conditions are met (like selecting a checkbox, etc.). Then, a conditional code could remove the disabled value, and make the button usable.<br />

![Preview ios button-disabled-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-disabled.png)
![Preview android button-disabled-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/button-disabled.png)
*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text, Icon } from 'native-base';
export default class ButtonDisabledExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Button disabled>
              <Text>Default</Text>
            </Button>
            <Button disabled bordered>
              <Text>Outline</Text>
            </Button>
            <Button disabled rounded>
              <Text>Rounded</Text>
            </Button>
            <Button disabled large>
              <Text>Custom</Text>
            </Button>
            <Button disabled iconRight>
              <Text>Icon Button</Text>
              <Icon name="home" />
            </Button>
            <Button disabled block>
              <Text>Block</Text>
            </Button>
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
      <nb-button disabled light>
        <nb-text>Default</nb-text>
      </nb-button>
      <nb-button disabled bordered>
        <nb-text>Outline</nb-text>
      </nb-button>
      <nb-button disabled rounded>
        <nb-text>Rounded</nb-text>
      </nb-button>
      <nb-button disabled large>
        <nb-text>Custom</nb-text>
      </nb-button>
      <nb-button disabled iconRight>
        <nb-text>Icon Button</nb-text>
          <nb-icon name="home" />
      </nb-button>
      <nb-button disabled block>
        <nb-text>Block</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p> 
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-disabled.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
