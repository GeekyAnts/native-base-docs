## picker-with-custom-back-button-headref
#### Picker with Custom Back Button

![Preview ios picker-with-custom-back-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/ios/picker-custom-back-button.gif)
![Preview android picker-with-custom-back-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.7/screenshots/android/picker.gif)

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
export default class PickerCustomBackButtonExample extends Component {
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
            &lt;Title>Custom Back Button&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              iosIcon={&lt;Icon name="ios-arrow-down-outline" />}
              headerBackButtonText="Baaack!"
              style={&#123; width: undefined }}
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
