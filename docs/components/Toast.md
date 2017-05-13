## Toast

NativeBase Toast can be used to display quick warning or error messages. <br />

![Preview ios Toast](https://docs.nativebase.io/docs/assets/ios/components/toast.gif)
![Preview android Toast](https://docs.nativebase.io/docs/assets/android/components/toast.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Toast, Button, Text, Header, Left, Right, Body, Title } from 'native-base';
​export default class Toast extends Component {
  constructor(props) {
  super(props);
  this.state = {
    showToast: false
  }
}
render() {
  return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="arrow-back" />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Hello&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content padder>
          &lt;Button onPress={()=> Toast.show({
              supportedOrientations: ['potrait','landscape'],
              text: 'Wrong password!',
              position: 'bottom',
              buttonText: 'Okay'
            })}>
            &lt;Text>Toast&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
  );
}
}</code></pre><br />

**Configuration**
<table class="table table-bordered">
        <thead>
            <tr>
                <th>Key</th>
                <th>Value</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>text</td>
                <td> - </td>
                <td> string </td>
                <td>The text content to be shown in the toast.</td>
            </tr>
            <tr>
                <td>buttonText</td>
                <td> - </td>
                <td> string </td>
                <td>The text to be displayed inside the button.</td>
            </tr>
            <tr>
                <td>position</td>
                <td> bottom </td>
                <td> top,bottom,center </td>
                <td>Sets position for the toast.</td>
            </tr>
            <tr>
                <td>type</td>
                <td> - </td>
                <td> danger,success,warning </td>
                <td>Sets context to the Toast.</td>
            </tr>
            <tr>
                <td>duration</td>
                <td> - </td>
                <td> integer </td>
                <td>Milliseconds after which Toast disappers</td>
            </tr>
            <tr>
                <td>supportedOrientations</td>
                <td> - </td>
                <td> Potrait, Landscape, Landscape-left, Landscape-right </td>
                <td>Allows the modal to be rotated to any of the specified orientations</td>
            </tr>
            </tbody>
        </table><br />

Note: For Toast to work, it has to be called inside Container.
