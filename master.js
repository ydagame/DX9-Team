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