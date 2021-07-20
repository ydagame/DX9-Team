/**
 * AjaxItemクラス
 */
class AjaxItem
{
  /**
   * ナビゲーション
   * @param {string} rootPath 
   * @param {number} currentIndexOfNav 
   */
  static nav(rootPath, currentIndexOfNav)
  {
    ajax_base('.nav', rootPath, 'nav.html', currentIndexOfNav);
  }

  /**
   * フォトスライド
   * @param {string} rootPath 
   */
  static photoslide(rootPath)
  {
    ajax_base('.photoslide', rootPath, 'photoslide.html', null);
  }
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
    async   : true,
    success : function(html)
    {
      if (element == '.nav')
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
      }

      // 書き込み
      $(element).html(html);
    }
  });
}
