<div class="section" id="ref">

    <h2>Ref to Components</h2>

    <p style="padding-bottom: 15px;">
        <ul>
            <li>
                NativeBase is built on top of React Native. Hence, the components of NativeBase have respective replacing React Native elements.
            </li>
            <li>
                NativeBase has now made it easy for developers, to access the any of its components using <b>ref</b>, along with its associated React Native elements.
            </li>
            <li>
                After building your component, you may find yourself wanting to <i>reach out</i> and invoke methods on component instances returned from <b>render()</b>.
            </li>
            <li>
                This can be achieved from <b>refs</b>. Refs are a great way to send a message to a particular child instance.
            </li>
            <li>
                The <b>ref</b> attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.   
            </li>
        </ul>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class RefExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button ref={ (c) => this._button = c }>
                        Click Me
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

    <p>
        <ul>
            <li>
                <code>this._button</code> gets you the reference of NativeBase Button.   
            </li>
            <li>
                <code>this._button._root</code> gets you the reference of NativeBase Button's replacing React Native element i.e., TouchableOpacity.
            </li>
            <li>
                This feature is accessible with all of NativeBase components.
            </li>
        </ul>
    </p>


</div>
