const o = {};
module.exports = o;

o.init = function(parent) {
   
    let time = 0;


    const t3_model_module = require_v("models/t3")
    const user_model_module = require_v("models/user")



    function tic(){

        time++;
        l0g(1,"tic")

        t3_model_module.forEachInstance((t3_model)=>{
            t3_model.tic(time);
        })

    }

    var myInt = setInterval(tic,500);

}
