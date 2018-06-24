#Introduction

#### Essential cross-platform UI components for React Native & Vue Native
[NativeBase](https://nativebase.io/) is a free and open source UI component library for [React Native](https://facebook.github.io/react-native/) to build native mobile apps for iOS and Android platforms. [NativeBase](https://nativebase.io/) also supports web from version **2.4.1**.

![Cover NativeBase](https://docs.nativebase.io/docs/assets/web-cover1.jpg)


One of our main goal with [NativeBase](https://nativebase.io/) **2.0** is to make it easy to theme the components with very little changes to components themself.

*General Syntax of NativeBase Component*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
export default class GeneralExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Button>
          &lt;Text>
            Button
          &lt;/Text>
        &lt;/Button>
      &lt;/Container>
    );
  }
}</code></pre>
<br />

NativeBase on Windows depends on React Native support for Windows.<br/>
NativeBase is now supported on **[snack](https://snack.expo.io/)**.

**[How to get started?](/docs/GetStarted.md)**

<!-- **[How to migrate from v0.x to v2.x?](/docs/Migration.md)** -->
