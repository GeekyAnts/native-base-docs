# Migration to v2.x

NativeBase2.0 uses [<code>connectStyle</code>](/docs/customize/customComponent.md#connectStyle) and [<code>StyleProvider</code>](/docs/customize/customComponent.md#connectStyle) *inspired from [@shoutem/theme](https://github.com/shoutem/theme) and [@shoutem/ui](https://github.com/shoutem/ui) by [shoutem](http://www.shoutem.com/)*
Using <code>connectStyle</code> NativeBase components have been made more customizable.
Now you can use <code>StyleProvider</code> component to apply your own custom theme*(style rules)* or modify the variables used in the theme for any components.

#### Instructions for Migrating NativeBase from v0.x to v2.x

* Upgrade NativeBase to v2.0.0-alpha.
* import { NativeBase components, getTheme } from 'native-base/backward'.
* If you have style for the NativeBase components created using the <code>StyleSheet.create</code>, modify them to object. Style Sheet is created by the <code>connectStyle</code> function at appropriate time.
* Copy the [<code>variable.js</code>](https://github.com/GeekyAnts/NativeBase/blob/v2.0-alpha1/theme/variables.js) file, which is only the variable values passed to the components theme i.e., <code>variable.js</code> and do the required changes or add the newly added variables from there to your <code>variable.js</code> file.
* Wrap the components with <code>&lt;StyleProvider></code> to which you have applied the previous theme as prop to  <code>&lt;Container></code> or <code>&lt;Content></code>.
* Now pass the <code>variable.js</code> file as a parrameter to the [<code>getTheme(theme)</code>](https://github.com/GeekyAnts/NativeBase/tree/v2.0-alpha1/theme) function to the style property of <code>&lt;StyleProvider></code>.


*General Syntax*

<pre class="line-numbers"><code class="language-jsx">import {Container, Content, Text, StyleProvider, getTheme} from 'native-base/backward';
import React, {Component} from 'react-native';
import variable from './Themes/variable';
​
export default class ThemeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;StyleProvider  style={getTheme(variable)}>
                    &lt;Content>
                        &lt;Text>
                            I have changed the text color.
                        &lt;/Text>
                    &lt;/Content>
                &lt;/StyleProvider>
            &lt;/Container>
        );
    }
}</code></pre>

#### Styles to the Component

*General Syntax of <code>style.js</code> object*

<pre class="line-numbers"><code class="language-jsx">export default {
  container: {
    backgroundColor: '#FBFAFA',
  },
  text: {
    color: 'red',
  },
}</code></pre>

*General Syntax*

<pre class="line-numbers"><code class="language-jsx">import {Container, Content, Text, getTheme} from 'native-base/backward';
import React, {Component} from 'react-native';
// Style object import
import styles from './style';
​
export default class ThemeExample extends Component {
    render() {
        return (
            &lt;Container style={styles.container}>
                  &lt;Content>
                      &lt;Text style={styles.text}>
                          I have changed the text color.
                      &lt;/Text>
                  &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
