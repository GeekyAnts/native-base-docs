# Footer Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

![Preview ios Footer_Tabs](../docs/assets/ios/components/footer-tabs.png)
![Preview android Footer_Tabs](../docs/assets/android/components/footer-tabs.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base/ui';
​
export default class FooterTabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content />
                &lt;Footer >
                    &lt;FooterTab>
                        &lt;Button>
                            &lt;Text>Apps&lt;/Text>
                        &lt;/Button>
                        &lt;Button>
                            &lt;Text>Camera&lt;/Text>
                        &lt;/Button>
                        &lt;Button active>
                            &lt;Text>Navigate&lt;/Text>
                        &lt;/Button>
                        &lt;Button>
                            &lt;Text>Contact&lt;/Text>
                        &lt;/Button>
                    &lt;/FooterTab>
                &lt;/Footer>
            &lt;/Container>
        );
    }
}</code></pre><br />


**Configuration**

<table class = "table table-bordered">
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
                <td>badgeValue</td>
                <td>-</td>
                <td>user-defined</td>
                <td>
                    Represents the value in badge.
                </td>
            </tr>
            <tr>
                <td>badgeColor</td>
                <td>-</td>
                <td>primary</td>
                <td>
                    Background color for badge.
                </td>
            </tr>
            <tr>
                <td>badgeValueStyle</td>
                <td>-</td>
                <td>-</td>
                <td>
                    Style for value in badge.
                </td>
            </tr>
        </tbody>
    </table><br />
