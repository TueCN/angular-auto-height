(function(){angular.module("m43nu.auto-height",[]).directive("autoHeight",["$window","$timeout",function(e,t){return{link:function(n,r,i){var u,o,a;return o=function(n){return n?t(function(){var t,r,i,u,o;return r="document"===n?e.document:$("#"+n).get(0),t=$(r),u=0,i=new MutationObserver(function(){var n;return n=t.height(),n!==u&&angular.element(e).triggerHandler("resize"),u=n}),r?(o={attributes:!0,attributeFilter:["class"],subtree:!0},i.observe(r,o)):void 0}):void 0},u=function(e){var t,n,r,i;for(t=0,n=0,r=e.length;r>n;n++)i=e[n],t+=i.offsetHeight;return t},a=function(e){var t,n,r,i,u;for(i=e.parent().children(),u=[],n=0,r=i.length;r>n;n++)t=i[n],t!==e[0]&&u.push(t);return u},o(i.observeHeightOf),angular.element(e).bind("resize",function(){var t,n;return t=i.additionalHeight||0,n=e.innerHeight-r.parent()[0].getBoundingClientRect().top,r.css("height",n-u(a(r))-t+"px")}),t(function(){return angular.element(e).triggerHandler("resize")},1e3)}}}])}).call(this);