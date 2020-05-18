function deviceMotionHandler(xAcceleration, yAcceleration, zAcceleration, rotationRate){
    document.getElementById("xMotion").innerHTML = Math.round(xAcceleration);
    document.getElementById("yMotion").innerHTML = Math.round(yAcceleration);
    document.getElementById("zMotion").innerHTML = Math.round(zAcceleration);
    // document.getElementById("rotationRate").innerHTML = Math.round(rotationRate);
  }

  function requestMotionPermission() {
    if ( window.DeviceMotionEvent !== undefined && typeof window.DeviceMotionEvent.requestPermission === 'function' ) {
        window.DeviceMotionEvent.requestPermission().then(permissionState => {
        alert("Motion access status: " + permissionState);
        if (permissionState === 'granted') {
            if (window.DeviceMotionEvent) {
              document.getElementById("doEventMotion").innerHTML = "DeviceMotion";
              window.addEventListener('devicemotion', function(eventData) {
                var xAcceleration = eventData.accelerationIncludingGravity.x;
          
                var yAcceleration = eventData.accelerationIncludingGravity.y;
          
                var zAcceleration = eventData.accelerationIncludingGravity.z;
                // var xAcceleration = eventData.acceleration.x;
          
                // var yAcceleration = eventData.acceleration.y;
          
                // var zAcceleration = eventData.acceleration.z;
          
                // var rotationRate = eventData.rotationRate.x;
          
                // call our motion event handler
                deviceMotionHandler(xAcceleration, yAcceleration, zAcceleration);
            
                  
              }, false);
            } else {
                document.getElementById("doEventMotion").innerHTML = "Not supported."
            } 
        }
    }).catch(error => {
        alert(error);
    });
    }
    else
    {
      if (window.DeviceMotionEvent) {
        console.log("DeviceMotion is supported.");
        document.getElementById("doEventMotion").innerHTML = "DeviceMotion";
        window.addEventListener('devicemotion', function(eventData) {
          var xAcceleration = eventData.accelerationIncludingGravity.x;
          
          var yAcceleration = eventData.accelerationIncludingGravity.y;
    
          var zAcceleration = eventData.accelerationIncludingGravity.z;

          // var rotationRate = eventData.rotationRate.x;
    
          // call our motion event handler
          deviceMotionHandler(xAcceleration, yAcceleration, zAcceleration);
      
            
        }, false);
      }
    }
  }