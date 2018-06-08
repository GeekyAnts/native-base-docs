## title-header-headref
#### Header with only title

![Preview ios title-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/ios/header-with-title.png)
![Preview android title-header-headref](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.5.0/screenshots/android/header-with-title.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title } from 'native-base';
export default class HeaderTitleExample extends Component {
  render() {
    return (
      &lt;Container>
        &lt;Header>
          &lt;Left/>
          &lt;Body>
            &lt;Title>Header&lt;/Title>
          &lt;/Body>
          &lt;Right />
        &lt;/Header>
      &lt;/Container>
    );
  }
}</code></pre><br />