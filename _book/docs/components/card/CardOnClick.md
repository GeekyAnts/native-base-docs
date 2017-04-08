#### Card OnClick

To navigate between screens on click of a card, include <code>button</code> prop with the <code>&lt;CardItem></code> component.

![Preview ios Card_OnClick](../docs/assets/ios/components/card-onclick.gif)
![Preview android Card_OnClick](../docs/assets/android/components/card-onclick.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Thumbnail } from 'native-base';
export default class CardOnClickExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card>
                        &lt;CardItem button onPress={function_call()}>
                            &lt;Thumbnail source={require('./img/NSP.png')} />
                            &lt;Text>Native Starter Pro&lt;/Text>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
