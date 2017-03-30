#### Card List

Include <code>CardItem</code> subsequently within <code>Card</code> to create a card with lists.


![Preview ios Card_List](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/ios/CardList.png)
![Preview android Card_List](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/master/screenshots/android/cardList.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base/ui';
​
export default class CardListExample extends Component {
    render() {
        return (
            &lt;Container>
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
