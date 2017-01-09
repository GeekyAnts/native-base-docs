<div class="section" id="buttonSize">

    <h4>Button Size</h4>

    <p>
        Want to have buttons of fancy size?<br />
        Include the following props with your <code>Button</code>.
        <ul style="padding-bottom: 15px;">
            <li>
                <code>small</code>: for small size button.
            </li>
            <li>
                <code>large</code>: for large size button.
            </li>
        </ul>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class ButtonSizeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    //Small size button
                    &lt;Button small primary> Primary &lt;/Button>

                    //Regular size button
                    &lt;Button success> Success &lt;/Button>

                    //Large size button
                    &lt;Button large info> Info &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
