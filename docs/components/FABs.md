<div class="section" id="fab">

    <h2>FABs</h2>

    <p style="padding-bottom: 15px;">
        FABs (Floating Action Buttons) are used for a special type of promoted action. They are distinguished by a circled icon floating above the UI in a fixed position and have special motion behaviors. When clicked, it may contain more related actions.<br />

        <i>
            Replacing Component:
            <a href="https://facebook.github.io/react-native/">React Native</a>
            <a href="http://facebook.github.io/react-native/docs/animated.html">
                <code>&lt;Animated></code>
            </a>
        </i>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Icon, Fab } from 'native-base';
​
export default class FABExample extends Component {
    constructor() {
        this.state = {
            active: 'true'
        };
    }

    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Fab
                        active={this.state.active}
                        direction="right"
                        containerStyle=&#123;{ marginLeft: 10 }}
                        style=&#123;{ backgroundColor: '#5067FF' }}
                        position="topLeft"
                        onPress={() => this.setState({ active: !this.state.active })}
                    >
                        &lt;Icon name="md-share" />
                        &lt;Button style=&#123;{ backgroundColor: '#34A34F' }}>
                            &lt;Icon name="logo-whatsapp" />
                        &lt;/Button>
                        &lt;Button style=&#123;{ backgroundColor: '#3B5998' }}>
                            &lt;Icon name="logo-facebook" />
                        &lt;/Button>
                        &lt;Button disabled style=&#123;{ backgroundColor: '#DD5144' }}>
                            &lt;Icon name="ios-mail" />
                        &lt;/Button>
                    &lt;/Fab>
                &lt;/Content>
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
                <th width="50%">
                    Description
                </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>active</td>
                <td> - </td>
                <td>
                    true<br />
                    false
                </td>
                <td>
                    Toggle status of FAB
                    <font size="2">
                        <i>
                            (initial status)
                        </i>
                    </font>
                </td>
            </tr>
            <tr>
                <td>direction</td>
                <td>up</td>
                <td>
                    up, down, left, right
                </td>
                <td>Direction of Buttons that popup on click of FAB.</td>
            </tr>
            <tr>
                <td>containerStyle</td>
                <td> - </td>
                <td>user-defined</td>
                <td>Padding options to render FAB.</td>
            </tr>
            <tr>
                <td>style</td>
                <td> - </td>
                <td>user-defined</td>
                <td>User defined styles.</td>
            </tr>
            <tr>
                <td>position</td>
                <td>bottomRight</td>
                <td>
                    topLeft, topRight<br />
                    bottomLeft, bottomRight<br />
                </td>
                <td>Position of FAB on screen.</td>
            </tr>
            <tr>
                <td>onPress</td>
                <td> - </td>
                <td>user-defined</td>
                <td>
                    Toggle status of FAB
                    <font size="2">
                        <i>
                            (negated value of initial status)
                        </i>
                    </font>
                </td>
            </tr>
        </tbody>
    </table><br />


</div>
