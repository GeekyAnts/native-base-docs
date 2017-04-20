# Footer Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
*Replacing Component: [React Native](https://facebook.github.io/react-native/) [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

**Contents**
* [Footer with only icons](COMPONENTS.md#Icon_Footer)
* [Footer with icons and text](COMPONENTS.md#Icon_Footer_with_Text)
* [Footer Badge](COMPONENTS.md#Footer_with_badge)

![Preview ios Footer_Tabs](../docs/assets/ios/components/iconFooter.png)
![Preview android Footer_Tabs](../docs/assets/android/components/iconFooter.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Footer, FooterTab, Button, Icon, Badge, Text } from 'native-base';
​
export default class FooterTabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content />
                &lt;Footer >
                    &lt;FooterTab>
                        &lt;Button>
                            &lt;Text>Apps&lt;/Text>
                        &lt;/Button>
                        &lt;Button>
                            &lt;Text>Camera&lt;/Text>
                        &lt;/Button>
                        &lt;Button active>
                            &lt;Text>Navigate&lt;/Text>
                        &lt;/Button>
                        &lt;Button>
                            &lt;Text>Contact&lt;/Text>
                        &lt;/Button>
                    &lt;/FooterTab>
                &lt;/Footer>
            &lt;/Container>
        );
    }
}</code></pre><br />


**Configuration**

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
                <td>badgeValue</td>
                <td>-</td>
                <td>user-defined</td>
                <td>
                This is Button prop (applicable with FooterTab only). Value of badge to be displayed
                </td>
            </tr>
            <tr>
                <td>badgeValueStyle</td>
                <td> white </td>
                <td>user-defined</td>
                <td>
                This is Button prop (applicable with FooterTab only). Font color of badge text
                </td>
            </tr>
            <tr>
                <td>badgeColor</td>
                <td> red </td>
                <td> user-defined </td>
                <td>
                This is Button prop (applicable with FooterTab only). Background color of badge
                </td>
            </tr>
        </tbody>
    </table><br />

## Icon Footer

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
  import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
  ​export default class FooterTabsExample extends Component {
      render() {
          return (
              &lt;Container>
                  &lt;Content />
                  &lt;Footer >
                      &lt;FooterTab>
                          &lt;Button>
                              &lt;Icon name="apps" />
                          &lt;/Button>
                          &lt;Button>
                              &lt;Icon name="camera" />
                          &lt;/Button>
                          &lt;Button active>
                              &lt;Icon active name="navigate" />
                          &lt;/Button>
                          &lt;Button>
                              &lt;Icon name="person" />
                          &lt;/Button>
                      &lt;/FooterTab>
                  &lt;/Footer>
              &lt;/Container>
          );
      }
  }</code></pre><br />

## Icon Footer with Text

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
  import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
  ​export default class FooterTabsExample extends Component {
      render() {
          return (
              &lt;Container>
                  &lt;Content />
                  &lt;Footer >
                      &lt;FooterTab>
                          &lt;Button>
                              &lt;Icon name="apps" />
                              &lt;Text>Apps&lt;/Text>
                          &lt;/Button>
                          &lt;Button>
                              &lt;Icon name="camera" />
                              &lt;Text>Camera&lt;/Text>
                          &lt;/Button>
                          &lt;Button active>
                              &lt;Icon active name="navigate" />
                              &lt;Text>Navigate&lt;/Text>
                          &lt;/Button>
                          &lt;Button>
                              &lt;Icon name="person" />
                              &lt;Text>Contact&lt;/Text>
                          &lt;/Button>
                      &lt;/FooterTab>
                  &lt;/Footer>
              &lt;/Container>
          );
      }
  }</code></pre><br />

## Footer with badge

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
  import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
  ​  export default class FooterTabsExample extends Component {
      render() {
          return (
              &lt;Container>
                  &lt;Content />
                  &lt;Footer >
                      &lt;FooterTab>
                          &lt;Button badge>
                              &lt;Badge>&lt;Text>2&lt;/Text>&lt;/Badge>
                              &lt;Icon name="apps" />
                              &lt;Text>Apps&lt;/Text>
                          &lt;/Button>
                          &lt;Button>
                              &lt;Icon name="camera" />
                              &lt;Text>Camera&lt;/Text>
                          &lt;/Button>
                          &lt;Button active badge>
                              &lt;Badge >&lt;Text>51&lt;/Text>&lt;/Badge>
                              &lt;Icon active name="navigate" />
                              &lt;Text>Navigate&lt;/Text>
                          &lt;/Button>
                          &lt;Button>
                              &lt;Icon name="person" />
                              &lt;Text>Contact&lt;/Text>
                          &lt;/Button>
                      &lt;/FooterTab>
                  &lt;/Footer>
              &lt;/Container>
          );
      }
  }</code></pre><br />
