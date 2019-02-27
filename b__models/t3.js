const o = {};
module.exports = o;

o.init = function(parent) {
    o.lib = {}

    let count_s5er = 0;

    function Model(colubrow){
        this.colubrow = colubrow
        this.victoriesByColor = [0,0,0,0];
        this.clearCount = 0;
        this.waiting = [[],[],[],[]];

        this.mapped_records = {};
        this.records = [];
        this.timeWaitedForUser = (count_s5er++)%20;
        this.turnTime = null;
        this.points = [0,0,0,0];
        this.curColor0 = Math.floor(Math.random()*4);
    }

    o.instance_prototype = Model.prototype;

    o.initialize= ()=>{
        const lib = o.lib
        get_colubrows().forEach((colubrow)=>{
            const model = new Model(colubrow);
            lib[colubrow] = model
        })
    }  

}


