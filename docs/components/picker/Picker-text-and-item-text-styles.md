##picker-text-and-item-text-styles-headref
#### Picker Text and Item Text Style

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, View, H3, Item as FormItem } from "native-base";
export default class PickerTextAndItemStyle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
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
            &lt;Title>Placeholder Picker</Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              placeholder="Select One"
              iosIcon={&lt;Icon name="ios-arrow-down-outline" />}
              placeholderIconColor="#007aff"
              textStyle=&#123;{ color: "#007aff" }}
              itemStyle=&#123;{ backgroundColor: "#d3d3d3", marginLeft: 0, paddingLeft: 10 }}
              itemTextStyle=&#123;{ color: '#007aff' }}
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
      &lt;/Container >
    );
  }
}</code></pre><br />
