var fs = require("fs"),
    secrets = JSON.parse(fs.readFileSync('secrets.json', 'utf8'));

var Trello = require("trello");
var trello = new Trello(secrets["user_key"], secrets["trello_readonly_key"]);
var userId = secrets["user_id"];

function mkdirtree(/* elements */) {
    var elements = Array.prototype.slice.call(arguments);
    try {
        fs.mkdirSync('./boards/' + elements.join("/"));
    } catch(e) {
        if(e.code !== 'EEXIST'){
            throw e;
        }
    }
}

function makeBoardDir(board) {
    var coolName = board.url.split("/");
    mkdirtree(coolName[coolName.length-1]);
}

function makeListDir(board, list) {
    var coolName = board.url.split("/");  // XX REPEATED
    var listName = list.name;
    mkdirtree(coolName[coolName.length-1], listName);
}
function handleError(err) {
    console.error(err);
}
trello.getBoards(userId, function(err, value) {

    value.map(function (board) {
        makeBoardDir(board);
        trello.getListsOnBoard(board.id, function (err, value) {
            value.map(function (list) {
                makeListDir(board, list);
                handleError(err);
                trello.getCardsOnList(list.id, function (err, value) {
                    console.error(err);
                    console.log(value);
                });
            });
        });
    });
    console.error(err);
    console.log(value);
});
