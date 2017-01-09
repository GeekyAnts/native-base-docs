<div class="docs-desc with-right-sidebar">
        <h1 style="padding-bottom: 10px">Contributing to NativeBase</h1>

        <p>
            Thank you for your interest in contributing to the <a href="http://nativebase.io/">NativeBase</a> project!

            <blockquote>
                NativeBase is completely open-source. Feel free to clone it or fork it!
            </blockquote>

            In favor of active development, we accept contributions from everyone. <a href="http://nativebase.io/">NativeBase</a> team is constantly marking issues and features that the community can implement. You can contribute by submitting a bug, creating pull requests or even by improving documentation. Beneath is the manual to be accompanied strictly earlier than submitting your pull requests.
        </p><br />

        <p>
            <ul style="list-style-type:none">
                <li><b>Manual:</b></li>
                <li><a href="#coding-style">Coding Style</a></li>
                <li><a href="#git-flow">Git Flow</a></li>
            </ul>
        </p><br />

        <div id="coding-style">
            <h3>Coding Style</h3>
            <p>
                To keep project away from disputes we make use of <a href="https://github.com/roadhump/SublimeLinter-eslint">ESLint</a>, which is really a handy linting tool that enforces strict coding styles and makes sure your files are free from dead code. Each module of <a href="http://nativebase.io/">NativeBase</a> has bundled ESLint as a dev dependency. In order to lint your code run following command.

<pre class="command-line language-xxx" data-output="2-19"><code>cd AwesomeNativeBase
npm install eslint</code></pre>
            </p>
        </div><br /><br />

        <div id="git-flow">
            <h3>Git Flow</h3>
            <p style="padding-bottom: 10px">
                <a href="http://nativebase.io/">NativeBase</a> is an infant and growing rapidly, so we planned to stick to Git Flow. Below are the rules you need to follow:
            </p>

            <p>
                <h4>Reporting Bugs</h4>
                <ul>
                    <li>
                        Always update to the most recent <code>master</code> release; the bug may already be resolved.
                    </li>
                    <li>
                        If you are interested in fixing bugs, you can follow them here - <a href="https://github.com/GeekyAnts/NativeBase/issues">Issues</a>.
                    </li>
                    <li>
                        Search for similar issues in the issues list for this repo. It may already be an identified problem.
                    </li>
                    <li>
                        If you want to contribute to an issue that is not part of this list you are also more than welcome to submit your issue to our <a href="https://github.com/GeekyAnts/NativeBase/issues">GitHub Repository</a>.
                        <ul>
                            <li>
                                In that case, provide a short description of the visible symptoms. If applicable, include error messages, screen shots, and stack traces.
                            </li>
                            <li>
                                 If applicable, submit a step-by-step walkthrough of how to reproduce the issue.
                            </li>
                        </ul>
                    </li>
                </ul>
            </p><br />

            <p>
                <h4>Request for New Feature</h4>
                <ul>
                    <li>
                        Use <a href="https://github.com/GeekyAnts/NativeBase/issues">Github Issues</a> to submit feature requests.
                    </li>
                    <li>
                        Search for a similar request and extend it if applicable. This way it would be easier for the <a href="http://nativebase.io/">NativeBase</a> community to track the features.
                    </li>
                    <li>
                        When a brand new feature is requested, try to give as many details on your need as feasible. We prefer that you explain the need rather than explaining a technical solution for it. That might trigger a nice conversation on finding the best and broadest technical solution to a specific need.
                    </li>
                </ul>
            </p><br />

            <p>
                <h4>Code Fixes and Enhancements</h4>
                <ul>
                    <li>Fork the repo you are planning to work on.</li>
                    <li>
                        Create a new branch from <code>development</code> branch and not <code>master</code> branch.<br />
                        <i>Example: </i><code>my-new-feature</code><br />
                        <i>Note: Please have your branch named apart from <code>master</code> and <code>development</code>.</i>
                    </li>
                    <li>
                        Work on your branch until you are confident enough to create a pull request.
                    </li>
                    <li>Conclude working on your branch and push to your forked repo.</li>
                    <li>
                        Create a pull request of your branch to NativeBase repo <code>development</code> branch.
                    </li>
                    <li>
                        If you have perfectly accompanied our contribution guide and that if your new feature / bug fixes sounds good to us, then we will merge the changes and you are free to delete your branch.
                    </li>
                </ul>
            </p>
        </div>
</div>
