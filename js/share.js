function getQueryVariable(variable){var query=window.location.search.substring(1);var vars=query.split("&");for(var i=0;i<vars.length;i++){var pair=vars[i].split("=");if(pair[0]==variable){return pair[1];}}
return null;}
function jump(n){var name=getCookie("name");var userId=getCookie("userId");console.log(name,userId);switch(n){case 1:var url="";if(userId!==null){url='https://t.me/'+telegramName+'?start='+userId}else{url='https://t.me/'+telegramName+'?start='}
GoogleAnalytics(url,'share_join','telegram');break;case 2:var url="";if(name!=null){url="https://api.whatsapp.com/send?phone="+whatsappName+"&text=I'm a friend of "+name+
", and I want to get hi too!"}else{url="https://api.whatsapp.com/send?phone="+whatsappName}
GoogleAnalytics(url,'share_join','whatsapp');break;case 3:break;case 4:break;case 5:break;case 6:break;}}