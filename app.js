
const util = require('util')


const assert = function(argument) {
	// body...
	if(!argument){
		throwing.throwing;
	}
}


require("./pre")

let module_rbp_s = [
//^ forin .
//> "{{ erb -rei |.*\.js$|  -xrei ~((pre)|(app))\..*~ -xf }}" {{ nl |,| }}
"e__requests/_pre" ,
"bb__affector_model_helpers/user" ,
"bb__affector_model_helpers/t3" ,
"b__models/t2_victories_by_color" ,
"b__models/user" ,
"b__models/_post" ,
"b__models/t3_victories_by_color" ,
"b__models/t3" ,
"b__models/user_rankings" ,
"d__bot/ticer" ,
"a__global/app" ,
"a__global/some_utils" 
//$
];



let name_tree_root = {}

module_rbp_s.forEach((elm)=>{

	let namestack = elm.split("/");

	let node = name_tree_root

	namestack.forEach((elm1)=>{
		if(!node[elm1]){
			node[elm1] = {}
		}
		node = node[elm1]
	})

	node.__isleaf = true

})

l0g(util.inspect(name_tree_root, {showHidden: false, depth: null}))


let root_module_ = null

function exclude_ordinal(name){
	let match = name.match(/[\w]+__(.+)/)
	if(match){
		return match[1]
	}else{
		return name
	}
}


require_v = function(path){
	let module_ = root_module_

	let namestack = path.split("/");

	namestack.forEach((name)=>{
		assert(module_.__child_s[name]);
		module_ = module_.__child_s[name];
	});

	return module_;
}


function require_r(parent,name_node,rbp_xxsep,name,calldepth = 0){
	
	const meta_names = []
	const names = []

	for(let k in name_node){
		if(k[0] == "_"){
			meta_names[k] = true
		}else{
			names.push(k)
		}
	}
	names.sort()

	let module_ = null

	l0g(calldepth," dcode - arr134 : " + rbp_xxsep,"require_r");
	l0g(calldepth+1," names : "+ util.inspect(names, {showHidden: false, depth: null}),"require_r");
	l0g(calldepth+1," meta_names : "+ util.inspect(meta_names, {showHidden: false, depth: null}),"require_r");


	let link_parent_and_module_ = ()=>{
		if(parent){
			parent.__child_s[exclude_ordinal(name)] = module_
			module_.__parent = parent
		}else{
			root_module_ = module_
		}
	}

	let init_module_ = ()=>{
		if(module_.init){
			module_.init(module_.__parent);
		}
	}

	if(name_node.__isleaf){
		module_ = require(rbp_xxsep)
		l0g(calldepth," requiring " + rbp_xxsep +" leaf" ,"require_r");

		link_parent_and_module_();
		init_module_();
	
	}else{ 
		
		if(meta_names._pre){
			l0g(calldepth," requiring " + rbp_xxsep + "/_pre" ,"require_r");
			module_ = require(rbp_xxsep+"/_pre")
		}else{
			l0g(calldepth," requiring "+ rbp_xxsep+" empty " ,"require_r");
			module_ = {}
		}

		link_parent_and_module_();
		init_module_();

		module_.__child_s = {}

		names.forEach((name)=>{
			require_r(module_,name_node[name],rbp_xxsep+"/"+name,name,calldepth+1)
		})
		
		if(meta_names._post){
			l0g(calldepth," requiring " + rbp_xxsep + "/_post" ,"require_r");
			require(rbp_xxsep+"/_post").init(module_)
		}
	}


}

require_r(null,name_tree_root,".","root")

//l0g(util.inspect(root_module_, {showHidden: false, depth: null}))



const app = require_v("global/app").singleton

app.listen(8080,"127.0.0.1",()=>console.log("started"));