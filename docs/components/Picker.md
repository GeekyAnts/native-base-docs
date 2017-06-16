## Picker

Renders the native picker component on iOS and Android.<br />
Replacing Component: React Native [Picker](https://facebook.github.io/react-native/docs/picker.html)<br />

![Preview ios Picker](https://docs.nativebase.io/docs/assets/ios/components/picker.gif)
![Preview android Picker](https://docs.nativebase.io/docs/assets/android/components/picker.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Picker } from 'native-base';
const Item = Picker.Item;
export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
      results: {
        items: []
      }
    }
  }
  onValueChange (value: string) {
    this.setState({
      selected : value
    });
  }
  render() {
    return (
      &lt;Container>
        &lt;Content>
          &lt;Picker
            supportedOrientations={['portrait','landscape']}
            iosHeader="Select one"
            headerBackButtonText="Go Back"
            mode="dropdown"
            selectedValue={this.state.selected}
            onValueChange={this.onValueChange.bind(this)}>
            &lt;Item label="Wallet" value="key0" />
            &lt;Item label="ATM Card" value="key1" />
            &lt;Item label="Credit Card" value="key2" />
            &lt;Item label="Debit Card" value="key3" />
         &lt;/Picker>
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
                <td>headerComponent</td>
                <td> - </td>
                <td> - </td>
                <td>Takes component that appears as header of the Picker</td>
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
            <tr>
                <td>placeholder</td>
                <td> - </td>
                <td> Strings </td>
                <td>Pass placeholder for Picker component</td>
            </tr>
            </tbody>
            </table><br />
