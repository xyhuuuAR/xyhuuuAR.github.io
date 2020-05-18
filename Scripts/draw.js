window.onload = function(){

    var svgxy = d3.select("." + "motionxy");

    var svgzy = d3.select("." + "motionzy");

    svgxy.append('circle')
            .attr('cx', 100)
            .attr('cy', 100)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#69a3b2')
            .attr('id', 'xycircle');
    
    svgxy.append('text')
            .attr('x', 20)
            .attr('y', 20)
            .text('x y axes motion mapping')
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white');

    svgzy.append('circle')
            .attr('cx', 100)
            .attr('cy', 100)
            .attr('r', 10)
            .attr('stroke', 'black')
            .attr('fill', '#db0000')
            .attr('id', 'zycircle');
    
    svgzy.append('text')
            .attr('x', 20)
            .attr('y', 20)
            .text('z y axes motion mapping')
            .attr('font-family', 'sans-serif')
            .attr('font-size', '11px')
            .attr('fill', 'white');

    // <---------------draw pie chart to visualise rotation------------------->
     // set the dimensions and margins of the graph
     var width = 200
     height = 200
     margin = 20
 
     // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
     var radius = Math.min(width, height) / 2 - margin
 
     // append the svg object to the div called 'my_dataviz'
     var svgpie = d3.select(".piegarden")
         .append("svg")
         .attr("width", width)
         .attr("height", height)
         .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
 
     // Create dummy data
     var data = { a: 90, b: 90, c: 90, d: 90}
 
     // set the color scale
    //  var color = d3.scaleOrdinal()
    //      .domain(data)
    //      .range(d3.schemeSet2);
 
     // Compute the position of each group on the pie:
     var pie = d3.pie()
         .value(function (d) { return d.value; })
     var data_ready = pie(d3.entries(data))
 
     // shape helper to build arcs:
     var arcGenerator = d3.arc()
         .innerRadius(0)
         .outerRadius(radius)
 
     // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
     svgpie.selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('path')
         .attr('d', arcGenerator)
        //  .attr('fill', function (d) { return (color(d.data.key)) })
         .attr('fill', '#d6d6d6')
         .attr("stroke", "black")
         .style("stroke-width", "2px")
         .style("opacity", 0.7)
         .attr('id', function (d) { return (d.data.key) });
 
     // Now add the annotation. Use the centroid method to get the best coordinates
     svgpie.selectAll('mySlices')
         .data(data_ready)
         .enter()
         .append('text')
         .text(function (d) { return "grp " + d.data.key })
         .attr("transform", function (d) { return "translate(" + arcGenerator.centroid(d) + ")"; })
         .style("text-anchor", "middle")
         .style("font-size", 17)
    
    // // Now add the title
    // svgpie.append('text')
    //         .attr('x', 30)
    //         .attr('y', 30)
    //         .text('rotation mapping')
    //         .attr('font-family', 'sans-serif')
    //         .attr('font-size', '11px')
    //         .attr('fill', 'white');
    // <---------------End of drawing  pie chart to visualise rotation------------------->

    var circlexy = d3.select("#" + "xycircle");
    var circlezy = d3.select("#" + "zycircle");
    var patha = d3.select("#" + "a");
    var pathb = d3.select("#" + "b");
    var pathc = d3.select("#" + "c");
    var pathd = d3.select("#" + "d");
    var pathall = d3.selectAll('path')

    function handleMotion(event){
        var originx = 0;

        var originy = 0;

        var originz = -10;

        var xAcc = event.accelerationIncludingGravity.x;

        var yAcc = event.accelerationIncludingGravity.y;

        var zAcc = event.accelerationIncludingGravity.z;

        circlexy.transition()
                .duration(500)
                .ease(d3.easeLinear)
                .attr("cx", 100 + (xAcc - originx)*5 )
                .attr("cy", 100 - (Math.abs(yAcc - originy))*5);
        // Console.log("cx change: " + xAcc - originx);
        // Console.log("cy change: " + Math.abs(yAcc - originy));

        circlezy.transition()
                .duration(500)
                .ease(d3.easeLinear)
                .attr("cx", 100 + (zAcc - originz)*5)
                .attr("cy", 100 - (Math.abs(yAcc - originy))*5);

    }

    function handleDirection(event){
        var dir = Math.round(event.alpha);

        if (dir >= 0 && dir < 90){
            pathall.transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('fill','#d6d6d6')
            pathd.transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('fill', '#81ff73')

        } else if (dir >= 90 && dir < 180){
            pathall.transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('fill','#d6d6d6')
            pathc.transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('fill', '#81ff73')

        } else if (dir >= 180 && dir < 270) {
            pathall.transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('fill','#d6d6d6')
            pathb.transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('fill', '#81ff73')

        } else {
            pathall.transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('fill','#d6d6d6')
            patha.transition()
                    .duration(500)
                    .ease(d3.easeLinear)
                    .attr('fill', '#81ff73')

        }
    }

    window.addEventListener('devicemotion', handleMotion);
    window.addEventListener('deviceorientation', handleDirection);
}