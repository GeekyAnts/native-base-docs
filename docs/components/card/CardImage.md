<div class="section" id="cardImage">

    <h4>Card Image</h4>

    <p style="padding-bottom: 15px;">
        Want to have something more with Card Lists? <br />
        Include image with <code>CardItem</code> within <code>Card</code> along with some text before and after image to create a card with lists. <br />
        Here is your Card Image ready !
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
​
export default class CardImageExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card style=&#123;{ flex: 0 }}>
                        &lt;CardItem>
                            &lt;Thumbnail source={require('./img/NB-logo.png')} />
                            &lt;Text>NativeBase&lt;/Text>
                            &lt;Text note>GeekyAnts&lt;/Text>
                        &lt;/CardItem>

                        &lt;CardItem>
                            &lt;Image style=&#123;{ resizeMode: 'cover', width: null }} source={require('./img/card-image.png')} />
                        &lt;/CardItem>

                        &lt;CardItem>
                            &lt;Button transparent>
                                &lt;Icon name="logo-github" />
                                1,926
                            &lt;/Button>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
</div>
