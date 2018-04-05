## title-header-headref
#### Header with only title

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