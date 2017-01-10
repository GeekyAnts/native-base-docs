# Card

Card is a pure [NativeBase](http://nativebase.io/) component.<br />
Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. <br />
[NativeBase](http://nativebase.io/) Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.

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
          <th style="border-style: hidden"><img height="470" width="270" src="{{('../../assets/ios/components/card.png')}}" alt="" /></th>
          <th><img height="470" width="270" src="{{('../../assets/android/components/card.png')}}" alt="" /></th>
        </tr>
      </thead>
    </table>

  **Contents:**
  * [Card Header and Footer](/docs/components/card/HeaderAndFooter.md)
  * [Card List](/docs/components/card/CardList.md)
  * [Card Image](/docs/components/card/CardImage.md)
  * [Card Showcase](/docs/components/card/CardShowcase.md)
  * [Card OnClick](/docs/components/card/CardOnClick.md)
  * [Dynamic Card](/docs/components/card/DynamicCard.md)

*Genertal Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text } from 'native-base';
​
export default class CardExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Card>
                        &lt;CardItem>                        
                            &lt;Text>
                                //Your text here
                            &lt;/Text>
                        &lt;/CardItem>
                    &lt;/Card>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>

* <code>Card</code>: This component adds a box-shadow by default. Also provides default spacing and alignment between cards.
* <code>CardItem</code>: This is the child component of <code>Card</code>. Works very similar to the list items of list. Card takes any number of CardItem.
* CardItem component takes input such as: Text, Button, Image, Thumbnail, Icon.
* *Replacing Component for Card: [React Native](https://facebook.github.io/react-native/)  [<code>&lt;View></code>](https://facebook.github.io/react-native/docs/view.html)*
* *Replacing Component for CardItem: [React Native](https://facebook.github.io/react-native/)  [<code>&lt;TouchableOpacity></code>](https://facebook.github.io/react-native/docs/touchableopacity.html)*

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
                <td>header</td>
                <td> - </td>
                <td> - </td>
                <td>Displays both as header and footer for cards.</td>
            </tr>
            <tr>
                <td>note</td>
                <td> - </td>
                <td> - </td>
                <td>Sub caption for Card header.</td>
            </tr>
            <tr>
                <td>cardBody</td>
                <td> - </td>
                <td> - </td>
                <td>
                    Defines section for body of card.<br />
                    The child components are rendered with proper spacing and alignment.
                </td>
            </tr>
            <tr>
                <td>button</td>
                <td> - </td>
                <td> - </td>
                <td>
                    To navigate on click of a card item.
                </td>
            </tr>
        </tbody>
    </table>
