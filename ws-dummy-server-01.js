var http = require('http');  
http.createServer(function(req, res) {  
  res.writeHead(200, {
    'Content-Type': 'text/html'
  });

  var htmlCont = 
  "<!DOCTYPE html>\n" +
  "<html>\n" +
  "<head>\n" +
      "<title>Apache Status</title>\n" +
  "</head>\n" +
  "<body>\n" +
      "<dl>\n" +
          "<dt>Current Time: Thursday, 13-Apr-2017 17:14:44 BDT</dt>\n" +
          "<dt>Restart Time: Sunday, 09-Apr-2017 03:30:24 BDT</dt>\n" +
          "<dt>Parent Server Generation: 4</dt>\n" +
          "<dt>Server uptime: 4 days 13 hours 44 minutes 19 seconds</dt>\n" +
          "<dt>Total accesses: 43982840 - Total Traffic: 6.9 GB</dt>\n" +
          "<dt>CPU Usage: u454.3 s230.63 cu0 cs0 - .173% CPU load</dt>\n" +
          "<dt>111 requests/sec - 18.3 kB/second - 168 B/request</dt>\n" +
          "<dt>"+ Math.floor(Math.random() * 300) + 5  + " requests currently being processed, " + Math.floor(Math.random() * 80) + 0 + " idle workers</dt>\n" +
          "<dt>Restart Time: Sunday, 09-Apr-2017 03:30:24 BDT</dt>\n" +
          "<dt>Parent Server Generation: 4</dt>\n" +
          "<dt>Server uptime: 4 days 13 hours 44 minutes 19 seconds</dt>\n" +
      "</dl>\n" +
  "</body>\n" +
  "</html>";

    
  setTimeout((function () {
      res.write(htmlCont);
      res.end();
  }), 1000);
       
}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');