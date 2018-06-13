## picker-with-custom-header-style-headref
#### Picker with Custom Header Style

![Preview ios picker-with-custom-header-style-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/picker-custom-header-style.gif)
![Preview android picker-with-custom-header-style-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/picker.gif)

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
export default class PickerCustomHeaderStyleExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected5: "key2"
    };
  }
  onValueChange5(value: string) {
    this.setState({
      selected5: value
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
            &lt;Title>Cutom Header Style&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              headerStyle=&#123;{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle=&#123;{ color: "#fff" }}
              headerTitleStyle=&#123;{ color: "#fff" }}
              style=&#123;{ width: undefined }}
              selectedValue={this.state.selected5}
              onValueChange={this.onValueChange5.bind(this)}
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
