<div class="section" id="regularTextbox" >

    <h4>Regular Textbox</h4>

    <p style="padding-bottom: 15px;">
        To use the regular textbox which is rectangular in shape, include the <code>borderType</code> property and assign it with value as <b>regular</b>.
    </p>

    <i>Syntax</i>        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input } from 'native-base';
​
export default class RegularTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>​
                    // Simple rectangular text input box
                    &lt;InputGroup borderType='regular' >
                        &lt;Input placeholder='Type your text here'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
