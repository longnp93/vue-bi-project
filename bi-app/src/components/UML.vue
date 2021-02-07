<template>
    <div>
        <h1>UML</h1>
        <div id="uml_paper"></div>
    </div>
</template>

<script>
//import * as joint from 'jointjs'

export default {
    mounted() {
        const joint = this.$joint;
        var graph = new joint.dia.Graph();
        new joint.dia.Paper({
            el: document.getElementById('uml_paper'),
            width: 800,
            height: 600,
            gridSize: 1,
            interactive: false,
            model: graph
        });

        var uml = joint.shapes.uml;

        var classes = {

            mammal: new uml.Interface({
                position: {
                    x: 300,
                    y: 50
                },
                size: {
                    width: 240,
                    height: 100
                },
                name: 'Mammal',
                attributes: ['dob: Date'],
                methods: ['+ setDateOfBirth(dob: Date): Void', '+ getAgeAsDays(): Numeric'],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#feb662',
                        stroke: '#ffffff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fdc886',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fdc886',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-text': {
                        ref: '.uml-class-attrs-rect',
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    },
                    '.uml-class-methods-text': {
                        ref: '.uml-class-methods-rect',
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    }

                }
            }),

            person: new uml.Abstract({
                position: {
                    x: 300,
                    y: 300
                },
                size: {
                    width: 260,
                    height: 100
                },
                name: 'Person',
                attributes: ['firstName: String', 'lastName: String'],
                methods: ['+ setName(first: String, last: String): Void', '+ getName(): String'],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#68ddd5',
                        stroke: '#ffffff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#9687fe',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#9687fe',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-text, .uml-class-attrs-text': {
                        fill: '#fff'
                    }
                }
            }),

            bloodgroup: new uml.Class({
                position: {
                    x: 20,
                    y: 190
                },
                size: {
                    width: 220,
                    height: 100
                },
                name: 'BloodGroup',
                attributes: ['bloodGroup: String'],
                methods: ['+ isCompatible(bG: String): Boolean'],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#ff8450',
                        stroke: '#fff',
                        'stroke-width': 0.5,
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-text': {
                        ref: '.uml-class-attrs-rect',
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    },
                    '.uml-class-methods-text': {
                        ref: '.uml-class-methods-rect',
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    }
                }
            }),

            address: new uml.Class({
                position: {
                    x: 630,
                    y: 190
                },
                size: {
                    width: 160,
                    height: 100
                },
                name: 'Address',
                attributes: ['houseNumber: Integer', 'streetName: String', 'town: String', 'postcode: String'],
                methods: [],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#ff8450',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-text': {
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    }
                }

            }),

            man: new uml.Class({
                position: {
                    x: 200,
                    y: 500
                },
                size: {
                    width: 180,
                    height: 50
                },
                name: 'Man',
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#ff8450',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    }
                }
            }),

            woman: new uml.Class({
                position: {
                    x: 450,
                    y: 500
                },
                size: {
                    width: 180,
                    height: 50
                },
                name: 'Woman',
                methods: ['+ giveABrith(): Person []'],
                attrs: {
                    '.uml-class-name-rect': {
                        fill: '#ff8450',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-attrs-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-rect': {
                        fill: '#fe976a',
                        stroke: '#fff',
                        'stroke-width': 0.5
                    },
                    '.uml-class-methods-text': {
                        'ref-y': 0.5,
                        'y-alignment': 'middle'
                    }
                }
            })


        };

        Object.keys(classes).forEach(function(key) {
            graph.addCell(classes[key]);
        });
        var erd = joint.shapes.erd;
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

            return myLink.addTo(graph);
        };

        var createLabel = function(txt) {
            return {
                labels: [{
                    position: -20,
                    attrs: {
                        text: {
                            dy: -8,
                            text: txt,
                            fill: '#ffffff'
                        },
                        rect: {
                            fill: 'none'
                        }
                    }
                }]
            };
        };

        var relations = [
            new uml.Generalization({
                source: {
                    id: classes.man.id
                },
                target: {
                    id: classes.person.id
                }
            }),
            new uml.Generalization({
                source: {
                    id: classes.woman.id
                },
                target: {
                    id: classes.person.id
                }
            }),
            new uml.Implementation({
                source: {
                    id: classes.person.id
                },
                target: {
                    id: classes.mammal.id
                }
            }),
            new uml.Aggregation({
                source: {
                    id: classes.person.id
                },
                target: {
                    id: classes.address.id
                }
            }),
            new uml.Composition({
                source: {
                    id: classes.person.id
                },
                target: {
                    id: classes.bloodgroup.id
                }
            })

        ];

        Object.keys(relations).forEach(function(key) {
            graph.addCell(relations[key]);
        });
        graph.addCell([classes.woman.id, classes.man.id]);
        createLink(classes.woman.id, classes.man.id).set(createLabel('0...N'))
    }
}
</script>