## fabs-def-headref
## FABs

FABs (Floating Action Buttons) are used for a special type of promoted action. They are distinguished by a circled icon floating above the UI in a fixed position and have special motion behaviors. When clicked, it may contain more related actions.<br />
Replacing Component: React Native [Animated](http://facebook.github.io/react-native/docs/animated.html)

![Preview ios fabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/FAB-single.gif)
![Preview android fabs-def-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/FAB-single.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, View, Button, Icon, Fab } from 'native-base';
export default class FABExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (  
      <Container>
        <Header />
        {% raw %}<View style={{ flex: 1 }}>{% endraw %}
          <Fab
            active={this.state.active}
            direction="up"
            {% raw %}containerStyle={{ }}{% endraw %}
            {% raw %}style={{ backgroundColor: '#5067FF' }}{% endraw %}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            {% raw %}<Button style={{ backgroundColor: '#34A34F' }}>{% endraw %}
              <Icon name="logo-whatsapp" />
            </Button>
            {% raw %}<Button style={{ backgroundColor: '#3B5998' }}>{% endraw %}
              <Icon name="logo-facebook" />
            </Button>
            {% raw %}<Button disabled style={{ backgroundColor: '#DD5144' }}>{% endraw %}
              <Icon name="mail" />
            </Button>
          </Fab>
        </View>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
      <view :style="{flex: 1}">
        <nb-fab 
          :active="isFabIconActive" 
          :onPress="handleFabIconPress"
          direction="up"
          position="bottomRight"
        >
          <nb-icon-nb name="md-share"></nb-icon-nb>
          <nb-button :style="{backgroundColor: '#34A34F'}">
            <nb-icon-nb name="logo-whatsapp"></nb-icon-nb>
          </nb-button>
          <nb-button :style="{backgroundColor: '#3B5998'}">
            <nb-icon-nb name="logo-facebook"></nb-icon-nb>
          </nb-button>
          <nb-button :style="{backgroundColor: '#DD5144'}">
            <nb-icon-nb name="ios-mail"></nb-icon-nb>
          </nb-button>
        </nb-fab>
      </view>
  </nb-container>
</template>
<script>
export default {
  data: function() {
    return {
      isFabIconActive: false,
      stylesObj: {
        fabContainer: {
          position: "bottomRight"
        }
      }
    };
  },
  methods: {
    handleFabIconPress: function() {
      this.isFabIconActive = !this.isFabIconActive;
    }
  }
};
</script>
{%- endcodetabs %}
<br />

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
    </table>
     <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/FAB-single.gif" alt="" style="display:block !important" />
    </div>
</p>
    <br />

## fabs-multiple-headref
#### Multiple FABs

![Preview ios fabs-multiple-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/FAB-multiple.gif)
![Preview android fabs-multiple-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/FAB-multiple.gif)

*Syntax*

{% codetabs name="React Native", type="js" -%}
import React, { Component } from 'react';
import { Container, Header, View, Fab, Button, Icon } from 'native-base';
​export default class FABMultipleExample extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  render() {
    return (
      <Container>
        <Header />
        {% raw %}<View style={{ flex: 1 }}>{% endraw %}
          <Fab
            active={this.state.active}
            direction="up"
            {% raw %}containerStyle={{ }}{% endraw %}
            {% raw %}style={{ backgroundColor: '#5067FF' }}{% endraw %}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
              ....
            </Fab>
          <Fab direction="left" position="topRight">
            ....
          </Fab>
          <Fab direction="down" position="topLeft">
            ....
          </Fab>
          <Fab direction="right" position="bottomLeft">
            ....
          </Fab>
        </View>
      </Container>
    );
  }
}
{%- language name="Vue Native", type="vue" -%}
<template>
  <nb-container>
    <nb-header />
    <view :style="{flex: 1}">
      <nb-fab 
        :active="isFabIconActive" 
        :onPress="isFabIconActive"
        direction="up"
        position="bottomRight"
      >
        . . .
      </nb-fab>
      <nb-fab  direction="left" position="topRight">
        . . .
      </nb-fab> 
      <nb-fab  direction="down" position="topLeft">
        . . .
      </nb-fab>
      <nb-fab direction="right" position="bottomLeft">
        . . .
      </nb-fab>
    </view>
  </nb-container>
</template>

<script>
export default {
  data: function() {
    return {
      isFabIconActive1: true,
    };
  }
};
</script>
{%- endcodetabs %}
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/FAB-multiple.gif" alt="" style="display:block !important" />
    </div>
</p>
<br />


**Note:** Always prefer to place FAB inside NativeBase `<Container/>`. Placing FAB inside `<Content/>` is not encouraged, as `<Content/>` is an implementation of `<ScrollView/>`.
