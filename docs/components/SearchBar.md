<div class="section" id="searchBar">

    <h2>Search Bar</h2>

    <p style="padding-bottom: 15px;">
        It’s kind of common on the Internet where – if we fail to get what we are looking for on a website, we resort to searching. Search box has always been an essential part of any application.
        We provide you with the one, which filters the list based on your search input.
    </p>

    <i>Syntax</i>

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Header, InputGroup, Input, Icon, Button } from 'native-base';
​
export default class SearchBarExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Header searchBar rounded>
                    &lt;InputGroup>
                        &lt;Icon name="ios-search" />
                        &lt;Input placeholder="Search" />
                        &lt;Icon name="ios-people" />
                    &lt;/InputGroup>
                    &lt;Button transparent>
                        Search
                    &lt;/Button>
                &lt;/Header>
            &lt;/Container>
        );
    }
}</code></pre><br />

    <ul>
        <li>
            <code>searchBar</code>: Prop to be used with <code>&lt;Header></code> component to have Search bar onto the Header section of your screen.
        </li>
        <li>
            <i>
                Replacing Component:
                <a href="https://facebook.github.io/react-native/">React Native</a>
                <a href="https://facebook.github.io/react-native/docs/view.html">
                    <code>&lt;View></code>
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
                <td>rounded</td>
                <td>regular</td>
                <td> - </td>
                <td>
                    Wraps the search bar with predefined border options.
                </td>
            </tr>
        </tbody>
    </table><br />


</div>
