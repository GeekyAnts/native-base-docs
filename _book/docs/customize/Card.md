## Customize Card

Steps to customize theme for Card attributes:
<br />


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../docs/assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../docs/assets/ios/guide/theme-card.png')}}" alt="" /></div></th>
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

#### With Card theme

With this theme of Card component you can modify any style rules applied to the default Card component.

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Card, CardItem, Text, Body, StyleProvider } from 'native-base';
import CardTheme from './Themes/CardTheme';
​// CardTheme is the customized theme of Badge Component
​
export default class ThemeCardExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;StyleProvider style={CardTheme()}>
                    &lt;Card>
                        &lt;CardItem>
                            &lt;Body>
                                &lt;Text>
                                    NativeBase is a free and open source framework that enables
                                    developers to build high-quality mobile apps using React Native
                                    iOS and Android apps with a fusion of ES6.
                                &lt;/Text>
                            &lt;/Body>
                        &lt;/CardItem>
                    &lt;/Card>
                    &lt;/StyleProvider>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>


#### With Variables

With the <code>variable.js</code> file you can modify the variable values passed to the theme of the Card component.<br />
Say backgroundColor of <code>cardDefaultBg</code> of the Card.

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react-native';
import { Container, Content, Card, CardItem, Text, StyleProvider, getTheme } from 'native-base';
import customVariables from './Themes/variable';
​// getTheme is default theme of NativeBase Components
// customVariables is customized variables used in the components theme
​
export default class ThemeCardExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;StyleProvider style={getTheme(customVariables)}>
                    &lt;Card>
                        &lt;CardItem>
                            &lt;Body>
                                &lt;Text>
                                    NativeBase is a free and open source framework that enables
                                    developers to build high-quality mobile apps using React Native
                                    iOS and Android apps with a fusion of ES6.
                                &lt;/Text>
                            &lt;/Body>
                        &lt;/CardItem>
                    &lt;/Card>
                    &lt;/StyleProvider>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
