var g=Object.defineProperty;var n=(o,t)=>g(o,"name",{value:t,configurable:!0});import{d as v,f as u,t as C,e as m,g as p,o as x,h}from"./index.477e80c2.js";var O=v,l=u,I=C,P=RangeError,i=String.fromCharCode,s=String.fromCodePoint,D=l([].join),R=!!s&&s.length!=1;O({target:"String",stat:!0,arity:1,forced:R},{fromCodePoint:n(function(t){for(var e=[],f=arguments.length,a=0,r;f>a;){if(r=+arguments[a++],I(r,1114111)!==r)throw P(r+" is not a valid code point");e[a]=r<65536?i(r):i(((r-=65536)>>10)+55296,r%1024+56320)}return D(e,"")},"fromCodePoint")});var $=v,y=m,E=p,c=x.f,d=h,S=y(function(){c(1)}),b=!d||S;$({target:"Object",stat:!0,forced:b,sham:!d},{getOwnPropertyDescriptor:n(function(t,e){return c(E(t),e)},"getOwnPropertyDescriptor")});
//# sourceMappingURL=es.object.get-own-property-descriptor.080e307d.js.map
