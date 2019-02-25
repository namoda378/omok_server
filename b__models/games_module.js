const o = {};

const global_module = require("./global_module");
const globalstate = global_module.state;
const games = {};
o.games = games;

let count = 0;

o.clear = (game) =>{
    if(!game) return;
    game.clearCount++;
    
    game.map = {};
    game.ary = [];
    game.eventAry = [];
    game.waitedUser = (count++)%20;
    game.turnTime = null;
    game.points = [0,0,0,0];
    globalstate.points[game.colrow] = game.points;
    game.curColor0 = Math.floor(Math.random()*4);
}

for(let col = 1;col <= 11 ; col++){
    for(let row = 1;row <= 11 ; row++){
        let game = {};
        
        game.colrow = col+"_"+row;
        game.clearCount = -1;
        game.waiting = [[],[],[],[]];
        games[game.colrow] = game;
        o.clear(game);
    }
}




module.exports = o;