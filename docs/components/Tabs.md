# Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
*Replacing Component: [react-native-scrollable-tab-view <code>&lt;ScrollableTabView></code>](https://github.com/brentvatne/react-native-scrollable-tab-view)*

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden">IOS</th>
      <th>Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><img height="470" width="270" src="{{('../assets/ios/components/tabs.gif')}}" alt="" /></th>
      <th><img height="470" width="270" src="{{('../assets/android/components/tabs.gif')}}" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
​
export default class TabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;Tabs>
                        &lt;TabOne tabLabel='One' />
                        &lt;TabTwo tabLabel='Two' />
                    &lt;/Tabs>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>


**Configuration**
<table class="table table-bordered">
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
                <td>tabLabel</td>
                <td> - </td>
                <td> - </td>
                <td>Name for each tab</td>
            </tr>
        </tbody>
    </table>
