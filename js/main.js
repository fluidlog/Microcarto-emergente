var dataset = {
        nodes: [
                { "id": "CivicWise Paris", "nodeType": 1 },
                { "id": "Volumes", "nodeType": 2 },
                { "id": "Grands Voisins", "nodeType": 3 },
                { "id": "Ecosystèmes Emergents", "nodeType": 4 },
                { "id": "OSP", "nodeType": 5 },
                { "id": "FabCity Association", "nodeType": 1 },
                { "id": "La Recyclerie", "nodeType": 1 },
                { "id": "Bureau Innovation Ville de Paris", "nodeType": 1 },
                { "id": "Assemblée Virtuelle", "nodeType": 1 },
                { "id": "OuiShare Paris", "nodeType": 1 },
                { "id": "CivicWise", "nodeType": 1 }
        ],
        links: [
                { "source": "CivicWise Paris", "target": "Volumes", "linkType": 1 },
                { "source": "CivicWise Paris", "target": "Grands Voisins", "linkType": 2  },
                { "source": "CivicWise Paris", "target": "Ecosystèmes Emergents", "linkType": 3  },
                { "source": "CivicWise Paris", "target": "Assemblée Virtuelle", "linkType": 4  },
                { "source": "CivicWise Paris", "target": "OSP", "linkType": 5  },
                { "source": "CivicWise Paris", "target": "FabCity Association", "linkType": 6  },
                { "source": "CivicWise Paris", "target": "La Recyclerie", "linkType": 7  },
                { "source": "CivicWise Paris", "target": "Bureau Innovation Ville de Paris", "linkType": 8  },
                { "source": "CivicWise Paris", "target": "OuiShare Paris", "linkType": 1  },
                { "source": "CivicWise Paris", "target": "CivicWise", "linkType": 1  }
        ]
};

CustomisableMap = {
   nodeType : {
     1 : {
      colorBackground : "#DDD",
      colorStroke : "none",
      strokeWidth : 3,
      dash : 0,
      radius : 20,
     },
     2 : {
      colorBackground : "#FFFFFF",
      colorStroke : "#ff007d",
      strokeWidth : 3,
      dash : 10,
      radius : 30,
     },
     3 : {
      colorBackground : "#FFFFFF",
      colorStroke : "#ff007d",
      strokeWidth : 3,
      dash : 0,
      radius : 30,
     },
     4 : {
      colorBackground : "#FFFFFF",
      colorStroke : "#008bcc",
      strokeWidth : 3,
      dash : 10,
      radius : 30,
     },
     5 : {
      colorBackground : "#FFFFFF",
      colorStroke : "#008bcc",
      strokeWidth : 3,
      dash : 0,
      radius : 30,
    },
   },
   linkType : {
     1 : {
      color : "#ff007d",
      dash : 10,
      width : 2,
     },
     2 : {
      color : "#ff007d",
      dash : 0,
      width : 2,
     },
     3 : {
      color : "#008bcc",
      dash : 10,
      width : 2,
     },
     4 : {
      color : "#008bcc",
      dash : 0,
      width : 2,
     },
     5 : {
      color : "#ff007d",
      dash : 10,
      width : 6,
     },
     6 : {
      color : "#ff007d",
      dash : 0,
      width : 6,
     },
     7 : {
      color : "#008bcc",
      dash : 10,
      width : 6,
     },
     8 : {
      color : "#008bcc",
      dash : 0,
      width : 6,
    },
  }
}

var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; }))
//    .force("charge", d3.forceManyBody())
   .force("center", d3.forceCenter(width / 2, height / 2))
   .force("collide", d3.forceCollide().radius(60).iterations(2))

// d3.json("data.json", function(error, graph) {
//   if (error)
//   {
//     throw error;
//   }

  var link = svg.append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(dataset.links)
      .enter()
      .append("line")
      .attr("stroke", function(d) {
        return CustomisableMap.linkType[d.linkType].color })
      .attr("stroke-width", function(d) {
        return CustomisableMap.linkType[d.linkType].width })
      .attr("stroke-dasharray", function(d) {
        return CustomisableMap.linkType[d.linkType].dash })

  var node = svg.append("g")
      .attr("class", "nodes")
      .selectAll("circle")
      .data(dataset.nodes)
      .enter()
      .append("g")
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));

      node.append("circle")
        .attr("r", function(d) {
          return CustomisableMap.nodeType[d.nodeType].radius })
        .attr("fill", function(d) {
          return CustomisableMap.nodeType[d.nodeType].colorBackground })
        .attr("stroke", function(d) {
          return CustomisableMap.nodeType[d.nodeType].colorStroke })
        .attr("stroke-width", function(d) {
          return CustomisableMap.nodeType[d.nodeType].strokeWidth })
        .attr("stroke-dasharray", function(d) {
          return CustomisableMap.nodeType[d.nodeType].dash })

      node.append("text")
      		.attr("text-anchor", "middle")
      		.attr("class", "text")
          .text(function(d) { return d.id; })

  simulation
      .nodes(dataset.nodes)
      .on("tick", ticked);

  simulation.force("link")
      .links(dataset.links);

  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    node
        .attr("cx", function(d) { return d.x; })
        .attr("cy", function(d) { return d.y; });
  }

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.3).restart();
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}
