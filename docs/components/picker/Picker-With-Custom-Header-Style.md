## picker-with-custom-header-style-headref
#### Picker with Custom Header Style

![Preview ios picker-with-custom-header-style-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/picker-with-custom-header-style.gif)
![Preview android picker-with-custom-header-style-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/picker.gif)

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
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
              headerStyle=&#123;{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle=&#123;{ color: "#fff" }}
              headerTitleStyle=&#123;{ color: "#fff" }}
              selectedValue={this.state.selected5}
              onValueChange={this.onValueChange5.bind(this)}
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