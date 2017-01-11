#### Card Header and Footer

To add an optional header and/or footer within a card, include <code>header</code> prop with the <code>CardItem</code>.<br />
* **Card Header**: Include <code>header</code> prop with first instance of CardItem within Card.
* **Card Footer**: Include <code>header</code> prop with last instance of CardItem within Card.

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
          <th style="border-style: hidden"><div style="background: url(../../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/card-header-and-footer.png" alt="" /></div></th>
          <th><div style="background: url(../../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/card-header-and-footer.png" alt="" /></div></th>
        </tr>
      </thead>
    </table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text } from 'native-base';
​
export default class CardHeaderFooterExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card>
                        &lt;CardItem header>
                            &lt;Text>NativeBase&lt;/Text>
                        &lt;/CardItem>

                        &lt;CardItem>
                            &lt;Text>
                                //Your text here
                            &lt;/Text>
                        &lt;/CardItem>

                        &lt;CardItem header>
                            &lt;Text>GeekyAnts&lt;/Text>
                        &lt;/CardItem>
                   &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>
