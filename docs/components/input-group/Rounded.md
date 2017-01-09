<div class="section" id="roundedTextbox" >

    <h4>Rounded Textbox</h4>

    <p style="padding-bottom: 15px;">
        To have a textbox with round type border, include the <code>borderType</code> property and assign it with value as <b>rounded</b>.
    </p>

    <i>Syntax</i>        
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
​
export default class RoundedTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // Rounded text input box with icon
                    &lt;InputGroup borderType='rounded' >
                        &lt;Icon name='ios-home' style=&#123;{color:'#384850'}}/>
                        &lt;Input placeholder='Type your text here'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
