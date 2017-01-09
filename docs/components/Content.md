<div>

    <h2>Content</h2>

    <p>
        <ul style="padding-bottom: 15px;">
            <li>
                This is a <a href="http://nativebase.io/">NativeBase</a> component which renders as <b>body</b> element of your screen.
            </li>
            <li>
                Each screen can have only one <code>&lt;Content></code> component and can be defined anywhere within the Container.
            </li>
            <li>
                Content takes in the whole collection of <a href="https://facebook.github.io/react-native/">React Native</a> and NativeBase components.
            </li>
            <li>Content provides you with stylesheet.</li>
            <li>
                User can add custom styles while defining <code>&lt;Content></code> within their app.
            </li>
            <li>
                <i>
                    Replacing Component:
                    <a href="https://github.com/APSL/react-native-keyboard-aware-scroll-view">
                        React Native Keyboard Aware Scroll View's <code>&lt;KeyboardAwareScrollView></code>
                    </a>
                </i>
            </li>
        </ul>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content } from 'native-base';
​
export default class ContentExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    // Your main content goes here
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />


</div>
