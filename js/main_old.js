
$(document).ready()
{
  var myGraph = new FluidGraph();

  myGraph.customNodes.listType = ["loglink:qui",
                                  "loglink:pourquoi",
                                  "loglink:quoi",
                                  "loglink:ou",
                                  "loglink:comment",
                                  "loglink:quand",
                                  "loglink:combien",
                                  "loglink:without",
                                    ];

  // myGraph.customNodes.colorType = {"loglink:qui" : "#F3FD97",
  //                                     "loglink:quoi" : "#FDA8AE",
  //                                     "loglink:pourquoi" : "#FFDE98",
  //                                     "loglink:ou" : "#899DD5",
  //                                     "loglink:comment" : "#B5F49D",
  //                                     "loglink:quand" : "#C381D3",
  //                                     "loglink:combien" : "#AAAAAA",
  //                                     "loglink:without" : "#FFFFFF"
  //                                     };
  //
  // myGraph.customNodes.colorTypeRgba = {"loglink:qui" : "243,253,151",
  //                                       "loglink:quoi" : "253,168,174",
  //                                       "loglink:pourquoi" : "255,222,152",
  //                                       "loglink:ou" : "137,157,213",
  //                                       "loglink:comment" : "181,244,157",
  //                                       "loglink:quand" : "195,129,211",
  //                                       "loglink:combien" : "163,163,163",
  //                                       "loglink:without" : "255,255,255"
  //                                       };

  myGraph.customNodes.colorType = {"loglink:qui" : "#FFF800",
                                    "loglink:quoi" : "#FF0000",
                                    "loglink:pourquoi" : "#FF7400",
                                    "loglink:ou" : "#3C00FD",
                                    "loglink:comment" : "#23FE00",
                                    "loglink:quand" : "#9F00FD",
                                    "loglink:combien" : "#AAAAAA",
                                    "loglink:without" : "#FFFFFF"
                                    };

  myGraph.customNodes.colorTypeRgba = {"loglink:qui" : "255,248,0",
                                        "loglink:quoi" : "255, 0, 0",
                                        "loglink:pourquoi" : "255, 116, 0",
                                        "loglink:ou" : "60, 0, 253",
                                        "loglink:comment" : "35, 254, 0",
                                        "loglink:quand" : "159, 0, 253",
                                        "loglink:combien" : "163,163,163",
                                        "loglink:without" : "255,255,255"
                                        };

  myGraph.customNodes.neighbourColorType = {"loglink:qui" : "#F3FD97",
                                      "loglink:quoi" : "#FDA8AE",
                                      "loglink:pourquoi" : "#FFDE98",
                                      "loglink:ou" : "#899DD5",
                                      "loglink:comment" : "#B5F49D",
                                      "loglink:quand" : "#C381D3",
                                      "loglink:combien" : "#AAAAAA",
                                      "loglink:without" : "#FFFFFF"
                                      };

  myGraph.customNodes.neighbourColorTypeRgba = {"loglink:qui" : "243,253,151",
                                        "loglink:quoi" : "253,168,174",
                                        "loglink:pourquoi" : "255,222,152",
                                        "loglink:ou" : "137,157,213",
                                        "loglink:comment" : "181,244,157",
                                        "loglink:quand" : "195,129,211",
                                        "loglink:combien" : "163,163,163",
                                        "loglink:without" : "255,255,255"
                                        };

  myGraph.customNodes.strokeNeighbourColorType = {"loglink:qui" : "#CDCB14",
                                      "loglink:quoi" : "#DA0918",
                                      "loglink:pourquoi" : "#AB7C1A",
                                      "loglink:ou" : "#1A398F",
                                      "loglink:comment" : "#30AD02",
                                      "loglink:quand" : "#6F1286",
                                      "loglink:combien" : "#2F2B2B",
                                      "loglink:without" : "#FFFFFF"
                                    };

  myGraph.customNodes.strokeNeighbourColorTypeRgba = {"loglink:qui" : "205,203,20",
                                      "loglink:quoi" : "218,9,24",
                                      "loglink:pourquoi" : "171,124,26",
                                      "loglink:ou" : "26,57,143",
                                      "loglink:comment" : "48,173,2",
                                      "loglink:quand" : "111,18,134",
                                      "loglink:combien" : "47,43,43",
                                      "loglink:without" : "255,255,255"
                                    };

  myGraph.customNodes.imageType = {"loglink:qui" : "yellow user",
                                    "loglink:quoi" : "red cube",
                                    "loglink:pourquoi" : "orange help",
                                    "loglink:ou" : "blue unhide",
                                    "loglink:comment" : "green lab",
                                    "loglink:quand" : "violet wait",
                                    "loglink:combien" : "grey money",
                                    "loglink:without" : "circle thin"};

  myGraph.customNodes.strokeColorType = {"loglink:qui" : "#CDCB14",
                                      "loglink:quoi" : "#DA0918",
                                      "loglink:pourquoi" : "#AB7C1A",
                                      "loglink:ou" : "#1A398F",
                                      "loglink:comment" : "#30AD02",
                                      "loglink:quand" : "#6F1286",
                                      "loglink:combien" : "#2F2B2B",
                                      "loglink:without" : "#FFFFFF"
                                    };

  // myGraph.config.awsomeStrokeNode = false;
  myGraph.config.version = "loglink47";
  myGraph.customNodes.blankNodeType = "loglink:without"
  myGraph.externalStore.uri = "https://ldp.virtual-assembly.org:8443/2013/fludy/";
  myGraph.customNodes.strokeOpacity = 1;
  myGraph.customNodes.strokeWidth = 0;
  myGraph.customNodes.widthClosed = 30;
  myGraph.customNodes.displayType = "Off";
  myGraph.config.editGraphMode = false;

  myGraph.svgContainer.width = "800";
  myGraph.svgContainer.height = "500";
  myGraph.initSvgContainer("#chart");

  var store = new MyStore({ container : myGraph.externalStore.uri,
                            context : myGraph.externalStore.context,
                            template : "",
                            partials : ""})

  myGraph.ldpGraphName = "https://ldp.virtual-assembly.org:8443/2013/fludy/1cb2a6e544";
  myGraph.openedGraph = myGraph.ldpGraphName;
  // myGraph.graphName = 2a1499b5dc
  myGraph.graphName = myGraph.openedGraph.split("/").pop();
  // myGraph.externalStore.uri = https://ldp.virtual-assembly.org:8443/2013/fludy/
  myGraph.externalStore.uri = myGraph.openedGraph.split(myGraph.graphName)[0];
  myGraph.typeLdpServer = "external";

  if (myGraph.openedGraph)
  {
    myGraph.loadGraph(myGraph.typeLdpServer, myGraph.openedGraph);
  }

  if (myGraph.d3Data.nodes.length > 0)
  {
    myGraph.drawGraph();
    if (thisGraph.config.force == "Off")
      thisGraph.movexy.call(thisGraph);
  }

}
