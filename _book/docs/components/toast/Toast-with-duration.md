## toast-with-duration-headref
#### Toast with duration

![Preview ios toast-with-duration-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/toast-duration.gif)
![Preview android toast-with-duration-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/toast-duration.gif)

*Syntax* 

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Text, Button, Toast } from "native-base";
export default class ToastDuration extends Component {
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
                duration: 3000
              })}
          >
            <Text>Toast</Text>
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
      <nb-button :onPress="handleBtnPress">
        <nb-text>Toast</nb-text>
      </nb-button>
    </nb-content>
  </nb-container>
</template>
<script>
import React from "react";
import { Toast } from "native-base";
export default {
  methods: {
    handleBtnPress: function() {
      Toast.show({
        text: "Wrong password!",
        buttonText: "Okay",
        duration: 3000
      });
    }
  }
};
</script>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/toast-duration.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
