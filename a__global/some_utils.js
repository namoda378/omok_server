const o = {};
module.exports = o;

o.init = function(o) {
    // body...





}



const colubrows_s = {}
get_colubrows = function(x=11){

	if(!colubrows_s[x]){
		const colubrows = []
		colubrows_s[x] = colubrows

		for(let col = 1;col <= x ; col++){
			for(let row = 1;row <= x ; row++){
				colubrows.push(col+"_"+row)
			}
		}
		
	}

	return colubrows_s[x]
}