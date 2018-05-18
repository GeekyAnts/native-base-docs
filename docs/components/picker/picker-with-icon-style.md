## picker-with-icon-style-headref
#### Picker with Icon Style

![Preview ios picker-with-icon-style-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/ios/picker-with-icon-style.png)
![Preview android picker-with-icon-style-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.4.9/screenshots/android/picker.gif)

*Synatx*

<pre class="line-numbers"><code class="language-jsx">
import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
class PickerWithIconStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value
    });
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
          &lt;Body style=&#123;{ flex: 3 }}>
            &lt;Title>Picker with Icon Style&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={&lt;Icon name="arrow-dropdown-circle"
                  style=&#123;{ color: "#007aff", fontSize: 25 }} />}
              style=&#123;{ width: undefined }}
              selectedValue={this.state.selected}
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
