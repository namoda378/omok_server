
const util = require('util')

console.log('loading pre')



const tags = {}
tags['default'] = true
// tags['require_r'] = true

l0g = function(...args) {
	// body...
	let s_s = []
	let n_s = []

	args.forEach((elm)=>{
		switch(typeof elm){
			case("string"):
				s_s.push(elm)
				//console.log("push s")
				break;
			case("number"):
				n_s.push(elm)
				//console.log("push n")
				break;
		}
	})

	let indent = n_s[0] | 0 
	let s = null
	let tag = null

	
	if(s_s.length >= 2){
		//console.log(" dcode - ag921")
		s = s_s[0]
		tag = s_s[1]
		indent = n_s[0] | 0 
	}else{
		tag = "default"
		if(s_s.length == 1){
			//console.log(" dcode - ag2421d")
			s = s_s[0]
		}else{
			//console.log(" dcode - agagw1d")
			s = ""+n_s[1];	
		}
	}
	
	if (tags[tag])console.log('\t'.repeat(indent) + s)

}


d7mp = function(o,calldepth){
	if(calldepth){
		return '\t'.repeat(calldepth-1)+util.inspect(o, {showHidden: false, depth: null}).replace(/\n/g, "\n"+'\t'.repeat(calldepth));
	}else{
		return util.inspect(o, {showHidden: false, depth: null})
	}
}