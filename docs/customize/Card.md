<div class="section" id="themeCard">

    <h3>Customize Card</h3>

    <p style="padding-bottom: 10px;">
        Steps to customize theme for Card attributes:
    </p>

    <table class = "table table-hover" style="width: 75%; ">
        <thead>
            <tr>
                <th>Property</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>cardDefaultBg</td>
                <td>Background color for card item</td>
            </tr>
            <tr>
                <td>listBorderColor</td>
                <td>Card and CardItem border color</td>
            </tr>
            <tr>
                <td>listItemPadding</td>
                <td>Padding between card items</td>
            </tr>
        </tbody>
    </table>

    <i>Syntax</i>
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Card, CardItem, Text } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeCardExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;Card>
                        &lt;CardItem>
                            &lt;Text>
                                NativeBase is a free and open source framework that enables
                                developers to build high-quality mobile apps using React Native
                                iOS and Android apps with a fusion of ES6.
                            &lt;/Text>
                        &lt;/CardItem>
                    &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />


</div>
