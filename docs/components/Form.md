# Form

[NativeBase](http://nativebase.io/) makes use of <code>List</code> to design Forms that include group of related input components. Include any combination of NativeBase components to make up your form.

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden; padding-right: 34px;">IOS</th>
      <th style="padding-right: 140px;">Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/form.png" alt="" /></div></th>
      <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/form.png" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, List, ListItem, InputGroup, Input, Icon, Text, Picker, Button } from 'native-base';
​
const Item = Picker.Item;

export default class FormExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key0',
            results: {
                items: [],
            },
        };
    }
    onValueChange(value: string) {
        this.setState({
            selected1: value,
        });
    }
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;List>
                        &lt;ListItem>
                            &lt;InputGroup>
                                &lt;Input inlineLabel label="First Name" placeholder="John" />
                            &lt;/InputGroup>
                        &lt;/ListItem>

                        &lt;ListItem>
                            &lt;InputGroup>
                                &lt;Icon name="ios-person" style=&#123;{ color: '#0A69FE' }} />
                                &lt;Input placeholder="EMAIL" />
                            &lt;/InputGroup>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;InputGroup>
                                &lt;Icon name="ios-unlock" style=&#123;{ color: '#0A69FE' }} />
                                &lt;Input placeholder="PASSWORD" secureTextEntry />
                            &lt;/InputGroup>
                        &lt;/ListItem>
                        &lt;ListItem>
                            &lt;InputGroup>
                                &lt;Icon name="ios-call" style=&#123;{ color: '#0A69FE' }} />
                                &lt;Input placeholder="PHONE" keyboardType="numeric" />
                            &lt;/InputGroup>
                        &lt;/ListItem>

                        &lt;ListItem iconLeft>
                            &lt;Icon name="ios-transgender" style=&#123;{ color: '#0A69FE' }} />
                            &lt;Text>GENDER&lt;/Text>
                            &lt;Picker
                              iosHeader="Select one"
                              mode="dropdown"
                              selectedValue={this.state.selected1}
                              onValueChange={this.onValueChange.bind(this)} >
                                &lt;Item label="Male" value="key0" />
                                &lt;Item label="Female" value="key1" />
                                &lt;Item label="Other" value="key2" />
                            &lt;/Picker>
                        &lt;/ListItem>

                        &lt;ListItem>
                            &lt;InputGroup >
                                &lt;Input stackedLabel label="Permanent Address" placeholder="Address" />
                            &lt;/InputGroup>
                        &lt;/ListItem>
                    &lt;/List>
                    &lt;Button style=&#123;{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}>
                        Sign Up
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>

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
                <td>inlineLabel</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Label placed to the left of the input element. When the user enters text, the label does not hide. This can also be used along with placeholder.
                </td>
            </tr>
            <tr>
                <td>stackedLabel</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Places the label on top of the input element which appears like a stack. This can also be used along with placeholder.
                </td>
            </tr>
        </tbody>
    </table>
