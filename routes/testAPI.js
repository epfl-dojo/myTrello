var fs = require("fs"),
    secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));

var Trello = require("trello");
var trello = new Trello(secrets["user_key"], secrets["trello_readonly_key"]);
var userId = secrets["user_id"];

trello.getBoards(userId, function(err, value) {

    value.map(function (board) {
        var coolName = board.url.split("/");
        try{
            fs.mkdirSync('./boards/'+ coolName[coolName.length-1]);
        } catch(e){
            if(e.code !== 'EEXIST'){
                throw e;
            }
        }
    });
    console.error(err);
    console.log(value);
});
