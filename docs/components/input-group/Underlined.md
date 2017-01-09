<div class="section" id="underlinedTextbox">

    <h4>Underlined Textbox</h4>

    <p style="padding-bottom: 15px;">
        To use the underlined textbox, include the <code>borderType</code> property and assign it with value as <b>underline</b>.
    </p>

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
​
export default class UnderlinedTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>​
                    // Underlined text input box with placeholder text and an icon
                    &lt;InputGroup borderType='underline' >
                        &lt;Icon name='ios-home' style=&#123;{color:'#384850'}}/>
                        &lt;Input placeholder='Type your text here' />
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
