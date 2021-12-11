let socket;

function connect()
{
  let url = `wss://shopipi.app:5555`;
  socket  = new WebSocket(url);

  socket.onopen = onOpen;
}

function onOpen(e)
{
  socket.send(`$connection.from.${document.referrer != '' ? document.referrer : "null"}.to.${decodeURI(window.location.toString())}`);
}

function getQueryParam(name)
{
  let result = null;
  if (window.location.toString().includes(name)) result = window.location.toString().split(`?${name}=`)[1];

  if (result == null) return null;

  if (result.includes(`?`))  result = result.split(`?`)[0];
  return result;
}

$(document).ready(function()
{
  if (getQueryParam('ignore') == null)
  {
    connect();

    registerAction('.banner.zoom', '$click.zoom');
    registerAction('.banner.poster', '$click.poster');

    registerAction('.koro-download', '$click.download');

    registerAction('.zenki.tab', '$click.zenki');
  }

  // Set all local href ignore
  else
  {
    $('a').each(function()
    {
      let href = $(this).attr('href');

      if (href != undefined && !href.includes('wix'))
      {
        $(this).attr('href', href + '?ignore=true');
      }
    });
  }
});

/**
 * アクションを登録
 * @param { string } elementName 
 * @param { string } sendString 
 */
function registerAction(elementName, sendString)
{
  $(elementName).on('mousedown', function()
  {
    socket.send(sendString);
  });
}
