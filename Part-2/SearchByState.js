var clients = require("./clients.json");

process.argv.forEach(function(search) {
  for (var i = 0; i < clients.length; i++) {
    var clientsLowercase = clients[i].state.toLowerCase();
    var searchLowercase = search.toLowerCase();
    if (clientsLowercase == searchLowercase) {
      console.log(clients[i].id);
      console.log(clients[i].rep_name);
      console.log(clients[i].company);
      console.log(clients[i].city);
      console.log(clients[i].state);
    }
  }
});
