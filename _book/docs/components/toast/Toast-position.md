## toast-position-headref
#### Toast position

![Preview ios toast-position-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/toast-position.gif)
![Preview android toast-position-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/toast-position.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Text, Button, Toast } from "native-base";
class ToastPosition extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                position: "top"
              })}
          >
            <Text>Top Toast</Text>
          </Button>
          <Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                position: "bottom"
              })}
          >
            <Text>Bottom Toast</Text>
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
    <nb-content padder>
      <nb-button :onPress="handleBtnPress1">
        <nb-text>Top Toast</nb-text>
      </nb-button>
      <nb-button :onPress="handleBtnPress2">
        <nb-text>Bottom Toast</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
<script>
import React from "react";
import { Toast } from "native-base";
export default {
  methods: {
    handleBtnPress1: function() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        position: "top"
      });
    },
    handleBtnPress2: function() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        position: "bottom"
      });
    }
  }
};
</script>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/toast-position.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
