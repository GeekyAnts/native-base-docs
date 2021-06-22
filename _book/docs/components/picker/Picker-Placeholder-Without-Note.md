## picker-placeholder-without-note-headref
#### Placeholder Picker (without note)

![Preview ios picker-placeholder-without-note-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/picker-with-placeholder-without-note.gif)
![Preview android picker-placeholder-without-note-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/picker.gif)

{% codetabs name="React Native", type="js" -%}
import React, { Component } from "react";
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class PickerPlaceholderw/oNoteExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
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
              placeholder="Select One"
              {% raw %}placeholderStyle={{ color: "#2874F0" }}{% endraw %}
              note={false}
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
          placeholder="Select one"
          placeholderStyle="{ color: '#2874F0' }"
          :note="false"
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
import { Picker } from "native-base";
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
  }
};
</script>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/picker-with-placeholder-without-note.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
