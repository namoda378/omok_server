const o = {};
module.exports = o;

o.init = function(parent) {

    l0g(" dcode - g9j29o ")
    const app = require_v("global/app").singleton


    const type_to_priority_mapping = {
        validation : 1,
        model : 3,
        putstone : 2,
        signup : 4,
        debug : 5
    }

    function type_to_priority(reqnames) {
        return type_to_priority_mapping[reqnames[0]];
    }


    const t3_model_lib = require_v("models/t3").lib



    function handle_putstone(handling_context,packet) {
        // body...

        const user_id = handling_context.validated_user_id = packet.user_id;
        const t3_model = t3_model_lib[colubrow]

        if ( t3_model.current_user_id( ) == user_id 
            && t3_model.is_empty_colubrow(t4_colubrow)){

            t3_model.putStone()

        }
    }


    const handle_ = {};

    handle_['model'] = function(handling_context,reqnames,packet){
        if(reqnames[1] == "t3"){
            return handle_['model']['t3'](handling_context,reqnames,packet)
        }else{

        }
    }

    handle_['model']['t3'] = function(handling_context,reqnames,packet){
        //l0g(2," dcode - gg093jg ");
        packet.result = t3_model_lib[packet.colubrow]
        return packet 
    }

  
    handle_['putstone'] = function(handling_context,reqnames,packet){
        //l0g(2," dcode - f3093jg ");
    }

    const users_model_module_ = require_v("models/user")
    handle_['validation'] = function(handling_context,reqnames,packet){
        //l0g(2," dcode - faa021 ");

        const user = users_model_module_.get_by_user_id(packet.user_id)
        if(user){
            if (user.password == packet.password){
                packet.status = "success";
                handling_context.validated_user_id = packet.user_id;
            }else{
                packet.status = "failed : id or pw wrong - d ";
            }
        }else{
            packet.status = "failed : id or pw wrong  - a ";
        }

        return packet
    }


    handle_['signup'] = function(handling_context,reqnames,packet){
        //l0g(2," dcode - ga0a3g ");
        if(true || packet.user_id.match(/????/)){

            let user = users_model_module_.get_by_user_id(packet.user_id)
            if(!user){
                users_model_module_.signup(packet.user_id,packet.password)
                packet.status = "success";
            }else{
                packet.status = "failed : id exists ";
            }
        }else{
            packet.status = "failed : id doesn't meet requirement ";
        }

        return packet
    }





    handle_["debug"] = function(handling_context,reqnames,packet){
        switch(reqnames[1]){
            case("users"):
                packet.result = users_model_module_.lib;
                break;
        }
        
        return packet
    }


    app.post("/",(req,res)=>{
    
        
        const resary = [];

        req.body.sort((a,b)=>{
            return type_to_priority(a.reqnames)-type_to_priority(b.reqnames)
        })
        
        l0g(1,d7mp(req.body,3))

        const handling_context = {}
        const res_packet_s = [];

        req.body.forEach((packet)=>{
            let res_packet = handle_[packet.reqnames[0]](handling_context,packet.reqnames,packet);
            if (res_packet) res_packet_s.push(res_packet);
        });

        l0g(1,d7mp(res_packet_s,3))
        
        res.send(res_packet_s)
    });

}


