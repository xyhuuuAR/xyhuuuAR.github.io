window.onload = function () {
    var pathtriangle = d3.select("#" + "triangle");
    var pathArrowUp = d3.select("#" + "arrowup");
    var pathArrowDown = d3.select("#" + "arrowdown");
    var circle = d3.select("#" + "circle");

    const cameraButton = document.getElementById('camera--trigger');
    const directionArrow = document.getElementById('triangle');
    const positionCircle = document.getElementById('circle');
    const upArrow = document.getElementById('arrowup');
    const downArrow = document.getElementById('arrowdown');

    var isGoalRotation = false;
    var isGoalTilt = false;

    function toggleCameraButton(flag){
        if (flag){
            cameraButton.style.visibility = 'visible';
        } else {
            cameraButton.style.visibility = 'hidden';
        }
    }

    function toggleDirectionArrow(flag){
        if (flag){
            directionArrow.style.visibility = 'visible';
        } else {
            directionArrow.style.visibility = 'hidden';
        }
    }

    function handleDirection(event) {
        var dir = Math.round(event.alpha);

        if (dir >= 43 && dir < 46) {
            // hide arrow
            document.getElementById('triangle').style.visibility = 'hidden';

            // unhide camera button
            document.getElementById('camera--trigger').style.visibility = 'visible';

        } else {
            // unhide arrow
            document.getElementById('triangle').style.visibility = 'visible';

            // pathtriangle.transition()
            //     .duration(500)
            //     .ease(d3.easeLinear)
            //     .attr('fill', 'blue')

            // hide camera button
            document.getElementById('camera--trigger').style.visibility = 'hidden';
        }

    }

    window.addEventListener('deviceorientation', handleDirection);
}
