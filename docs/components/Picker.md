# Picker

Renders the native picker component on iOS and Android.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;Picker></code>](https://facebook.github.io/react-native/docs/picker.html)*

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden">IOS</th>
      <th>Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><img height="470" width="270" src="{{('../assets/ios/components/picker.gif')}}" alt="" /></th>
      <th><img height="470" width="270" src="{{('../assets/android/components/picker.gif')}}" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Picker } from 'native-base';

const Item = Picker.Item;​
export default class PickerExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }

    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Picker
                        iosHeader="Select one"
                        mode="dropdown"
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        &lt;Item label="Cats" value="key0" />
                        &lt;Item label="Dogs" value="key1" />
                        &lt;Item label="Birds" value="key2" />
                        &lt;Item label="Elephants" value="key3" />
                   &lt;/Picker>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
