## toast-type-headref
#### Toast types

![Preview ios toast-type-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/toast-type.gif)
![Preview android toast-type-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/toast-type.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Toast } from "native-base";
class ToastType extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
  }
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Toast Type&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content padder>
          &lt;Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay"
              })}
          >
            &lt;Text>Default Toast&lt;/Text>
          &lt;/Button>
          &lt;Button
            success
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "success"
              })}
          >
            &lt;Text>Success Toast&lt;/Text>
          &lt;/Button>
          &lt;Button
            warning
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "warning"
              })}
          >
            &lt;Text>Warning Toast&lt;/Text>
          &lt;/Button>
          &lt;Button
            danger
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                type: "danger"
              })}
          >
            &lt;Text>Danger Toast&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
