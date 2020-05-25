window.onload = function(){

    // set the dimensions and margins of the graph
    var width = 200
    height = 200
    margin = 20

    // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
    var radius = Math.min(width, height) / 2 - margin

    // append the svg object to the div called 'my_dataviz'
    var svgbigbluearrow = d3.select(".bigbluearrow");
        
    var gbigbluearrow = svgbigbluearrow.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

    //The data for the big blue arrow
    var lineData = [ { "x": 15,   "y": 10},  
                     { "x": 5,  "y": 30}, 
                     { "x": 25,  "y": 30}];
    
    //This is the accessor function we talked about above
    var lineFunction = svgbigbluearrow.line()
                             .x(function(d) { return d.x; })
                             .y(function(d) { return d.y; })
                             .interpolate("linear");
    
    //The line SVG Path we draw
    var bigbluearrow = gbigbluearrow.append("path")
                                .attr("d", lineFunction(lineData))
                                .attr("stroke", "blue")
                                .attr("stroke-width", 2)
                                .attr("fill", "none");

}