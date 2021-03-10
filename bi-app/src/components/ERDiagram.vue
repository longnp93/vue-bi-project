<template>
    <div>
        <h5>Flight Data Vault 2.0 Model - Entity Relationship Diagram</h5>
        <div id="ERDiagram_paper"></div>
    </div>
</template>
<script>
//import * as joint from 'jointjs'

export default {
    title: 'Flight ER Diagram',
    mounted() {
        const joint=this.$joint
        const V = joint.V;
        const g = joint.g;
        var erd = joint.shapes.erd;
        var ERgraph = new joint.dia.Graph();
        var paper = new joint.dia.Paper({
            el: document.getElementById('ERDiagram_paper'),
            width: 1100,
            height: 450,
            model: ERgraph,
            linkPinning: false,
            highlighting: false,
            defaultConnectionPoint: function(line, view) {
                var element = view.model;
                return element.getConnectionPoint(line.start) || element.getBBox().center();
            }
        });

        // Custom highlighter - display an outline around each element that fits its shape.
        var highlighter = V('path', {
            'stroke': '#e9fc03',
            'stroke-width': '2px',
            'fill': 'transparent',
            'pointer-events': 'none'
        });

        // Define a specific highligthing path for every shape.

        erd.Attribute.prototype.getHighlighterPath = function(w, h) {

            return ['M', 0, h / 2, 'A', w / 2, h / 2, '0 1,0', w, h / 2, 'A', w / 2, h / 2, '0 1,0', 0, h / 2].join(' ');
        };

        erd.Entity.prototype.getHighlighterPath = function(w, h) {

            return ['M', w, 0, w, h, 0, h, 0, 0, 'z'].join(' ');
        };

        erd.Relationship.prototype.getHighlighterPath = function(w, h) {
            console.log(h);
            return ['M', w / 2, 0, w, w / 2, w / 2, w, 0, w / 2, 'z'].join(' ');
        };
        
        erd.ISA.prototype.getHighlighterPath = function(w, h) {

            return ['M', -8, 1, w + 8, 1, w / 2, h + 2, 'z'].join(' ');
        };

        // Define a specific connection points for every shape

        erd.Attribute.prototype.getConnectionPoint = function(referencePoint) {
            // Intersection with an ellipse
            return g.Ellipse.fromRect(this.getBBox()).intersectionWithLineFromCenterToPoint(referencePoint);
        };

        erd.Entity.prototype.getConnectionPoint = function(referencePoint) {
            // Intersection with a rectangle
            return this.getBBox().intersectionWithLineFromCenterToPoint(referencePoint);
        };

        erd.Relationship.prototype.getConnectionPoint = function(referencePoint) {
            // Intersection with a rhomb
            var bbox = this.getBBox();
            var line = new g.Line(bbox.center(), referencePoint);
            return (
                line.intersection(new g.Line(bbox.topMiddle(), bbox.leftMiddle())) ||
                line.intersection(new g.Line(bbox.leftMiddle(), bbox.bottomMiddle())) ||
                line.intersection(new g.Line(bbox.bottomMiddle(), bbox.rightMiddle())) ||
                line.intersection(new g.Line(bbox.rightMiddle(), bbox.topMiddle()))
            );
        };

        erd.ISA.prototype.getConnectionPoint = function(referencePoint) {
            // Intersection with a triangle
            var bbox = this.getBBox();
            var line = new g.Line(bbox.center(), referencePoint);
            return (
                line.intersection(new g.Line(bbox.origin(), bbox.topRight())) ||
                line.intersection(new g.Line(bbox.origin(), bbox.bottomMiddle())) ||
                line.intersection(new g.Line(bbox.topRight(), bbox.bottomMiddle()))
            );
        };

        // Bind custom ones.
        paper.on('cell:highlight', function(cellView) {

            var padding = 5;
            var bbox = cellView.getBBox({
                useModelGeometry: true
            }).inflate(padding);

            highlighter.translate(bbox.x, bbox.y, {
                absolute: true
            });
            highlighter.attr('d', cellView.model.getHighlighterPath(bbox.width, bbox.height));

            V(paper.viewport).append(highlighter);
        });

        paper.on('cell:unhighlight', function() {

            highlighter.remove();
        });

        // Create shapes

        var hub = new erd.Entity({
            position: {
                x: 100,
                y: 200
            },
            attrs: {
                text: {
                    fill: 'black',
                    text: 'Employee',
                    letterSpacing: 0,
                    style: {
                        textShadow: '1px 0 1px black'
                    }
                },
                '.outer': {
                    fill: '#68ddd5',
                    stroke: 'none',
                    filter: {
                        name: 'dropShadow',
                        args: {
                            dx: 0.5,
                            dy: 2,
                            blur: 2,
                            color: '#333333'
                        }
                    }
                },
                '.inner': {
                    fill: '#68ddd5',
                    stroke: 'none',
                    filter: {
                        name: 'dropShadow',
                        args: {
                            dx: 0.5,
                            dy: 2,
                            blur: 2,
                            color: '#333333'
                        }
                    }
                }
            }
        });

        var sat = new erd.Normal({
            position: {
                x: 75,
                y: 30
            },
            attrs: {
                text: {
                    fill: 'black',
                    text: 'Name',
                    letterSpacing: 0,
                    style: {
                        textShadow: '1px 0 1px black'
                    }
                },
                '.outer': {
                    fill: '#ff8450',
                    stroke: '#fe976a',
                    filter: {
                        name: 'dropShadow',
                        args: {
                            dx: 0,
                            dy: 2,
                            blur: 2,
                            color: '#222138'
                        }
                    }
                }
            }
        });

        var link = new erd.Relationship({

            position: {
                x: 300,
                y: 390
            },
            size: {
                    width: 130,
                    height: 100
                },
            attrs: {
                text: {
                    fill: 'black',
                    text: 'Uses',
                    letterSpacing: 0,
                    style: {
                        textShadow: '1px 0 1px black'
                    }
                },
                '.outer': {
                    fill: '#feb662',
                    stroke: 'none',
                    filter: {
                        name: 'dropShadow',
                        args: {
                            dx: 0,
                            dy: 2,
                            blur: 1,
                            color: '#feb662'
                        }
                    }
                }
            }
        });

        // Create new shapes by cloning
        var S_Airport = sat.clone().position(30, 55).attr('text/text', 'S_Airport');
        var H_Airport = hub.clone().position(210, 50).attr('text/text', 'H_Airport');
        var H_Region = hub.clone().position(660, 50).attr('text/text', 'H_Region');
        var S_Region = sat.clone().position(890, 55).attr('text/text', 'S_Region');
        var L_Airport_Region = link.clone().position(445, 30).attr('text/text', 'L_Airport_Region');

        var L_Flight = link.clone().position(220, 200).attr('text/text', 'L_Flight');
        var S_Flight = sat.clone().position(30, 225).attr('text/text', 'S_Flight');
        var H_Aircraft = hub.clone().position(210, 380).attr('text/text', 'H_Aircraft');
        var S_Aircraft = sat.clone().position(30, 385).attr('text/text', 'S_Aircraft');

        var L_Region_Country = link.clone().position(670, 195).attr('text/text', 'L_Region_Country');
        var H_Country = hub.clone().position(660, 380).attr('text/text', 'H_Country');
        var S_Country = sat.clone().position(890, 385).attr('text/text', 'S_Country');

        // Helpers

        var createLink = function(elm1, elm2) {

            var myLink = new erd.Line({
                markup: [
                    '<path class="connection" stroke="black" d="M 0 0 0 0"/>',
                    '<path class="connection-wrap" d="M 0 0 0 0"/>',
                    '<g class="labels"/>',
                    '<g class="marker-vertices"/>',
                    '<g class="marker-arrowheads"/>'
                ].join(''),
                source: {
                    id: elm1.id
                },
                target: {
                    id: elm2.id
                }
            });

            return myLink.addTo(ERgraph);
        };

        var createLabel = function(txt1,txt2) {
            return {
                labels: [{
                    position: {
                        distance:10,
                        offset: 10
                    },
                    attrs: {
                        text: {
                            dy: -8,
                            text: txt1,
                            fill: '#000000'
                        },
                        rect: {
                            fill: 'none'
                        }
                    }
                },{
                    position: {
                        distance:70,
                        offset: 10
                    },
                    attrs: {
                        text: {
                            dy: -8,
                            text: txt2 || 'n',
                            fill: '#000000'
                        },
                        rect: {
                            fill: 'none'
                        }
                    }
                }]
            };
        };

        // Add shapes to the graph

        ERgraph.addCells([L_Flight,S_Flight,H_Airport,S_Airport,H_Aircraft,S_Aircraft,H_Region,S_Region,
        L_Airport_Region,H_Country,S_Country,L_Region_Country]);

        createLink(H_Airport, S_Airport).set(createLabel('1','1'));
        createLink(H_Aircraft, S_Aircraft).set(createLabel('1','1'));
        createLink(H_Region, S_Region).set(createLabel('1','1'));
        createLink(H_Country, S_Country).set(createLabel('1','1'));
        createLink(L_Flight, S_Flight).set(createLabel('1','1'));

        createLink(H_Region, L_Region_Country).set(createLabel('1','N'));

        createLink(H_Country, L_Region_Country).set(createLabel('1','N'));
        createLink(H_Airport, L_Flight).set(createLabel('1','N'));
        createLink(H_Aircraft, L_Flight).set(createLabel('1','N'));
        createLink(H_Airport, L_Airport_Region).set(createLabel('1','N'));
        createLink(H_Region, L_Airport_Region).set(createLabel('1','N'));
        
    }
}
</script>