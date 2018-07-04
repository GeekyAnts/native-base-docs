## picker-input-headref
#### Picker Input

Include `picker` prop with `<Item>` to have picker type of input field.


![Preview ios picker-input-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/input-picker.gif)
![Preview android picker-input-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/input-picker.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
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
      <Container>
        <Header />
        <Content>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                {% raw %}style={{ width: undefined }}{% endraw %}
                placeholder="Select your SIM"
                {% raw %}placeholderStyle={{ color: "#bfc6ea" }}{% endraw %}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-form>
        <nb-item picker>
          <nb-picker
            mode="dropdown"
            :iosIcon="getIosIcon()"
            :style="{ width: 350 }"
            placeholder="Select your SIM"
            placeholderStyle="{ color: '#bfc6ea' }"
            placeholderIconColor="#007aff"
            :selectedValue="selected"
            :onValueChange="onValueChange"
          >
            <item label="Wallet" value="key0" />
            <item label="ATM Card" value="key1" />
            <item label="Debit Card" value="key2" />
            <item label="Credit Card" value="key3" />
            <item label="Net Banking" value="key4" />
          </nb-picker>
        </nb-item>
      </nb-form>
    </nb-content>
  </nb-container>
</template>
<script>
import React from "react";
import { Picker, Icon } from "native-base";
export default {
  components: { Item: Picker.Item },
  data: function() {
    return {
      selected: ""
    };
  },
  methods: {
    onValueChange: function(value) {
      this.selected = value;
    },
    getIosIcon: function() {
      return <Icon name="ios-arrow-down-outline" />;
    }
  }
};
</script>
{%- endcodetabs %}
<br />
