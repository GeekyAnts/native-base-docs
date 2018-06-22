## toast-with-duration-headref
#### Toast with duration

![Preview ios toast-with-duration-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/toast-duration.gif)
![Preview android toast-with-duration-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/toast-duration.gif)

*Syntax* 

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Toast } from "native-base";
export default class ToastDuration extends Component {
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
            &lt;Title>Toast with duration&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content padder>
          &lt;Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                buttonText: "Okay",
                duration: 3000
              })}
          >
            &lt;Text>Toast&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
