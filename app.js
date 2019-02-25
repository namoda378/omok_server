const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));



let module_rbp_s = [
//^ forin .
//> "{{ erb -rei |.*\.js$| -xf }}" {{ nl |,| }}
"app" ,
"a__global/enhance_native_prototypes" ,
"b__models/global_module" ,
"b__models/games_module" 
//$
];



if(true){

	let xre = /(app)|(###)/;

	module_rbp_s = module_rbp_s.filter((elm,idx)=>{
				return xre.match(elm)
			}
		);

	console.log(module_rbp_s)

}