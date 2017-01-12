# Smart Tabs


<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden; padding-right: 34px;">IOS</th>
      <th style="padding-right: 140px;">Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/components/tabs.gif')}}" alt="" /></div></th>
      <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="{{('../assets/android/components/tabs.gif')}}" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Text } from 'native-base';
import { Tabs, TabContent } from 'native-base/ui';

​
export default class TabsExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;View>
                    &lt;Tabs>
                        &lt;TabContent padder tabLabel='One'>
                            &lt;Text>This is Tab One&lt;/Text>
                        &lt;/TabContent>
                        &lt;TabContent padder tabLabel='Two'>
                            &lt;Text>This is Tab Two&lt;/Text>
                        &lt;/TabContent>
                    &lt;/Tabs>
                &lt;/View>
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
                <td>initialPage</td>
                <td> 1 </td>
                <td> - </td>
                <td>Index of initially selected Tab</td>
            </tr>
            <tr>
                <td>tabBarPosition</td>
                <td> top </td>
                <td>
                  top<br />
                  bottom
                </td>
                <td>Position of Tabs in the Screen</td>
            </tr>
            <tr>
                <td>tabLabel</td>
                <td> - </td>
                <td> - </td>
                <td>Name for each tab(TabContent prop)</td>
            </tr>
            <tr>
                <td>tabIcon</td>
                <td> - </td>
                <td> - </td>
                <td>Icon for each tab(TabContent prop)</td>
            </tr>
            <tr>
                <td>vertical</td>
                <td> false </td>
                <td>
                  true<br />
                  false
                </td>
                <td>Aligns tabLabel and tabIcon in column</td>
            </tr>
            <tr>
                <td>
                  tabBarIconStyle<br />
                  tabBarTextStyle<br />
                  tabBarStyle<br />
                  underlineStyle<br />
                </td>
                <td> - </td>
                <td> - </td>
                <td>Styles for tabIcon, tabLabel, Tabs, and underline of Tabs respectively</td>
            </tr>
        </tbody>
    </table>
