## toast-type-headref
#### Toast types

![Preview ios toast-type-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/toast-type.gif)
![Preview android toast-type-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/toast-type.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Text, Button, Toast } from "native-base";
class ToastType extends Component {
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
                buttonText: "Okay"
              })}
          >
            <Text>Default Toast</Text>
          </Button>
          <Button success
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "success"
              })}
          >
            <Text>Success Toast</Text>
          </Button>
          <Button warning
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "warning"
              })}
          >
            <Text>Warning Toast</Text>
          </Button>
          <Button danger
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "danger"
              })}
          >
            <Text>Danger Toast</Text>
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
        <nb-text>Default Toast</nb-text>
      </nb-button>
      <nb-button success :onPress="handleBtnPress2">
        <nb-text>Success Toast</nb-text>
      </nb-button>
      <nb-button warning :onPress="handleBtnPress3">
        <nb-text>Warning Toast</nb-text>
      </nb-button>
      <nb-button danger :onPress="handleBtnPress4">
        <nb-text>Danger Toast</nb-text>
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
        buttonText: "Okay"
      });
    },
    handleBtnPress2: function() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        type: "success"
      });
    },
    handleBtnPress3: function() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        type: "warning"
      });
    },
    handleBtnPress4: function() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        type: "danger"
      });
    }
  }
};
</script>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/toast-type.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
