(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{618:function(e,t,l){"use strict";l.r(t);var r={mounted(){this.reverse(),this.WatchClick()},methods:{reverse(){var e=setInterval(()=>{let t=document.getElementsByClassName("sidebar-group-items")[0];if(t){let l=t.childNodes;for(let e=l.length-1;e>=0;e--)t.append(l[e]);clearInterval(e)}},100)},WatchClick(){var e=setInterval(()=>{let t=document.getElementsByClassName("sidebar-group");if(t){for(let e=0;e<t.length;e++)t[e].addEventListener("click",()=>{this.reverse()});clearInterval(e)}},100)}}},s=l(2),n=Object(s.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div")}),[],!1,null,null,null);t.default=n.exports}}]);