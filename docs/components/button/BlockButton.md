#### Block Button

A block level button spans the entire width of the parent element.
Create block level buttons by adding <code>block</code> prop with the <code>Button</code>.

<br />
    <table>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden; padding-right: 34px;">IOS</th>
          <th style="padding-right: 140px;">Android</th>
        </tr>
      </thead>
      <thead>
        <tr style="border-style: hidden">
          <th style="border-style: hidden">
            <div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../../assets/ios/components/block-button.png')}}" alt="" /></div></th>
          <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490px" width="266px" src="{{('../../assets/android/components/block-button.png')}}" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Button } from 'native-base';
​
export default class BlockButtonExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Button block> Primary &lt;/Button>
                    &lt;Button block success> Success &lt;/Button>
                    &lt;Button block info> Info &lt;/Button>
                    &lt;Button block warning> Warning &lt;/Button>
                    &lt;Button block danger> Danger &lt;/Button>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre><br />
