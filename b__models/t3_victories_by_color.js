const o = {};
module.exports = o;

o.init = function(parent) {
    o.lib = {}

    o.initialize= ()=>{
        const lib = o.lib
        get_colubrows().forEach((colubrow)=>{
            const model = {}
            model.colubrow = colubrow
            model.victoriesByColor = [0,0,0,0];
            lib[colubrow] = model
        })
    }  


}


