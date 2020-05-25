function deviceOrientationHandler(tiltLR, tiltFB, dir){
    document.getElementById("doTiltLR").innerHTML = Math.round(tiltLR);
    document.getElementById("doTiltFB").innerHTML = Math.round(tiltFB);
    document.getElementById("doDirection").innerHTML = Math.round(dir);

}

function requestOrientationPermission() {
    if ( window.DeviceOrientationEvent !== undefined && typeof window.DeviceOrientationEvent.requestPermission === 'function' ) {
        window.DeviceOrientationEvent.requestPermission().then(permissionState => {
        alert("Orientation access status: " + permissionState);
        if (permissionState === 'granted') {
            if (window.DeviceOrientationEvent) {
                alert(window.orientation);
            } else {
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
            alert(window.orientation);
        }
    }
  }