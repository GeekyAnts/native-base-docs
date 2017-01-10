#### Icon Button

The Icon Buttons, can take text and/or icon as child elements inside the Button.<br />
This goes as simple as this: include your choice of icon using <code>Icon</code> component within the <code>Button</code> component.

<br />
    <table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">IOS</th>
          <th>Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/icon-button.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/icon-button.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>
*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button, Icon } from 'native-base';
​
export default class IconButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button primary>
                        &lt;Icon name='ios-home' />
                        Home
                    &lt;/Button>

                    &lt;Button success iconRight>
                        Next
                        &lt;Icon name='ios-arrow-forward' />
                    &lt;/Button>

                    &lt;Button info>
                        Previous
                        &lt;Icon name='ios-arrow-back' />
                    &lt;/Button>

                    &lt;Button warning>
                        &lt;Icon name='ios-star' />
                    &lt;/Button>

                    &lt;Button danger>
                        &lt;Icon name='ios-close-circle' />
                    &lt;/Button>

                    &lt;Button style=&#123;{backgroundColor: '#384850'}} >
                        &lt;Icon name='ios-search' style=&#123;{color: '#00c497'}}/>
                    &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
