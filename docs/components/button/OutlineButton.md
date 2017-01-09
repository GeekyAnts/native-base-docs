<div class="section" id="outlineButton">

    <h4>Outline Button</h4>

    <p style="padding-bottom: 15px;">
        Include <code>bordered</code> prop with Button to apply outline button style.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class OutlineButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button bordered> Primary &lt;/Button>
                    &lt;Button bordered success> Success &lt;/Button>
                    &lt;Button bordered info> Info &lt;/Button>
                    &lt;Button bordered warning> Warning &lt;/Button>
                    &lt;Button bordered danger> Danger &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />


</div>
