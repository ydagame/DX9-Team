$(window).scroll(function()
{
  let scrollY = $(this).scrollTop();

  $('.moveToTop')
    .css('transform', scrollY >= 200 ? 'scale(1)' : 'scale(0)')
      .click(function()
      {
        window.scroll({ top: 0, behavior: 'smooth' });
      })
      .hover(function()
      {
        $(this).css('cursor', 'pointer');
      })
});

$(document).ready(function()
{
  let $link = $('.large-banner .desc a');

  $link.on('mouseover', function()
  {
    if ($(window).width() > 480)
    $(this).find('i').css('padding-left', '4px');
  });

  $link.on('mouseout', function()
  {
    $(this).find('i').css('padding-left', '0');
  });
});