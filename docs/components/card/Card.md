<div class="section" id="card">

    <h2>Card</h2>

    <p>
        Card is a pure <a href="http://nativebase.io/">NativeBase</a> component.<br />
        Card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. <br />

        <a href="http://nativebase.io/">NativeBase</a> Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need.
    </p><br />

    <p>
        <ul style="list-style-type:none">
            <li><b>Contents:</b></li>
            <li><a href="/docs/components/card/HeaderAndFooter.md">Card Header and Footer</a></li>
            <li><a href="/docs/components/card/CardList.md">Card List</a></li>
            <li><a href="/docs/components/card/CardImage.md">Card Image</a></li>
            <li><a href="/docs/components/card/CardShowcase.md">Card Showcase</a></li>
            <li><a href="/docs/components/card/CardOnClick.md">Card OnClick</a></li>
            <li><a href="/docs/components/card/DynamicCard.md">Dynamic Card</a></li>
        </ul>
    </p><br />

    <i>Genertal Syntax</i>

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
}</code></pre><br />

    <ul>
        <li>
            <code>Card</code>: This component adds a box-shadow by default. Also provides default spacing and alignment between cards.
        </li>
        <li>
            <code>CardItem</code>: This is the child component of <code>Card</code>. Works very similar to the list items of list. Card takes any number of CardItem.
        </li>
        <li>
            CardItem component takes input such as: Text, Button, Image, Thumbnail, Icon.
        </li>
        <li>
            <i>
                Replacing Component for Card:
                <a href="https://facebook.github.io/react-native/">React Native</a>
                <a href="https://facebook.github.io/react-native/docs/view.html">
                    <code>&lt;View></code>
                </a>
            </i>
        </li>
        <li>
            <i>
                Replacing Component for CardItem:
                <a href="https://facebook.github.io/react-native/">React Native</a>
                <a href="https://facebook.github.io/react-native/docs/touchableopacity.html">
                    <code>&lt;TouchableOpacity></code>
                </a>
            </i>
        </li>
    </ul><br />

    <b>Configuration</b><br />
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
    </table><br />

</div>
