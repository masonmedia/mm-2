(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+hP2":function(e,t,a){"use strict";function o(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}function n(e,t){var a=t.left,o=t.right,n=t.up,r=t.down,l=t.top,i=t.bottom,u=t.mirror,d=t.opposite,c=(a?1:0)|(o?2:0)|(l||r?4:0)|(i||n?8:0)|(u?16:0)|(d?32:0)|(e?64:0);if(m.hasOwnProperty(c))return m[c];if(!u!=!(e&&d)){var f=[o,a,i,l,r,n];a=f[0],o=f[1],l=f[2],i=f[3],n=f[4],r=f[5]}var p="-200deg",b="center";return(r||l)&&a&&(p="-45deg"),((r||l)&&o||(n||i)&&a)&&(p="45deg"),(n||i)&&o&&(p="-90deg"),(a||o)&&(b=(a?"left":"right")+" bottom"),m[c]=(0,s.animation)("\n    "+(e?"to":"from")+" { opacity: 0; transform-origin: "+b+"; transform: rotate3d(0, 0, 1, "+p+");}\n    "+(e?"from":"to")+" { opacity: 1; transform-origin: "+b+"; transform: none;}\n  "),m[c]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,l=e.duration,i=void 0===l?s.defaults.duration:l,u=e.delay,c=void 0===u?s.defaults.delay:u,m=e.count,f=void 0===m?s.defaults.count:m,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===r?i:r,delay:c,forever:a,count:f,style:{animationFillMode:"both"}};return(0,d.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,i=a("17x9"),u=a("eH+L"),d=(l=u)&&l.__esModule?l:{default:l},s=a("ar19"),c={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},m={};r.propTypes=c,t.default=r,e.exports=t.default},"3cLY":function(e,t,a){"use strict";function o(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}function n(e,t){var a=t.left,o=t.right,n=t.up,r=t.down,l=t.top,i=t.bottom,u=t.big,d=t.mirror,c=t.opposite,f=(a?1:0)|(o?2:0)|(l||r?4:0)|(i||n?8:0)|(d?16:0)|(c?32:0)|(e?64:0)|(u?128:0);if(m.hasOwnProperty(f))return m[f];if(!d!=!(e&&c)){var p=[o,a,i,l,r,n];a=p[0],o=p[1],l=p[2],i=p[3],n=p[4],r=p[5]}var b=u?"2000px":"100%",v=a?"-"+b:o?b:"0",h=r||l?"-"+b:n||i?b:"0";return m[f]=(0,s.animation)("\n    "+(e?"to":"from")+" {opacity: 0;transform: translate3d("+v+", "+h+", 0) rotate3d(0, 0, 1, -120deg);}\n\t  "+(e?"from":"to")+" {opacity: 1;transform: none}\n  "),m[f]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,l=e.duration,i=void 0===l?s.defaults.duration:l,d=e.delay,c=void 0===d?s.defaults.delay:d,m=e.count,f=void 0===m?s.defaults.count:m,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===r?i:r,delay:c,forever:a,count:f,style:{animationFillMode:"both"}};return(0,u.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,i=a("eH+L"),u=(l=i)&&l.__esModule?l:{default:l},d=a("17x9"),s=a("ar19"),c={out:d.bool,left:d.bool,right:d.bool,top:d.bool,bottom:d.bool,big:d.bool,mirror:d.bool,opposite:d.bool,duration:d.number,timeout:d.number,delay:d.number,count:d.number,forever:d.bool},m={};r.propTypes=c,t.default=r,e.exports=t.default},IFRj:function(e,t,a){"use strict";function o(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}function n(e,t){var a=t.left,o=t.right,n=t.up,r=t.down,l=t.top,i=t.bottom,u=t.mirror,d=t.opposite,c=(a?1:0)|(o?2:0)|(l||r?4:0)|(i||n?8:0)|(u?16:0)|(d?32:0)|(e?64:0);if(m.hasOwnProperty(c))return m[c];if(!u!=!(e&&d)){var f=[o,a,i,l,r,n];a=f[0],o=f[1],l=f[2],i=f[3],n=f[4],r=f[5]}var p,b=a||o,v=l||i||n||r,h=void 0,g=void 0,y=void 0,x=void 0,w=void 0,E=void 0,O=void 0,N=void 0,k=void 0,P=void 0,I=void 0,j=void 0,_=void 0;return e?(y=b?(o?"-":"")+"20px":0,x=v?(n||i?"":"-")+"10px":"0",w=(r||l?"":"-")+"20px",j=b?(a?"-":"")+"2000px":"0",_=v?(r||l?"-":"")+"2000px":"0"):(h=b?(a?"-":"")+"3000px":"0",g=v?(r||l?"-":"")+"3000px":"0",E=b?(o?"-":"")+"25px":"0",O=v?(n||i?"-":"")+"25px":"0",N=b?(a?"-":"")+"10px":"0",k=v?(r||l?"-":"")+"10px":"0",P=b?(o?"-":"")+"5px":"0",I=v?(n||i?"-":"")+"5px":"0"),p=b||v?e?"\n        20% {\n          transform: translate3d("+y+", "+x+", 0);\n          }\n        "+(v?"40%, 45% {\n            opacity: 1;\n            transform: translate3d(0, "+w+", 0);\n          }":"")+"\n          to {\n            opacity: 0;\n            transform: translate3d("+j+", "+_+", 0);\n        }\n      ":"from, 60%, 75%, 90%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      from {\n        opacity: 0;\n        transform: translate3d("+h+", "+g+", 0);\n      }\n      60% {\n        opacity: 1;\n        transform: translate3d("+E+", "+O+", 0);\n      }\n      75% {\n        transform: translate3d("+N+", "+k+", 0);\n      }\n      90% {\n        transform: translate3d("+P+", "+I+", 0);\n      }\n      to {\n        transform: none;\n      }":e?"20% {\n          transform: scale3d(.9, .9, .9);\n        }\n        50%, 55% {\n          opacity: 1;\n          transform: scale3d(1.1, 1.1, 1.1);\n        }\n        to {\n          opacity: 0;\n          transform: scale3d(.3, .3, .3);\n      }":"from, 20%, 40%, 60%, 80%, to {\n        animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      }\n      0% {\n        opacity: 0;\n        transform: scale3d(.3, .3, .3);\n      }\n      20% {\n        transform: scale3d(1.1, 1.1, 1.1);\n      }\n      40% {\n        transform: scale3d(.9, .9, .9);\n      }\n      60% {\n        opacity: 1;\n        transform: scale3d(1.03, 1.03, 1.03);\n      }\n      80% {\n        transform: scale3d(.97, .97, .97);\n      }\n      to {\n        opacity: 1;\n        transform: scale3d(1, 1, 1);\n      }",m[c]=(0,s.animation)(p),m[c]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,l=e.duration,i=void 0===l?s.defaults.duration:l,u=e.delay,c=void 0===u?s.defaults.delay:u,m=e.count,f=void 0===m?s.defaults.count:m,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===r?i:r,delay:c,forever:a,count:f,style:{animationFillMode:"both"},reverse:p.left};return(0,d.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,i=a("17x9"),u=a("eH+L"),d=(l=u)&&l.__esModule?l:{default:l},s=a("ar19"),c={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},m={};r.propTypes=c,t.default=r,e.exports=t.default},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v})),a.d(t,"fluidImage",(function(){return h})),a.d(t,"pageQuery",(function(){return g}));var o=a("q1tI"),n=a.n(o),r=a("7oih"),l=a("3Z9Z"),i=a("JI6e"),u=a("cWnB"),d=a("9eSz"),s=a.n(d),c=a("Wbzz"),m=a("s/m+"),f=a.n(m),p=a("boqk"),b=a.n(p);function v(e){var t=e.data;return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,null,n.a.createElement(l.a,{className:"min-h-100 p-0 m-0 relative bg-knockout"},n.a.createElement(i.a,{sm:12,lg:12,className:"flex-center p-5"},n.a.createElement("h1",{className:"site-title knockout text-lowercase text-shadow fade-down"},"mason"),n.a.createElement("p",{className:"h3 text-light text-shadow text-focus-in",style:{lineHeight:"80%"}},"design. development. copywriting."),n.a.createElement(u.a,{variant:"outline-light",className:"bg-tan shadow mt-3 fade-up",onClick:function(){return b()("#about")}},"Learn more"))),n.a.createElement(f.a,{bottom:!0},n.a.createElement(l.a,{id:"about",className:"min-h-100 p-0 m-0 relative"},n.a.createElement("div",{className:"absolute z-0 left top h-100 w-100 bg-texture"}),n.a.createElement(i.a,{md:12,lg:10,xl:8,className:"flex-left p-5 relative"},n.a.createElement(f.a,{bottom:!0},n.a.createElement("h5",{className:"font-weight-bold pb-5"},"intro"),n.a.createElement("h1",{className:"section-title my-auto py-3"},"Hi, I'm Andrew. ",n.a.createElement("br",null),"I'm a passionate ",n.a.createElement("span",{className:"text-teal"},"frontend developer,")," ",n.a.createElement("span",{className:"text-tan"},"visual designer,")," ",n.a.createElement("span",{className:"text-orange"},"copywriter")," and ",n.a.createElement("span",{className:"text-lightorange"},"musician.")),n.a.createElement("h5",{className:"font-weight-bold pt-5"},"01"))))),n.a.createElement(f.a,null,n.a.createElement(l.a,{className:"min-h-100 p-0 m-0 relative"},n.a.createElement(s.a,{className:"img-full h-100",durationFadeIn:1500,placeholderStyle:{backgroundColor:"black"},style:{position:"absolute",right:"0",top:"0",zIndex:"0"},fluid:t.imageThree.childImageSharp.fluid,alt:""}),n.a.createElement(i.a,{sm:12,md:12,lg:10,xl:8,className:"flex-left text-lightorange text-shadow p-5"},n.a.createElement(f.a,{bottom:!0},n.a.createElement("h5",{className:"font-weight-bold pb-5 mb-auto"},"about me"),n.a.createElement("h1",{className:"section-title font-weight-bold"},"I specialize in ",n.a.createElement("span",{className:"text-light"},"visual design,")," building ",n.a.createElement("span",{className:"text-light"},"websites,")," and ",n.a.createElement("span",{className:"text-light"},"ux copywriting"),". I help build successful brands and create engaging digital experiences."),n.a.createElement(c.Link,{to:"/about"},n.a.createElement(u.a,{variant:"light",className:"mt-3"},"Read more")),n.a.createElement("h5",{className:"font-weight-bold pt-5 mt-auto"},"02"))))),n.a.createElement(f.a,{bottom:!0},n.a.createElement(l.a,{className:"min-h-100 p-0 m-0 relative flex-left"},n.a.createElement(s.a,{className:"img-full h-100",durationFadeIn:1500,placeholderStyle:{backgroundColor:"black"},style:{position:"absolute",right:"0",top:"0",zIndex:"0"},fluid:t.imageTwo.childImageSharp.fluid,alt:""}),n.a.createElement(f.a,{bottom:!0},n.a.createElement(i.a,{sm:12,md:11,lg:8,className:"p-4"},n.a.createElement(f.a,{bottom:!0},n.a.createElement("div",{className:"flex-left min-h-75 p-5 bg-black text-pink rounded-lg shadow-lg drop-shadow"},n.a.createElement("h5",{className:"font-weight-bold pb-5 mb-auto"},"development"),n.a.createElement("h1",{className:"font-weight-bold"},"I design & build websites from scratch with HTML, CSS, SASS, PHP, Javascript, Bootstrap, Tailwind CSS and Wordpress, and I create single page applications and static sites with React, Gatsby, and Next.js."),n.a.createElement(c.Link,{to:"/projects"},n.a.createElement(u.a,{variant:"outline-light",className:"mt-3"},"Learn more")),n.a.createElement("h5",{className:"font-weight-bold pt-5 mt-auto"},"03"))))))),n.a.createElement(f.a,{bottom:!0},n.a.createElement(l.a,{className:"min-h-100 p-0 m-0 relative"},n.a.createElement(s.a,{className:"img-full h-100",durationFadeIn:1500,placeholderStyle:{backgroundColor:"black"},style:{position:"absolute",right:"0",top:"0",zIndex:"0"},fluid:t.imageFive.childImageSharp.fluid,alt:""}),n.a.createElement(i.a,{sm:12,lg:7,className:"flex-left text-light p-5"},n.a.createElement(f.a,{bottom:!0},n.a.createElement("h5",{className:"font-weight-bold pb-5 mb-auto"},"design"),n.a.createElement("h1",{className:"font-weight-bold text-shadow drop-shadow"},"I create imagery for websites, social media, and print using Photoshop, Canva, Crello, Lunapic and other tools. I make logos, posters, banners, wedding invitations, business cards, and source the perfect project-specific photos."),n.a.createElement(c.Link,{to:"/design"},n.a.createElement(u.a,{variant:"light",className:"mt-3"},"Learn more")),n.a.createElement("h5",{className:"font-weight-bold pt-5 mt-auto"},"04"))))),n.a.createElement(f.a,{bottom:!0},n.a.createElement(l.a,{className:"min-h-100 p-0 m-0 relative"},n.a.createElement(s.a,{className:"img-full h-100",durationFadeIn:1500,placeholderStyle:{backgroundColor:"black"},style:{position:"absolute",top:"0",right:"0",zIndex:"0"},fluid:t.imageSix.childImageSharp.fluid,alt:""}),n.a.createElement(i.a,{sm:12,md:7,lg:7,className:"flex-left p-5"},n.a.createElement(f.a,{bottom:!0},n.a.createElement("h5",{className:"font-weight-bold pb-5"},"writing"),n.a.createElement("h1",{className:"font-weight-bold my-auto"},"I also write short and long form content on a wide variety of topics for websites, articles, reviews, blog posts, email marketing, and social media. I specialize in UX, SEO, and editing for web presentation."),n.a.createElement("h5",{className:"font-weight-bold pt-5"},"05"))))),n.a.createElement(f.a,{bottom:!0},n.a.createElement(l.a,{className:"min-h-100 p-0 m-0 relative"},n.a.createElement(s.a,{className:"img-full h-100",durationFadeIn:1500,placeholderStyle:{backgroundColor:"black"},style:{position:"absolute",right:"0",zIndex:"0"},fluid:t.imageProjects.childImageSharp.fluid,alt:""}),n.a.createElement(i.a,{sm:12,md:11,lg:8,className:"flex-left p-4"},n.a.createElement(f.a,{bottom:!0},n.a.createElement("div",{className:"flex-left min-h-75 p-5 bg-light rounded-lg shadow-lg drop-shadow"},n.a.createElement("h5",{className:"font-weight-bold pb-5 mb-auto"},"projects"),n.a.createElement("h1",{className:"font-weight-bold"},"I've built websites, designed graphics & written content for a wide range of companies, small businesses, and individuals in spaces from blockchain to healthcare and the arts."),n.a.createElement(c.Link,{to:"/projects"},n.a.createElement(u.a,{variant:"outline-dark",className:"mt-2"},"Learn more")),n.a.createElement("h5",{className:"font-weight-bold pt-5 mt-auto"},"06")))))),n.a.createElement(f.a,{bottom:!0},n.a.createElement(l.a,{className:"min-h-100 p-0 m-0"},n.a.createElement(i.a,{lg:12,className:"flex-left p-5"},n.a.createElement(f.a,{bottom:!0},n.a.createElement("h5",{className:"font-weight-bold pb-5 knockout"},"cv"),n.a.createElement("h1",{className:"font-weight-bold my-auto knockout"},"I have experience with a broad array of modern web development technologies and have worked in Agile team environments using Github and Bitbucket version control, communication and project management tools Slack, Skype, Zoom, Google Docs/Drive, Wrike, Cloudinary, and  I have excellent communication skills. I am a highly creative, lateral thinker who is committed to learning & growth. I am passionate, hard-working, and am focused on ethical design, data privacy, and making the web a better place."),n.a.createElement("h5",{className:"font-weight-bold pt-5 knockout"},"07"))))),n.a.createElement(f.a,{bottom:!0},n.a.createElement(l.a,{className:"min-h-100 p-0 m-0 relative"},n.a.createElement(s.a,{className:"img-full h-100",durationFadeIn:1500,placeholderStyle:{backgroundColor:"black"},style:{position:"absolute",right:"0",zIndex:"0"},fluid:t.imageStack.childImageSharp.fluid,alt:""}),n.a.createElement(i.a,{lg:12,className:"flex-center-bottom p-5"},n.a.createElement(f.a,{bottom:!0},n.a.createElement("h5",{className:"font-weight-bold text-muted bg-light"},"tech stack"),n.a.createElement("h1",{className:"font-weight-bold bg-light"},"This site was built with React, Gatsby, React-Bootstrap, SASS, and React-Reveal. It also uses APIs from Github and Cloudinary."),n.a.createElement("a",{href:"mailto:andrewmasonmedia@gmail.com"},n.a.createElement(u.a,{variant:"dark",className:"mt-2"},"Get in touch")),n.a.createElement("h5",{className:"font-weight-bold pt-5 bg-light"},"08")))))))}var h="2238509799",g="2272095655"},aaPm:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function n(e){function t(e){return e?p?{duration:d,delay:s,count:c,forever:m,className:p,style:{}}:v:f?{duration:void 0===o?n:o,delay:r,count:l,forever:i,className:f,style:{}}:b}var a=e.children,o=e.timeout,n=e.duration,r=e.delay,l=e.count,i=e.forever,d=e.durationOut,s=e.delayOut,c=e.countOut,m=e.foreverOut,f=e.effect,p=e.effectOut,b=e.inEffect,v=e.outEffect,h=function(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}(e,["children","timeout","duration","delay","count","forever","durationOut","delayOut","countOut","foreverOut","effect","effectOut","inEffect","outEffect"]);return(0,u.default)(h,t(!1),t(!0),a)}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},l=a("17x9"),i=a("ar19"),u=o(a("eH+L")),d=o(a("/eHF")),s={in:l.object,out:(0,l.oneOfType)([l.object,(0,l.oneOf)([!1])]),effect:l.string,effectOut:l.string,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool,durationOut:l.number,delayOut:l.number,countOut:l.number,foreverOut:l.bool},c=r({},i.defaults,{durationOut:i.defaults.duration,delayOut:i.defaults.delay,countOut:i.defaults.count,foreverOut:i.defaults.forever,inEffect:(0,d.default)(i.defaults),outEffect:(0,d.default)(r({out:!0},i.defaults))});n.propTypes=s,n.defaultProps=c,t.default=n,e.exports=t.default},ahhm:function(e,t,a){"use strict";function o(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}function n(e,t){var a=t.left,o=t.right,n=t.mirror,r=t.opposite,l=(a?1:0)|(o?2:0)|(n?16:0)|(r?32:0)|(e?64:0);if(m.hasOwnProperty(l))return m[l];if(!n!=!(e&&r)){var i=[o,a];a=i[0],o=i[1]}var u=a?"-100%":o?"100%":"0",d=e?"from {\n        opacity: 1;\n      }\n      to {\n        transform: translate3d("+u+", 0, 0) skewX(30deg);\n        opacity: 0;\n      }\n    ":"from {\n        transform: translate3d("+u+", 0, 0) skewX(-30deg);\n        opacity: 0;\n      }\n      60% {\n        transform: skewX(20deg);\n        opacity: 1;\n      }\n      80% {\n        transform: skewX(-5deg);\n        opacity: 1;\n      }\n      to {\n        transform: none;\n        opacity: 1;\n      }";return m[l]=(0,s.animation)(d),m[l]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,l=e.duration,i=void 0===l?s.defaults.duration:l,d=e.delay,c=void 0===d?s.defaults.delay:d,m=e.count,f=void 0===m?s.defaults.count:m,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===r?i:r,delay:c,forever:a,count:f,style:{animationFillMode:"both"}};return p.left,p.right,p.mirror,p.opposite,(0,u.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,i=a("eH+L"),u=(l=i)&&l.__esModule?l:{default:l},d=a("17x9"),s=a("ar19"),c={out:d.bool,left:d.bool,right:d.bool,mirror:d.bool,opposite:d.bool,duration:d.number,timeout:d.number,delay:d.number,count:d.number,forever:d.bool},m={};r.propTypes=c,t.default=r,e.exports=t.default},"bH/k":function(e,t,a){"use strict";function o(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}function n(e,t){var a=t.left,o=t.right,n=t.top,r=t.bottom,l=t.x,i=t.y,u=t.mirror,d=t.opposite,c=(a?1:0)|(o||i?2:0)|(n||l?4:0)|(r?8:0)|(u?16:0)|(d?32:0)|(e?64:0);if(m.hasOwnProperty(c))return m[c];if(!u!=!(e&&d)){var f=[o,a,r,n,i,l];a=f[0],o=f[1],n=f[2],r=f[3],l=f[4],i=f[5]}var p=void 0;if(l||i||a||o||n||r){var b=l||n||r?(r?"-":"")+"1":"0",v=i||o||a?(a?"-":"")+"1":"0";p=e?"from {\n          transform: perspective(400px);\n        }\n        30% {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, -15deg);\n          opacity: 1;\n        }\n        to {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, 90deg);\n          opacity: 0;\n        }":"from {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, 90deg);\n          animation-timing-function: ease-in;\n          opacity: 0;\n        }\n        40% {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, -20deg);\n          animation-timing-function: ease-in;\n        }\n        60% {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, 10deg);\n          opacity: 1;\n        }\n        80% {\n          transform: perspective(400px) rotate3d("+b+", "+v+", 0, -5deg);\n        }\n        to {\n          transform: perspective(400px);\n        }"}else p="from {\n          transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n          animation-timing-function: ease-out;\n          opacity: "+(e?"1":"0")+";\n        }\n        40% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n          animation-timing-function: ease-out;\n        }\n        50% {\n          transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n          animation-timing-function: ease-in;\n        }\n        to {\n          transform: perspective(400px);\n          animation-timing-function: ease-in;\n          opacity: "+(e?"0":"1")+";\n        }";return m[c]=(0,s.animation)(p),m[c]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,l=e.duration,i=void 0===l?s.defaults.duration:l,u=e.delay,c=void 0===u?s.defaults.delay:u,m=e.count,f=void 0===m?s.defaults.count:m,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===r?i:r,delay:c,forever:a,count:f,style:{animationFillMode:"both",backfaceVisibility:"visible"}};return(0,d.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,i=a("17x9"),u=a("eH+L"),d=(l=u)&&l.__esModule?l:{default:l},s=a("ar19"),c={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},m={};r.propTypes=c,t.default=r,e.exports=t.default},boqk:function(e,t,a){"use strict";t.__esModule=!0,t.default=void 0;var o=function(e,t){void 0===t&&(t="start");var a=document.querySelector(e);return!!a&&(a.scrollIntoView({behavior:"smooth",block:t}),!0)};t.default=o},hXnw:function(e,t,a){"use strict";function o(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}function n(e,t){var a=t.left,o=t.right,n=t.up,r=t.down,l=t.top,i=t.bottom,u=t.mirror,d=t.opposite,c=(a?1:0)|(o?2:0)|(l||r?4:0)|(i||n?8:0)|(u?16:0)|(d?32:0)|(e?64:0);if(m.hasOwnProperty(c))return m[c];if(!u!=!(e&&d)){var f=[o,a,i,l,r,n];a=f[0],o=f[1],l=f[2],i=f[3],n=f[4],r=f[5]}var p=a||o,b=l||i||n||r,v=void 0;return p||b?e?v="40% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(p?(a?"":"-")+"42px":"0")+", "+(b?(r||l?"-":"")+"60px":"0")+", 0);\n        }\n        to {\n          opacity: 0;\n          transform: scale(.1) translate3d("+(p?(o?"":"-")+"2000px":"0")+", "+(b?(n||i?"":"-")+"2000px":"0")+", 0);\n          transform-origin: "+(b?"center bottom":(a?"left":"right")+" center")+";\n        }":v="from {\n          opacity: 0;\n          transform: scale3d(.1, .1, .1) translate3d("+(p?(a?"-":"")+"1000px":"0")+", "+(b?(r||l?"-":"")+"1000px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n        }\n        60% {\n          opacity: 1;\n          transform: scale3d(.475, .475, .475) translate3d("+(p?(o?"-":"")+"10px":"0")+", "+(b?(n||i?"-":"")+"60px":"0")+", 0);\n          animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n        }":v=(e?"to":"from")+" {opacity: 0; transform: scale3d(.1, .1, .1);} "+(e?"from":"to")+" { opacity: 1; transform: none;}",m[c]=(0,s.animation)(v),m[c]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,l=e.duration,i=void 0===l?s.defaults.duration:l,u=e.delay,c=void 0===u?s.defaults.delay:u,m=e.count,f=void 0===m?s.defaults.count:m,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===r?i:r,delay:c,forever:a,count:f,style:{animationFillMode:"both"},reverse:p.left};return(0,d.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,i=a("17x9"),u=a("eH+L"),d=(l=u)&&l.__esModule?l:{default:l},s=a("ar19"),c={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},m={};r.propTypes=c,t.default=r,e.exports=t.default},oBNZ:function(e,t,a){"use strict";function o(e,t){var a={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(a[o]=e[o]);return a}function n(e,t){var a=t.left,o=t.right,n=t.up,r=t.down,l=t.top,i=t.bottom,u=t.big,d=t.mirror,c=t.opposite,f=(a?1:0)|(o?2:0)|(l||r?4:0)|(i||n?8:0)|(d?16:0)|(c?32:0)|(e?64:0)|(u?128:0);if(m.hasOwnProperty(f))return m[f];var p=a||o||n||r||l||i,b=void 0,v=void 0;if(p){if(!d!=!(e&&c)){var h=[o,a,i,l,r,n];a=h[0],o=h[1],l=h[2],i=h[3],n=h[4],r=h[5]}var g=u?"2000px":"100%";b=a?"-"+g:o?g:"0",v=r||l?"-"+g:n||i?g:"0"}return m[f]=(0,s.animation)((e?"to":"from")+" {"+(p?" transform: translate3d("+b+", "+v+", 0);":"")+"}\n     "+(e?"from":"to")+" {transform: none;} "),m[f]}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=e.children,a=(e.out,e.forever),r=e.timeout,l=e.duration,i=void 0===l?s.defaults.duration:l,u=e.delay,c=void 0===u?s.defaults.delay:u,m=e.count,f=void 0===m?s.defaults.count:m,p=o(e,["children","out","forever","timeout","duration","delay","count"]),b={make:n,duration:void 0===r?i:r,delay:c,forever:a,count:f,style:{animationFillMode:"both"},reverse:p.left};return(0,d.default)(p,b,b,t)}Object.defineProperty(t,"__esModule",{value:!0});var l,i=a("17x9"),u=a("eH+L"),d=(l=u)&&l.__esModule?l:{default:l},s=a("ar19"),c={out:i.bool,left:i.bool,right:i.bool,top:i.bool,bottom:i.bool,big:i.bool,mirror:i.bool,opposite:i.bool,duration:i.number,timeout:i.number,delay:i.number,count:i.number,forever:i.bool},m={};r.propTypes=c,t.default=r,e.exports=t.default},"s/m+":function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var n=a("aaPm");Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o(n).default}});var r=a("/eHF");Object.defineProperty(t,"Fade",{enumerable:!0,get:function(){return o(r).default}});var l=a("IFRj");Object.defineProperty(t,"Bounce",{enumerable:!0,get:function(){return o(l).default}});var i=a("3cLY");Object.defineProperty(t,"Roll",{enumerable:!0,get:function(){return o(i).default}});var u=a("oBNZ");Object.defineProperty(t,"Slide",{enumerable:!0,get:function(){return o(u).default}});var d=a("bH/k");Object.defineProperty(t,"Flip",{enumerable:!0,get:function(){return o(d).default}}),Object.defineProperty(t,"Reveal",{enumerable:!0,get:function(){return o(n).default}});var s=a("+hP2");Object.defineProperty(t,"Rotate",{enumerable:!0,get:function(){return o(s).default}});var c=a("ahhm");Object.defineProperty(t,"LightSpeed",{enumerable:!0,get:function(){return o(c).default}});var m=a("hXnw");Object.defineProperty(t,"Zoom",{enumerable:!0,get:function(){return o(m).default}})}}]);
//# sourceMappingURL=component---src-pages-index-js-731f2b2f870ad6372abd.js.map