## custom-component-headref
## Theme Your Custom Component

To add support for themes to your component you need to make two simple minor changes to it.
<br />

The main thing you need to change is to start using the style rules from the `props.style` property, instead of using the static variable defined alongside the component. You can define the default style of the component statically (the same way as before) but you shouldn’t use that property to get the actual style in runtime. This allows us to merge the default style with any theme style that may be active in the app, and provide the final style to components.
<br />

*Simple component with static style*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
export default class CustomComponent extends Component {
  render() {
    return (
      &lt;View style={styles.container}>
        &lt;Text style={styles.textContent}>
          Your Component with static style
        &lt;/Text>
      &lt;/View>
    );
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'green',
    },
    textContent: {
      fontSize: 20,
      color: 'red',
    },
  });
}</code></pre><br />


In order to support themes, we need to:

1. Replace the occurrences of <code>styles</code> with <code>this.props.style</code>
2. Connect the component to the theme

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connectStyle } from 'native-base';
class CustomComponent extends Component {
  render() {
    // connect styles to props.style defined by the theme
    const styles = this.props.style;
    return (
      &lt;View style={styles.container}>
        &lt;Text style={styles.textContent}>
          Your Component with static style
        &lt;/Text>
      &lt;/View>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  textContent: {
    fontSize: 20,
    color: 'red',
  },
};
// connect the component to the theme
export default connectStyle('yourTheme.CustomComponent', styles)(CustomComponent);
</code></pre><br />

<a id="connectStyle"></a>
The <code>connectStyle</code> function receives two arguments.

- The first one represents the fully qualified name that component will be referenced by in the theme
- The second is the default component style.

Fully qualified name of the component needs to have <code>namespace</code> prefix, separated with <code>.</code> from the component name (yourTheme.CustomComponent).

Any styles defined in the theme will be merged with the default style, and theme rules will override the rules from the default style. The style that is sent to <code>connectStyle</code> shouldn’t be created using the <code>StyleSheet.create</code>.<br />
Style sheet will be created by the <code>connectStyle</code> function at appropriate time.


##### Use <code>StyleProvider</code> to Customize components

With the above simple changes, we have a component that can receive styles from the outside. The only thing left to do is to initialize the style provider within the app, so that theme styles are correctly distributed to components. To do this, we need to initialize the **StyleProvider** component, and render any customizable components within it

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
class CustomComponent extends Component {
  render() {
    return (
      // connect styles to props.style defined by the theme
      const styles = this.props.style;
      &lt;StyleProvider style={customTheme}>
        Your Custom Components
      &lt;/StyleProvider>
    );
  }
}
// Define your own Custom theme
const customTheme = {
  'yourTheme.CustomComponent': {
    // overrides CustomComponent style...
  }
};
</code></pre><br />



You can also add more style rules to the [NativeBase 2.0](https://nativebase.io/) components by adding your own style rules to the theme file of that component (provided for each component). The default [NativeBase 2.0](https://nativebase.io/) component style should be at the bottom of the style object. This style will always be applied as a base style and then any other theme style will be merged with the style, i.e., the theme style rules will override the base component rules. At the end, any style specified through the `style` prop directly on the component will be merged on top of the styles mentioned above to get the final component style.

Rules above the default component style are the new rule types that are specific to theme styles.

These style objects in the theme for any components can be applied to them as a property.

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { StyleProvider, Button, Text } from 'native-base';
class CustomComponent extends Component {
  render() {
    return (
      // connect styles to props.style defined by the theme
      const styles = this.props.style;
      &lt;StyleProvider style={customTheme}>
        &lt;Button customStyleProp>
          &lt;Text>Custom Button&lt;/Text>
        &lt;/Button>
      &lt;/StyleProvider>
    );
  }
}
// Define your own Custom theme
const customTheme = {
  'NativeBase.Button': {
    .customStyleProp: {
      height: 70,
      borderRadius: 35,
    },
    // Default styles of NativeBase Button Component
    ....
  }
};
</code></pre><br />


##### Style exposed to Children

The rule <code>*.button-content</code> will be available to child components of the CustomComponent defined above.
