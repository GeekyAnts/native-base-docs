# Tabs

Tabs are a horizontal region of buttons or links that allow for a consistent navigation experience between screens. It can contain any combination of text and icons, and is a popular method for enabling mobile navigation.<br />
*Replacing Component: [react-native-scrollable-tab-view <code>&lt;ScrollableTabView></code>](https://github.com/brentvatne/react-native-scrollable-tab-view)*

<table>
<thead>
  <tr style="border-style: hidden;">
    <td style="border-style: hidden;padding-left: 50px"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
    <td style="padding-left: 50px"><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
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

{% codetabs name="Basic", type="js" -%}
import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base/ui';
import { Tabs, TabContent } from 'native-base';
​
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <View>
                    <Tabs>
                        <TabContent padder tabLabel='One'>
                          <Text>This is Tab One</Text>
                        </TabContent>
                        <TabContent padder tabLabel='Two'>
                          <Text>This is Tab Two</Text>
                        </TabContent>
                    </Tabs>
                </View>
            </Container>
        );
    }
}
{%- language name="Advanced", type="js" -%}
import React, { Component } from 'react';
import { Container, Content, Tabs } from 'native-base/ui';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
​
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Tabs>
                        <TabOne tabLabel='One' />
                        <TabTwo tabLabel='Two' />
                    </Tabs>
                </Content>
            </Container>
        );
    }
}
{%- endcodetabs %}

#### Tabs with TabIcon
<table>
  <thead>
    <tr style="border-style: hidden;background-color: #E8F1FF">
      <td style="border-style: hidden;"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
      <td><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden;background-color: #E8F1FF">
      <th style="border-style: hidden;">
        <img src="{{('../assets/ios/components/tabs/1.png')}}" alt="" /></th>
      <th>
        <img src="{{('../assets/ios/components/tabs/1.png')}}" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

{% codetabs name="Basic", type="js" -%}
import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base/ui';
import { Tabs, TabContent } from 'native-base';
​
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <View>
                    <Tabs>
                        <TabContent tabIcon="ios-person" padder>
                          <Text>Content of Tab Profile</Text>
                        </TabContent>
                        <TabContent tabIcon="ios-mail" padder>
                          <Text>Content of Tab Message</Text>
                        </TabContent>
                    </Tabs>
                </View>
            </Container>
        );
    }
}
{%- endcodetabs %}

#### Tabs with TabIcon and TabLabel (Horizontal)
<table>
  <thead>
    <tr style="border-style: hidden;background-color: #E8F1FF">
      <td style="border-style: hidden;"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
      <td><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden;background-color: #E8F1FF">
      <th style="border-style: hidden;">
        <img src="{{('../assets/ios/components/tabs/2.png')}}" alt="" /></th>
      <th>
        <img src="{{('../assets/ios/components/tabs/2.png')}}" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

{% codetabs name="Basic", type="js" -%}
import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base/ui';
import { Tabs, TabContent } from 'native-base';
​
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <View>
                    <Tabs>
                        <TabContent tabIcon="ios-person" tabLabel="Profile" padder>
                          <Text>Content of Tab Profile</Text>
                        </TabContent>
                        <TabContent tabIcon="ios-mail" tabLabel="Messages" padder>
                          <Text>Content of Tab Message</Text>
                        </TabContent>
                    </Tabs>
                </View>
            </Container>
        );
    }
}
{%- endcodetabs %}

#### Tabs with TabIcon and TabLabel (Vertical)
<table>
  <thead>
    <tr style="border-style: hidden;background-color: #E8F1FF">
      <td style="border-style: hidden;"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
      <td><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden;background-color: #E8F1FF">
      <th style="border-style: hidden;">
        <img src="{{('../assets/ios/components/tabs/3.png')}}" alt="" /></th>
      <th>
        <img src="{{('../assets/ios/components/tabs/3.png')}}" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

{% codetabs name="Basic", type="js" -%}
import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base/ui';
import { Tabs, TabContent } from 'native-base';
​
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <View>
                    <Tabs vertical>
                        <TabContent tabIcon="ios-person" tabLabel="Profile" padder>
                          <Text>Content of Tab Profile</Text>
                        </TabContent>
                        <TabContent tabIcon="ios-mail" tabLabel="Messages" padder>
                          <Text>Content of Tab Message</Text>
                        </TabContent>
                    </Tabs>
                </View>
            </Container>
        );
    }
}
{%- endcodetabs %}

#### Custom Tabs
<table>
  <thead>
    <tr style="border-style: hidden;background-color: #E8F1FF">
      <td style="border-style: hidden;"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
      <td><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden;background-color: #E8F1FF">
      <th style="border-style: hidden;">
        <img src="{{('../assets/ios/components/tabs/4.png')}}" alt="" /></th>
      <th>
        <img src="{{('../assets/ios/components/tabs/4.png')}}" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

{% codetabs name="Basic", type="js" -%}
{% raw %}
import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base/ui';
import { Tabs, TabContent } from 'native-base';
​
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <View>
                    <Tabs tabBarStyle={{backgroundColor:'#DCF3FB'}} underlineStyle={{backgroundColor:'#00AADF'}} tabBarTextStyle={{color: '#00AADF'}}>
                        <TabContent tabLabel="Tab One" padder>
                          <Text>Content of Tab One</Text>
                        </TabContent>
                        <TabContent tabLabel="Tab Two" padder>
                          <Text>Content of Tab Two</Text>
                        </TabContent>
                    </Tabs>
                </View>
            </Container>
        );
    }
}
{% endraw %}
{%- endcodetabs %}

#### Tabs at the Bottom

<table>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden; padding-right: 34px;">IOS</th>
      <th style="padding-right: 140px;">Android</th>
    </tr>
  </thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="{{('../assets/ios/components/tabs/5.png')}}" alt="" /></div></th>
      <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="{{('../assets/ios/components/tabs/5.png')}}" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

{% codetabs name="Basic", type="js" -%}
{% raw %}
import React, { Component } from 'react';
import { Container, Content, Text } from 'native-base/ui';
import { Tabs, TabContent } from 'native-base';
​
export default class TabsExample extends Component {
    render() {
        return (
            <Container>
                <View>
                    <Tabs tabBarPosition="bottom" underlineStyle={{color:'transparent'}}>
                        <TabContent tabLabel="Tab One" padder>
                          <Text>Content of Tab One</Text>
                        </TabContent>
                        <TabContent tabLabel="Tab Two" padder>
                          <Text>Content of Tab Two</Text>
                        </TabContent>
                    </Tabs>
                </View>
            </Container>
        );
    }
}
{% endraw %}
{%- endcodetabs %}
**Configuration**
<table class="table table-bordered">
        <thead>
            <tr>
                <th></th>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th width="50%">Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th rowspan="6">Basic</th>
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
            <tr>
                <th rowspan="1">Both Basic and Advanced</th>
                <td>tabLabel</td>
                <td> - </td>
                <td> - </td>
                <td>Name for each tab</td>
            </tr>
        </tbody>
    </table>
