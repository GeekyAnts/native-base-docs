<div class="section" id="picker">

    <h2>Picker</h2>

    <p style="padding-bottom: 15px;">
        Renders the native picker component on iOS and Android.<br />
        <i>
            Replacing Component:
            <a href="https://facebook.github.io/react-native/">React Native</a>
            <a href="https://facebook.github.io/react-native/docs/picker.html">
                <code>&lt;Picker></code>
            </a>
        </i>
    </p>

    <i>Syntax</i>

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
}</code></pre><br />

    <br />

</div>
