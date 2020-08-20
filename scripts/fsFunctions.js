//functions for use by Frigid Script
var setFont = function(type, size) {
	
	if (size !== undefined) {
		fontSize = size;
	}
	fsContext.font = size.toString(10)+"px "+type;
	
}

var setAlpha = function(alpha) {
	
	fsContext.globalAlpha = alpha;
	
}

var setColor = function(color) {
	
	fsContext.fillStyle = color;
	fsContext.strokeStyle = color;
	
}


var fillText = function(string, x, y, isCentered) {
	
	if (isCentered === undefined) {
		isCentered = false;
	}
	if (isCentered == true) {
		fsContext.fillText(string, x-textWidth(string), y+fontSize/3); //x-centered, y-centered
	} else if (isCentered == false) {
		fsContext.fillText(string, x, y+fontSize/3); //x not centered, y-centered
	}
	
}

var drawText = function(string, x, y, isCentered) {
	
	if (isCentered === undefined) {
		isCentered = false;
	}
	if (isCentered == true) {
		fsContext.strokeText(string, x-textWidth(string), y+fontSize/3); //x-centered, y-centered
	} else if (isCentered == false) {
		fsContext.strokeText(string, x, y+fontSize/3); //x not centered, y-centered
	}
	
}

var fill = function(color) {
	
	fsContext.fillStyle = color;
	fsContext.fillRect(0,0,fsCanvas.width,fsCanvas.height);
	
}

var fillRect = function(x, y, w, h, isCentered) {
	
	x -= isCentered*w/2;
	y -= isCentered*h/2;
	fsContext.fillRect(x, y, w, h);
	
}

var drawRect = function(x, y, w, h, isCentered, lineWidth) {
	
	if (isCentered === undefined) {
		isCentered = false;
	}
	if (lineWidth === undefined) {
		lineWidth = 1;
	}
	fsContext.lineWidth = lineWidth;
	x -= isCentered*w/2;
	y -= isCentered*h/2;
	fsContext.beginPath();
	fsContext.rect(x, y, w, h);
	fsContext.stroke();
	
}

var drawCircle = function(x, y, r, lineWidth) {
	
	if (lineWidth === undefined) {
		lineWidth = 1;
	}
	fsContext.lineWidth = lineWidth;
	fsContext.beginPath();
	fsContext.arc(x, y, r, 0, 2*Math.PI);
	fsContext.stroke();
	
}

var fillCircle = function(x, y, r) {
	
	fsContext.beginPath();
	fsContext.arc(x, y, r, 0, 2*Math.PI);
	fsContext.fill();
	
}

var drawEllipse = function(x, y, rx, ry, rotation) {
	
	fsContext.beginPath();
	if (rotation !== "undefined") {
		fsContext.ellipse(x, y, rx, ry, rotation, 0, Math.PI*2);
	} else {
		fsContext.ellipse(x, y, rx, ry, 0, 0, Math.PI*2);
	}
	fsContext.stroke();
	
}

var drawEllipseArc = function(x, y, rx, ry, start, finish, rotation) {
	
	fsContext.beginPath();
	if (rotation !== "undefined") {
		fsContext.ellipse(x, y, rx, ry, rotation, start, finish);
	} else {
		fsContext.ellipse(x, y, rx, ry, 0, start, finish);
	}
	fsContext.stroke();
	
}

var fillEllipse = function(x, y, rx, ry, rotation) {
	
	fsContext.beginPath();
	if (rotation !== "undefined") {
		fsContext.ellipse(x, y, rx, ry, rotation, 0, Math.PI*2);
	} else {
		fsContext.ellipse(x, y, rx, ry, 0, 0, Math.PI*2);
	}
	fsContext.fill();
	
}

var fillEllipseArc = function(x, y, rx, ry, start, finish, rotation) {
	
	fsContext.beginPath();
	if (rotation !== "undefined") {
		fsContext.ellipse(x, y, rx, ry, rotation, start, finish);
	} else {
		fsContext.ellipse(x, y, rx, ry, 0, start, finish);
	}
	fsContext.fill();
	
}

var drawLineWidth = function(x1, y1, x2, y2, width) {
	
	fsContext.lineWidth = width;
	fsContext.beginPath();
	fsContext.moveTo(x1, y1);
	fsContext.lineTo(x2, y2);
	fsContext.stroke();
	
}

var drawLine = function(x1, y1, x2, y2) {
	
	fsContext.lineWidth = 1;
	fsContext.beginPath();
	fsContext.moveTo(x1, y1);
	fsContext.lineTo(x2, y2);
	fsContext.stroke();
	
}

var drawRoundedRect = function(x,y,width,height,radius,lineWidth,isCentered) {
	
	if (lineWidth === undefined) {
		lineWidth = 1;
	}
	if (isCentered === undefined) {
		isCentered = false;
	}
	fsContext.lineWidth = lineWidth;
	x -= isCentered*width/2;
	y -= isCentered*height/2;
    fsContext.beginPath();
    fsContext.moveTo(x+radius, y);
    fsContext.arcTo(x+width, y, x+width, y+radius, radius);
    fsContext.arcTo(x+width, y+height, x+width-radius, y+height, radius); 
    fsContext.arcTo(x, y+height, x, y+height-radius, radius);
    fsContext.arcTo(x, y, x+radius, y, radius);
    fsContext.stroke();
	
}

var fillRoundedRect = function(x,y,width,height,radius,isCentered) {
	
    if (lineWidth === undefined) {
		lineWidth = 1;
	}
	if (isCentered === undefined) {
		isCentered = false;
	}
	fsContext.lineWidth = lineWidth;
	x -= isCentered*width/2;
	y -= isCentered*height/2;
    fsContext.beginPath();
    fsContext.moveTo(x+radius, y);
    fsContext.arcTo(x+width, y, x+width, y+radius, radius);
    fsContext.arcTo(x+width, y+height, x+width-radius, y+height, radius); 
    fsContext.arcTo(x, y+height, x, y+height-radius, radius);
    fsContext.arcTo(x, y, x+radius, y, radius);
    fsContext.fill();
	
}

/*var console = function(string) {
	
	fsConsole.push(string);
	
}*/