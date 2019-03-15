## picker-with-custom-header-text-headref
#### Picker with Custom Header Text

![Preview ios picker-with-custom-header-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/picker-custom-header-text.gif)
![Preview android picker-with-custom-header-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/picker.gif)

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form, } from "native-base";

export default class PickerCustomHeaderTextExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected3: "key3"
    };
  }
  onValueChange3(value: string) {
    this.setState({
      selected3: value
    });
  }
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent onPress={() => this.props.navigation.goBack()}>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Custom Header Title&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              iosHeader="Your Header"
              iosIcon={&lt;Icon name="arrow-down" />}
              style=&#123;{ width: Platform.OS === "ios" ? undefined : 120 }}
              selectedValue={this.state.selected3}
              onValueChange={this.onValueChange3.bind(this)}
            >
              &lt;Picker.Item label="Wallet" value="key0" />
              &lt;Picker.Item label="ATM Card" value="key1" />
              &lt;Picker.Item label="Debit Card" value="key2" />
              &lt;Picker.Item label="Credit Card" value="key3" />
              &lt;Picker.Item label="Net Banking" value="key4" />
            &lt;/Picker>
          &lt;/Form>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
