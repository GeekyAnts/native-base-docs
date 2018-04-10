## picker-placeholder-headref
#### Placeholder Picker

![Preview ios picker-placeholder-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/ios/picker-with-placeholder.gif)
![Preview android picker-placeholder-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/android/picker.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
export default class PickerPlaceholderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
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
            &lt;Title>Picker Placeholder&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              iosIcon={&lt;Icon name="ios-arrow-down-outline" />}
              placeholder="Select your SIM"
              placeholderStyle={&#123; color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={&#123; width: undefined }}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
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
