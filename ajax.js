/**
 * ナビゲーション
 * @param {string} rootPath 
 * @param {Number} _Option_ 
 */
function nav(rootPath, _Option_)
{
  ajax_base('.nav', rootPath, 'nav.html', _Option_);
}

function ajax_complete()
{
  $('*').css('visibility', 'visible');
  $('.loading').css('display', 'none');
}

/**
 * Ajaxベース
 * @param {string} element Target Element Id or Class
 * @param {string} rootPath Root Dir Path
 * @param {string} filename Filename to Load
 * @param {*} _Option_ Free Option
 */
function ajax_base(element, rootPath, filename, _Option_)
{
  $.ajax(
  {
    url     : `${rootPath}./include/${filename}`,
    cache   : false,
    success : function(html)
    {
      // --------------------------------------------
      // ナビゲーション
      const currentTabClass          = 'current';
      const otherTabClass            = 'tab';
      const targetCurrentCheckString = '$isCurrent';

      html = html.replaceAll('{$root}', rootPath);

      for (let i = 0; i < 10; i++)
      {
        if (i == _Option_)
        {
          // @param {currentTabClass} に書き換え
          html = html.replaceAll(`{${targetCurrentCheckString}${i}}`, currentTabClass);
        }
        else
        {
          // @param {otherTabClass} に書き換え
          html = html.replaceAll(`{${targetCurrentCheckString}${i}}`, otherTabClass); 
        }
      }
      // --------------------------------------------

      // 書き込み
      $(element).html(html);
    }
  });
}
