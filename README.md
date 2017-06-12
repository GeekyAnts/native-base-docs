#Introduction

#### Essential cross-platform UI components for React Native
[NativeBase](https://nativebase.io/) is a free and open source UI component library for [React Native](https://facebook.github.io/react-native/) to build native mobile apps for iOS and Android platforms. <br />

![Cover NativeBase](https://docs.nativebase.io/docs/assets/web-cover1.jpg) <br />


One of our main goal with [NativeBase](https://nativebase.io/) **2.0** is to make it easy to theme the components with as little changes as possible to the components themselves. <br />

*General Syntax of NativeBase Component* <br />

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Button, Text } from 'native-base';
export default class IconExample extends Component {
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
}</code></pre><br />

**[How to get started?](/docs/GetStarted.md)** <br />

**[How to migrate from v0.x to v2.x?](/docs/Migration.md)** <br/>
