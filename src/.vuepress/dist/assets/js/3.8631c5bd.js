(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{485:function(t,e,o){},499:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{inputValues:{oneTimeDeposit:null,period:null,rateOfInterest:null,compoundingPeriod:null}}},computed:{cmCompoundingTimes:function(){var t;return"HalfYearly"===this.inputValues.compoundingPeriod&&(t=2),"Yearly"===this.inputValues.compoundingPeriod&&(t=1),"Quarterly"===this.inputValues.compoundingPeriod&&(t=4),"Monthly"===this.inputValues.compoundingPeriod&&(t=12),t},comopoundInterest:function(){return Math.round((Math.pow(1+this.inputValues.rateOfInterest/100/this.cmCompoundingTimes,this.inputValues.period*this.cmCompoundingTimes)-1)*this.inputValues.oneTimeDeposit)}}},s=(o(598),o(48)),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ClientOnly",[o("div",{staticClass:"compoundForm"},[o("h3",[t._v("\r\n        "+t._s(t.$frontmatter.headA1)+"\r\n        "),o("h4",[t._v("\r\n          "+t._s(t.$frontmatter.headA2)+"\r\n        ")])]),t._v(" "),o("div",{staticClass:"row-form"},[o("label",{staticClass:"column-form-left",attrs:{for:"oneTimeDeposit"}},[t._v(t._s(t.$frontmatter.headA3))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValues.oneTimeDeposit,expression:"inputValues.oneTimeDeposit"}],staticClass:"column-form-right",attrs:{id:"name"},domProps:{value:t.inputValues.oneTimeDeposit},on:{input:function(e){e.target.composing||t.$set(t.inputValues,"oneTimeDeposit",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"row-form"},[o("label",{staticClass:"column-form-left",attrs:{for:"period"}},[t._v(t._s(t.$frontmatter.headA4))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValues.period,expression:"inputValues.period"}],staticClass:"column-form-right",attrs:{id:"period"},domProps:{value:t.inputValues.period},on:{input:function(e){e.target.composing||t.$set(t.inputValues,"period",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"row-form"},[o("label",{staticClass:"column-form-left",attrs:{for:"rateOfInterest"}},[t._v(t._s(t.$frontmatter.headA5))]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValues.rateOfInterest,expression:"inputValues.rateOfInterest"}],staticClass:"column-form-right",attrs:{id:"rateOfInterest"},domProps:{value:t.inputValues.rateOfInterest},on:{input:function(e){e.target.composing||t.$set(t.inputValues,"rateOfInterest",e.target.value)}}})]),t._v(" "),o("div",{staticClass:"row-form"},[o("label",{staticClass:"column-form-left"},[t._v(t._s(t.$frontmatter.headA6)+" ")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.inputValues.compoundingPeriod,expression:"inputValues.compoundingPeriod"}],staticClass:"column-form-right",on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.inputValues,"compoundingPeriod",e.target.multiple?o:o[0])}}},[o("option",{attrs:{disabled:"",value:""}},[t._v("Select Period")]),t._v(" "),o("option",[t._v("Monthly")]),t._v(" "),o("option",[t._v("Quarterly")]),t._v(" "),o("option",[t._v("HalfYearly")]),t._v(" "),o("option",[t._v("Yearly")])])]),t._v(" "),o("div",{staticClass:"row-form"},[o("p",{staticClass:"column-form-left"},[t._v(t._s(t.$frontmatter.headA7)+" ")]),t._v(" "),o("button",{staticClass:"form-result"},[t._v(t._s(t.inputValues.oneTimeDeposit)+" ")]),t._v(" "),o("p",{staticClass:"column-form-left"},[t._v(t._s(t.$frontmatter.headA8)+" ")]),t._v(" "),o("button",{staticClass:"form-result"},[t._v(t._s(t.comopoundInterest)+" ")]),t._v(" "),o("p",{staticClass:"column-form-left"},[t._v(t._s(t.$frontmatter.headA9))]),t._v(" "),o("button",{staticClass:"form-result"},[t._v(" "+t._s(+t.comopoundInterest+ +t.inputValues.oneTimeDeposit)+" ")])])])])}),[],!1,null,"ec6e9804",null);e.default=i.exports},598:function(t,e,o){"use strict";o(485)}}]);