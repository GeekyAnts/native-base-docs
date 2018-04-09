## Drawer

Drawer for both iOS and Android.<br />
Drawer can be the perfect option to provide navigation options. <br />

![Preview ios Drawer](https://docs.nativebase.io/docs/assets/ios/components/drawer.png)
![Preview android Drawer](https://docs.nativebase.io/docs/assets/android/components/drawer.png)

**Syntax**

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './yourPathToSideBar';
export default class DrawerExample extends Component {
  render() {
    closeDrawer = () => {
      this.drawer._root.close()
    };
    openDrawer = () => {
      this.drawer._root.open()
    };
    return (
      &lt;Drawer
        ref={(ref) => { this.drawer = ref; }}
        content={&lt;SideBar navigator={this.navigator} />}
        onClose={() => this.closeDrawer()} >
      // Main View
      &lt;/Drawer>
    );
  }
}</code></pre><br />

Note: You need to create your own SideBar component and import it.

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
                <td>-</td>
                <td>Type of drawer</td>
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
                <td>Define drawer's margin when open</td>
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
                <td>-</td>
            </tr>
            <tr>
                <td>tweenHandler</td>
                <td>null</td>
                <td>Function</td>
                <td>-</td>
            </tr>
        </tbody>
    </table><br />

