<div class="section" id="disabledTextbox" >

    <h4>Disabled Textbox</h4>

    <p style="padding-bottom: 15px;">
        To restrict inputting data into textbox, include the <code>disabled</code> prop with <code>&lt;InputGroup></code>.
    </p>

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, InputGroup, Input, Icon } from 'native-base';
​
export default class DisabledTextboxExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;InputGroup iconRight disabled>
                        &lt;Icon name='ios-information-circle' style=&#123;{color: '#384850'}}/>
                        &lt;Input placeholder='Disabled Textbox'/>
                    &lt;/InputGroup>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

</div>
