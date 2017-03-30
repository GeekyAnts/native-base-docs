#### Button Theme

[NativeBase](http://nativebase.io/) provides buttons with wide range of colors, size and variuos other props.<br />
NativeBase provides following color themes:
  * Primary (default)
  * Success
  * Info
  * Warning
  * Danger<br />

![Preview ios Button_Theme](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/screenshots/ios/buttons.png)
![Preview android Button_Theme](https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/screenshots/android/buttons.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Text } from 'native-base/ui';
​
export default class ButtonThemeExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button primary>
                      &lt;Text> Primary &lt;/Text>
                    &lt;/Button>
                    &lt;Button success>
                      &lt;Text> Success &lt;/Text>
                    &lt;/Button>
                    &lt;Button info>
                      &lt;Text> Info &lt;/Text>
                    &lt;/Button>
                    &lt;Button warning>
                      &lt;Text> Warning &lt;/Text>
                    &lt;/Button>
                    &lt;Button danger>
                      &lt;Text> Danger &lt;/Text>
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
