## Drawer

Drawer for both iOS and Android.<br />
Drawer can be the perfect option to provide navigation options. <br />
Replacing Component: [React Native Drawer](https://github.com/root-two/react-native-drawer)

![Preview ios Drawer](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/drawer.png)
![Preview android Drawer](https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/android/drawer.png)

**Syntax**

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './yourPathToSideBar';
export default class DrawerExample extends Component {
  closeDrawer () => {
    this.drawer._root.close()
  };
  openDrawer () => {
    this.drawer._root.open()
  };
  render() {
    return (
      &lt;Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={&lt;SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
      // Main View
      &lt;/Drawer>
    );
  }
}</code></pre>
 <p>
    <div id="" class="mobileDevice" style="background: url(&quot;https://docs.nativebase.io/docs/assets/iosphone.png&quot;) no-repeat; padding: 63px 20px 100px 15px; width: 292px; height: 600px;margin:0 auto;float:none;">
        <img src="https://github.com/GeekyAnts/NativeBase-KitchenSink/raw/v2.6.1/screenshots/ios/drawer.png" alt="" style="display:block !important" />
    </div>
</p>
<br />

**Note:** You need to create your own <code>SideBar</code> component and import it.

**Configuration**<br />
    <table class = "table table-bordered">
        <thead>
            <tr>
                <th>Property</th>
                <th>Default</th>
                <th>Option</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>type</td>
                <td>overlay</td>
                <td> - </td>
                <td>type of drawer</td>
            </tr>
            <tr>
                <td>tapToClose</td>
                <td>true</td>
                <td>boolean</td>
                <td>Close drawer on tap</td>
            </tr>
             <tr>
                <td>openDrawerOffset</td>
                <td>0.2</td>
                <td>number</td>
                <td>Defines right hand margin when drawer open</td>
            </tr>
             <tr>
                <td>panCloseMask</td>
                <td>0.2</td>
                <td>number</td>
                <td>Defines the screen width for the start of pan close action</td>
            </tr>
             <tr>
                <td>closedDrawerOffset</td>
                <td>0</td>
                <td>number</td>
                <td>Defines left hand margin when drawer closed</td>
            </tr>
            <tr>
                <td>tweenHandler</td>
                <td> - </td>
                <td>Function</td>
                <td>Takes in pan ratio that represents the tween percent and returns an object of native props to be set on constituent views</td>
            </tr>
        </tbody>
    </table><br />
