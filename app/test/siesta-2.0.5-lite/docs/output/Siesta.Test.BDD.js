Ext.data.JsonP.Siesta_Test_BDD({"tagname":"class","name":"Siesta.Test.BDD","autodetected":{},"files":[{"filename":"BDD.js","href":"BDD.html#Siesta-Test-BDD"}],"members":[{"name":"any","tagname":"method","owner":"Siesta.Test.BDD","id":"method-any","meta":{}},{"name":"anyNumberApprox","tagname":"method","owner":"Siesta.Test.BDD","id":"method-anyNumberApprox","meta":{}},{"name":"ddescribe","tagname":"method","owner":"Siesta.Test.BDD","id":"method-ddescribe","meta":{}},{"name":"describe","tagname":"method","owner":"Siesta.Test.BDD","id":"method-describe","meta":{}},{"name":"expect","tagname":"method","owner":"Siesta.Test.BDD","id":"method-expect","meta":{}},{"name":"iit","tagname":"method","owner":"Siesta.Test.BDD","id":"method-iit","meta":{}},{"name":"it","tagname":"method","owner":"Siesta.Test.BDD","id":"method-it","meta":{}},{"name":"xdescribe","tagname":"method","owner":"Siesta.Test.BDD","id":"method-xdescribe","meta":{}},{"name":"xit","tagname":"method","owner":"Siesta.Test.BDD","id":"method-xit","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Siesta.Test.BDD","short_doc":"A mixin providing a BDD style layer for most of the assertion methods. ...","component":false,"superclasses":[],"subclasses":[],"mixedInto":["Siesta.Test"],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Siesta.Test' rel='Siesta.Test' class='docClass'>Siesta.Test</a></div><h4>Files</h4><div class='dependency'><a href='source/BDD.html#Siesta-Test-BDD' target='_blank'>BDD.js</a></div></pre><div class='doc-contents'><p>A mixin providing a BDD style layer for most of the assertion methods.\nIt is consumed by <a href=\"#!/api/Siesta.Test\" rel=\"Siesta.Test\" class=\"docClass\">Siesta.Test</a>, so all of its methods are available in all tests.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-any' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.BDD'>Siesta.Test.BDD</span><br/><a href='source/BDD.html#Siesta-Test-BDD-method-any' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.BDD-method-any' class='name expandable'>any</a>( <span class='pre'>clsConstructor</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>This method returns a placeholder, denoting any instance of the provided class constructor. ...</div><div class='long'><p>This method returns a <em>placeholder</em>, denoting any instance of the provided class constructor. Such placeholder can be used in various\ncomparison assertions, like is, isDeeply, <a href=\"#!/api/Siesta.Test.BDD.Expectation-method-toBe\" rel=\"Siesta.Test.BDD.Expectation-method-toBe\" class=\"docClass\">expect().toBe()</a>,\n<a href=\"#!/api/Siesta.Test.BDD.Expectation-method-toBe\" rel=\"Siesta.Test.BDD.Expectation-method-toBe\" class=\"docClass\">expect().toEqual()</a> and so on.</p>\n\n<p>For example:</p>\n\n<pre><code>t.is(1, t.any(Number))\n\nt.expect(1).toBe(t.any(Number))\n\nt.isDeeply({ name : 'John', age : 45 }, { name : 'John', age : t.any(Number))\n\nt.expect({ name : 'John', age : 45 }).toEqual({ name : 'John', age : t.any(Number))\n\nt.is(NaN, t.any(), 'When class constructor is not provided `t.any()` should match anything')\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clsConstructor</span> : Function<div class='sub-desc'><p>A class constructor instances of which are denoted with this placeholder. As a special case if this argument\nis not provided, a placeholder will match any value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A placeholder object</p>\n</div></li></ul></div></div></div><div id='method-anyNumberApprox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.BDD'>Siesta.Test.BDD</span><br/><a href='source/BDD.html#Siesta-Test-BDD-method-anyNumberApprox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.BDD-method-anyNumberApprox' class='name expandable'>anyNumberApprox</a>( <span class='pre'>value, [threshold]</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>This method returns a placeholder, denoting any number approximately equal to the provided value. ...</div><div class='long'><p>This method returns a <em>placeholder</em>, denoting any number approximately equal to the provided value.\nSuch placeholder can be used in various comparison assertions, like is, isDeeply,\n<a href=\"#!/api/Siesta.Test.BDD.Expectation-method-toBe\" rel=\"Siesta.Test.BDD.Expectation-method-toBe\" class=\"docClass\">expect().toBe()</a>,\n<a href=\"#!/api/Siesta.Test.BDD.Expectation-method-toBe\" rel=\"Siesta.Test.BDD.Expectation-method-toBe\" class=\"docClass\">expect().toEqual()</a> and so on.</p>\n\n<p>For example:</p>\n\n<pre><code>t.is(1, t.anyNumberApprox(1.2, 0.5))\n\nt.expect(1).toBe(t.any(Number))\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The approximate value</p>\n</div></li><li><span class='pre'>threshold</span> : Number (optional)<div class='sub-desc'><p>The threshold. If omitted, it is set to 5% from the <code>value</code>.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>A placeholder object</p>\n</div></li></ul></div></div></div><div id='method-ddescribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.BDD'>Siesta.Test.BDD</span><br/><a href='source/BDD.html#Siesta-Test-BDD-method-ddescribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.BDD-method-ddescribe' class='name expandable'>ddescribe</a>( <span class='pre'>name, code, [timeout]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This is an \"exclusive\" version of the regular describe suite. ...</div><div class='long'><p>This is an \"exclusive\" version of the regular <a href=\"#!/api/Siesta.Test.BDD-method-describe\" rel=\"Siesta.Test.BDD-method-describe\" class=\"docClass\">describe</a> suite. When such suites presents in some test file,\nthe other regular suites at the same level will not be executed, only \"exclusive\" ones.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name or description of the suite</p>\n</div></li><li><span class='pre'>code</span> : Function<div class='sub-desc'><p>The code function for this suite. It will receive a test instance as the first argument which should be used for all assertion methods.</p>\n</div></li><li><span class='pre'>timeout</span> : Number (optional)<div class='sub-desc'><p>A maximum duration for this suite. If not provided <a href=\"#!/api/Siesta.Harness-cfg-subTestTimeout\" rel=\"Siesta.Harness-cfg-subTestTimeout\" class=\"docClass\">Siesta.Harness.subTestTimeout</a> value is used.</p>\n</div></li></ul></div></div></div><div id='method-describe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.BDD'>Siesta.Test.BDD</span><br/><a href='source/BDD.html#Siesta-Test-BDD-method-describe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.BDD-method-describe' class='name expandable'>describe</a>( <span class='pre'>name, code, [timeout]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method starts a sub test with suite (in BDD terms). ...</div><div class='long'><p>This method starts a sub test with <em>suite</em> (in BDD terms). Such suite consists from one or more <em>specs</em> (see method <a href=\"#!/api/Siesta.Test.BDD-method-it\" rel=\"Siesta.Test.BDD-method-it\" class=\"docClass\">it</a>} or other suites.\nThe number of nesting levels is not limited. All suites of the same nesting level are executed sequentially.</p>\n\n<p>For example:</p>\n\n<pre><code>t.describe('A product', function (t) {\n\n    t.it('should have feature X', function (t) {\n        ...\n    })\n\n    t.describe('feature X', function (t) {\n        t.it('should be cool', function (t) {\n            ...\n        })\n    })\n})\n</code></pre>\n\n<p>See also <a href=\"#!/api/Siesta.Test.BDD-method-xdescribe\" rel=\"Siesta.Test.BDD-method-xdescribe\" class=\"docClass\">xdescribe</a>, <a href=\"#!/api/Siesta.Test.BDD-method-ddescribe\" rel=\"Siesta.Test.BDD-method-ddescribe\" class=\"docClass\">ddescribe</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name or description of the suite</p>\n</div></li><li><span class='pre'>code</span> : Function<div class='sub-desc'><p>The code function for this suite. It will receive a test instance as the first argument which should be used for all assertion methods.</p>\n</div></li><li><span class='pre'>timeout</span> : Number (optional)<div class='sub-desc'><p>A maximum duration for this suite. If not provided <a href=\"#!/api/Siesta.Harness-cfg-subTestTimeout\" rel=\"Siesta.Harness-cfg-subTestTimeout\" class=\"docClass\">Siesta.Harness.subTestTimeout</a> value is used.</p>\n</div></li></ul></div></div></div><div id='method-expect' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.BDD'>Siesta.Test.BDD</span><br/><a href='source/BDD.html#Siesta-Test-BDD-method-expect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.BDD-method-expect' class='name expandable'>expect</a>( <span class='pre'>value</span> ) : <a href=\"#!/api/Siesta.Test.BDD.Expectation\" rel=\"Siesta.Test.BDD.Expectation\" class=\"docClass\">Siesta.Test.BDD.Expectation</a><span class=\"signature\"></span></div><div class='description'><div class='short'>This method returns an \"expectation\" instance, which can be used to check various assertions about the passed value. ...</div><div class='long'><p>This method returns an \"expectation\" instance, which can be used to check various assertions about the passed value.</p>\n\n<p><strong>Note</strong>, that every expectation has a special property <code>not</code>, that contains another expectation, but with the negated meaning.</p>\n\n<p>For example:</p>\n\n<pre><code>t.expect(1).toBe(1)\nt.expect(1).not.toBe(2)\n\nt.expect('Foo').toContain('oo')\nt.expect('Foo').not.toContain('bar')\n</code></pre>\n\n<p>Please refer to the documentation of the <a href=\"#!/api/Siesta.Test.BDD.Expectation\" rel=\"Siesta.Test.BDD.Expectation\" class=\"docClass\">Siesta.Test.BDD.Expectation</a> class for the list of available methods.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Mixed<div class='sub-desc'><p>Any value, that will be assert about</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Siesta.Test.BDD.Expectation\" rel=\"Siesta.Test.BDD.Expectation\" class=\"docClass\">Siesta.Test.BDD.Expectation</a></span><div class='sub-desc'><p>Expectation instance</p>\n</div></li></ul></div></div></div><div id='method-iit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.BDD'>Siesta.Test.BDD</span><br/><a href='source/BDD.html#Siesta-Test-BDD-method-iit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.BDD-method-iit' class='name expandable'>iit</a>( <span class='pre'>name, code, [timeout]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This is an \"exclusive\" version of the regular it spec. ...</div><div class='long'><p>This is an \"exclusive\" version of the regular <a href=\"#!/api/Siesta.Test.BDD-method-it\" rel=\"Siesta.Test.BDD-method-it\" class=\"docClass\">it</a> spec. When such specs presents in some suite,\nthe other regular specs at the same level will not be executed, only \"exclusive\" ones. Note, that even \"regular\" suites (<code>t.describe</code>) sections\nwill be ignored, if they are on the same level with the exclusive <code>iit</code> section.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name or description of the spec</p>\n</div></li><li><span class='pre'>code</span> : Function<div class='sub-desc'><p>The code function for this spec. It will receive a test instance as the first argument which should be used for all assertion methods.</p>\n</div></li><li><span class='pre'>timeout</span> : Number (optional)<div class='sub-desc'><p>A maximum duration for this spec. If not provided <a href=\"#!/api/Siesta.Harness-cfg-subTestTimeout\" rel=\"Siesta.Harness-cfg-subTestTimeout\" class=\"docClass\">Siesta.Harness.subTestTimeout</a> value is used.</p>\n</div></li></ul></div></div></div><div id='method-it' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.BDD'>Siesta.Test.BDD</span><br/><a href='source/BDD.html#Siesta-Test-BDD-method-it' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.BDD-method-it' class='name expandable'>it</a>( <span class='pre'>name, code, [timeout]</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This method starts a sub test with spec (in BDD terms). ...</div><div class='long'><p>This method starts a sub test with <em>spec</em> (in BDD terms). Such spec consists from one or more assertions (or <em>expectations</em>, <em>matchers</em>, etc) or other nested specs\nand/or suites. See the <a href=\"#!/api/Siesta.Test.BDD-method-expect\" rel=\"Siesta.Test.BDD-method-expect\" class=\"docClass\">expect</a> method. The number of nesting levels is not limited. All specs of the same nesting level are executed sequentially.</p>\n\n<p>For example:</p>\n\n<pre><code>t.describe('A product', function (t) {\n\n    t.it('should have feature X', function (t) {\n        ...\n    })\n\n    t.it('should have feature Y', function (t) {\n        ...\n    })\n})\n</code></pre>\n\n<p>See also <a href=\"#!/api/Siesta.Test.BDD-method-xit\" rel=\"Siesta.Test.BDD-method-xit\" class=\"docClass\">xit</a>, <a href=\"#!/api/Siesta.Test.BDD-method-iit\" rel=\"Siesta.Test.BDD-method-iit\" class=\"docClass\">iit</a></p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name or description of the spec</p>\n</div></li><li><span class='pre'>code</span> : Function<div class='sub-desc'><p>The code function for this spec. It will receive a test instance as the first argument which should be used for all assertion methods.</p>\n</div></li><li><span class='pre'>timeout</span> : Number (optional)<div class='sub-desc'><p>A maximum duration for this spec. If not provided <a href=\"#!/api/Siesta.Harness-cfg-subTestTimeout\" rel=\"Siesta.Harness-cfg-subTestTimeout\" class=\"docClass\">Siesta.Harness.subTestTimeout</a> value is used.</p>\n</div></li></ul></div></div></div><div id='method-xdescribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.BDD'>Siesta.Test.BDD</span><br/><a href='source/BDD.html#Siesta-Test-BDD-method-xdescribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.BDD-method-xdescribe' class='name expandable'>xdescribe</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This is a no-op method, allowing you to quickly ignore some suites. ...</div><div class='long'><p>This is a no-op method, allowing you to quickly ignore some suites.</p>\n</div></div></div><div id='method-xit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Siesta.Test.BDD'>Siesta.Test.BDD</span><br/><a href='source/BDD.html#Siesta-Test-BDD-method-xit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.BDD-method-xit' class='name expandable'>xit</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>This is a no-op method, allowing you to quickly ignore some specs. ...</div><div class='long'><p>This is a no-op method, allowing you to quickly ignore some specs.</p>\n</div></div></div></div></div></div></div>","meta":{}});