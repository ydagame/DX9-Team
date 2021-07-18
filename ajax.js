/**
 * ナビゲーション
 * @param {string} rootPath 
 * @param {number} currentIndexOfNav 
 */
function nav(rootPath, currentIndexOfNav)
{
  ajax_base('.nav', rootPath, 'nav.html', currentIndexOfNav);
}

function ajax_complete()
{
  $('body').css('visibility', 'visible');
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
