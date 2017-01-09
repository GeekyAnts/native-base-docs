<div class="section" id="tabs">

    <h2>Tabs</h2>

    <p style="padding-bottom: 15px;">
        Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
        <i>
            Replacing Component:
            <a href="https://github.com/brentvatne/react-native-scrollable-tab-view">react-native-scrollable-tab-view
                <code>&lt;ScrollableTabView></code>
            </a>
        </i>
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
​
export default class TabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Tabs>
                        &lt;TabOne tabLabel='One' />
                        &lt;TabTwo tabLabel='Two' />
                    &lt;/Tabs>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />

    <b>Configuration</b><br />
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>tabLabel</td>
                <td> - </td>
                <td> - </td>
                <td>Name for each tab</td>
            </tr>
        </tbody>
    </table><br />

</div>
