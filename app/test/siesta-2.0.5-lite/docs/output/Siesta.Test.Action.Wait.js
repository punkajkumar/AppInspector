Ext.data.JsonP.Siesta_Test_Action_Wait({"tagname":"class","name":"Siesta.Test.Action.Wait","autodetected":{},"files":[{"filename":"Wait.js","href":"Wait.html#Siesta-Test-Action-Wait"}],"extends":"Siesta.Test.Action","members":[{"name":"args","tagname":"cfg","owner":"Siesta.Test.Action.Wait","id":"cfg-args","meta":{}},{"name":"delay","tagname":"cfg","owner":"Siesta.Test.Action.Wait","id":"cfg-delay","meta":{}},{"name":"desc","tagname":"cfg","owner":"Siesta.Test.Action","id":"cfg-desc","meta":{}},{"name":"timeout","tagname":"cfg","owner":"Siesta.Test.Action.Wait","id":"cfg-timeout","meta":{}},{"name":"waitFor","tagname":"cfg","owner":"Siesta.Test.Action.Wait","id":"cfg-waitFor","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Siesta.Test.Action.Wait","short_doc":"This action can be included in the t.chain call with \"wait\" or \"delay\" shortcuts:\n\nt.chain(\n    {\n        action     ...","component":false,"superclasses":["Siesta.Test.Action"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Siesta.Test.Action' rel='Siesta.Test.Action' class='docClass'>Siesta.Test.Action</a><div class='subclass '><strong>Siesta.Test.Action.Wait</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Wait.html#Siesta-Test-Action-Wait' target='_blank'>Wait.js</a></div></pre><div class='doc-contents'><p>This action can be included in the <code>t.chain</code> call with \"wait\" or \"delay\" shortcuts:</p>\n\n<pre><code>t.chain(\n    {\n        action      : 'wait',   // or \"delay\"\n        delay       : 1000      // 1 second\n    }\n)\n</code></pre>\n\n<p>Alternatively, for convenience, this action can be included in the chain using \"waitFor\" config (the \"action\" property can be omitted):</p>\n\n<pre><code>t.chain(\n    {\n        waitFor     : 'selector',           // or any other waitFor* method name\n        args        : [ '.x-grid-row' ]     // an array of arguments for the specified method\n    }\n)\n\nt.chain(\n    {\n        waitFor     : 'rowsVisible',        // or any other waitFor* method name\n        args        : [ grid ]              // an array of arguments for the specified method\n    }\n)\n\nt.chain(\n    {\n        waitFor     : 'waitForRowsVisible', // full method name is also ok\n        args        : grid                  // a single value will be converted to array automatically\n    }\n)\n</code></pre>\n\n<p>In the latter case, this action will perform a call to the one of the <code>waitFor*</code> methods of the test instance.\nThe name of the method is computed by prepending the uppercased value of <code>waitFor</code> config with the string \"waitFor\"\n(unless it doesn't already start with \"waitFor\").\nThe arguments for method call can be provided as the \"args\" array. Any non-array value for \"args\" will be converted to an array with one element.\n<strong>Note</strong>, that this action will provide a <code>callback</code>, <code>scope</code>, and <code>timeout</code> arguments for <code>waitFor*</code> methods - you should not specify them.</p>\n\n<p>As a special case, the value of <code>waitFor</code> config can be a Number or Function - that will trigger the call to <a href=\"#!/api/Siesta.Test-method-waitFor\" rel=\"Siesta.Test-method-waitFor\" class=\"docClass\">Siesta.Test.waitFor</a> method with provided value:</p>\n\n<pre><code>t.chain(\n    {\n        waitFor     : 500\n    },\n    // same as\n    {\n        waitFor     : '',\n        args        : [ 500 ] \n    },\n    {\n        waitFor     : function () { return document.body.className.match(/someClass/) }\n    }\n)\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-args' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.Wait'>Siesta.Test.Action.Wait</span><br/><a href='source/Wait.html#Siesta-Test-Action-Wait-cfg-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Wait-cfg-args' class='name expandable'>args</a> : Array/Function<span class=\"signature\"></span></div><div class='description'><div class='short'>The array of arguments to pass to waitForXXX method. ...</div><div class='long'><p>The array of arguments to pass to waitForXXX method. You should omit the 3 last parameters: callback, scope, timeout. Any non-array value will be converted to\na single-value array. Can be also a function, returning either an array of a single value, which will be converted to array.\nFunction will be called using test instance as a \"this\" scope.\nIf you need to pass a function, as an argument, wrap in the array. Compare:\n    {\n        waitFor : 'SomeCondition',\n        // will be called when processing the action, should return an array of arguments\n        args    : function () {}\n    }</p>\n\n<pre><code>{\n    waitFor : 'SomeCondition',\n    // won't be called, instead will be passed as 1st argument\n    args    : [ function () {} ] \n}\n</code></pre>\n</div></div></div><div id='cfg-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.Wait'>Siesta.Test.Action.Wait</span><br/><a href='source/Wait.html#Siesta-Test-Action-Wait-cfg-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Wait-cfg-delay' class='name expandable'>delay</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>A number of milliseconds to wait before continuing. ...</div><div class='long'><p>A number of milliseconds to wait before continuing.</p>\n<p>Defaults to: <code>1000</code></p></div></div></div><div id='cfg-desc' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action' rel='Siesta.Test.Action' class='defined-in docClass'>Siesta.Test.Action</a><br/><a href='source/Action.html#Siesta-Test-Action-cfg-desc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action-cfg-desc' class='name expandable'>desc</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>When provided, once step is completed, a passing assertion with this text will be added to a test. ...</div><div class='long'><p>When provided, once step is completed, a passing assertion with this text will be added to a test.\nThis configuration option can be useful to indicate the progress of \"wait\" steps</p>\n</div></div></div><div id='cfg-timeout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.Wait'>Siesta.Test.Action.Wait</span><br/><a href='source/Wait.html#Siesta-Test-Action-Wait-cfg-timeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Wait-cfg-timeout' class='name expandable'>timeout</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The maximum amount of time to wait for the condition to be fulfilled. ...</div><div class='long'><p>The maximum amount of time to wait for the condition to be fulfilled. Defaults to the <a href=\"#!/api/Siesta.Test.ExtJS-cfg-waitForTimeout\" rel=\"Siesta.Test.ExtJS-cfg-waitForTimeout\" class=\"docClass\">Siesta.Test.ExtJS.waitForTimeout</a> value.</p>\n</div></div></div><div id='cfg-waitFor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.Action.Wait'>Siesta.Test.Action.Wait</span><br/><a href='source/Wait.html#Siesta-Test-Action-Wait-cfg-waitFor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Wait-cfg-waitFor' class='name expandable'>waitFor</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The name of the waitFor method to call. ...</div><div class='long'><p>The name of the <code>waitFor</code> method to call. You can omit the leading \"waitFor\":</p>\n\n<pre><code>t.chain(\n    {\n        waitFor     : 'selector',\n        ...\n    },\n    // same as\n    {\n        waitFor     : 'waitForSelector',\n        ...\n    }\n)\n</code></pre>\n</div></div></div></div></div></div></div>","meta":{}});