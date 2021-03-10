<template>
    <div> 
        <div class="row">
            <div class="col-9">
                <h5>Motivation</h5>
                <div>
                I am Long Nguyen. I am searching for a new challenge in Business Intelligence; therefore, 
                I built a <b>flight project</b> to showcase my skills in 
                <b>Data Warehouse (Microsoft SQL Server 2019), ETL</b> and <b>Business Intelligence (Power BI)</b>.
                </div>
                <br>
                <h5>Data Sources</h5>
                <div>Flight and aircraft data: https://opensky-network.org/</div>
                <div>Airport, country and region data: https://ourairports.com/data/</div>
                <div>Data is sourced by <b>Python</b> script</div>
                <br>
                <h5><router-link class="nav-link pr-3 no-padding" to="/FlightAnalytics">Flight Analytics</router-link></h5>
            </div>
            <div class="col-3" style="position: static"><img src= '@/assets/profile.png' width="220" height="220"/></div>
        </div>
        <div>
            The first report illustrates interesting information about flight changes by time, the most used aircraft, and the most visited airport. The second report analyzes flight routes between airports and arrival airports.
        </div>
        <br>
        <h5><router-link class="nav-link pr-3 no-padding" to="/DataFlow">Data Flow</router-link></h5>
        <div>The data flow demonstrates how data is moved and transformed from Data Source 
            to <b> Data Vault 2.0</b> and finally to Information Mart.
        </div>
        <br>
        <h5><router-link class="no-padding nav-link pr-3" to="/ETLMonitoring">ETL Monitoring</router-link></h5>
        <div><b>Microsoft SSIS</b> is used to move and transform data. All execution steps are logged
            to monitor and find the root cause of failed processes.
        </div>
        <br>
        <h5><router-link class="no-padding nav-link pr-3" to="/UMLDiagram">Modelling</router-link></h5>
        <div> Relational Model is used to demonstrate the <b>Data Vault 2.0 architecture</b> of this flight project.
        </div>
    </div>
</template>
<script>
    export default {
        title: 'Home'
    }
</script>