const o = {};
module.exports = o;

o.init = function(parent) {

    const model_module_ = require_v("models/user")
   
    model_module_.get_by_user_id = function(user_id){
        //l0g("in affector users : "+this.__dcode);
        return this.lib[user_id];
    }

    model_module_.signup = function(user_id,password){
        model_module_.new(user_id,password);
    }

}


