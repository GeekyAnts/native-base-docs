<div class="section" id="blockButton">

    <h4>Block Button</h4>

    <p style="padding-bottom: 15px;">
        A block level button spans the entire width of the parent element.
        Create block level buttons by adding <code>block</code> prop with the <code>Button</code>.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class BlockButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button block> Primary &lt;/Button>
                    &lt;Button block success> Success &lt;/Button>
                    &lt;Button block info> Info &lt;/Button>
                    &lt;Button block warning> Warning &lt;/Button>
                    &lt;Button block danger> Danger &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
