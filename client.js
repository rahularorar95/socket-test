$(function () {
  window.WebSocket = window.WebSocket || window.MozWebSocket;

  var connection = new WebSocket('ws://127.0.0.1:1337');

  connection.onopen = function () {

  };

  connection.onerror = function (error) {

  };

  connection.onmessage = function (message) {
    try {
      var json = JSON.parse(message.data);
      document.write(JSON.stringify(json.data))
      console.log(json)
    } catch (e) {
      console.log('This doesn\'t look like a valid JSON: ',
        message.data);
      return;
    }
  };
});