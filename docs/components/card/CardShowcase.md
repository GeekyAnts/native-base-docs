<div class="section" id="cardShowcase">

    <h4>Card Showcase</h4>

    <p>
        Card Showcase is further customization of Card Image. It uses several different items.
        <ul style="padding-bottom: 15px;">
            <li>
                Begins with the Card List component, which is similar to out List Avatar.
            </li>
            <li>
                <code>cardBody</code> prop for images and text.
            </li>
        </ul>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
​
export default class CardShowcaseExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card style=&#123;{ flex: 0 }}>
                        &lt;CardItem>
                            &lt;Thumbnail source={require('./img/NB-logo.png')} />
                            &lt;Text>NativeBase&lt;/Text>
                            &lt;Text note>April 15, 2016&lt;/Text>
                        &lt;/CardItem>

                        &lt;CardItem cardBody>
                            &lt;Image style=&#123;{ resizeMode: 'cover' }} source={require('./img/card-showcase.png')} />
                            &lt;Text>
                                //Your text here
                            &lt;/Text>
                            &lt;Button transparent textStyle=&#123;{color: '#87838B'}}>
                                &lt;Icon name="logo-github" />
                                &lt;Text>1,926 stars&lt;/Text>
                            &lt;/Button>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
