# Migration from 0.x to 2.x

### Steps for Migrating NativeBase from v0.x to v2.x

1. Upgrade NativeBase to `2.0.0-alpha1` in `package.json` like this
    ```
    "native-base": "2.0.0-alpha1"
    ```

2. The core of NativeBase has been re-written with NativeBase 2.0 and the use-cases have also changed but you can continue using the old style of using the components by importing the components from 'native-base/backward'

    ```
import { Header, Content, ... } from 'native-base/backward'.
    ```

3. If you have overwritten the styles of NativeBase components in your project using <code>StyleSheet.create()</code>, modify them to plain JavaScript objects. `StyleSheet.create()` is redundant as it's been called in the source of NativeBase components itself.

4. If you have modified the theme (using `variables.js`) then you need to follow these steps

    * You may use the existing `variables.js` file in your project but we have added more variables. You can diff the latest  [<code>variable.js</code>](https://github.com/GeekyAnts/NativeBase/blob/v2.0-alpha1/theme/variables.js) and copy the newly introduced variables to your `variables.js` file

    * We used to overwrite the default variables of NativeBase using a `theme` prop in any of the NativeBase component. *`theme` prop has been deprecated with NativeBase 2.0*. To apply a custom theme, now you need to wrap your app with a  `<StyleProvider>` component and pass the `variables.js` as

    ```
    import varirables from './variables'; // From your project

    import { StyleProvider, getTheme } from 'native-base';

    ...

    <StyleProvider style={getTheme(variables)}>
        ...
    </StyleProvider>
    ```


*General Syntax to apply theme*

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

*General Syntax to overwrite default styles*

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
