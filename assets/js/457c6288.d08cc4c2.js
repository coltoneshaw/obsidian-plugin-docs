"use strict";(self.webpackChunkobsidian_plugin_docs=self.webpackChunkobsidian_plugin_docs||[]).push([[6040],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,d=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return t?n.createElement(d,i(i({ref:r},l),{},{components:t})):n.createElement(d,i({ref:r},l))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},44817:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return p},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var n=t(87462),a=t(63366),o=(t(67294),t(3905)),i=["components"],p={},c="prepareFuzzySearch",u={unversionedId:"api/functions/prepareFuzzySearch",id:"api/functions/prepareFuzzySearch",isDocsHomePage:!1,title:"prepareFuzzySearch",description:"`ts",source:"@site/docs/api/functions/prepareFuzzySearch.md",sourceDirName:"api/functions",slug:"/api/functions/prepareFuzzySearch",permalink:"/obsidian-plugin-docs/api/functions/prepareFuzzySearch",editUrl:"https://github.com/marcusolsson/obsidian-plugin-docs/edit/main/docs/api/functions/prepareFuzzySearch.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"parseYaml",permalink:"/obsidian-plugin-docs/api/functions/parseYaml"},next:{title:"prepareQuery",permalink:"/obsidian-plugin-docs/api/functions/prepareQuery"}},l=[{value:"Parameters",id:"parameters",children:[]}],s={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"preparefuzzysearch"},"prepareFuzzySearch"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"export function prepareFuzzySearch(query: string): (text: string) => SearchResult | null;\n")),(0,o.kt)("p",null,"Construct a fuzzy search callback that runs on a target string.\nPerformance may be an issue if you are running the search for more than a few thousand times.\nIf performance is a problem, consider using ",(0,o.kt)("inlineCode",{parentName:"p"},"prepareSimpleSearch")," instead."),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"query")),(0,o.kt)("td",{parentName:"tr",align:null},"the fuzzy query.")))))}f.isMDXComponent=!0}}]);