let f = false;

$(document).ready(function()
{
  $('.mobile-nav').click(function()
  {
    $('.mobile-nav-menu').css({'cssText': `height: ${f ? '0' : '120px'} !important;`});
    $('.moble-nav-inner a').css({'cssText': `font-size: ${f ? '0' : '24px'} !important;`});
    $('.moble-nav-inner p:first-child').css({'cssText': `border-bottom: ${f ? 'none' : 'darkorange solid 3px'} !important;`});
    f = !f;
  });
});