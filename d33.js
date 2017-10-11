var config = {
    width: $(document).width(),
    height: $(document).height(),
    nodeRadius: 10,
}

// var links = [
//     // source = subject target = object
//     {source: 'a', predicate: 'p', target: 'b'},
//     {source: 'b', predicate: 'p2', target: 'c'},
//     {source: 'c', predicate: 'p', target: 'a'},
// ]

var links = [
  {source: "Microsoft", target: "Samsung", predicate: "license", type: 'parent'},
  {source: "M2", target: "Samsung", predicate: "license", type: 'child'},
//   {id: 'Microsoft', source: "Microsoft", target: "HTC", type: "licensing"},
  {source: "Samsung", target: "Microsoft", predicate: "suit", type: 'parent'},
//   {source: "Motorola", target: "Apple", type: "suit"},
//   {source: "Nokia", target: "Apple", type: "resolved"},
//   {source: "HTC", target: "Apple", type: "suit"},
//   {source: "Kodak", target: "Apple", type: "suit"},
//   {source: "Microsoft", target: "Barnes & Noble", type: "suit"},
//   {source: "Microsoft", target: "Foxconn", type: "suit"},
//   {source: "Oracle", target: "Google", type: "suit"},
//   {source: "Apple", target: "HTC", type: "suit"},
//   {source: "Microsoft", target: "Inventec", type: "suit"},
//   {source: "Samsung", target: "Kodak", type: "resolved"},
//   {source: "LG", target: "Kodak", type: "resolved"},
//   {source: "RIM", target: "Kodak", type: "suit"},
//   {source: "Sony", target: "LG", type: "suit"},
//   {source: "Kodak", target: "LG", type: "resolved"},
//   {source: "Apple", target: "Nokia", type: "resolved"},
//   {source: "Qualcomm", target: "Nokia", type: "resolved"},
//   {source: "Apple", target: "Motorola", type: "suit"},
//   {source: "Microsoft", target: "Motorola", type: "suit"},
//   {source: "Motorola", target: "Microsoft", type: "suit"},
//   {source: "Huawei", target: "ZTE", type: "suit"},
//   {source: "Ericsson", target: "ZTE", type: "suit"},
//   {source: "Kodak", target: "Samsung", type: "resolved"},
//   {source: "Apple", target: "Samsung", type: "suit"},
//   {source: "Kodak", target: "RIM", type: "suit"},
//   {source: "Nokia", target: "Qualcomm", type: "suit"}
];

var nodes = []
var ids = new Set();

links.forEach(function(link) {
    ids.add(link.source);
    ids.add(link.target);
})

ids.forEach(function(value) {
    nodes.push({id: value});
})

var svg = d3.select("body").append("svg")
    .attr("width", config.width)
    .attr("height", config.height)

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
    .force("charge", d3.forceManyBody())
    .force('collide', d3.forceCollide().radius(function() {return (config.nodeRadius * 3);}))
    .force("center", d3.forceCenter(config.width / 2, config.height / 2))

var link = svg.append('g')
        .attr('class', 'links')
    .selectAll('line')
    .data(links)
    .enter()
        .filter(function(d){ console.log(d); if(d.type == 'parent') return d.source})
        .append('line').attr('stroke', function(d) { return color(d.predicate)});

var node = svg.append('g')
        .attr('class', 'nodes')
    .selectAll('circle')
    .data(nodes)
    .enter()
        // .filter(function(d){if(d.type == 'parent') return d.id})
        .append('circle')
        .attr('r', config.nodeRadius)
        .attr('fill', function(d) { return color(d.id)})
        .call(d3.drag()
            .on('start', dragstarted)
            .on("drag", dragged)
            .on("end", dragended))
        .on('click', clicked);

simulation
    .nodes(nodes)
    .on("tick", ticked);

simulation
    .force("link")
    .links(links);

function ticked() {
    link
        .attr("x1", function(d) { debugger; return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });
      
    node
        .attr("cx", function(d) { debugger; return d.x; })
        .attr("cy", function(d) { return d.y; });
}

function dragstarted(d) {
    // console.log('drag started');
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(d) {
    // console.log('dragged');
    d.fx = d3.event.x;
    d.fy = d3.event.y;
}

function dragended(d) {
    // console.log('drag ended');
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
}

function clicked(d) {
    // console.log(d);
}