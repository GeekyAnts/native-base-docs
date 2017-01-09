<div class="section" id="header">
    <h2>Header</h2>

    <p>
        <ul style="padding-bottom: 15px;">
            <li>
                <a href="http://nativebase.io/">NativeBase</a> component that renders as Header (navbar) for your screen.
            </li>
            <li>There can be a single Header component into your Container.</li>
            <li>
                To have Header for your screen, include <code>&lt;Header></code> component within <code>&lt;Container></code>.
            </li>
            <li>
                NativeBase gives you flexibility to define your <code>Header</code> component anywhere in the bounds of Container.
            </li>
            <li>
                Header takes input as: Button and Title (Text)
            </li>
            <li>
                The components those are defined within <code>&lt;Header></code> will be rendered in the same order that you define them.
            </li>
            <li>Header provides you with stylesheet.</li>
            <li>
                User can add custom styles while defining <code>&lt;Header></code> within their app.
            </li>
            <li>
                <i>
                    Replacing Component:
                    <a href="https://facebook.github.io/react-native/">React Native</a>
                    <a href="https://facebook.github.io/react-native/docs/view.html">
                        <code>&lt;View></code>
                    </a>
                </i>
            </li>
        </ul>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Title, Button, Icon } from 'native-base';
​
export default class HeaderExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Header>
                    &lt;Button transparent>
                        &lt;Icon name='ios-arrow-back' />
                    &lt;/Button>

                    &lt;Title>Header&lt;/Title>

                    &lt;Button transparent>
                        &lt;Icon name='ios-menu' />
                    &lt;/Button>
                &lt;/Header>
            &lt;/Container>
        );
    }
}</code></pre><br />

    <b>Configuration</b><br />
    <table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>backgroundColor</td>
                <td>
                    iOS: #F8F8F8<br />
                    Android: #039BE5
                </td>
                <td>user-defined</td>
                <td>Background color for header</td>
            </tr>
            <tr>
                <td>height</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Height for header</td>
            </tr>
        </tbody>
    </table><br />

</div>
