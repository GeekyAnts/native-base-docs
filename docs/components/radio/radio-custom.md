## custom-radio-headref
## Custom Radio Button


![Preview ios custom-radio-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/radio-custom.png)
![Preview android custom-radio-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/radio-custom.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
export default class CustomRadioButtonExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;ListItem selected={false} >
            &lt;Left>
              &lt;Text>Lunch Break&lt;/Text>
            &lt;/Left>
            &lt;Right>
              &lt;Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={false}
              />
            &lt;/Right>
          &lt;/ListItem>
          &lt;ListItem selected={true}>
            &lt;Left>
              &lt;Text>Discussion with Client&lt;/Text>
            &lt;/Left>
            &lt;Right>
              &lt;Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={true}
              />
            &lt;/Right>
          &lt;/ListItem>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />

