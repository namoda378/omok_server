const o = {};
o.state = {}
o.state.points = {};
o.state.victoriesByColor = [0,0,0,0];
o.state.victoriesByColRow = {};


const users = require('./users_module').users;

const victoriesByColor = o.state.victoriesByColor;
const victoriesByColRow = o.state.victoriesByColRow;
for(let i = 1 ; i <=11 ; i++){
    for(let j = 1 ; j <=11 ; j++){
        victoriesByColRow[i+"_"+j] = [0,0,0,0];
    }
} 

o.state.reqname = "updateGlobal";




o.markVictory = (colrow,color0)=>{
    victoriesByColor[color0]++;
    victoriesByColRow[colrow][color0]++;
}

const individualPoints = {}


const rankings = [];
for(let i = 0 ; i < 20 ; i ++){
    rankings.push({id:null,point:0});
}

o.updateRankingPacket = {reqname:"updateRanking",result:rankings};
o.rankings = rankings;


o.individualPointGain = (user,pointGain)=>{
    user.point += pointGain;
    const point = user.point;
    
    if(point>rankings[19].point){
        if(user.ranked){
            rankings.sort((a,b)=>{
                if(a.id === user.id)a.point = point;
                return -(a.point - b.point);
            });
        }else{
            rankings.push({id:user.id,point,color0:user.color0});
            rankings.sort((a,b)=>{
                return -(a.point - b.point);
            });
            const otherid = rankings[20].id;
            if(otherid){users[otherid].ranked = false};
            user.ranked = true;
            rankings.splice(20,1);
        }
    }
}

module.exports = o;