# Picker

Renders the native picker component on iOS and Android.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;Picker></code>](https://facebook.github.io/react-native/docs/picker.html)*

<table>
<thead>
  <tr style="border-style: hidden;">
    <td style="border-style: hidden;padding-left: 50px"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
    <td style="padding-left: 50px"><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
  </tr>
</thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/components/picker.gif')}}" alt="" /></div></th>
      <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="{{('../assets/android/components/picker.gif')}}" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Picker } from 'native-base/ui';

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
