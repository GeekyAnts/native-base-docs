## theaming-nb-headref
## Setup to theme NativeBase apps

To setup a customized theme with your app, you should first eject NativeBase theme, which creates a copy of the NativeBase theme at the root of your project. Now, you are ready to have fun customizing your theme for the app.

* Run this command from your terminal after installing native-base:

    `node node_modules/native-base/ejectTheme.js`

* When you run the above command, a folder named **native-base-theme** gets copied to your project root. Inside the directory are two folders named `components` and `variables`.
* All of the theme files and variables get added to your project root so you can modify them directly to customize your theme.
* Wrap the code or component to which you want to apply the theme with **StyleProvider**.
* Pass a variable (i.e. `material`, `platform` or `commonColors`) as a parameter of the theme function, which is passed as a value to the `style` prop of the **StyleProvider** component.
* The theme you pass should be a function, i.e `getTheme()`

Now your project is ready for theme customization.

*Syntax to add Material Design*
<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Text, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
​export default class ThemeExample extends Component {
  render() {
    return (
      &lt;StyleProvider style={getTheme(material)}>
        &lt;Container>
          &lt;Content>
            &lt;Text>
              I have changed the text color.
            &lt;/Text>
          &lt;/Content>
        &lt;/Container>
      &lt;/StyleProvider>
    );
  }
}</code></pre><br />

* The <code>&lt;StyleProvider></code> theme can be applied to any component of NativeBase.
* The theme is passed down to all of the children.
* To change the text color in the theme example above, go to `native-base-theme/variables/platform.js` and modify the color for **textColor**.
* Similarly, you can customize the color theme for all of the NativeBase components via their respective attributes. A few examples are shown below.
