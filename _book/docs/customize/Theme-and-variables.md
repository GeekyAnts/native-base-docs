## theme-and-variables-headref
## What are themes and variables and how to change them?

NativeBase comes with a `theme` folder which comprises of two sub-folders
-   `components:` Theme styling files for all the NativeBase components. This is where you would change the style properties of the components if you need to.

    Example, if you need to change the height of Button component, you'll need to change height in 
  `native-base-theme/components/Button.js`.
-   `variables:` Contains three preset theme variable files, namely `Platform`, `material`, `commonColor`. You can change the variables (for color, fontFamily, iconFamily etc) for a uniform look and feel throughout your app.

##### Three themes to start with
NativeBase is packed with three preset themes. <br />
* **Platform:** The default theme of NativeBase which maps to the design of the platform where the app runs i.e., platform-specific theme for iOS and Android.
* **Material:** Sometimes, you need Material design for both the platforms. Not everyone is a fan of it, but Google does use Material design on iOS. This theme is not 100% material yet but, it can be used today. <br />
* **CommonColor:** Most of the brands use a common color scheme for both the platforms. But they also follow platform specific icons, font and orientation of the components. CommonColor theme is best suited for such use-cases. <br />

Check [Theme and Variables](https://docs-v2.nativebase.io/docs/ThemeVariables.html) to know list of customizable variables.
Before going ahead of modifying in your `node_modules/native-base/theme`, check the procedure below to generate new theme for you to play with.