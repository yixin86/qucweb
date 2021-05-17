window.onload=function(){document.addEventListener('touchstart',function(event){if(event.touches.length>1){event.preventDefault();}});var lastTouchEnd=0;document.addEventListener('touchend',function(event){var now=(new Date()).getTime();if(now-lastTouchEnd<=300){event.preventDefault();}
lastTouchEnd=now;},false);document.addEventListener('gesturestart',function(event){event.preventDefault();});var name=getCookie("name");var userId=getCookie("userId");}
function addCookie(name,userId){var exp=new Date();exp.setTime(exp.getTime()+(30*60*1000));document.cookie="name="+escape(name)+";expires="+exp+";path= /";document.cookie="userId="+escape(userId)+";expires="+exp+";path= /";}
function getCookie(cookie_name){var allcookies=document.cookie;var cookie_pos=allcookies.indexOf(cookie_name);if(cookie_pos!=-1){cookie_pos+=cookie_name.length+1;var cookie_end=allcookies.indexOf(";",cookie_pos);if(cookie_end==-1){cookie_end=allcookies.length;}
var value=unescape(allcookies.substring(cookie_pos,cookie_end));}
return value;}
var url='https://api.hi5.money/chat';