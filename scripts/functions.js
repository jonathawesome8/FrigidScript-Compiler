//functions
var textWidth = function(arg) {
	
	return (fsContext.measureText(arg).width)/2;
	
}

var removeWhitespace = function(string) {
	
	let output = ""
	let quoteLevel = 0; //0 = no quotes, 1 = single quotes, 2 = double quotes
	for (let charI = 0;charI < string.length;charI++) {
		
		let char = code.charAt(charI);
		if (char == "'" && quoteLevel != 2) {
			quoteLevel = 1-quoteLevel;
		}
		if (char == '"' && quoteLevel != 1) {
			quoteLevel = 2-quoteLevel;
		}
		if (char != " " && char != "\t" && quoteLevel == 0) {
			output += char;
		}
		
	}
	return output;
	
}