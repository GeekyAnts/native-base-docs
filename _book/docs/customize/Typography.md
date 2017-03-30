## Customize Header Tags

Steps to customize theme for Header Tag attributes:


<table class = "table table-hover" style="width: 75%; ">
        <thead>
            <tr>
                <th>Property</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>fontSizeH1</td>
                <td>Font size for H1</td>
            </tr>
            <tr>
                <td>lineHeightH1</td>
                <td>Line height for H1</td>
            </tr>
            <tr>
                <td>fontSizeH2</td>
                <td>Font size for H2</td>
            </tr>
            <tr>
                <td>lineHeightH2</td>
                <td>Line height for H2</td>
            </tr>
            <tr>
                <td>fontSizeH3</td>
                <td>Font size for H3</td>
            </tr>
            <tr>
                <td>lineHeightH3</td>
                <td>Line height for H3</td>
            </tr>
        </tbody>
    </table>


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, H1, H2, H3 } from 'native-base';
import myTheme from './Themes/myTheme';
​
export default class ThemeTypographyExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;H1>Header One&lt;/H1>
                    &lt;H2>Header Two&lt;/H2>
                    &lt;H3>Header Three&lt;/H3>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
