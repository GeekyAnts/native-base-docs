## button-size-headref
#### Button Size

Want to have buttons of fancy size?<br />
Include the following props with your <code>Button</code>.
* <code>small</code>: for small size button.
* <code>large</code>: for large size button.<br />

![Preview ios button-size-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-size.png)
![Preview android button-size-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/button-size.png)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, Content, Button, Text } from 'native-base';
export default class ButtonSizeExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          //Small size button
          <Button small primary>
            <Text>Default Small</Text>
          </Button>
          //Regular size button
          <Button success>
            <Text>Success Default</Text>
          </Button>
          //Large size button
          <Button large dark>
            <Text>Dark Large</Text>
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
      <nb-button small light>
        <nb-text>Default Small </nb-text>
      </nb-button>
      <nb-button success info>
        <nb-text>Success Default</nb-text>
      </nb-button>
      <nb-button large primary>
        <nb-text>Dark Large</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
{%- endcodetabs %}
<p> 
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/button-size.png" alt="" style="display:block !important" />
    </div>
</p>
<br />
