function deviceOrientationHandler(tiltLR, tiltFB, dir){
    document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
    document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
    document.getElementById("doDirection").innerHTML = Math.round(dir);

    //Apply the transform to the image
    // var logo = document.getElementById("imgLogo");
    var logo = document.getElementById("box");
    // logo.style.webkitTransform =
    //     "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)";
    // logo.style.MozTransform = "rotate(" + tiltLR + "deg)";
    // logo.style.transform =
    //     "rotate(" + tiltLR + "deg) rotate3d(1,0,0, " + (tiltFB * -1) + "deg)";

    logo.object3D.transform =
        "rotateZ(" + (dir- 180) + "deg) " +
        // "rotateZ(" + (dir) + "deg) " +
        "rotateX(" + tiltFB + "deg) " +
        "rotateY(" + (-tiltLR) + "deg)";
        // "rotateX(" + tiltFB + "deg) " +
        // "rotateY(" + (-tiltLR) + "deg)";



}

function requestOrientationPermission() {
    if ( window.DeviceOrientationEvent !== undefined && typeof window.DeviceOrientationEvent.requestPermission === 'function' ) {
        window.DeviceOrientationEvent.requestPermission().then(permissionState => {
        alert("Orientation access status: " + permissionState);
        if (permissionState === 'granted') {
            if (window.DeviceOrientationEvent) {
                // console.log("DeviceOrientation is supported.");
                document.getElementById("doEvent").innerHTML = "DeviceOrientation";
                // Listen for the deviceorientation event and handle the raw data
                window.addEventListener('deviceorientation', function(eventData) {
                    // gamma is the left-to-right tilt in degrees, where right is positive
                    var tiltLR = eventData.gamma;
    
                    // beta is the front-to-back tilt in degrees, where front is positive
                    var tiltFB = eventData.beta;
    
                    // alpha is the compass direction the device is facing in degrees
                    var dir = eventData.alpha
    
                    // call our orientation event handler
                    deviceOrientationHandler(tiltLR, tiltFB, dir);
    
                }, false);
            } else {
                document.getElementById("doEvent").innerHTML = "Not supported."
            } 
        }
    }).catch(error => {
        alert(error);
    });
    }
    else
    {
        // alert("window.DeviceOrientationEvent: " + window.DeviceOrientationEvent);
        if (window.DeviceOrientationEvent) {
            console.log("DeviceOrientation is supported.");
            document.getElementById("doEvent").innerHTML = "DeviceOrientation";
            // Listen for the deviceorientation event and handle the raw data
            window.addEventListener('deviceorientation', function(eventData) {
                // gamma is the left-to-right tilt in degrees, where right is positive
                var tiltLR = eventData.gamma;

                // beta is the front-to-back tilt in degrees, where front is positive
                var tiltFB = eventData.beta;

                // alpha is the compass direction the device is facing in degrees
                var dir = eventData.alpha

                // call our orientation event handler
                deviceOrientationHandler(tiltLR, tiltFB, dir);

            }, false);
        }
    }
  }