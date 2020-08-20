var Control = function() {

    //contains private (this function only) vars
    //this object can NOT be accessed by user code
    var private = {};
    
    //private vars

    //bool: is left mouse button held
    private.isLeftDown;

    //bool: is left mouse button clicked
    private.isLeftClick;

    //bool: is right mouse button held
    private.isRightDown;

    //bool: is right mouse button clicked
    private.isRightClick;

    //private functions

    //removes instances of inst from arr
    private.removeAllInstances = function(arr, inst) {
        let result = arr;
        while (!result.indexOf(inst) == -1) {
            result.splice(result.indexOf(inst), 1);
        }
        return result;
    }


    //init

    //keydown listener
    window.addEventListener("keydown", e => {
        private.keysDown.push(e.key);
    });

    //keyup listener
    window.addEventListener("keyup",  e => {
        private.keysReleased.push(e.key);
        private.removeAllInstances(private.keysDown, e.key);
    });

    //mousedown listener
    window.addEventListener("mousedown", e => {
        private.isLeftDown = true;
    });

    //mouseup litener
    window.addEventListener("mouseup", e => {
        private.isLeftClick = true;
    });


    //public namespace (this) should contain only functions
    this.isLeftClick = function() {
        return private.isLeftClick;
    }

}