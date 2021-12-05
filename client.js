let socket;

function connect()
{
  let url = `wss://shopipi.app:25565`;
  socket  = new WebSocket(url);

  socket.onopen = onOpen;
}

function onOpen(e)
{
  socket.send(`$connection.from.${document.referrer != '' ? document.referrer : "null"}`);
}
