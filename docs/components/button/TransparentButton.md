<div class="section" id="transparentButton">

    <h4>Transparent Button</h4>

    <p style="padding-bottom: 15px;">
        Include <code>transparent</code> prop with Button. This will render button without border and background color.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class TransparentButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button transparent> Primary &lt;/Button>
                    &lt;Button transparent>
                        &lt;Icon name='ios-home' style=&#123;{fontSize: 20, color: '#00c497'}} />
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />


</div>
