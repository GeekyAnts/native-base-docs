## picker-text-and-item-text-styles-headref
#### Picker Text and Item Text Style

![Preview ios picker-text-and-item-text-styles-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/picker-text-itemtext-style.gif)
![Preview android picker-text-and-item-text-styles-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/picker.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
export default class PickerTextAndItemStyleExample extends Component {
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
      <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select your SIM"
              iosIcon={<Icon name="arrow-down" />}
              placeholder="Select your SIM"
              {% raw %}textStyle={{ color: "#5cb85c" }}{% endraw %}
              {% raw %}itemStyle={{{% endraw %}
                backgroundColor: "#d3d3d3",
                marginLeft: 0,
                paddingLeft: 10
              }}
              {% raw %}itemTextStyle={{ color: '#788ad2' }}{% endraw %}
              {% raw %}style={{ width: undefined }}{% endraw %}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container >
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <nb-content>
      <nb-form>
        <nb-picker
          mode="dropdown"
          :iosIcon="getIosIcon()"
          placeholder="Select your SIM"
          :textStyle="{ color: '#5cb85c' }"
          :itemStyle="{
              backgroundColor: '#d3d3d3',
              marginLeft: 0,
              paddingLeft: 10
          }"
          :itemTextStyle="{ color: '#788ad2' }"
          :selectedValue="selected"
          :onValueChange="onValueChange"
        >
          <item label="Wallet" value="key0" />
          <item label="ATM Card" value="key1" />
          <item label="Debit Card" value="key2" />
          <item label="Credit Card" value="key3" />
          <item label="Net Banking" value="key4" />
        </nb-picker>
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
      selected: "key1"
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

