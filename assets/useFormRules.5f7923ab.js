import{r as n,w as d,f as i}from"./index.bf235723.js";function m(){return{required:!0}}function A(){const{t:r}=i();return n.exports.useCallback((t,e)=>o=>({validator(f,s){var u;const l=s==null?void 0:s.valueOf(),a=(u=o.getFieldValue(t))==null?void 0:u.valueOf();return l<a?Promise.reject(r("form:rules.momentGTE",{leftLabel:"${label}",rightLabel:e})):Promise.resolve("")}}),[])}function b(){const{t:r}=i();return n.exports.useMemo(()=>({validator(t,e){return d.utils.isAddress(e)?Promise.resolve(""):Promise.reject(r("form:rules.tokenAddress",{tokenAddress:e}))}}),[])}export{A as a,b,m as u};
