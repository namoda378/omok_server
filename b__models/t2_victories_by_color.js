const o = {};
module.exports = o;

// identified by : colubrow 
// 

o.init = function(parent) {
    // body...


    o.instance = {}
    o.instance.victoriesByColor = [0,0,0,0];



    // o.markVictory = (colrow,color0)=>{
    //     victoriesByColor[color0]++;
    //     victoriesByColRow[colrow][color0]++;
    // }

    // const individualPoints = {}


    // const rankings = [];
    // for(let i = 0 ; i < 20 ; i ++){
    //     rankings.push({id:null,point:0});
    // }

    // o.updateRankingPacket = {reqname:"updateRanking",result:rankings};
    // o.rankings = rankings;


    // o.individualPointGain = (user,pointGain)=>{
    //     user.point += pointGain;
    //     const point = user.point;
        
    //     if(point>rankings[19].point){
    //         if(user.ranked){
    //             rankings.sort((a,b)=>{
    //                 if(a.id === user.id)a.point = point;
    //                 return -(a.point - b.point);
    //             });
    //         }else{
    //             rankings.push({id:user.id,point,color0:user.color0});
    //             rankings.sort((a,b)=>{
    //                 return -(a.point - b.point);
    //             });
    //             const otherid = rankings[20].id;
    //             if(otherid){users[otherid].ranked = false};
    //             user.ranked = true;
    //             rankings.splice(20,1);
    //         }
    //     }
    // }

  
}
