<div class="section" id="capitalizeButtonText">

    <h4>Capitalize Button Text</h4>

    <p style="padding-bottom: 15px;">
        To have Button text rendered with uppercase, include <code>capitalize</code> prop.<br />
        <b>Note:</b> This prop is applicable only for Android.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class CapitalizeButtonTextExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // NativeBase default style
                    &lt;Button> Click Me! &lt;/Button>

                    // Using capitalize prop
                    &lt;Button capitalize> Click Me! &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />


</div>
