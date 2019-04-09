## picker-def-headref
## Picker

Renders the native picker component on iOS and Android.<br />
Replacing Component: React Native [Picker](https://facebook.github.io/react-native/docs/picker.html)<br />

![Preview ios picker-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/picker.gif)
![Preview android picker-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/picker.gif)

  **Contents:**
* [Picker with Icon](Components.md#picker-with-icon-headref)
* [Picker with Icon Style](Components.md#picker-with-icon-style-headref)
* [Placeholder Picker](Components.md#picker-placeholder-headref)
* [Placeholder Picker without Note](Components.md#picker-placeholder-without-note-headref)
* [Picker Text and Item Style](Components.md#picker-text-and-item-text-styles-headref)
* [Picker with Custom Back Button](Components.md#picker-with-custom-back-button-headref)
* [Picker with Custom Header](Components.md#picker-with-custom-header-headref)
<!-- * [Picker with Custom Header Text](Components.md#picker-with-custom-header-text-headref) -->
* [Picker with Custom Header Style](Components.md#picker-with-custom-header-style-headref)

*Regular Syntax*

{% codetabs name="React Native", type="js" -%}import React, { Component } from "react";
import { Container, Header, Content, Picker, Form } from "native-base";

export default class PickerExample extends Component {
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
              note
              mode="dropdown"
              {% raw %}style={{ width: 120 }}{% endraw %}
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
          note
          mode="dropdown"
          :style="{ width: 120 }"
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
import { Picker } from "native-base";
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
    }
  }
};
</script>
{%- endcodetabs %}
<br />

**Configuration**

<table class = "table table-bordered">
  <thead>
      <tr>
          <th>Property</th>
          <th>Default</th>
          <th>Option</th>
          <th width="50%">
              Description
          </th>
      </tr>
  </thead>
  <tbody>
      <tr>
          <td>renderHeader</td>
          <td> - </td>
          <td> - </td>
          <td>Makes component that appears as header of the Picker, comes with a backAction prop to close the picker.</td>
      </tr>
      <tr>
          <td>headerStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom style for header (iOS)</td>
      </tr>
      <tr>
          <td>iosHeader</td>
          <td> - </td>
          <td> - </td>
          <td>Custom text for the header title (iOS)</td>
      </tr>
      <tr>
          <td>headerBackButtonText</td>
          <td> - </td>
          <td> - </td>
          <td>Custom text for the header back button (iOS)</td>
      </tr>
      <tr>
          <td>headerBackButtonTextStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom text style for the header back button< (iOS)/td>
      </tr>
      <tr>
          <td>headerTitleStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom title style for the header title (iOS)</td>
      </tr>
      <tr>
          <td>iosIcon</td>
          <td> - </td>
          <td> - </td>
          <td>Icon with picker dropdown (iOS)</td>
      </tr>
      <tr>
          <td>placeholder</td>
          <td> - </td>
          <td> - </td>
          <td>Placeholder for Picker component (iOS)</td>
      </tr>
      <tr>
          <td>placeholderStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom style for placeholder text (iOS)</td>
      </tr>
      <tr>
          <td>placeholderIconColor</td>
          <td> - </td>
          <td> - </td>
          <td>Set placeholder icon color (iOS)</td>
      </tr>
      <tr>
          <td>itemStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Style of items in Picker (iOS)</td>
      </tr>
      <tr>
          <td>itemTextStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Text style of item component in Picker (iOS)</td>
      </tr>
      <tr>
          <td>textStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Text style of header (iOS)</td>
      </tr>
      <tr>
          <td>supportedOrientations</td>
          <td> - </td>
          <td> Portrait, Landscape, Landscape-left, Landscape-right </td>
          <td>Allows the modal to rotate to any of the specified orientations</td>
      </tr>
      <tr>
          <td>enabled</td>
          <td> - </td>
          <td>boolean</td>
          <td>Enable / disable Picker button</td>
      </tr>
    </tbody>
  </table>
   <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/v2.6.1/screenshots/ios/picker.gif" alt="" style="display:block !important" />
    </div>
</p>
  <br />

**Note:** Styling Picker is restricted to the style props provided in the table. NativeBase Picker wont support its styling to work out of the box. But one can always style the components as per requirements.
