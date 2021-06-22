## picker-with-custom-header-headref
#### Picker with Custom Header

![Preview ios picker-with-custom-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/picker-custom-header.gif)
![Preview android picker-with-custom-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/picker.gif)

{% codetabs name="React Native", type="js" -%}import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";

export default class PickerCustomHeaderExample extends Component {
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
      <Container>
        <Header />
        <Content>
          <Form>
            <Picker
              renderHeader={backAction =>
                {% raw %}<Header style={{ backgroundColor: "#f44242" }}>{% endraw %}
                  <Left>
                    <Button transparent onPress={backAction}>
                      {% raw %}<Icon name="arrow-back" style={{ color: "#fff" }} />{% endraw %}
                    </Button>
                  </Left>
                  {% raw %}<Body style={{ flex: 3 }}>{% endraw %}
                    {% raw %}<Title style={{ color: "#fff" }}>Your Header</Title>{% endraw %}
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
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
          :renderHeader="getPickerHeaderComp"
          mode="dropdown"
          :iosIcon="getIosIcon()"
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
import { Picker, Icon, Header, Left, Button, Body, Title, Right } from "native-base";
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
    },
    getPickerHeaderComp: function(backAction) {
      return (
        {% raw %}<Header style={{ backgroundColor: "#f44242" }}>{% endraw %}
          <Left>
            <Button transparent onPress={backAction}>
              {% raw %}<Icon name="arrow-back" style={{ color: "#fff" }} />{% endraw %}
            </Button>
          </Left>
          {% raw %}<Body style={{ flex: 3 }}>{% endraw %}
            <Title>Your Header</Title>
          </Body>
          <Right />
        </Header>
      );
    }
  }
};
</script>
{%- endcodetabs %}
<p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs-v2.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/picker-custom-header.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />
