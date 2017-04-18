# Drawer

Drawer for both iOS and Android.<br />
Drawer is used from react-native-drawer Drawer

![Preview ios Drawer](../docs/assets/ios/components/drawer.png)
![Preview android Drawer](../docs/assets/android/components/drawer.png)

*Syntax*

<pre class="line-numbers"><code class="language-jsx">import React, { Component } from 'react';
import { Drawer } from 'native-base';
import SideBar from './yourPathToSideBar';
​
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
              onClose={ closeDrawer } >
            // Main View
          &lt;/Drawer>
        );
    }
}</code></pre><br />

Note: You need to create your own SideBar component and import it.
