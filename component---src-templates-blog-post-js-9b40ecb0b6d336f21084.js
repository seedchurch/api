(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{201:function(t,e,a){"use strict";a.r(e),a.d(e,"pageQuery",function(){return d});a(18);var n=a(0),r=a.n(n),o=a(207),c=a(213),i=a(212),s=a(210),l=a(204);var h=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){var t=this.props.data.markdownRemark,e=this.props.data.site.siteMetadata.title,a=this.props.pageContext,n=a.previous,h=a.next;return r.a.createElement(i.a,{location:this.props.location,title:e},r.a.createElement(c.a,null),r.a.createElement(s.a,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt}),r.a.createElement("h1",{style:{marginTop:Object(l.a)(1),marginBottom:0,fontFamily:"Pridi"}},t.frontmatter.title),r.a.createElement("p",{style:Object.assign({},Object(l.b)(-.2),{display:"block",marginBottom:Object(l.a)(1)})},t.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement("hr",{style:{marginBottom:Object(l.a)(1)}}),r.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.a.createElement("li",null,n&&r.a.createElement(o.a,{to:n.fields.slug,rel:"prev"},"← ",n.frontmatter.title)),r.a.createElement("li",null,h&&r.a.createElement(o.a,{to:h.fields.slug,rel:"next"},h.frontmatter.title,"→"))))},n}(r.a.Component);e.default=h;var d="3654438753"},204:function(t,e,a){"use strict";a.d(e,"a",function(){return s}),a.d(e,"b",function(){return l});var n=a(215),r=a.n(n),o=a(216),c=a.n(o);a(198);c.a.overrideThemeStyles=function(){return{a:{color:"var(--textLink)",fontFamily:"Pridi"},hr:{background:"var(--hr)"},"a.gatsby-resp-image-link":{boxShadow:"none"},"a.anchor":{boxShadow:"none"},'a.anchor svg[aria-hidden="true"]':{stroke:"var(--textLink)"},"p code":{fontSize:"1rem"},"h1 code, h2 code, h3 code, h4 code, h5 code, h6 code":{fontSize:"inherit"},"li code":{fontSize:"1rem"},blockquote:{color:"inherit",borderLeftColor:"inherit",opacity:"0.8"},"blockquote.translation":{fontSize:"1em"}}},delete c.a.googleFonts;var i=new r.a(c.a);var s=i.rhythm,l=i.scale},205:function(t,e,a){var n;t.exports=(n=a(209))&&n.default||n},206:function(t,e){t.exports="data:image/png;base64,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"},207:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(e,"a",function(){return c.a});a(205),a(9).default.enqueue,r.a.createContext({})},209:function(t,e,a){"use strict";a.r(e);a(18);var n=a(0),r=a.n(n),o=a(94);e.default=function(t){var e=t.location,a=t.pageResources;return a?r.a.createElement(o.a,Object.assign({location:e,pageResources:a},a.json)):null}},210:function(t,e,a){"use strict";var n=a(211),r=a(0),o=a.n(r),c=a(208),i=a.n(c);function s(t){var e=t.description,a=t.lang,r=t.meta,c=t.title,s=n.data.site,l=e||s.siteMetadata.description;return o.a.createElement(i.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:l},{property:"og:title",content:c},{property:"og:description",content:l},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:l}].concat(r)})}s.defaultProps={lang:"en",meta:[],description:""},e.a=s},211:function(t){t.exports={data:{site:{siteMetadata:{title:"Diary  ⛪",description:"A starter blog demonstrating what Gatsby can do.",author:"Army"}}}}},212:function(t,e,a){"use strict";a(18);var n=a(0),r=a.n(n),o=a(207);a(29),a(30),a(13),a(50),a(199);function c(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function i(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var a=e[0];return{x:a.clientX,y:a.clientY}}var n=t.pageX;if(void 0!==n)return{x:n,y:t.pageY}}return{x:0,y:0}}var s=function(t){var e,a;function n(e){var a;return(a=t.call(this,e)||this).handleClick=a.handleClick.bind(c(a)),a.handleTouchStart=a.handleTouchStart.bind(c(a)),a.handleTouchMove=a.handleTouchMove.bind(c(a)),a.handleTouchEnd=a.handleTouchEnd.bind(c(a)),a.handleTouchCancel=a.handleTouchCancel.bind(c(a)),a.handleFocus=a.handleFocus.bind(c(a)),a.handleBlur=a.handleBlur.bind(c(a)),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var o=n.prototype;return o.componentWillReceiveProps=function(t){"checked"in t&&(this.setState({checked:!!t.checked}),this.previouslyChecked=!!t.checked)},o.handleClick=function(t){var e=this.input;if(this.previouslyChecked=e.checked,t.target!==e&&!this.moved)return t.preventDefault(),e.focus(),void e.click();this.setState({checked:e.checked})},o.handleTouchStart=function(t){this.startX=i(t).x,this.touchStarted=!0,this.hadFocusAtTouchStart=this.state.hasFocus,this.setState({hasFocus:!0})},o.handleTouchMove=function(t){if(this.touchStarted&&(this.touchMoved=!0,null!=this.startX)){var e=i(t).x;this.state.checked&&e+15<this.startX?(this.setState({checked:!1}),this.startX=e):!this.state.checked&&e-15>this.startX&&(this.setState({checked:!0}),this.startX=e)}},o.handleTouchEnd=function(t){if(this.touchMoved){var e=this.input;t.preventDefault(),null!=this.startX&&(this.previouslyChecked!==this.state.checked&&e.click(),this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})}},o.handleTouchCancel=function(t){null!=this.startX&&(this.touchStarted=!1,this.startX=null,this.touchMoved=!1),this.hadFocusAtTouchStart||this.setState({hasFocus:!1})},o.handleFocus=function(t){var e=this.props.onFocus;e&&e(t),this.hadFocusAtTouchStart=!0,this.setState({hasFocus:!0})},o.handleBlur=function(t){var e=this.props.onBlur;e&&e(t),this.hadFocusAtTouchStart=!1,this.setState({hasFocus:!1})},o.getIcon=function(t){var e=this.props.icons;return e?void 0===e[t]?n.defaultProps.icons[t]:e[t]:null},o.render=function(){var t=this,e=this.props,a=e.className,n=(e.icons,function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(e,["className","icons"])),o="react-toggle"+(this.state.checked?" react-toggle--checked":"")+(this.state.hasFocus?" react-toggle--focus":"")+(this.props.disabled?" react-toggle--disabled":"")+(a?" "+a:"");return r.a.createElement("div",{className:o,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd,onTouchCancel:this.handleTouchCancel},r.a.createElement("div",{className:"react-toggle-track"},r.a.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),r.a.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),r.a.createElement("div",{className:"react-toggle-thumb"}),r.a.createElement("input",Object.assign({},n,{ref:function(e){t.input=e},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox","aria-label":"Switch between Dark and Light mode"})))},n}(n.PureComponent),l=a(208),h=a.n(l),d=a(204),u=a(206),m=a.n(u);var p=function(t){var e,a;function n(){for(var e,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))||this).state={theme:null},e}a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a;var c=n.prototype;return c.componentDidMount=function(){var t=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){t.setState({theme:window.__theme})}},c.renderHeader=function(){var t=this.props,e=t.location,a=t.title;return"/"===e.pathname?r.a.createElement("h1",{style:Object.assign({},Object(d.b)(.75),{marginBottom:0,marginTop:0,fontFamily:"Pridi"})},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"var(--textTitle)",fontFamily:"Pridi"},to:"/"},a)):r.a.createElement("h3",{style:{fontFamily:"Pridi, sans-serif",marginTop:0,marginBottom:0,height:42,lineHeight:"2.625rem"}},r.a.createElement(o.a,{style:{boxShadow:"none",textDecoration:"none",color:"rgb(255, 167, 196)"},to:"/"},a))},c.render=function(){var t=this.props.children;return r.a.createElement("div",{style:{color:"var(--textNormal)",background:"var(--bg)",transition:"color 0.2s ease-out, background 0.2s ease-out",minHeight:"100vh"}},r.a.createElement(h.a,{meta:[{name:"theme-color",content:"light"===this.state.theme?"#ffa8c5":"#282c35"}]}),r.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(d.a)(24),padding:"2.625rem "+Object(d.a)(.75)}},r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"2.625rem"}},this.renderHeader(),null!==this.state.theme?r.a.createElement(s,{icons:{checked:r.a.createElement("img",{src:m.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}}),unchecked:r.a.createElement("img",{src:m.a,width:"16",height:"16",role:"presentation",style:{pointerEvents:"none"}})},checked:"dark"===this.state.theme,onChange:function(t){return window.__setPreferredTheme(t.target.checked?"dark":"light")}}):r.a.createElement("div",{style:{height:"24px"}})),t))},n}(r.a.Component);e.a=p},213:function(t,e,a){"use strict";var n=a(0),r=a.n(n),o=a(214),c=a.n(o),i=a(204);var s=function(t){var e,a;function n(){return t.apply(this,arguments)||this}return a=t,(e=n).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{style:{display:"flex",marginBottom:Object(i.a)(2)}},r.a.createElement("img",{src:c.a,alt:"Army",style:{marginRight:Object(i.a)(.5),marginBottom:0,width:Object(i.a)(2),height:Object(i.a)(2),borderRadius:"50%"}}),r.a.createElement("p",{style:{maxWidth:310}},"blog by"," ",r.a.createElement("a",{href:"https://www.facebook.com/codegeassmasterzeronebreakout"},"Army"),"."," ","I am developer rank Archon 🐉.  Me = [✝️,  🐱,  📘, anime]"))},n}(r.a.Component);e.a=s},214:function(t,e,a){t.exports=a.p+"static/profile-pic-7a684c63de94fd92d13f8fd0815c6fe1.jpg"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-9b40ecb0b6d336f21084.js.map