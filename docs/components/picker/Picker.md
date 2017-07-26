## picker-def-headref
## Picker

Renders the native picker component on iOS and Android.<br />
Replacing Component: React Native [Picker](https://facebook.github.io/react-native/docs/picker.html)<br />

![Preview ios picker-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/ios/picker.gif)
![Preview android picker-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.2.0/screenshots/android/picker.gif)

  **Contents:**
* [Placeholder Picker](Components.md#picker-placeholder-headref)
* [Placeholder Picker without Note](Components.md#picker-placeholder-without-note-headref)
* [Picker with Custom Back Button](Components.md#picker-with-custom-back-button-headref)
* [Picker with Custom Header](Components.md#picker-with-custom-header-headref)
* [Picker with Custom Header Text](Components.md#picker-with-custom-header-text-headref)
* [Picker with Custom Header Style](Components.md#picker-with-custom-header-style-headref)

*Regular Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, Item as FormItem } from "native-base";
const Item = Picker.Item;
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
              &lt;Item label="Wallet" value="key0" />
              &lt;Item label="ATM Card" value="key1" />
              &lt;Item label="Debit Card" value="key2" />
              &lt;Item label="Credit Card" value="key3" />
              &lt;Item label="Net Banking" value="key4" />
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
                <td>Makes component that appears as header of the Picker, comes with a backAction prop to close the picker. Like renderHeader={(backAction) =>{ // BODY }</td>
            </tr>
            <tr>
                <td>headerStyle</td>
                <td> - </td>
                <td> - </td>
                <td>Custom style to be given to Header</td>
            </tr>
            <tr>
                <td>placeholder</td>
                <td> - </td>
                <td> - </td>
                <td>Pass placeholder for Picker component.</td>
            </tr>
            <tr>
                <td>iosHeader</td>
                <td> - </td>
                <td> - </td>
                <td>Custom text for the header title.</td>
            </tr>
            <tr>
                <td>headerBackButtonText</td>
                <td> - </td>
                <td> - </td>
                <td>Custom text for the header back button.</td>
            </tr>
            <tr>
                <td>textStyle</td>
                <td> - </td>
                <td> - </td>
                <td>Text style of header</td>
            </tr>
            <tr>
                <td>itemStyle</td>
                <td> - </td>
                <td> - </td>
                <td>Style of items in the Picker</td>
            </tr>
            <tr>
                <td>headerStyle</td>
                <td> - </td>
                <td> - </td>
                <td>Style of header.</td>
            </tr>
            <tr>
                <td>itemTextStyle</td>
                <td> - </td>
                <td> - </td>
                <td>Text style of item component in Picker</td>
            </tr>
            <tr>
                <td>supportedOrientations</td>
                <td> - </td>
                <td> Portrait, Landscape, Landscape-left, Landscape-right </td>
                <td>Allows the modal to be rotated to any of the specified orientations</td>
            </tr>
            <tr>
                <td>headerBackButtonText</td>
                <td>"Back"</td>
                <td>user-defined text</td>
                <td>Used for custom backButton text</td>
            </tr>
            </tbody>
            </table><br />
