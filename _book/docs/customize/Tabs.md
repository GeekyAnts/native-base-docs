## Customize Tabs

Steps to customize theme for Tab attributes:
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/guide/theme-tabs.png')}}" alt="" /></div></th>
    </tr>
  </thead>
</table>

<table class = "table table-hover" style="width: 75%; ">
        <thead>
            <tr>
                <th>Property</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>tabBgColor</td>
                <td>Background color for Tabs</td>
            </tr>
            <tr>
                <td>tabTextColor</td>
                <td>Text color for Tabs</td>
            </tr>
            <tr>
                <td>tabFontSize</td>
                <td>Font size of text on Tabs</td>
            </tr>
        </tbody>
    </table>


*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';
import myTheme from './Themes/myTheme';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
​
export default class ThemeTabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content theme={myTheme}>
                    &lt;Tabs>
                        &lt;TabOne tabLabel='One' />
                        &lt;TabTwo tabLabel='Two' />
                    &lt;/Tabs>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
