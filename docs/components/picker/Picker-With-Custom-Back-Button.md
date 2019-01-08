## picker-with-custom-back-button-headref
#### Picker with Custom Back Button

![Preview ios picker-with-custom-back-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/picker-custom-back-button.gif)
![Preview android picker-with-custom-back-button-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/picker.gif)

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";
export default class PickerCustomBackButtonExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key3"
    };
  }
  onValueChange(value: string) {
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
              iosIcon={<Icon name="arrow-down" />}
              headerBackButtonText="Baaack!"
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
        <nb-picker
          mode="dropdown"
          :iosIcon="getIosIcon()"
          headerBackButtonText="Baaack!"
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
