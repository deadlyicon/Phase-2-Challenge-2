var clients = require("./clients.json");

process.argv.forEach(function(search) {
  for (var i = 0; i < clients.length; i++) {
    var clientsLowercase = clients[i].rep_name.toLowerCase();
    var searchLowercase = search.toLowerCase();
    if (clientsLowercase.indexOf(searchLowercase) > -1) {
      console.log(clients[i].id);
      console.log(clients[i].rep_name);
    }
  }
});
