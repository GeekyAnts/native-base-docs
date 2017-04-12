## Badge

![Preview ios Badge](../docs/assets/ios/components/badge.png)
![Preview android Badge](../docs/assets/android/components/badge.png)

*Syntax*

  <pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
  import { Container, Content, Badge, Text } from 'native-base';
  ​
  export default class BadgeExample extends Component {
      render() {
          return (
              &lt;Container>
                  &lt;Content>
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
                      &lt;Badge primary>
                        &lt;Icon name="star" />
                    &lt;/Badge>
                      &lt;Badge
                        style=&#123;{ backgroundColor: 'black' }}>
                          &lt;Text style=&#123;{ color: 'white' }}>1866&lt;/Text>
                      &lt;/Badge>
                  &lt;/Content>
              &lt;/Container>
          );
      }
  }</code></pre><br />

  * [NativeBase](https://nativebase.io/) spectrum of colors are compatible with Badge.
  * Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html) <br />
