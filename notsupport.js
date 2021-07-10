let userAgent = window.navigator.userAgent.toLowerCase();

if(userAgent.indexOf('msie') != -1 || userAgent.indexOf('trident') != -1)
{
  window.location.replace("https://ydagame.github.io/DX9-Team/notsupport.html");
}
