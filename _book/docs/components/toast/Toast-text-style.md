## toast-text-style-headref
#### Toast text style

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Title, Content, Text, Button, Icon, Left, Right, Body, Toast } from "native-base";
export default class ToastText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    };
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
            &lt;Title>Toast Text Style&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
        &lt;Content padder>
          &lt;Button
            onPress={() =>
              Toast.show({
                text: "Wrong password!",
                textStyle: { color: "yellow" },
                buttonText: "Okay"
              })}
          >
            &lt;Text>Toast&lt;/Text>
          &lt;/Button>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
