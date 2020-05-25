window.onload = function () {
    var pathtriangle = d3.select("#" + "triangle");

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
