<template>
  <div id="app">
    <nav class="navbar navbar-dark background-black justify-content-between flex-nowrap flex-row">
      <div class="container">
          <router-link class="navbar-brand float-left" to="/">
            <img src= '@/assets/logo/logo-white.png' width="80" height="50"/>            
          </router-link>
 
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/FlightAnalytics">Flight Analytics</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/DataFlow">Data Flow</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/ETLMonitoring">ETL Monitoring</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/UMLDiagram">Data Modeling</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/ERDiagram">Entity Relationship Diagram</router-link>
          </li>
        </ul>
        
      </div>
    </nav>
    
    <!-- Router view -->
    <div class="container scrollmenu">
      <router-view></router-view>
    </div>
  </div>
</template>
<style src="./css/umlcd.css"></style>
<style src="./css/custom.css"></style>
<script>
/*
import HelloWorld from './components/HelloWorld.vue'
export default {
  name: 'App',
  components: {
    
  }
}
*/
</script>


