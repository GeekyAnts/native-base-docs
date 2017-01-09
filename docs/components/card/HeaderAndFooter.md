<div class="section" id="cardHeaderAndFooter">

    <h4>Card Header and Footer</h4>

    <p>
        To add an optional header and/or footer within a card, include <code>header</code> prop with the <code>CardItem</code>.<br />
        <ul style="padding-bottom: 15px;">
            <li>
                <b>Card Header</b>: Include <code>header</code> prop with first instance of CardItem within Card.
            </li>
            <li>
                <b>Card Footer</b>: Include <code>header</code> prop with last instance of CardItem within Card.
            </li>
        </ul>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text } from 'native-base';
​
export default class CardHeaderFooterExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card>
                        &lt;CardItem header>
                            &lt;Text>NativeBase&lt;/Text>
                        &lt;/CardItem>

                        &lt;CardItem>
                            &lt;Text>
                                //Your text here
                            &lt;/Text>
                        &lt;/CardItem>

                        &lt;CardItem header>
                            &lt;Text>GeekyAnts&lt;/Text>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
