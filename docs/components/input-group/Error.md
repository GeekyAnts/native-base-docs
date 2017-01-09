<div class="section" id="errorInputTextbox" >

    <h4>Error Input Textbox</h4>

    <p style="padding-bottom: 15px;">
        To display textbox with invalid data, include the <code>error</code> prop with <code>&lt;InputGroup></code>.
    </p>

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
​
export default class ErrorInputTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;InputGroup iconRight error>
                        &lt;Icon name='ios-close-circle' style=&#123;{color:'red'}}/>
                        &lt;Input placeholder='Textbox with Error Input'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
</div>
