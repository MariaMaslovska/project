(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f38451c"],{"2b4d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("ArticlesItemBaner"),a("section",{staticClass:"blog-article"},[a("div",{staticClass:"container"},[t.loading?a("Loader"):t._e(),a("div",{staticClass:"blog-article__wrap"},[a("img",{attrs:{src:t.singleArticle.image?t.singleArticle.image[0]:"",alt:"article-image"}}),a("div",{staticClass:"block__nav"},[a("div",{staticClass:"block__date-wrap"},[a("time",{staticClass:"block__date date--large date--black ",attrs:{datetime:t.singleArticle.date}},[t._v(" "+t._s(t._f("formatDate")(t.singleArticle.date))+" ")])]),a("div",{staticClass:"block__link-wrap"})]),a("h2",{staticClass:"block__title",domProps:{innerHTML:t._s(t.singleArticle.tag)}}),a("p",{staticClass:"block__content",domProps:{innerHTML:t._s(t.singleArticle.title)}}),a("router-link",{staticClass:"block__link link--large link--black",attrs:{to:"/"}},[a("p",[t._v("go home")])])],1)],1)])],1)},r=[],s=(a("a4d3"),a("4de4"),a("e439"),a("dbb4"),a("b64b"),a("159b"),a("ade3")),n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"articles-item-baner"},[a("a",{attrs:{href:"//codepen.io",target:"_blank"}},[a("img",{attrs:{src:"/svg/codepen.svg",alt:"baner-image"}})]),a("p",{staticClass:"baner__intro"},[t._v(" odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati ")])])}],l=(a("f2ea"),a("2877")),o={},u=Object(l["a"])(o,n,c,!1,null,null,null),b=u.exports,d=a("2f62");function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,i)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){Object(s["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var f={data:function(){return{loading:!0}},metaInfo:function(){return{title:this.$title("".concat(this.$route.params.slug))}},computed:p({},Object(d["d"])("blog",["singleArticle"])),methods:p({},Object(d["b"])("blog",["getArticleBySlug"])),created:function(){var t=this;this.getArticleBySlug(this.$route.params.slug).then((function(){t.loading=!1}))},components:{ArticlesItemBaner:b}},m=f,_=Object(l["a"])(m,i,r,!1,null,null,null);e["default"]=_.exports},cada:function(t,e,a){},f2ea:function(t,e,a){"use strict";var i=a("cada"),r=a.n(i);r.a}}]);
//# sourceMappingURL=chunk-5f38451c.bad4e499.js.map