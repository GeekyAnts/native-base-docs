## picker-with-custom-header-text-headref
#### Picker with Custom Header Text

![Preview ios picker-with-custom-header-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/picker-with-custom-header-text.gif)
![Preview android picker-with-custom-header-text-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/picker.gif)

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
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
            &lt;Title>Custom Title&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              iosHeader="Your Header"
              selectedValue={this.state.selected3}
              onValueChange={this.onValueChange3.bind(this)}
            >
              &lt;Item label="Wallet" value="key0" />
              &lt;Item label="ATM Card" value="key1" />
              &lt;Item label="Debit Card" value="key2" />
              &lt;Item label="Credit Card" value="key3" />
              &lt;Item label="Net Banking" value="key4" />
            &lt;/Picker>
          &lt;/Form>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />