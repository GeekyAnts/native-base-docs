## Customize Badge

Steps to customize theme for Badge attributes:
<br />

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/guide/theme-badge.png')}}" alt="" /></div></th>
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
                <td>badgeColor</td>
                <td>Badge text color</td>
            </tr>
            <tr>
                <td>badgeBg</td>
                <td>Badge background color</td>
            </tr>
        </tbody>
    </table>


#### With Badge theme

With this theme of Badge component you can modify any style rules applied to the default Badge component.

*Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Badge, StyleProvider } from 'native-base';
import badgeTheme from './Themes/badgeTheme';
​// badgeTheme is the customized theme of Badge Component

export default class ThemeBadgeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;StyleProvider style={badgeTheme()}>
                        &lt;Badge>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge primary>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge success>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge info>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge warning>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge danger>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                    &lt;/StyleProvider>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>


#### With Variables

With the <code>variable.js</code> file you can modify the variable values passed to the theme of the Badge component.<br />
Say color of <code>badgeColor</code> of the Text in Badge.

*Syntax*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Badge, Text, StyleProvider, getTheme } from 'native-base';
import customVariables from './Themes/variable';
​// getTheme is default theme of NativeBase Components
// customVariables is customized variables used in the components theme

export default class ThemeBadgeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;StyleProvider style={getTheme(customVariables)}>
                        &lt;Badge>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge primary>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge success>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge info>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge warning>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                        &lt;Badge danger>
                            &lt;Text>2&lt;/Text>
                        &lt;/Badge>
                    &lt;/StyleProvider>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
