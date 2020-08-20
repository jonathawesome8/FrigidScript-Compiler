var compileFrigidScript = function(input) {
	
	input = input.split("\n");
	output = "try {\n";
	outputFooter = "";
	variables = [[]];
	globalVariables = [[]];
	blocks = []; //stack of blocks
	scopeLevel = 0; //0 = main code, increases as scope level increases
	for (line = 0;line < input.length;line++) {
		
		code = input[line];
		currentString = "";
		codeType = "";
		quoteLevel = 0; //0 = no quotes, 1 = single quotes, 2 = double quotes
		varName = ""
		for (charI = 0;charI < code.length;charI++) {
			
			var char = code.charAt(charI);
			if (char == "'" && quoteLevel != 2) {
				quoteLevel = 1-quoteLevel;
			}
			if (char == '"' && quoteLevel != 1) {
				quoteLevel = 2-quoteLevel;
			}
			if (char == "=" && quoteLevel == 0 && codeType != "global variable") {	
				codeType = "variable";
				varName = removeWhitespace(currentString);
				variables[scopeLevel].push(varName);
			}
			if (codeType == "" && (currentString == "global " || currentString == "global\t")) {
				codeType = "global variable";
				currentString = "";
			}
			if (codeType == "global variable" && char == "=" && quoteLevel == 0) {
				varName = removeWhitespace(currentString);
				globalVariables[scopeLevel].push(varName);
			}
			if (codeType == "" && (currentString == "while " || currentString == "while\t")) {
			}
			if (currentString == "onEachFrame()") {
				codeType = "on each frame";
				currentString = "";
				blocks.push("on each frame");
			}
			if (currentString == "end " || currentString == "end\t" || code == "end") {
				codeType = "end";
			}
			currentString += char;
			
		}
		if (codeType == "global variable") {
			output += "var "+currentString+";\n";
		}
		if (codeType == "variable") {
			if (variables[scopeLevel].includes(varName) || globalVariables[scopeLevel].includes(varName)) {
				output += code+";\n";
			} else {
				output += "var "+code+";\n";
			}
		} else if (codeType == "") {
			output += code+";\n";
		}
		if (codeType == "on each frame") {
			output += "var onEachFrame = function() {\n";
			outputFooter += " setInterval(function() {onEachFrame()}, 1000/60);\n";
		}
		if (codeType == "end") {
			block = blocks.pop();
			output += "}\n";
		}
		
	}
	output += outputFooter;
	output += "} catch(error) { document.getElementById('errors').innerHTML = error; }";
	document.getElementById("frigidScriptProgram").innerHTML = output;
	
}