## fabs-def-headref
## FABs

FABs (Floating Action Buttons) are used for a special type of promoted action. They are distinguished by a circled icon floating above the UI in a fixed position and have special motion behaviors. When clicked, it may contain more related actions.<br />
Replacing Component: React Native [Animated](http://facebook.github.io/react-native/docs/animated.html)

![Preview ios fabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/FAB-single.gif)
![Preview android fabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/FAB-single.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class FABExample extends Component {
  constructor() {
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (  
      &lt;Container>
        &lt;Header />
        &lt;View style=&#123;{ flex: 1 }}>
          &lt;Fab
            active={this.state.active}
            direction="up"
            containerStyle=&#123;{ }}
            style=&#123;{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            &lt;Icon name="share" />
            &lt;Button style=&#123;{ backgroundColor: '#34A34F' }}>
              &lt;Icon name="logo-whatsapp" />
            &lt;/Button>
            &lt;Button style=&#123;{ backgroundColor: '#3B5998' }}>
              &lt;Icon name="logo-facebook" />
            &lt;/Button>
            &lt;Button disabled style=&#123;{ backgroundColor: '#DD5144' }}>
              &lt;Icon name="mail" />
            &lt;/Button>
          &lt;/Fab>
        &lt;/View>
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
                <td>active</td>
                <td>true</td>
                <td>boolean</td>
                <td>Toggle status of FAB</td>
            </tr>
            <tr>
                <td>direction</td>
                <td>up</td>
                <td>
                    up, down, left, right
                </td>
                <td>Direction of buttons that popup on click of FAB</td>
            </tr>
            <tr>
                <td>position</td>
                <td>bottomRight</td>
                <td>
                    topLeft, topRight<br />
                    bottomLeft, bottomRight<br />
                </td>
                <td>Position of FAB on screen</td>
            </tr>
            <tr>
                <td>containerStyle</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Padding options to render FAB</td>
            </tr>
        </tbody>
    </table><br />

## fabs-multiple-headref
#### Multiple FABs

![Preview ios fabs-multiple-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/ios/FAB-multiple.gif)
![Preview android fabs-multiple-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.2/screenshots/android/FAB-multiple.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, View, Fab, Button, Icon } from 'native-base';
​export default class FABMultipleExample extends Component {
  constructor() {
    this.state = {
      active: 'true'
    };
  }
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;View style=&#123;{ flex: 1 }}>
          &lt;Fab
            active={this.state.active}
            direction="up"
            containerStyle=&#123;{ }}
            style=&#123;{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
              ....
            &lt;/Fab>
          &lt;Fab direction="left" position="topRight">
            ....
          &lt;/Fab>
          &lt;Fab direction="down" position="topLeft">
            ....
          &lt;/Fab>
          &lt;Fab direction="right" position="bottomLeft">
            ....
          &lt;/Fab>
        &lt;/View>
      &lt;/Container>
    );
  }
}</code></pre><br />

**Note:** Always prefer to place FAB inside NativeBase `<Container/>`. Placing FAB inside `<Content/>` is not encouraged, as `<Content/>` is an implementation of `<ScrollView/>`.
