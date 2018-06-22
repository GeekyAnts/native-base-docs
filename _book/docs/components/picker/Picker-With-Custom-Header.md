## picker-with-custom-header-headref
#### Picker with Custom Header

![Preview ios picker-with-custom-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/picker-custom-header.gif)
![Preview android picker-with-custom-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/picker.gif)

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
export default class PickerCustomHeaderExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
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
          &lt;Body style=&#123;{ flex: 3 }}>
            &lt;Title>Custom Header&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              renderHeader={backAction =>
                &lt;Header style=&#123;{ backgroundColor: "#f44242" }}>
                  &lt;Left>
                    &lt;Button transparent onPress={backAction}>
                      &lt;Icon name="arrow-back" style=&#123;{ color: "#fff" }} />
                    &lt;/Button>
                  &lt;/Left>
                  &lt;Body style=&#123;{ flex: 3 }}>
                    &lt;Title style=&#123;{ color: "#fff" }}>Your Header&lt;/Title>
                  &lt;/Body>
                  &lt;Right />
                &lt;/Header>}
              mode="dropdown"
              iosIcon={&lt;Icon name="ios-arrow-down-outline" />}
              style=&#123;{ width: undefined }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
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
