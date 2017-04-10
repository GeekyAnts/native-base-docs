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
  * Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)


  **Configuration**<br />
      <table class = "table table-bordered">
          <thead>
              <tr>
                  <th>Property</th>
                  <th>Default</th>
                  <th>Option</th>
                  <th width="50%">Description</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>backgroundColor</td>
                  <td>red</td>
                  <td>user-defined</td>
                  <td>Background color for badge.</td>
              </tr>
              <tr>
                  <td>width</td>
                  <td> - </td>
                  <td>user-defined</td>
                  <td>Width of badge.</td>
              </tr>
              <tr>
                  <td>color</td>
                  <td> - </td>
                  <td>user-defined</td>
                  <td>Text color for badge.</td>
              </tr>
              <tr>
                  <td>fontSize</td>
                  <td> - </td>
                  <td>user-defined</td>
                  <td>Text font size of badge.</td>
              </tr>
          </tbody>
      </table><br />
