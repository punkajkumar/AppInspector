Ext.data.JsonP.Siesta_Test_Action_DoubleTap({"tagname":"class","name":"Siesta.Test.Action.DoubleTap","autodetected":{},"files":[{"filename":"DoubleTap.js","href":"DoubleTap.html#Siesta-Test-Action-DoubleTap"}],"extends":"Siesta.Test.Action","mixins":["Siesta.Test.Action.Role.HasTarget"],"members":[{"name":"desc","tagname":"cfg","owner":"Siesta.Test.Action","id":"cfg-desc","meta":{}},{"name":"el","tagname":"cfg","owner":"Siesta.Test.Action.Role.HasTarget","id":"cfg-el","meta":{}},{"name":"offset","tagname":"cfg","owner":"Siesta.Test.Action.Role.HasTarget","id":"cfg-offset","meta":{}},{"name":"options","tagname":"cfg","owner":"Siesta.Test.Action.Role.HasTarget","id":"cfg-options","meta":{}},{"name":"passTargetToNext","tagname":"cfg","owner":"Siesta.Test.Action.Role.HasTarget","id":"cfg-passTargetToNext","meta":{}},{"name":"target","tagname":"cfg","owner":"Siesta.Test.Action.Role.HasTarget","id":"cfg-target","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Siesta.Test.Action.DoubleTap","short_doc":"This action will perform a double tap on the provided target. ...","component":false,"superclasses":["Siesta.Test.Action"],"subclasses":[],"mixedInto":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Siesta.Test.Action' rel='Siesta.Test.Action' class='docClass'>Siesta.Test.Action</a><div class='subclass '><strong>Siesta.Test.Action.DoubleTap</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='docClass'>Siesta.Test.Action.Role.HasTarget</a></div><h4>Files</h4><div class='dependency'><a href='source/DoubleTap.html#Siesta-Test-Action-DoubleTap' target='_blank'>DoubleTap.js</a></div></pre><div class='doc-contents'><p>This action will perform a <a href=\"#!/api/Siesta.Test.Browser-method-doubleClick\" rel=\"Siesta.Test.Browser-method-doubleClick\" class=\"docClass\">double tap</a> on the provided <a href=\"#!/api/Siesta.Test.Action.DoubleTap-cfg-target\" rel=\"Siesta.Test.Action.DoubleTap-cfg-target\" class=\"docClass\">target</a>.</p>\n\n<p>This action can be included in the <code>t.chain</code> call with \"doubletap\" or \"doubleTap\" shortcuts:</p>\n\n<pre><code>t.chain(\n    {\n        action      : 'doubletap',\n        target      : someDOMElement\n    },\n    // or\n    {\n        doubletap   : someDOMElement,\n        offset      : [20,20] // click 20px from the left/top corner of the element\n    }\n)\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-desc' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action' rel='Siesta.Test.Action' class='defined-in docClass'>Siesta.Test.Action</a><br/><a href='source/Action.html#Siesta-Test-Action-cfg-desc' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action-cfg-desc' class='name expandable'>desc</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>When provided, once step is completed, a passing assertion with this text will be added to a test. ...</div><div class='long'><p>When provided, once step is completed, a passing assertion with this text will be added to a test.\nThis configuration option can be useful to indicate the progress of \"wait\" steps</p>\n</div></div></div><div id='cfg-el' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='defined-in docClass'>Siesta.Test.Action.Role.HasTarget</a><br/><a href='source/HasTarget.html#Siesta-Test-Action-Role-HasTarget-cfg-el' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Role.HasTarget-cfg-el' class='name expandable'>el</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>An alias for <a href=\"#!/api/Siesta.Test.Action.Role.HasTarget-cfg-target\" rel=\"Siesta.Test.Action.Role.HasTarget-cfg-target\" class=\"docClass\">target</a></p>\n</div><div class='long'><p>An alias for <a href=\"#!/api/Siesta.Test.Action.Role.HasTarget-cfg-target\" rel=\"Siesta.Test.Action.Role.HasTarget-cfg-target\" class=\"docClass\">target</a></p>\n</div></div></div><div id='cfg-offset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='defined-in docClass'>Siesta.Test.Action.Role.HasTarget</a><br/><a href='source/HasTarget.html#Siesta-Test-Action-Role-HasTarget-cfg-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Role.HasTarget-cfg-offset' class='name expandable'>offset</a> : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>An offset in X, Y coordinates from the targeted element. ...</div><div class='long'><p>An offset in X, Y coordinates from the targeted element. The offset can be expressed in 3 different ways.\nIntegers             : [10, 20]       // offset 10px from left, 20px from top\nPercent              : [\"10%\", 20]    // offset 10% from left, 20px from top\nPercent + offset     : [\"100%-2\", 20] // offset -2px from right, 20px from top</p>\n</div></div></div><div id='cfg-options' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='defined-in docClass'>Siesta.Test.Action.Role.HasTarget</a><br/><a href='source/HasTarget.html#Siesta-Test-Action-Role-HasTarget-cfg-options' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Role.HasTarget-cfg-options' class='name expandable'>options</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Any options that will be used when simulating the event. ...</div><div class='long'><p>Any options that will be used when simulating the event. For information about possible\nconfig options, please see: <a href=\"https://developer.mozilla.org/en-US/docs/DOM/event.initMouseEvent\">https://developer.mozilla.org/en-US/docs/DOM/event.initMouseEvent</a></p>\n</div></div></div><div id='cfg-passTargetToNext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='defined-in docClass'>Siesta.Test.Action.Role.HasTarget</a><br/><a href='source/HasTarget.html#Siesta-Test-Action-Role-HasTarget-cfg-passTargetToNext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Role.HasTarget-cfg-passTargetToNext' class='name expandable'>passTargetToNext</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Whether to pass the target further on chain as the first argument ...</div><div class='long'><p>Whether to pass the target further on chain as the first argument</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-target' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Siesta.Test.Action.Role.HasTarget' rel='Siesta.Test.Action.Role.HasTarget' class='defined-in docClass'>Siesta.Test.Action.Role.HasTarget</a><br/><a href='source/HasTarget.html#Siesta-Test-Action-Role-HasTarget-cfg-target' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Siesta.Test.Action.Role.HasTarget-cfg-target' class='name expandable'>target</a> : <a href=\"#!/api/Siesta.Test.ActionTarget\" rel=\"Siesta.Test.ActionTarget\" class=\"docClass\">Siesta.Test.ActionTarget</a>/Function<span class=\"signature\"></span></div><div class='description'><div class='short'>A target for action. ...</div><div class='long'><p>A target for action. See <a href=\"#!/api/Siesta.Test.ActionTarget\" rel=\"Siesta.Test.ActionTarget\" class=\"docClass\">Siesta.Test.ActionTarget</a> for various values that can be provided.</p>\n\n<p><strong>Important.</strong> If the function is provided for this config, it will be called and returning value used as actual target.\nThis is useful, since sometimes target for the action depends from the previous step and\nis not yet available during <code>t.chain</code> call.</p>\n\n<p>For example, you want to click on the button which opens a window and then click on something in the window. Compare:</p>\n\n<pre><code>t.chain(\n    // clicking on button opens the window\n    {\n        action      : 'click',\n        target      : buttonComp        \n    },\n    // FRAGILE: `windowComp` could not be rendered yet - `buttonComp` is not yet clicked!\n    {\n        action      : 'click',\n        target      : windowComp.el.down('.clickArea')  \n    }\n\n    // MORE ROBUST: taking the \"el\" right before this action starts\n    {\n        action      : 'click',\n        target      : function () {\n            return windowComp.el.down('.clickArea')\n        } \n    }\n)\n</code></pre>\n\n<p>Target will be available in the next step as the 2nd argument. See <a href=\"#!/api/Siesta.Test.Action.Role.HasTarget\" rel=\"Siesta.Test.Action.Role.HasTarget\" class=\"docClass\">Siesta.Test.Action.Role.HasTarget</a></p>\n\n<p>This config option can also be provided as \"el\"</p>\n</div></div></div></div></div></div></div>","meta":{}});