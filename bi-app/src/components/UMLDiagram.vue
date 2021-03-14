<template>
   <div>
       <h5>Flight Data Vault 2.0 Model - Relational Diagram</h5>
        <div id="uml_paper"></div>
        <!--<ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <button class="nav-link active" id="ER-tab" data-bs-toggle="tab" data-bs-target="#ER" type="button" role="tab" aria-controls="ER" aria-selected="false">ER</button>
            </li>
            <li class="nav-item" role="presentation">
                <button class="nav-link" id="UML-tab" data-bs-toggle="tab" data-bs-target="#UML" type="button" role="tab" aria-controls="UML" aria-selected="true">UML</button>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="ER" role="tabpanel" aria-labelledby="ER-tab">
                    <h5>Flight Data Vault 2.0 Model - Entity Relationship Diagram</h5>
                    <div id="ERDiagram_paper"></div>
            </div>
            <div class="tab-pane fade" id="UML" role="tabpanel" aria-labelledby="UML-tab">
                    <h5>UML</h5>
                    <div id="uml_paper"></div>
            </div>
        </div>-->
  </div>
</template>

<script>
//import * as joint from 'jointjs'

export default {
    title: 'Data Modeling',
    mounted() {
        
        // *********************************************************************************
        const joint = this.$joint;
        var UMLGraph = new joint.dia.Graph();
        new joint.dia.Paper({
            el: document.getElementById('uml_paper'),
            width: 1500,
            height: 600,
            gridSize: 1,
            interactive: false,
            model: UMLGraph
        });

        var uml = joint.shapes.uml;
        var sat_attrs={
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
                'stroke-width': 0.5,
                display:'none'
            },
            '.uml-class-attrs-text': {
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        },
        hub_attrs={
            '.uml-class-name-rect': {
                fill: '#68ddd5',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-attrs-rect': {
                fill: '#5BEEE5',
                stroke: '#fff',
                'stroke-width': 0.5
            },
            '.uml-class-methods-rect': {
                fill: '#5BEEE5',
                stroke: '#fff',
                'stroke-width': 0.5,
                display:'none'
            },
            '.uml-class-attrs-text': {
                'ref-y': 0.5,
                'y-alignment': 'middle'
            }
        },
        link_attrs={
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
                display: 'none',
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
                display:'none',
                'y-alignment': 'middle'
            }

        };
        var classes = {
            S_Airport: new uml.Class({
                position: {x: 0,y: 0},
                size: {width: 200,height: 180},
                name: 'S_Airport',
                attributes: ['AirportHashKey: Char(32)', 'LoadDate: Datetime', 'LoadEndDate: Datetime',
                'RecordSource: Nvarchar(50)','HashDiff: Char(32)','AirportType: Nvarchar(20)',
                'AirportName: Nvarchar(100)','LatitudeDegree: Decimal(11,8)','LongitudeDegree: Decimal(11,8)',
                'ElevationFeet: Integer','Municipality: Nvarchar(100)','...'],
                methods: [],
                attrs: sat_attrs
            }),
            H_Airport: new uml.Class({
                position: {x: 310,y: 35},
                size: {width: 190,height: 110},
                name: 'H_Airport',
                attributes: ['AirportHashKey: Char(32)','LoadDate: Datetime',
                'RecordSource: Nvarchar(50)','AirportID: Nvarchar(10)'],
                attrs: hub_attrs
            }),
            S_Flight: new uml.Class({
                position: {x: 0,y: 200},
                size: {width: 240,height: 230},
                name: 'S_Flight',
                attributes: ['FlightHashKey: Char(32)', 'LoadDate: Datetime', 'LoadEndDate: Datetime',
                'RecordSource: Nvarchar(50)','HashDiff: Char(32)','CallSign: Nchar(8)',
                'FirstSeenUnixTimestamp: Integer','LastSeenUnixTimestamp: Integer','DepartureAirportHorizontalDistance: Integer',
                'ArrivalAirportHorizontalDistance: Integer','DepartureAirportVerticalDistance: Integer','ArrivalAirportVerticalDistance: Integer',
                'DepartureAirportCandidatesCount: Integer','ArrivalAirportCandidatesCount: Integer','...'],
                methods: [],
                attrs: sat_attrs
            }),
            L_Flight: new uml.Class({
                position: {x:285,y: 240},
                size: {width: 240,height: 150},
                name: 'L_Flight',
                attributes: ['FlightHashKey: Char(32)','LoadDate: Datetime','RecordSource: Nvarchar(50)',
                'AircraftHashKey: Char(32)','CallSignHashKey: Char(32)','DepartureAirportHashKey: Char(32)',
                'ArrivalAirportHashKey: Char(32)','FirstSeenHashKey: Char(32)','LastSeenHashKey: Char(32)'],
                attrs: link_attrs
            }),
            H_Aircraft: new uml.Class({
                position: {x: 310,y: 470},
                size: {width: 190,height: 110},
                name: 'H_Aircraft',
                attributes: ['AircraftHashKey: Char(32)','LoadDate: Datetime',
                'RecordSource: Nvarchar(50)','AircraftICAO24: Nchar(6)'],
                //methods: ['+ setName(first: String, last: String): Void', '+ getName(): String'],
                attrs: hub_attrs
            }),
            S_Aircraft: new uml.Class({
                position: {x: 0,y: 450},
                size: {width: 200,height: 150},
                name: 'S_Aircraft',
                attributes: ['AircraftHashKey: Char(32)', 'LoadDate: Datetime', 'LoadEndDate: Datetime',
                'RecordSource: Nvarchar(50)','HashDiff: Char(32)','ManufacturerName: Nvarchar(200)',
                'Model: Nvarchar(100)','Operator: Nvarchar(100)','...'],
                methods: [],
                attrs: sat_attrs
            }),
            L_Airport_Region: new uml.Class({
                position: {x: 600,y: 32},
                size: {width: 240,height: 120},
                name: 'L_Airport_Region',
                attributes: ['AirportRegionHashKey: Char(32)','LoadDate: Datetime','RecordSource: Nvarchar(50)',
                'AirportHashKey: Char(32)','RegionHashKey: Char(32)'],
                attrs: link_attrs
            }),
            H_Region: new uml.Class({
                position: {x: 920,y: 35},
                size: {width: 190,height: 110},
                name: 'H_Region',
                attributes: ['RegionHashKey: Char(32)','LoadDate: Datetime',
                'RecordSource: Nvarchar(50)','RegionCode: Nvarchar(10)'],
                attrs: hub_attrs
            }),
            S_Region: new uml.Class({
                position: {x: 1200,y: 0},
                size: {width: 200,height: 180},
                name: 'S_Region',
                attributes: ['RegionHashKey: Char(32)', 'LoadDate: Datetime', 'LoadEndDate: Datetime',
                'RecordSource: Nvarchar(50)','HashDiff: Char(32)','LocalCode: Nvarchar(20)',
                'RegionName: Nvarchar(100)','Continent: Nchar(2)','WikipediaLink: Nvarchar(200)',
                'Keywords: Nvarchar(300)'],
                methods: [],
                attrs: sat_attrs
            }),
            L_Region_Country: new uml.Class({
                position: {x: 895,y: 230},
                size: {width: 240,height: 120},
                name: 'L_Region_Country',
                attributes: ['RegionCountryHashKey: Char(32)','LoadDate: Datetime','RecordSource: Nvarchar(50)',
                'RegionHashKey: Char(32)','CountryHashKey: Char(32)'],
                attrs: link_attrs
            }),
            H_Country: new uml.Class({
                position: {x: 920,y: 430},
                size: {width: 190,height: 110},
                name: 'H_Country',
                attributes: ['CountryHashKey: Char(32)','LoadDate: Datetime',
                'RecordSource: Nvarchar(50)','CountryCode: Nvarchar(10)'],
                attrs: hub_attrs
            }),
            S_Country: new uml.Class({
                position: {x: 1200,y: 400},
                size: {width: 200,height: 180},
                name: 'S_Country',
                attributes: ['CountryHashKey: Char(32)', 'LoadDate: Datetime', 'LoadEndDate: Datetime',
                'RecordSource: Nvarchar(50)','HashDiff: Char(32)','CountryName: Nvarchar(100)',
                'Continent: Nchar(2)','WikipediaLink: Nvarchar(200)','Keywords: Nvarchar(300)'],
                methods: [],
                attrs: sat_attrs
            }),
        };

        Object.keys(classes).forEach(function(key) {
            UMLGraph.addCell(classes[key]);
        });
        
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

        var relations = [
            new uml.Association({
                source: {
                    id: classes.H_Country.id
                },
                target: {
                    id: classes.S_Country.id
                }
            }).set(createLabel('1','1')),
            new uml.Association({
                source: {
                    id: classes.H_Country.id
                },
                target: {
                    id: classes.L_Region_Country.id
                }
            }).set(createLabel('1','N')),
            new uml.Association({
                source: {
                    id: classes.H_Region.id
                },
                target: {
                    id: classes.L_Region_Country.id
                }
            }).set(createLabel('1','N')),
            new uml.Association({
                source: {
                    id: classes.H_Region.id
                },
                target: {
                    id: classes.L_Airport_Region.id
                }
            }).set(createLabel('1','N')),
            new uml.Association({
                source: {
                    id: classes.H_Region.id
                },
                target: {
                    id: classes.S_Region.id
                }
            }).set(createLabel('1','1')),
            new uml.Association({
                source: {
                    id: classes.H_Airport.id
                },
                target: {
                    id: classes.L_Airport_Region.id
                }
            }).set(createLabel('1','N')),
            new uml.Association({
                source: {
                    id: classes.H_Airport.id
                },
                target: {
                    id: classes.S_Airport.id
                }
            }).set(createLabel('1','1')),
            new uml.Association({
                source: {
                    id: classes.L_Flight.id
                },
                target: {
                    id: classes.S_Flight.id
                }
            }).set(createLabel('1','1')),
            new uml.Association({
                source: {
                    id: classes.H_Airport.id
                },
                target: {
                    id: classes.L_Flight.id
                }
            }).set(createLabel('1','N')),
            new uml.Association({
                source: {
                    id: classes.S_Aircraft.id
                },
                target: {
                    id: classes.H_Aircraft.id
                }
            }).set(createLabel('1','1')),
            new uml.Association({
                source: {
                    id: classes.H_Aircraft.id
                },
                target: {
                    id: classes.L_Flight.id
                }
            }).set(createLabel('1','N')),
            

        ];

        Object.keys(relations).forEach(function(key) {
            UMLGraph.addCell(relations[key]);
        });
    }
}
</script>