##dynamic-card-headref
#### Dynamic Card

A center aspect designed for efficient representation of vertically scrolling lists of changing data. This can be achieved with the concept of <b>dataArray</b>.<br />
Create a <code>Card dataArray</code>, populate it with an easy array of data chunks, and instantiate a <code>CardItem</code> component with that chunk of data and a <code>renderRow</code> callback which takes a chunk from the whole data array and returns a renderable component.

![Preview ios Dynamic_Card](https://docs-v2.nativebase.io/docs/assets/ios/components/dynamic-card.png)
![Preview android Dynamic_Card](https://docs-v2.nativebase.io/docs/assets/android/components/dynamic-card.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Icon, Text, Right } from "native-base";
const items = [
  {
    iconName: "logo-googleplus",
    text: "Google Plus"
  },
  {
    iconName: "logo-facebook",
    text: "Facebook"
  },
  {
    iconName: "logo-twitter",
    text: "Twitter"
  },
  {
    iconName: "logo-reddit",
    text: "Reddit"
  },
  {
    iconName: "logo-linkedin",
    text: "LinkedIn"
  },
];
export default class DynamicCardExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Card
            dataArray={items}
            renderRow={item =>
              &lt;CardItem button>
                &lt;Icon active name={item.iconName} />
                &lt;Text>{item.text}&lt;/Text>
                &lt;Right>
                  &lt;Icon name="arrow-forward" style=&#123;{ color: "#999" }} />
                &lt;/Right>
              &lt;/CardItem>
            }
          />
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
