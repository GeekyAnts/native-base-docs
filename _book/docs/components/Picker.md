## Picker

Renders the native picker component on iOS and Android.<br />
Replacing Component: React Native [Picker](https://facebook.github.io/react-native/docs/picker.html)<br />

![Preview ios Picker](https://docs.nativebase.io/docs/assets/ios/components/picker.gif)
![Preview android Picker](https://docs.nativebase.io/docs/assets/android/components/picker.gif)

*Regular Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";
const Item = Picker.Item;
class RegularPicker extends Component {
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
            &lt;Title>Regular&lt;/Title>
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
}
export default RegularPicker;
</code></pre><br />

### Advanced Pickers (iOS only)

####Placeholder

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";
const Item = Picker.Item;
class RegularPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
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
            &lt;Title>Placeholder Picker&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              placeholder="Select One"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
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
}
export default RegularPicker;

</code></pre><br />

####Placeholder (without note)

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";
const Item = Picker.Item;
class RegularPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
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
            &lt;Title>Placeholder picker 2&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              placeholder="Select One"
              note={false}
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
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
}
export default RegularPicker;
</code></pre><br />

####Custom Back Button

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";
const Item = Picker.Item;
class RegularPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected3: "key3"
    };
  }
  onValueChange3(value: string) {
    this.setState({
      selected3: value
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
            &lt;Title>Custom back button&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              headerBackButtonText="Baaack!"
              selectedValue={this.state.selected3}
              onValueChange={this.onValueChange3.bind(this)}
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
}
export default RegularPicker;
</code></pre><br />

####Custom Header Text

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";
const Item = Picker.Item;
class RegularPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected3: "key3"
    };
  }
  onValueChange3(value: string) {
    this.setState({
      selected3: value
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
            &lt;Title>Custom back button&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              iosHeader="Your Header"
              selectedValue={this.state.selected3}
              onValueChange={this.onValueChange3.bind(this)}
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
}
export default RegularPicker;
</code></pre><br />

####Custom Header Style

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";
const Item = Picker.Item;
class RegularPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected5: "key2"
    };
  }
  onValueChange5(value: string) {
    this.setState({
      selected5: value
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
            &lt;Title>Cutom Header Style&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              mode="dropdown"
              headerStyle=&#123;{ backgroundColor: "#b95dd3" }}
              headerBackButtonTextStyle=&#123;{ color: "#fff" }}
              headerTitleStyle=&#123;{ color: "#fff" }}
              selectedValue={this.state.selected5}
              onValueChange={this.onValueChange5.bind(this)}
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
}
export default RegularPicker;
</code></pre><br />

####Custom Header

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Platform } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";
const Item = Picker.Item;
class RegularPicker extends Component {
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
          &lt;Body style=&#123;{ flex: 3 }}>
            &lt;Title>Custom Header&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content>
          &lt;Form>
            &lt;Picker
              renderHeader={backAction =>
                &lt;Header style=&#123;{ backgroundColor: "#f44242" }}>
                  &lt;Left>
                    &lt;Button transparent onPress={backAction}>
                      &lt;Icon name="arrow-back" style=&#123;{ color: "#fff" }} />
                    &lt;/Button>
                  &lt;/Left>
                  &lt;Body style=&#123;{ flex: 3 }}>
                    &lt;Title style=&#123;{ color: "#fff" }}>Your Header&lt;/Title>
                  &lt;/Body>
                  &lt;Right />
                &lt;/Header>}
              mode="dropdown"
              style=&#123;{ width: Platform.OS === "ios" ? undefined : 200 }}
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
}
export default RegularPicker;
</code></pre><br />

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
                <td>akes component that appears as header of the Picker, comes with a backAction prop to close the picker. Like renderHeader={(backAction) =>{ // BODY }</td>
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
                <td>Default placeholder when no value is selected.</td>
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
            <tr>
                <td>placeholder</td>
                <td> - </td>
                <td> Strings </td>
                <td>Pass placeholder for Picker component</td>
            </tr>
            </tbody>
            </table><br />
