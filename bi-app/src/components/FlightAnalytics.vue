<template>
    <div>
        <div id="FlightAnalytics_Spinner" class="spinner-grow" style="width: 5rem; height: 5rem;" role="status">
            <span style="margin-left:8rem; font-size:4rem">Loading...</span>
        </div>
        <div>
            <iframe @load="onMyFrameLoad" width="1024" height="612" src="https://app.powerbi.com/view?r=eyJrIjoiNGVlMzUzMjgtOWQ2Zi00MzM2LWI1NzgtM2I0ZGVhYmVmMTNjIiwidCI6ImQzODY0Y2YyLTUyY2QtNGFiZC05MmY1LTk0ZDMzY2VhM2U0ZCJ9&pageName=ReportSectiond5ece5700e435b542c12" frameborder="0" allowFullScreen="true"></iframe>
        </div>
    </div>
</template>
<script>
    export default {
        title: 'Flight Analytics',
        methods: {
            onMyFrameLoad() {
                document.getElementById("FlightAnalytics_Spinner").style.display = "none";
            }
        }
    }
</script>