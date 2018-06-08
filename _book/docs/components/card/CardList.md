##card-list-headref
#### Card List

Include <code>CardItem</code> subsequently within <code>Card</code> to create a card with lists.


![Preview ios card-list-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/card-list.png)
![Preview android card-list-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/card-list.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Icon, Right } from 'native-base';
export default class CardListExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header />
        &lt;Content>
          &lt;Card>
            &lt;CardItem>
              &lt;Icon active name="logo-googleplus" />
              &lt;Text>Google Plus&lt;/Text>
              &lt;Right>
                &lt;Icon name="arrow-forward" />
              &lt;/Right>
             &lt;/CardItem>
           &lt;/Card>
        &lt;/Content>
      &lt;/Container>
    );
  }
}</code></pre><br />
