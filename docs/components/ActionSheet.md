## ActionSheet

NativeBase ActionSheet is a wrapper around the React Native [ActionSheetIOS](http://facebook.github.io/react-native/releases/0.44/docs/actionsheetios.html) component.

![Preview ios ActionSheet](https://docs.nativebase.io/docs/assets/ios/components/actionsheet.gif)
![Preview android ActionSheet](https://docs.nativebase.io/docs/assets/android/components/actionsheet.gif)

*General Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Button, Body, Title, Icon, Right, Content, ActionSheet, Text } from 'native-base';
var BUTTONS = [
  'Option 0',
  'Option 1',
  'Option 2',
  'Delete',
  'Cancel',
];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;
export default class ActionSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left>
            &lt;Button transparent>
              &lt;Icon name="heart" size={20} color='red' />
            &lt;/Button>
          &lt;/Left>
          &lt;Body>
            &lt;Title>Hello&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content padder>
          &lt;Button onPress={()=> ActionSheet.show(
            {
              options: BUTTONS,
              cancelButtonIndex: CANCEL_INDEX,
              destructiveButtonIndex: DESTRUCTIVE_INDEX,
              title: 'Testing ActionSheet'
            },
            (buttonIndex) => {
              this.setState({ clicked: BUTTONS[buttonIndex] });
            }
            )}>&lt;Text>Actionsheet&lt;/Text>&lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />

Note: *The use case is similar to RN's ActionSheetIOS.*
