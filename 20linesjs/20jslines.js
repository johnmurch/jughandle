var jh=function(){var e=new Date,n={c:"jhck",p:"jhid"},t={gc:function(e){for(
var n=e+"=",t=document.cookie.split(";"),o=0;o<t.length;o++){for(var r=t[o];
" "==r.charAt(0);)r=r.substring(1);if(0==r.indexOf(n))
return r.substring(n.length,r.length)}return""},sc:function(n,t,o)
{e.setTime(e.getTime()+864e5*o);var r="expires="+e.toUTCString();
document.cookie=n+"="+t+"; "+r},gp:function(e)
{e=e.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var n=new RegExp("[\\?&]"+e+
"=([^&#]*)"),t=n.exec(location.search);return null===t?"":
decodeURIComponent(t[1].replace(/\+/g," "))},up:function(e,n)
{var t=window.location.href,o=new RegExp("[&\\?]"+e+"=");
o.test(t)?(o=new RegExp("([&\\?])"+e+"=\\d+"),
window.location.href=t.replace(o,"$1"+e+"="+n)):
window.location.href=t.indexOf("?")>-1?t+"&"+e+"="+n:t+"?"+e+"="+n}};
return{config:n,u:t,param:function(e){n.p=e},cookie:function(e){n.c=e},
run:function(){var o=t.gp(n.p);if(o){var r=new Date(e.getTime()+31536e6);
t.sc(n.c,o,r.toGMTString()),"undefined"!=typeof Storage&&
localStorage.setItem(n.c,o)}else{var c=t.gc(n.c);if(c)t.up(n.p,c);else
{var i=localStorage.getItem(n.c);if(i){var r=new Date(e.getTime()+31536e6);
sc(n.c,i,r.toGMTString()),"undefined"!=typeof Storage&&
localStorage.setItem(n.c,i),up(n.p,i)}}}}}}();jh.run();
