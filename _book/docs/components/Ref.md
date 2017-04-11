# Ref to Components

* NativeBase is built on top of React Native. Hence, the components of NativeBase have respective replacing React Native elements.
* NativeBase has now made it easy for developers, to access the any of its components using <b>ref</b>, along with its associated React Native elements.
* After building your component, you may find yourself wanting to *reach out* and invoke methods on component instances returned from **render()**.
* This can be achieved from **refs**. Refs are a great way to send a message to a particular child instance.
* The **ref** attribute takes a callback function, and the callback will be executed immediately after the component is mounted or unmounted.   


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
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


* <code>this._button</code> gets you the reference of NativeBase Button.   
* <code>this._button._root</code> gets you the reference of NativeBase Button's replacing React Native element i.e., TouchableOpacity.
* This feature is accessible with all of NativeBase components.
