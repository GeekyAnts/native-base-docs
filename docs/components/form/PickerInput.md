## picker-input-headref
#### Picker Input

Include `picker` prop with `<Item>` to have picker type of input field.


![Preview ios picker-input-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-picker.gif)
![Preview android picker-input-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-picker.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
export default class PickerInputExample extends Component {
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
        &lt;Header />
        &lt;Content>
          &lt;Form>
            &lt;Item picker>
              &lt;Picker
                mode="dropdown"
                iosIcon={&lt;Icon name="ios-arrow-down-outline" />}
                style={&#123; width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={&#123; color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                &lt;Picker.Item label="Wallet" value="key0" />
                &lt;Picker.Item label="ATM Card" value="key1" />
                &lt;Picker.Item label="Debit Card" value="key2" />
                &lt;Picker.Item label="Credit Card" value="key3" />
                &lt;Picker.Item label="Net Banking" value="key4" />
              &lt;/Picker>
            &lt;/Item>
          &lt;/Form>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
