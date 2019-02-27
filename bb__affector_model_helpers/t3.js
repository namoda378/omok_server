const o = {};
module.exports = o;

o.init = function(parent) {



    const model_module_ = require_v("models/t3")

    model_module_.forEachInstance = function(func){
        for(let colubrow in this.lib){
            func(this.lib[colubrow]);
        }
    }
   
    const instance_prototype = model_module_.instance_prototype;

    instance_prototype.putStone = function(colubrow,user_id) {
        // body...
        
        this.records.push({colubrow,user_id})

    };

    let count_f93u = 0;
    
    instance_prototype.clear = function(){
        
        this.clearCount++;
        this.mapped_records = {};
        this.records = [];
        this.timeWaitedForUser = (count_f93u++)%20;
        this.turnTime = null;
        this.points = [0,0,0,0];
        this.curColor0 = Math.floor(Math.random()*4);

    }

    instance_prototype.get_current_user_id = function(first_argument) {
        // body...
        return this.waiting[this.curColor0][0]
    };

    instance_prototype.is_empty_colubrow = function(colubrow) {
        return (this.mapped_records[colubrow])?false:true;
    };

    instance_prototype.get_current_queue = function(){
        return this.waiting[this.curColor0];
    } 

    instance_prototype.current_queue_has_no_user = function(){
        return (this.get_current_queue()[0])?false:true;
    } 

    instance_prototype.remove_expired_users = function(time){
        // body...
        const queue = this.get_current_queue();
        let i = 0;
        let user_id_conobj = queue[0];

        while(user_id_conobj && time>user_id_conobj.expireTime){
            console.log("moving 1 user out of queue");
            user_id_conobj = queue[++i];
            if(!user_id_conobj)break;
        }

        queue.splice(0,i);
    }

    instance_prototype.choose_empty_colubrow = function(){

    }


    instance_prototype.tic = function(time){

            this.remove_expired_users(time);

            if(this.current_queue_has_no_user()){
                this.timeWaitedForUser++;
            }else{
                this.timeWaitedForUser = 0;
            }

            if(this.timeWaitedForUser > 3){
                this.timeWaitedForUser = 0;
                let empty_colubrow = this.choose_empty_colubrow()
                this.putStone(empty_colubrow,"@autobot");
            }
    }

}


