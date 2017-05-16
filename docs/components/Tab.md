# Tab Default

Tab are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
They are much similar to <code>FooterTabs</code>.
* *Replacing Component:
  [React Native](https://facebook.github.io/react-native/)
  [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*

![Preview ios Tab_Default](https://docs.nativebase.io/docs/assets/ios/components/tabs.gif)
![Preview android Tab_Default](https://docs.nativebase.io/docs/assets/android/components/tabs.gif)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Tab, Button, Text } from 'native-base';
export default class TabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Tab>
                        &lt;Button>
                            &lt;Text>Tab 1&lt;/Text>
                        &lt;/Button>
                        &lt;Button active>
                            &lt;Text>Tab 2&lt;/Text>
                        &lt;/Button>
                    &lt;/Tab>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
