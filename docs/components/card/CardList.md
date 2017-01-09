<div class="section" id="cardList">

    <h4>Card List</h4>

    <p style="padding-bottom: 15px;">
        Include <code>CardItem</code> subsequently within <code>Card</code> to create a card with lists.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Icon } from 'native-base';
​
export default class CardListExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card>
                        &lt;CardItem>
                            &lt;Icon name="logo-googleplus" style=&#123;{ color: '#DD5044' }} />
                            &lt;Text>Google Plus&lt;/Text>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
