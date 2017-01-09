<div class="section" id="roundedButton">

    <h4>Rounded Button</h4>

    <p style="padding-bottom: 15px;">
        Include <code>rounded</code> prop with <code>Button</code> to easily style your buttons.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class RoundedButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button rounded> Primary &lt;/Button>
                    &lt;Button rounded success> Success &lt;/Button>
                    &lt;Button rounded info> Info &lt;/Button>
                    &lt;Button rounded warning> Warning &lt;/Button>
                    &lt;Button rounded danger> Danger &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />


</div>
