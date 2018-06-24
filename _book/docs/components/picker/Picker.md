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
* [Picker with Custom Header Text](Components.md#picker-with-custom-header-text-headref)
* [Picker with Custom Header Style](Components.md#picker-with-custom-header-style-headref)

*Regular Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Title, Content, Button, Icon, Right, Body, Left, Picker, Form } from "native-base";
export default class PickerExample extends Component {
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
          &lt;Body>
            &lt;Title>Picker&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              iosHeader="Select one"
              mode="dropdown"
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
          <td>Custom style for header</td>
      </tr>
      <tr>
          <td>iosHeader</td>
          <td> - </td>
          <td> - </td>
          <td>Custom text for the header title</td>
      </tr>
      <tr>
          <td>headerBackButtonText</td>
          <td> - </td>
          <td> - </td>
          <td>Custom text for the header back button</td>
      </tr>
      <tr>
          <td>headerBackButtonTextStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom text style for the header back button</td>
      </tr>
      <tr>
          <td>headerTitleStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Custom title style for the header title</td>
      </tr>
      <tr>
          <td>iosIcon</td>
          <td> - </td>
          <td> - </td>
          <td>Icon with picker dropdown</td>
      </tr>
      <tr>
          <td>placeholder</td>
          <td> - </td>
          <td> - </td>
          <td>Placeholder for Picker component</td>
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
          <td>Style of items in Picker</td>
      </tr>
      <tr>
          <td>itemTextStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Text style of item component in Picker</td>
      </tr>
      <tr>
          <td>textStyle</td>
          <td> - </td>
          <td> - </td>
          <td>Text style of header</td>
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
  </table><br />

**Note:** Styling Picker is restricted to the style props provided in the table. NativeBase Picker wont support its styling to work out of the box. But one can always style the components as per requirements.
