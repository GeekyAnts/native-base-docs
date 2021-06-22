## Customize Picker

Customize Header for Picker
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(https://docs-v2.nativebase.io/docs/assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('https://docs-v2.nativebase.io/docs/assets/ios/guide/theme-picker.gif')}}" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Picker } from 'native-base';
const Item = Picker.Item;
export default class ThemePickerExample extends Component {
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
                        headerComponent={
                            &lt;Header>
                                &lt;Button transparent>
                                    Custom Back
                                &lt;/Button>
                                &lt;Title>Custom Header&lt;/Title>
                            &lt;/Header>
                        }
                        mode='dropdown'
                        selectedValue={this.state.selected1}
                        onValueChange={this.onValueChange.bind(this)}>
                        &lt;Item label='Cats' value='key0' />
                        &lt;Item label='Dogs' value='key1' />
                        &lt;Item label='Birds' value='key2' />
                        &lt;Item label='Elephants' value='key3' />
                   &lt;/Picker>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
