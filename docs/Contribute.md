# Contributing to NativeBase

Thank you for your interest in contributing to the [NativeBase](http://nativebase.io/) project!

>NativeBase is completely open-source. Feel free to clone it or fork it!

In favor of active development, we accept contributions from everyone. [NativeBase](http://nativebase.io/) team is constantly marking issues and features that the community can implement. You can contribute by submitting a bug, creating pull requests or even by improving documentation. Beneath is the manual to be accompanied strictly earlier than submitting your pull requests.<br />

**Manual:**
* [Coding Style](#coding-style)
* [Git Flow](#git-flow)

### Coding Style

To keep project away from disputes we make use of [ESLint](https://github.com/roadhump/SublimeLinter-eslint), which is really a handy linting tool that enforces strict coding styles and makes sure your files are free from dead code. Each module of [NativeBase](http://nativebase.io/) has bundled ESLint as a dev dependency. In order to lint your code run following command.

<pre class="command-line language-xxx" data-output="2-19"><code>cd AwesomeNativeBase
npm install eslint</code></pre>
<br /><br />

### Git Flow

[NativeBase](http://nativebase.io/) is an infant and growing rapidly, so we planned to stick to Git Flow. Below are the rules you need to follow:

#### Reporting Bugs
* Always update to the most recent <code>master</code> release; the bug may already be resolved.
* If you are interested in fixing bugs, you can follow them here - [Issues](https://github.com/GeekyAnts/NativeBase/issues).
* Search for similar issues in the issues list for this repo. It may already be an identified problem.
* If you want to contribute to an issue that is not part of this list you are also more than welcome to submit your issue to our [GitHub Repository](https://github.com/GeekyAnts/NativeBase/issues).
* In that case, provide a short description of the visible symptoms. If applicable, include error messages, screen shots, and stack traces.
* If applicable, submit a step-by-step walkthrough of how to reproduce the issue.<br />

#### Request for New Feature
* Use [Github Issues](https://github.com/GeekyAnts/NativeBase/issues) to submit feature requests.
* Search for a similar request and extend it if applicable. This way it would be easier for the [NativeBase](http://nativebase.io/) community to track the features.
* When a brand new feature is requested, try to give as many details on your need as feasible. We prefer that you explain the need rather than explaining a technical solution for it. That might trigger a nice conversation on finding the best and broadest technical solution to a specific need.<br />

#### Code Fixes and Enhancements
* Fork the repo you are planning to work on.
* Create a new branch from <code>development</code> branch and not <code>master</code> branch.<br />
*Example:* <code>my-new-feature</code><br />
*Note: Please have your branch named apart from <code>master</code> and <code>development</code>.*
* Work on your branch until you are confident enough to create a pull request.
* Conclude working on your branch and push to your forked repo.
* Create a pull request of your branch to NativeBase repo <code>development</code> branch.
* If you have perfectly accompanied our contribution guide and that if your new feature / bug fixes sounds good to us, then we will merge the changes and you are free to delete your branch.
