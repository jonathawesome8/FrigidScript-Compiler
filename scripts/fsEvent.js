var Controls = function() {
    
    //private vars
    var isLeftDown,         //bool: is left mouse button down
        isLeftClick,        //bool: is left mouse button clicked
        isMiddleDown,       //bool: is middle mouse button down
        isMiddleClick,      //bool: is middle mouse button clicked
        isRightDown,        //bool: is right mouse button down
        isRightClick,       //bool: is right mouse button clicked

        mouseX,             //int: mouse X position
        mouseY,             //int: mouse Y position

        wheelVelocity;      //int: wheel velocity

    //private functions

    //removes instances of inst from arr
    var removeAllInstances = function(arr, inst) {
        let result = arr;
        while (!result.indexOf(inst) == -1) {
            result.splice(result.indexOf(inst), 1);
        }
        return result;
    }


    //init

    //keydown listener
    window.addEventListener("keydown", e => {
        keysDown.push(e.key);
    });

    //keyup listener
    window.addEventListener("keyup",  e => {
        keysReleased.push(e.key);
        removeAllInstances(keysDown, e.key);
    });

    //mousedown listener
    window.addEventListener("mousedown", e => {
        if (e.which == 1) {
            isLeftDown = true;
        } else if (e.which == 2) {
            isMiddleDown = true;
        } else if (e.which == 3) {
            isRightDown = true;
        }
    });

    //mouseup litener
    window.addEventListener("mouseup", e => {
        if (e.which == 1) {
            isLeftClick = true;
            isLeftDown = false;
        } else if (e.which == 2) {
            isMiddleClick = true;
            isMiddleDown = false;
        } else if (e.which == 3) {
            isRightClick = true;
            isRightDown = false;
        }
    });

    //mousemove listener
    window.addEventListener("mousemove", e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    //wheel listener
    window.addEventListener("wheel", e => {
        wheelVelocity = e.deltaY;
    });


    //public namespace (this) should contain only functions

    //returns mouse x position
    this.getMouseX = () => {
        return mouseX;
    }

    //returns mouse y position
    this.getMouseY = () => {
        return mouseY;
    }

    //returns if left is down
    this.isLeftDown = () => {
        return isLeftDown;
    }

    //returns if left clicked last frame
    this.isLeftClick = () => {
        return isLeftClick;
    }

    //returns if middle is down
    this.isMiddleDown = () => {
        return isMiddleDown;
    }

    //returns if middle is clicked
    this.isMiddleClick = () => {
        return isMiddleClick;
    }

    //returns if right is down
    this.isRightDown = () => {
        return isRightDown;
    }

    //returns if right clicked last frame
    this.isRightClick = () => {
        return isRightClick;
    }

    //returns wheel speed
    this.getWheelSpeed = () => {
        return wheelVelocity;
    }

    //returns if wheel moved this frame
    this.isWheelMove = () => {
        return (wheelVelocity != 0);
    }

    //returns if wheel direction is forward
    this.isWheelUp = () => {
        return (wheelVelocity > 0);
    }

    //returns if wheel direction is backward
    this.isWheelDown = () => {
        return (wheelVelocity < 0);
    }

    //returns if key is down
    this.isKeyDown = (k) => {
        return (keysDown.indexOf(k) > -1);
    }

    //returns if key was released last frame
    this.isKeyReleased = (k) => {
        return (keysReleased.indexOf(k) > -1);
    }

    //update events function
    this.updateEvents = () => {
        isLeftClick = false;
        isMiddleClick = false;
        isRightClick = false;

        keysReleased = [];

        wheelVelocity = 0;
    }

}