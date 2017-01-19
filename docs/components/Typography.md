# Typography

NativeBase provides you with the Heading Tags, namely <code>H1</code>, <code>H2</code> and <code>H3</code> components. These Heading tags helps you prioritize the content of your screen.<br />
*Replacing Component for H1, H2, H3, Text: [React Native](https://facebook.github.io/react-native/) [<code>&lt;Text></code>](https://facebook.github.io/react-native/docs/text.html)*

<table>
<thead>
  <tr style="border-style: hidden;">
    <td style="border-style: hidden;padding-left: 50px"><i class="fa fa-apple fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">iOS</span></td>
    <td style="padding-left: 50px"><i class="fa fa-android fa-5x" style="color: grey"></i>   <span style="color: grey;font-weight: 500">Android</span></td>
  </tr>
</thead>
  <thead>
    <tr style="border-style: hidden">
      <th style="border-style: hidden"><div style="background: url(../assets/iphone.png) no-repeat; padding: 63px 20px 100px 18px; width: 292px"><img src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/iOS/typography.png" alt="" /></div></th>
      <th><div style="background: url(../assets/android.png) no-repeat; padding: 45px 118px 68px 0px; background-size: 292px 576px;"><img height="490" width="266" src="https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/0.5.13/Screenshots/android/typography.png" alt="" /></div></th>
    </tr>
  </thead>
</table>

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Container, Content, H1, H2, H3, Text } from 'native-base/ui';
​
export default class TypographyExample extends Component {
    render() {
        return (
            &lt;Container>
                &lt;Content>
                    &lt;H1>Header One&lt;/H1>
                    &lt;H2>Header Two&lt;/H2>
                    &lt;H3>Header Three&lt;/H3>
                    &lt;Text>Default&lt;/Text>
                &lt;/Content>
            &lt;/Container>
        );
    }
}</code></pre>

#### Custom Headers
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
        <img src="{{('../assets/ios/components/typography/custom.png')}}" alt="" /></th>
      <th>
        <img src="{{('../assets/ios/components/typography/custom.png')}}" alt="" /></th>
    </tr>
  </thead>
</table>

*Syntax*

```js
import React, { Component } from 'react';
import { Container, Content, H1, H2, H3, Text } from 'native-base/ui';
​
export default class TypographyExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <H1 style={{color:'red'}}>Header One</H1>
                    <H2 style={{color:'red'}}>Header Two</H2>
                    <H3 style={{color:'red'}}>Header Three</H3>
                    <Text style={{color:'red'}}>Default</Text>
                </Content>
            </Container>
        );
    }
}
```

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
                <td>H1</td>
                <td>font-size: 27</td>
                <td>user-defined</td>
                <td>Heading tag &lt;H1></td>
            </tr>
            <tr>
                <td>H2</td>
                <td>font-size: 24</td>
                <td>user-defined</td>
                <td>Heading tag &lt;H2></td>
            </tr>
            <tr>
                <td>H3</td>
                <td>font-size: 21</td>
                <td>user-defined</td>
                <td>Heading tag &lt;H3></td>
            </tr>
        </tbody>
    </table>
