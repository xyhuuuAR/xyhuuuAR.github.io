var pathtriangle = d3.select("#" + "triangle");

function handleDirection(event){
    var dir = Math.round(event.alpha);

    if (dir >= 270 && dir < 360){
        pathtriangle.transition()
                .duration(500)
                .ease(d3.easeLinear)
                .attr('fill', 'green')

    } else {
        pathtriangle.transition()
                .duration(500)
                .ease(d3.easeLinear)
                .attr('fill', 'blue')
    }
   
}

window.addEventListener('deviceorientation', handleDirection);

