<template>
    <div> 
        <div class="row">
            <div class="col-9">
                <h5>Motivation</h5>
                <div>
                Hallo zusammen! Ich bin Long Nguyen und ich bin auf der Suche nach einer neuen Herausforderung im 
                Bereich Business Intelligence, daher baue ich ein <b>Flugprojekt</b>, um meine Fähigkeiten in 
                <b>Data Warehouse (Data Vault 2.0 und Microsoft SQL Server 2019), ETL (Microsoft SSIS)</b> und <b>Business Intelligence (Power BI)</b>
                zu präsentieren.
                </div>
                <br>
                <div>
                Zunächst wird in 
                <router-link class="" to="/FlightAnalytics">Flight Analytics</router-link> 
                die Analytik des Flugprojekts dargestellt. In 
                <router-link class="" to="/DataFlow">Data Flow</router-link> und
                <router-link class="" to="/ETLMonitoring">ETL Monitoring</router-link>
                findet man den ETL-Prozess des Flugprojekts. Schließlich wird in 
                <router-link class="" to="/UMLDiagram">Modelling</router-link>
                 die Data-Warehouse-Architektur dargestellt.
                </div>
                <br>
                <h5>Datenquellen</h5>
                <div>Die Daten werden über <b>Python-Skripte</b> aus den folgenden öffentlichen Quellen abgerufen:</div>
                <ul>
                    <li>Luftfahrtdaten und Flugzeugdaten: <a href="https://www.opensky-network.org/">https://www.opensky-network.org/</a></li>
                    <li>Flughafendaten, Länderdaten und Regionsdaten: <a href="https://www.ourairports.com/data/">https://www.ourairports.com/data/</a></li>
                </ul>
                <br>
                <h5><router-link class="nav-link pr-3 no-padding" to="/FlightAnalytics">Flight Analytics</router-link></h5>
            </div>
            <div class="col-3" style="position: static"><img src= '@/assets/profile.png' width="220" height="220"/></div>
        </div>
        <ul>
        <li>
            Das <b>Flight Analytics</b> Dashboard stellt holistische Information über den Flug dar. 
            Insbesondere werden die Flugdaten in mehreren Dimensionen wie Datum, Flugzeugmerkmale und Gebietsdaten angezeigt.
        </li>
        <li>
            Mit der Drill-Through-Funktion in Power BI kann man vom Flight Analytics Dashboard zu <b>Airport Analytics</b> Dashboard navigieren,
            um die Flugdaten aus der Perspektive des Flughafens zu analysieren. Denn es ist interessant, die folgende Fragen zu beantworten: 
            Wie viele Flüge bedient ein Flughafen im Laufe der Zeit? Wie verändert sich die Anzahl der Flüge im Laufe der Zeit?
            Wann ist die Rushhour am Flughafen? Welches sind häufige Flüge am Flughafen?
        </li>
        </ul>
        <br>
        <h5><router-link class="nav-link pr-3 no-padding" to="/DataFlow">Data Flow</router-link></h5>
        <div>Der Datenfluss zeigt, wie Daten von der Datenquelle in den Data-Vault und schließlich in den 
            Information-Mart verschoben und transformiert werden.
        </div>
        <br>
        <h5><router-link class="no-padding nav-link pr-3" to="/ETLMonitoring">ETL Monitoring</router-link></h5>
        <div><b>Microsoft SSIS</b> wird zum Verschieben und Transformieren von Daten verwendet. 
            Alle ETL-Ausführungsschritte werden geloggt, um die Ursache für fehlgeschlagene Prozesse zu entdecken. 
        </div>
        <br>
        <h5><router-link class="no-padding nav-link pr-3" to="/UMLDiagram">Data Modeling</router-link></h5>
        <div> Data Warehouse wird auf Basis von <b>Data Vault 2.0</b> Architektur aufgebaut. 
        Zur Veranschaulichung der Architektur findet man das Beziehungsdiagramm.
        </div>
    </div>
</template>
<script>
    export default {
        title: 'Home'
    }
</script>