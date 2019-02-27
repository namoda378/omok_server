const o = {};
module.exports = o;

// identified by : colubrow 
// 

o.init = function(parent) {


	o.lib = {}


	o.__dcode = "ff67675";

	function User(id,pw){
		this.user_id = id;
		this.password = pw;
	}

	o.instance_prototype = User.prototype;

	o.new = function(id,pw){
		o.lib[id] = new User(id,pw);
	}



}